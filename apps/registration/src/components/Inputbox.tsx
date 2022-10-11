import { TeamForm } from "@/components/TeamForm";
import { StateUpdater } from "preact/hooks";
const Inputbox = ({
  obj,
  setObj,
  name,
  label,
  placeholder,
  width,
  required,
}: {
  obj: string | number;
  setObj: StateUpdater<TeamForm>;
  name: string;
  label?: string;
  placeholder?: string;
  width?: string;
  required?: boolean;
}) => {
  const handleChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const value = event.target.value;
    setObj((obj) => ({ ...obj, [name]: value }));
  };

  return (
    <div className={`mb-6 ${width && width}`}>
      {label ? (
        <label
          for="default-input"
          className="block uppercase tracking-wide text-gray-700 text-sm md:text-2xl font-bold mb-2"
        >
          {label}
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
        className="rounded-lg appearance-none relative block w-full px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm md:text-2xl sm:text-sm"
      />
    </div>
  );
};

export default Inputbox;
