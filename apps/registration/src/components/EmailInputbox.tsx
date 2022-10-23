import { setFormObject } from '@/utils/FormUtil';
import { StateUpdater, useState } from "preact/hooks";

const EmailInputbox = <T,>({
  obj,
  setObj,
  name,
  label,
  placeholder,
  required,
  width,
  index = 0,
}: {
  obj: string | number | null;
  setObj: StateUpdater<T[]>;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  width?: string;
  index?: number;
}) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const email = event.target.value;
    if (reg.test(email) === false) setIsValid(true);
    else setIsValid(false);
    setObj((prev) => setFormObject(prev, index, name, email));
  };

  return (
    <>
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
        <input
          type="text"
          placeholder={placeholder}
          value={obj || ''}
          onInput={handleChange}
          required={required}
          className="p-2 md:pl-2 md:p-1 relative block w-full appearance-none rounded-md border border-gray-300  pl-2 text-black placeholder-[#b597d1] drop-shadow-md focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
        />

        {isValid ? (
          <span className="text-red-400">กรุณากรอก E-mail ให้ถูกต้อง</span>
        ) : (
          <label></label>
        )}
      </div>
    </>
  );
};

export default EmailInputbox;
