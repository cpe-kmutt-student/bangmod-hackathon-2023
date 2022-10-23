import { UploadedFile } from '@/components/RegistrationForm';
import { Spinner } from '@/components/Spinner';
import { fetch } from '@/utils/Fetch';
import { StateUpdater, useEffect, useRef, useState } from "preact/hooks";

const MAX_DISPLAY_FILE_SIZE = 10;
const MAX_FILE_SIZE_MIB = 1_048_576 * MAX_DISPLAY_FILE_SIZE;

const ImageInputBox = <T,>({
  obj,
  setObj,
  name,
  attachmentType,
  index = 0,
  files,
}: {
  obj: FileList | null;
  setObj: StateUpdater<T[]>;
  name: string;
  attachmentType: 0 | 1 | 2 | 3;
  index?: number;
  files: UploadedFile[],
}) => {
  const inputRef: any = useRef(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileUrl, setFileUrl] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<String | null>();

  const uploadAttachment = (attachment: File, type: number) => {
    const formData = new FormData();
    formData.append('file', attachment);
    return fetch
      .post(`/file/document?type=${type}&i=${index}`, formData, {
        onUploadProgress: (progressEvent) => {
          setUploadProgress(progressEvent.progress || 0);
        },
      })
      .then((response) => {
        setFileUrl(import.meta.env.VITE_BACKEND_URL + response.data.url)
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (files.length === 0) return;

    if (attachmentType === 0) {
      setFileUrl(import.meta.env.VITE_BACKEND_URL + files[0].url);
      setFileName(files[0].originalName);
    } else {
      const targetFile = files
        .filter((file) => file.index === index && file.fileType === attachmentType)[0];

      if (targetFile) {
        setFileUrl(import.meta.env.VITE_BACKEND_URL + targetFile.url);
        setFileName(targetFile.originalName);
      }
    }
  }, []);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = async (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const error = validFiles(files);
    if (error) {
      setError(error);
    } else {
      setError(null);
      setFileName(files[0].name);
      uploadAttachment(files[0], attachmentType);
    }
  };

  const handleUpload = async (event: any) => {
    const files = event.target.files;
    const error = validFiles(files);
    if (error) {
      setError(error);
    } else {
      setError(null);
      setFileName(files[0].name);
      uploadAttachment(files[0], attachmentType);
    }
  };

  const validFiles = (files: FileList): String | null => {
    if (files.length !== 1) {
      return 'Please upload only 1 file';
    }

    const file = files.item(0)!;

    if (file.size > MAX_FILE_SIZE_MIB) {
      return `File size must be smaller than ${MAX_DISPLAY_FILE_SIZE} MiB`;
    }

    if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
      return 'File type must be jpg, png, pdf'
    }

    return null;
  };

  return (
    <div className="h-32 flex flex-col p-4">
      <div
        className="h-full flex border-dashed rounded-2xl border-2 border-violet-500  hover:border-violet-600 bg-white drop-shadow-lg"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {!!fileName
          ?
          <div className="w-full flex flex-col justify-center space-y-2">
            {(uploadProgress === 1 || fileUrl) ? (
              <ul className="text-center">
                {fileUrl &&
                  <a className="text-blue-700 underline text-sm" href={fileUrl} target="_blank">{fileName}</a>
                }
              </ul>
            ) : (
              <div className="flex flex-row items-center space-x-2 mx-8">
                <div>
                  <Spinner style="w-5 text-purple-700" />
                </div>
                <div className="bg-gray-300 w-full h-2.5 rounded-full">
                  <div className="h-2.5 bg-purple-400 rounded-full" style={`width: ${uploadProgress * 100}%`} />
                </div>
              </div>
            )}
            <button
              type="button"
              className="mx-auto text-white w-fit px-4 py-2 text-xs rounded-lg focus:ring-red-300 bg-red-500 hover:bg-red-500/60 active:bg-red-400"
              onClick={() => {
                setFileName('');
                setFileUrl('');
              }}
            >
              Cancel
            </button>
          </div>
          :
          <div className="w-full h-full group">
            <input
              type="file"
              accept=".jpg, .pdf, .png"
              onInput={handleUpload}
              className="w-full h-full opacity-0"
              ref={inputRef}
              name={name}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 font-bold text-4xl antialiased text-violet-400 group-hover:text-violet-600"
              onClick={() => inputRef.current.click()}
            >
              +
            </button>
          </div>
        }
      </div>

      {error &&
        <div className="w-fit px-2 py-1 mx-auto text-red-600 bg-red-200 font-semibold text-xs text-center rounded-md mt-2">
          ❌ {error}
        </div>
      }
    </div>
  );
};

export default ImageInputBox;
