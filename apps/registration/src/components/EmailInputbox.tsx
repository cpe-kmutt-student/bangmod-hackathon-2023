import { useState } from "preact/hooks";
const EmailInputbox = ({
  obj,
  setObj,
  name,
  placeholder,
  required,
}: {
  obj: string | number;
  setObj: any;
  name?: string;
  placeholder?: string;
  required?: boolean;
}) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const email = event.target.value;
    if (reg.test(email) === false) setIsValid(true);
    else setIsValid(false);
    setObj(email);
  };

  return (
    <>
      <div className="mb-6">
        {name ? (
          <label
            for="default-input"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            {name}
            {required ? <span className="text-pink-700">*</span> : <div />}
          </label>
        ) : (
          <div />
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={obj}
          onInput={handleChange}
          className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
        />

        {isValid ? (
          <span className="text-red-700">Please enter valid email.</span>
        ) : (
          <label></label>
        )}
      </div>
    </>
  );
};

export default EmailInputbox;
