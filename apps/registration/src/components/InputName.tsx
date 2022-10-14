import { useState } from "preact/hooks";
const InputName =({
  name,
  setObj,
  id,
  placeholder,
  obj,
  required,
  pattern,
}: {
  obj: string | number;
  setObj: any;
  id: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  pattern: any;
}) =>{ 

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const Name = event.target.value;
    setObj(Name);
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
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={obj}
        onInput={handleChange}
        className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
        required={required}
        pattern={pattern} //[a-zA-Z]{3,} is Eng or [ก-ฮ]{3,} is Thai
      />

      {isValid ? (
          <span className="text-red-700">Please enter valid name.</span>
        ) : (
          <label></label>
        )}
    </div>
  );

};


export default InputName;
  
  
 
