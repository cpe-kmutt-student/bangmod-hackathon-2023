import { StateUpdater } from "preact/hooks";

type option = {
  label?: string | number;
  value?: string | number;
};

const DropDown = <T,>({
  obj,
  setObj,
  options,
  name,
  label,
  required,
  width,
  index,
}: {
  obj?: string | number;
  setObj: StateUpdater<T>;
  name: string;
  label?: string;
  options: option[];
  required?: boolean;
  width?: string;
  index?: number;
}) => {
  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLSelectElement)) return;
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
    <div className={`${width && width} mb-6 flex flex-col md:mb-0`}>
      {label ? (
        <label
          for="default-input"
          className="mb-1 block pl-2 tracking-wide text-white "
        >
          {label}
          {required ? <span className="text-[#ffdc19]">*</span> : <div />}
        </label>
      ) : (
        <div />
      )}
      <select
        value={obj}
        required={required}
        onChange={handleChange}
        className="relative block w-full appearance-none rounded-md border border-gray-300 p-1 pl-2 text-black placeholder-gray-500 drop-shadow-md focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
      >
        {options.map((e: option) => (
          <option value={e.value}>{e.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
