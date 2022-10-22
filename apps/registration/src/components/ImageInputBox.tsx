import { fetch } from '@/utils/Fetch';
import { setFormObject } from '@/utils/FormUtil';
import { StateUpdater, useRef, useState } from "preact/hooks";

const MAX_DISPLAY_FILE_SIZE = 10;
const MAX_FILE_SIZE_MIB = 1_048_576 * MAX_DISPLAY_FILE_SIZE;

const uploadAttachment = (attachment: File, type: number) => {
  const formData = new FormData();
  formData.append('file', attachment);
  fetch.post(`/file/document?type=${type}`, formData).catch(console.error);
};

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
  const [error, setError] = useState<String | null>();

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };
  
  const handleDrop = (event: any) => {
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

  const handleUpload = (event: any) => {
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
          <div className="w-full flex flex-col justify-center items-center space-y-2">
            <ul>
              {Array.from(obj).map((file: File) => (
                <li className="text-black text-sm">{file.name}</li>
              ))}
            </ul>
            <button
              type="button"
              className="text-white w-fit px-4 py-2 text-xs rounded-lg focus:ring-red-300 bg-red-500 hover:bg-red-500/60 active:bg-red-400"
              onClick={() => {
                setObj((prev) => setFormObject(prev, index, name, null));
              }}
            >
              Cancel
            </button>
          </div>
          :
          <>
            <input
              type="file"
              accept=".jpg, .pdf, .png"
              onInput={handleUpload}
              hidden
              ref={inputRef}
            />
            <button
              type="button"
              className="m-auto font-bold text-4xl antialiased text-violet-400 hover:text-violet-600"
              onClick={() => inputRef.current.click()}
            >
              +
            </button>
          </>
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
