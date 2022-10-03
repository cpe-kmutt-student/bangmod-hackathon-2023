import { useState } from "preact/hooks";

const fields = [
  {
    labelText: "Team Name",
    labelFor: "team-name",
    id: "team-name",
    name: "teamname",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Team Name",
  },
  {
    labelText: "School",
    labelFor: "school",
    id: "school",
    name: "school",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "School",
  },
  {
    labelText: "Grade",
    labelFor: "grade",
    id: "grade",
    name: "grade",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Grade",
  },
  {
    labelText: "Contact of Contestant No.1",
    labelFor: "contact-contestant-1",
    id: "contact-contestant-1",
    name: "contact-contestant-1",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Line ID of Contestant No.1",
  },
  {
    labelText: "Contact of Contestant No.2",
    labelFor: "contact-contestant-2",
    id: "contact-contestant-2",
    name: "contact-contestant-2",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Line ID of Contestant No.2",
  },
  {
    labelText: "Contact of Contestant No.3",
    labelFor: "contact-contestant-3",
    id: "contact-contestant-3",
    name: "contact-contestant-3",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Line ID of Contestant No.3",
  },
  {
    labelText: "Contact of Advisor",
    labelFor: "contact-contestant-advisor",
    id: "contact-contestant-advisor",
    name: "contact-contestant-advisor",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Advisor Line ID",
  },
  {
    labelText: "Food Allergy",
    labelFor: "food-allergy",
    id: "food-allergy",
    name: "food-allergy",
    type: "text",
    autoComplete: "",
    isRequired: false,
    placeholder: "Food Allergy",
  },
  {
    labelText: "Type of Food",
    labelFor: "food-type",
    id: "food-type",
    name: "food-type",
    type: "text",
    autoComplete: "",
    isRequired: false,
    placeholder: "Type of Food(Halal,Vegetarian)",
  },
  {
    labelText: "Medical Condition",
    labelFor: "medical-condition",
    id: "medical-condition",
    name: "medical-condition",
    type: "text",
    autoComplete: "",
    isRequired: false,
    placeholder: "Medical Condition",
  },
  {
    labelText: "First Aid Information for Medical Condition",
    labelFor: "first-aid",
    id: "first-aid",
    name: "first-aid",
    type: "text",
    autoComplete: "",
    isRequired: false,
    placeholder: "First Aid Info",
  },
  {
    labelText: "Drug Allergy",
    labelFor: "drug-allergy",
    id: "drug-allergy",
    name: "drug-allergy",
    type: "text",
    autoComplete: "",
    isRequired: false,
    placeholder: "Drug Allergy",
  },
];

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) => {
  return (
    <div className="my-5">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
};

const FormAction = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) => {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export const Inputbox = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
  };
  return (
    <div className="bg-gray-200 w-100% flex justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-20"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <img
            className="rounded-full w-24 h-auto"
            src="./src/assets/logo01.png"
          />
        </div>
        <h1 className="block uppercase tracking-wide font-mono mb-2 text-2xl text-center my-6">
          Bangmod Hackathon 2022
        </h1>
        {fields.map((field) => (
          <div>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <FormAction handleSubmit={handleSubmit} text="Submit" />
      </form>
    </div>
  );
};
