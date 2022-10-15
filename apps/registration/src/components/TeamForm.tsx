import DropDown from "@/components/DropDown";
import EmailInputbox from "@/components/EmailInputbox";
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/Inputbox";
import PhoneInput from "@/components/PhoneInput";
import { TeamFormData } from 'api-schema';
import { StateUpdater } from "preact/hooks";

export type TeamFormDataWithFile = TeamFormData & {
  teacherAttachment: FileList | null;
};

export const defaultTeamForm = {
  teamName: "",
  school: "",
  amount: 0,
  prefixTH: "",
  nameTH: "",
  middleNameTH: "",
  surnameTH: "",
  prefixEN: "",
  nameEN: "",
  middleNameEN: "",
  surnameEN: "",
  email: "",
  phone: "",
  line: "",
  teacherAttachment: null,
};

type TeamFormProps = {
  data: TeamFormDataWithFile;
  setData: StateUpdater<TeamFormDataWithFile>;
};

export const TeamForm = ({ data, setData }: TeamFormProps) => {
  return (
    <div className="bg-white bg-opacity-20 drop-shadow-lg rounded-[20px]">
      <img className="absolute z-10 top-0 left-0 transform -translate-x-40 -translate-y-12 w-48 blur-md" src="cloud.webp" alt="" />
      <img className="absolute z-10 top-0 right-0 transform translate-x-12 -translate-y-20 w-36" src="cloud.webp" alt="" />
      <img className="absolute z-10 top-0 right-0 transform translate-x-24 -translate-y-28 w-28 blur-sm" src="cloud.webp" alt="" />
      
      <img className="w-64 absolute top-0 right-0 transform translate-x-48 opacity-70" src="flower.svg" alt="" />
      <img className="w-64 absolute bottom-0 left-0 transform -translate-x-44 translate-y-24 opacity-70" src="flower.svg" alt="" />

      <div className="text-white my-5 md:px-6 md:py-4">
        {/* first grid */}
        <div className="flex flex-col items-center justify-center  md:flex-row md:justify-between md:space-x-5">
          <InputBox
            obj={data.teamName}
            setObj={setData}
            name="teamName"
            label="ชื่อทีม"
            placeholder="Teams name"
            required
            width="w-full md:w-3/6"
          />
          <InputBox
            obj={data.school}
            setObj={setData}
            name="school"
            label="โรงเรียน"
            placeholder="School name"
            required
            width="w-full md:w-2/6"
          />
          <DropDown
            obj={data.amount}
            setObj={setData}
            name="amount"
            label="จำนวนสมาชิก"
            options={[
              { label: "2", value: 2 },
              { label: "3", value: 3 },
            ]}
            required
            width="w-full md:w-[25%]"
          />
        </div>
        {/* Sensei */}
        <span className="ml-2 flex justify-center pt-4 text-2xl font-bold text-white md:justify-start">
          อาจารย์ที่ปรึกษา
        </span>
        {/* Second grid */}
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          {/* <div className="flex flex-col items-center justify-center md:flex-row  md:justify-between "> */}
          <DropDown
            obj={data.prefixTH}
            setObj={setData}
            name="prefixTH"
            label="คำนำหน้า"
            options={[
              { label: "นาย", value: "นาย" },
              { label: "นาง", value: "นาง" },
              { label: "นางสาว", value: "นางสาว" },
            ]}
            required
            width="w-full md:w-[13%]"
          />
          <InputBox
            obj={data.nameTH}
            setObj={setData}
            name="nameTH"
            label="ชื่อ (ภาษาไทย)"
            placeholder="Name"
            required
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.middleNameTH}
            setObj={setData}
            name="middleNameTH"
            label="ชื่อกลาง (ภาษาไทย)"
            placeholder="Middle name"
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.surnameTH}
            setObj={setData}
            name="surnameTH"
            label="นามสกุล (ภาษาไทย)"
            placeholder="Surname"
            required
            width="w-full md:w-[27%]"
          />
        </div>
        {/* Thrid grid */}
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          {/* <div className="flex flex-col justify-center md:flex-row  md:justify-between "> */}
          <DropDown
            obj={data.prefixEN}
            setObj={setData}
            name="prefixEN"
            label="Prefix"
            options={[
              { label: "Mr.", value: "Mr." },
              { label: "Mrs.", value: "Mrs." },
              { label: "Miss.", value: "Miss." },
            ]}
            required
            width="w-full md:w-[13%]"
          />
          <InputBox
            obj={data.nameEN}
            setObj={setData}
            name="nameEN"
            label="Name"
            placeholder="Name"
            required
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.middleNameEN}
            setObj={setData}
            name="middleNameEN"
            label="Middle name"
            placeholder="Middle name"
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.surnameEN}
            setObj={setData}
            name="surnameEN"
            label="Surname"
            placeholder="Surname"
            required
            width="w-full md:w-[27%]"
          />
        </div>
        {/* Fourth grid */}
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <EmailInputbox
            obj={data.email}
            setObj={setData}
            name="email"
            label="Email"
            placeholder="Email"
            required
            width="w-full md:w-[30%]"
          />
          <PhoneInput
            obj={data.phone}
            setObj={setData}
            name="phone"
            label="เบอร์โทรศัพท์"
            placeholder="Tel. number"
            required
            width="w-full md:w-[25%]"
          />
          <InputBox
            obj={data.line}
            setObj={setData}
            name="line"
            label="Line ID"
            placeholder="ID Line"
            required
            width="w-full md:w-[41%]"
          />
        </div>
        {/* File system */}
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          {/* Left side */}
          <div class="ml-2 md:w-1/2">
            <h1 className="text-sm font-bold text-white md:text-2xl">
              แนบไฟล์เอกสาร
            </h1>
            <span className="text-sm  font-bold text-white">
              1. หนังสือรับรองของอาจารย์ที่ปรึกษาตัวจริง
            </span>
          </div>
          {/* Right side */}
          <div class="relative h-40 md:w-1/2">
            <ImageInputBox
              name="teacherAttachment"
              obj={data.teacherAttachment}
              setObj={setData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
