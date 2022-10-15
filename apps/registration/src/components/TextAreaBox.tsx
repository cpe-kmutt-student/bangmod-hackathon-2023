import { StateUpdater } from "preact/hooks";

export type TextAreaBoxProps<T> = {
  obj: string | number;
  setObj: StateUpdater<T>;
  name: string;
  label?: string;
  placeholder?: string;
  width?: string;
  required?: boolean;
  index?: number;
};

const TextAreaBox = <T,>({
  obj,
  setObj,
  name,
  label,
  placeholder,
  width,
  required,
  index,
}: TextAreaBoxProps<T>) => {
  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLTextAreaElement)) return;
    const value = event.target.value;

    setObj((prev) => {
      const newObj =
        index !== undefined
          ? { [index]: { ...prev[index as keyof T], [name]: value } }
          : { [name]: value };

      return { ...prev, ...newObj };
    });
  };

  return (
    <div className={`${width && width} flex flex-col px-4 py-2 md:p-0`}>
      {label ? (
        <label
          for="default-input"
          className="mb-1 block pl-2 tracking-wide text-white"
        >
          {label}
          {required ? <span className="text-[#ffdc19]">*</span> : <div />}
        </label>
      ) : (
        <div />
      )}
      <textarea
        type="text"
        placeholder={placeholder}
        value={obj}
        onInput={handleChange}
        required={required}
        className="p-2 md:pl-2 md:p-1 relative block h-32 w-full appearance-none resize-none rounded-md border border-gray-300  text-black placeholder-[#b597d1] drop-shadow-md focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
      />
    </div>
  );
};

export default TextAreaBox;
