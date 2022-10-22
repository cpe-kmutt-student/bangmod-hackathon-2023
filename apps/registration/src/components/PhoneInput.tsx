import { setFormObject } from '@/utils/FormUtil';
import { StateUpdater, useState } from "preact/hooks";

const PhoneInput = <T,>({
  name,
  placeholder,
  obj,
  label,
  setObj,
  required,
  width,
  index = 0,
}: {
  name: string;
  label?: string;
  placeholder: string;
  obj: string | number | null;
  setObj: StateUpdater<T[]>;
  required?: boolean;
  width?: string;
  index?: number,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const phone = event.target.value;
    // if (phone.length > 10) return;
    setObj((prev) => setFormObject(prev, index, name, phone));
    setIsValid(phone.length == 10);
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
      <div>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={obj || ''}
          onInput={handleChange}
          className="p-2 md:pl-2 md:p-1 relative block w-full appearance-none rounded-md border border-gray-300  pl-2 text-black placeholder-[#b597d1] drop-shadow-md focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          required={required}
          maxLength={10}
        />
        {isValid ? (
          <div></div>
        ) : (
          <span className="text-sm text-red-500 z-5">Please Enter Phone</span>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
