import EmailInputbox from "@/components/EmailInputbox";
import ImageInputBox from "@/components/ImageInputBox";
import Inputbox from "@/components/Inputbox";
import PhoneInput from "@/components/PhoneInput";
import { useState } from "preact/hooks";

export type TeamForm = {
  teamName: string;
  school: string;
  amount: number;
  perfixTH: string;
  nameTH: string;
  middleNameTH: string;
  surnameTH: string;
  perfixEN: string;
  nameEN: string;
  middleNameEN: string;
  surnameEN: string;
  email: string;
  phone: string;
  line: string;
};

export const TeamForm = () => {
  const [data, setData] = useState<TeamForm>({
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
            name="teamName"
            label="ชื่อทีม"
            placeholder="Teams name"
            required
            width="w-full md:w-3/5"
          />
          <Inputbox
            obj={data.school}
            setObj={setData}
            name="school"
            label="โรงเรียน"
            placeholder="School name"
            required
            width="w-full md:w-2/5"
          />
          <Inputbox
            obj={data.amount}
            setObj={setData}
            name="amount"
            label="จำนวนผู้สมัคร"
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
            name="perfixTH"
            label="คำนำหน้า"
            placeholder="Prefix"
            required
            width="w-full md:w-2/12"
          />
          <Inputbox
            obj={data.nameTH}
            setObj={setData}
            name="nameTH"
            label="ชื่อ (ภาษาไทย)"
            placeholder="Name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.middleNameTH}
            setObj={setData}
            name="middleNameTH"
            label="ชื่อกลาง (ภาษาไทย)"
            placeholder="Middle name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.surnameTH}
            setObj={setData}
            name="surnameTH"
            label="นามสกุล (ภาษาไทย)"
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
            name="perfixEN"
            label="Prefix"
            placeholder="Prefix"
            required
            width="w-full md:w-2/12"
          />
          <Inputbox
            obj={data.nameEN}
            setObj={setData}
            name="nameEN"
            label="Name"
            placeholder="Name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.middleNameEN}
            setObj={setData}
            name="middleNameEN"
            label="Middle name"
            placeholder="Middle name"
            required
            width="w-full md:w-3/12"
          />
          <Inputbox
            obj={data.surnameEN}
            setObj={setData}
            name="surnameEN"
            label="Surname"
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
            name="email"
            label="Email"
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
            name="line"
            label="Line ID"
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
