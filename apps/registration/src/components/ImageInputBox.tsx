import { useRef } from "preact/compat";

const ImageInputBox = ({
  obj,
  setObj,
  name,
}: {
  obj: FileList | null;
  setObj: any;
  name?: string;
}) => {
  const pText = "px-4 text-violet-900 antialiased text-lg";
  const button =
    "p-2 m-2 text-white rounded-full border-solid focus:outline-none focus:ring";
  const border =
    "col-span-6 flex flex-col justify-center items-center h-40 border-dashed rounded-2xl border-2 border-violet-500  hover:border-violet-600 bg-white drop-shadow-lg";
  const inputRef: any = useRef(null);
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    setObj(event.dataTranfer.files);
  };

  if (obj) {
    Array.from(obj).map((file: any, idx) => {
      if (
        file.type != "image/png" &&
        file.type != "image/jpeg" &&
        file.type != "application/pdf"
      ) {
        setObj(null);
        alert("Invalid file type!");
      } else if (idx > 0) {
        setObj(null);
        alert("Please submit only 1 files.");
      }
    });
  }

  if (obj)
    return (
      <div className="grid grid-cols-1">
        <div className="flex flex-col ustify-start items-start h-1 m-5">
          <ul>
            <li className={pText}>{name}</li>
          </ul>
        </div>
        <div className="grid grid-cols-8">
          <div></div>
          <div className={border}>
            <div className="m-5 flex flex-col justify-center items-center">
              <ul>
                {Array.from(obj).map((file: any, idx) => (
                  <li>{file.name}</li>
                ))}
              </ul>
              <div className="py-2">
                <button
                  className={
                    button +
                    "focus:ring-red-300 bg-gray-500 hover:bg-red-500 active:bg-red-400"
                  }
                  onClick={() => setObj(null)}
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
    <div className="grid grid-cols-1">
      {name && (
        <div className="flex flex-col justify-start items-start h-1 m-5">
          <ul>
            <li className={pText}>{name}</li>
          </ul>
        </div>
      )}
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
              onInput={(event: any) => {
                setObj(event.target.files);
              }}
              hidden
              ref={inputRef}
            />
            <button
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
