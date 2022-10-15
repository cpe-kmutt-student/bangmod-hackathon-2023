import { setFormObject } from '@/utils/FormUtil';
import { useRef } from "preact/compat";
import { StateUpdater } from "preact/hooks";

const ImageInputBox = <T,>({
  obj,
  setObj,
  name,
  index,
}: {
  obj: FileList | null;
  setObj: StateUpdater<T>;
  name: string;
  index?: number;
}) => {
  const pText = "px-4 text-violet-900 antialiased text-lg";
  const button =
    "p-2 m-2 text-white rounded-full border-solid focus:outline-none focus:ring";
  const border =
    "col-span-6 flex flex-col justify-center items-center h-36 md:h-40 border-dashed rounded-2xl border-2 border-violet-500  hover:border-violet-600 bg-white drop-shadow-lg";
  const inputRef: any = useRef(null);
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    setObj(event.dataTranfer.files);
  };

  const handleUpload = (event: any) => {
    const value = event.target.files;
    setObj((prev) => setFormObject(prev, index, name, value));
  };

  if (obj) {
    Array.from(obj).map((file: any, idx) => {
      if (
        file.type != "image/png" &&
        file.type != "image/jpeg" &&
        file.type != "application/pdf"
      ) {
        alert("Invalid file type!");
      } else if (idx > 0) {
        alert("Please submit only 1 files.");
      }
    });
  }

  if (obj)
    return (
      <div className="grid grid-cols-1 px-4 py-2">
        {/* <div className="justify-start m-5 flex h-1 flex-col items-start">
          <ul>
            <li className={pText}>{name}</li>
          </ul>
        </div> */}
        <div className="grid grid-cols-5">
          <div></div>
          <div className={border}>
            <div className="m-5 flex flex-col justify-center text-black items-center">
              <ul>
                {Array.from(obj).map((file: any, idx) => (
                  <li>{file.name}</li>
                ))}
              </ul>
              <div className="py-2">
                <button
                  type="button"
                  className={
                    button +
                    "focus:ring-red-300 bg-gray-500 hover:bg-red-500 active:bg-red-400"
                  }
                  onClick={() => {
                    setObj((prev) => setFormObject(prev, index, name, null));
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className={"grid grid-cols-1 px-4 py-2"}>
      {/* {name && (
        <div className="flex flex-col justify-start items-start h-1 m-5">
        <ul>
            <li className={pText}>{name}</li>
          </ul>
        </div>
      )} */}
      {!obj && (
        <div className="">
          <div></div>
          <div
            className={border}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".jpg, .pdf, .png"
              onInput={handleUpload}
              hidden
              ref={inputRef}
            />
            <button
              type="button"
              className="font-bold text-4xl antialiased text-violet-400 hover:text-violet-600"
              onClick={() => {
                inputRef.current.click();
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageInputBox;
