import { useState } from "preact/hooks";
const PhoneInput = ({
  name,
  id,
  placeholder,
  obj,
  setObj,
  required,
}: {
  name: string;
  id: string;
  placeholder: string;
  obj: string | number;
  setObj: any;
  required?: boolean;
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const phone = event.target.value;
    // if (phone.length > 10) return;

    setObj(event.target.value);
    setIsValid(phone.length == 10);
  };

  return (
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
      <div className="mt-1">
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          value={obj}
          onInput={handleChange}
          className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
          required={required}
          maxLength={10}
        />
        {isValid ? (
          <div></div>
        ) : (
          <span class="text-sm text-red-500">Please Enter Phone</span>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;