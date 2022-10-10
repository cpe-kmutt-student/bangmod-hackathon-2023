type option = {
  label?: string | number;
  value?: string | number;
}

const DropDown = ({
  obj,
  setObj,
  options,
  label,
  required,
}: {
  obj: string | number;
  setObj: any;
  label?: string | number;
  options: option[];
  required?: boolean;
}) => {
  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLSelectElement)) return;
    const value = event.target.value;
    
    setObj(value);
  };
  return (
    <div className="mb-6">
      <label
        for="default-select"
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {label}
        {required ? <span className="text-pink-700">*</span> : <div />}
        <select
          value={obj}
          onChange={handleChange}
          className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
        >
          {options.map((e: option) => (
            <option value={e.value}>{e.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropDown;