const Inputbox = ({
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
  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const value = event.target.value;
    setObj(value);
  };


  return (
    <div class="mb-6">
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
    </div>
  );
};

export default Inputbox;
