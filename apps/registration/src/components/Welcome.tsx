import PhoneInput from "@/components/PhoneInput";
import { useState } from "preact/hooks";

export const Welcome = () => {
  const [obj, setObj] = useState("");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-2xl">
        Welcome to Registration
        <PhoneInput
          name="phone"
          id="phone"
          placeholder="please enter phone"
          obj={obj}
          setObj={setObj}
          required={true}
        />
      </div>
    </div>
  );
};
