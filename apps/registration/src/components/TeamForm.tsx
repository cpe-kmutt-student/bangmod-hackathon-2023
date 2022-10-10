import EmailInputbox from "@/components/EmailInputbox";
import ImageInputBox from "@/components/ImageInputBox";
import Inputbox from "@/components/Inputbox";
import PhoneInput from "@/components/PhoneInput";
import { useState } from "preact/hooks";
export const TeamForm = () => {
  const [data, setData] = useState({
    teamName: "",
    school: "",
    amount: 0,
    perfixTH: "",
    nameTH: "",
    middleNameTH: "",
    surnameTH: "",
    perfixEN: "",
    nameEN: "",
    middleNameEN: "",
    surnameEN: "",
    email: "",
    phone: "",
    line: "",
  });

  const [file, setFile] = useState<FileList | null>(null);

  return (
    <div className="w-full md:w-11/12 m-auto md:h-11/12 bg-gray-400 bg-opacity-60  rounded-xl">
      <div className="px-6 py-6 md:py-9 md:px-12 md:space-y-3">
        {/* first grid */}
        <div className="flex flex-col justify-center items-center  md:flex-row md:justify-between md:space-x-5">
          <Inputbox
            obj={data.teamName}
            setObj={setData}
            name="ชื่อทีม"
            placeholder="Teams name"
            required
            width="w-full md:w-3/5"
          />
          <Inputbox
            obj={data.school}
            setObj={setData}
            name="โรงเรียน"
            placeholder="School name"
            required
            width="w-full md:w-2/5"
          />
          <Inputbox
            obj={data.amount}
            setObj={setData}
            name="จำนวนสมาชิก"
            placeholder="จำนวน"
            required
            width="w-full md:w-1/5"
          />
        </div>
        {/* Sensei */}
        <div>
          <h1 className="flex justify-center md:justify-start text-3xl md:text-4xl">
            อาจารย์ที่ปรึกษา
          </h1>
        </div>
        {/* Second grid */}
        <div className="flex flex-col md:flex-row justify-center  md:justify-between md:space-x-5">
          <Inputbox
            obj={data.perfixTH}
            setObj={setData}
            name="คำนำหน้า"
            placeholder="Prefix"
            required
            width="w-full md:w-2/12"
          />
          <Inputbox
            obj={data.nameTH}
            setObj={setData}
            name="ชื่อ (ภาษาไทย)"
            placeholder="Name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.middleNameTH}
            setObj={setData}
            name="ชื่อกลาง (ภาษาไทย)"
            placeholder="Middle name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.surnameTH}
            setObj={setData}
            name="นามสกุล (ภาษาไทย)"
            placeholder="Surname"
            required
            width="w-full md:w-3/12"
          />
        </div>
        {/* Thrid grid */}
        <div className="flex flex-col md:flex-row justify-center  md:justify-between md:space-x-5">
          <Inputbox
            obj={data.perfixEN}
            setObj={setData}
            name="Prefix"
            placeholder="Prefix"
            required
            width="w-full md:w-2/12"
          />
          <Inputbox
            obj={data.nameEN}
            setObj={setData}
            name="Name"
            placeholder="Name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.middleNameEN}
            setObj={setData}
            name="Middle name"
            placeholder="Middle name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.surnameEN}
            setObj={setData}
            name="Surname"
            placeholder="Surname"
            required
            width="w-full md:w-3/12"
          />
        </div>
        {/* Fourth grid */}
        <div className="flex flex-col md:flex-row justify-center  md:justify-between md:space-x-7">
          <EmailInputbox
            obj={data.email}
            setObj={setData}
            name="Email"
            placeholder="Email"
            required
            width="w-full md:w-2/6"
          />
          <PhoneInput
            obj={data.phone}
            setObj={setData}
            name="เบอร์โทรศัพท์"
            placeholder="Tel. number"
            required
            width="w-full md:w-2/6"
          />
          <Inputbox
            obj={data.line}
            setObj={setData}
            name="ID Line"
            placeholder="ID Line"
            required
            width="w-full md:w-2/6"
          />
        </div>
        {/* File system */}
        <div className="flex space-y-2 md:space-y-0 flex-col md:flex-row justify-between">
          {/* Left side */}
          <div class="md:w-1/2">
            <h1 className="text-sm md:text-3xl">แนบไฟล์เอกสาร</h1>
            <p className="text-sm md:text-2xl">
              1. หนังสือรับรองของอาจารย์ที่ปรึกษาตัวจริง
            </p>
          </div>
          {/* Right side */}
          <div class="md:w-1/2 h-40 relative">
            <ImageInputBox obj={file} setObj={setFile} />
          </div>
        </div>
      </div>
    </div>
  );
};
