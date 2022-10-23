import { Spinner } from '@/components/Spinner';
import { fetch } from '@/utils/Fetch';
import { setFormObject } from '@/utils/FormUtil';
import { StateUpdater, useRef, useState } from "preact/hooks";

const MAX_DISPLAY_FILE_SIZE = 10;
const MAX_FILE_SIZE_MIB = 1_048_576 * MAX_DISPLAY_FILE_SIZE;

const ImageInputBox = <T,>({
  obj,
  setObj,
  name,
  attachmentType,
  index = 0,
}: {
  obj: FileList | null;
  setObj: StateUpdater<T[]>;
  name: string;
  attachmentType: 0 | 1 | 2 | 3;
  index?: number;
}) => {
  const inputRef: any = useRef(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<String | null>();

  const uploadAttachment = (attachment: File, type: number) => {
    const formData = new FormData();
    formData.append('file', attachment);
    return fetch
      .post(`/file/document?type=${type}`, formData, {
        onUploadProgress: (progressEvent) => {
          setUploadProgress(progressEvent.progress || 0);
        },
      })
      .then((response) => { setImageUrl(import.meta.env.VITE_BACKEND_URL + response.data.url) })
      .catch(console.error);
  };

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
      setObj((prev) => setFormObject(prev, index, name, files));
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
      setObj((prev) => setFormObject(prev, index, name, files));
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
        {obj
          ?
          <div className="w-full flex flex-col justify-center space-y-2">
            {uploadProgress === 1 ? (
              <ul className="text-center">
                {Array.from(obj).map((file: File) => (
                  <a className="text-blue-700 underline text-sm" href={imageUrl} target="_blank">{file.name}</a>
                ))}
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
                setObj((prev) => setFormObject(prev, index, name, null));
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
