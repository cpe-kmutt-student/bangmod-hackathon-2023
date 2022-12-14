import '@/assets/css/dropDownStyle.css';
import { setFormObject } from '@/utils/FormUtil';
import { StateUpdater } from "preact/hooks";
type option = {
  label?: string | number;
  value?: string | number;
};

// if select on focus span next to it border-purple-500

const DropDown = <T,>({
  obj,
  setObj,
  options,
  name,
  label,
  required,
  width,
  index = 0,
}: {
  obj?: string | number | null;
  setObj: StateUpdater<T[]>;
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
    setObj((prev) => setFormObject(prev, index, name, value));
  };

  return (
    <div className={`${width && width} flex flex-col px-4 py-2 md:p-0 relative`}>
      {label ? (
        <label
          for="default-input"
          className="mb-1 block pl-2 tracking-wide text-white whitespace-nowrap"
        >
          {label}
          {required ? <span className="text-[#ffdc19]">*</span> : ''}
        </label>
      ) : (
        ''
      )}

      <div className="relative">
        <select
          value={obj || ''}
          required={required}
          onChange={handleChange}
          className="p-2 md:p-1 md:px-2 md:pr-6 block w-full rounded-md border border-gray-300 text-black placeholder-[#b597d1] drop-shadow-md focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
        >

          {options.map((e: option) => (
            <option value={e.value}>{e.label}</option>
          ))}

        </select>
        <span className='absolute bg-[#DB9116] z-10 border-gray-300 pointer-events-none w-[30px] h-full top-0 right-0 border-r border-y rounded-r-md flex align-center justify-center leading-[43px] md:leading-[35px] text-white text-lg'>▾</span>
      </div>
    </div>
  );
};

export default DropDown;
