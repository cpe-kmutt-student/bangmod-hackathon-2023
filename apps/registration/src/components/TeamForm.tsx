import DropDown from "@/components/DropDown";
import EmailInputbox from "@/components/EmailInputbox";
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/Inputbox";
import PhoneInput from "@/components/PhoneInput";
import { AdvisorFormData, TeamFormData } from 'api-schema';
import { StateUpdater } from "preact/hooks";

export type TeamFormDataWithFile = TeamFormData & {
  advisor: AdvisorFormData;
  teacherAttachment: FileList | null;
};

export const defaultAdvisorData: AdvisorFormData = {
  prefixTh: "",
  firstnameTh: "",
  middleNameTh: "",
  surnameTh: "",
  prefixEn: "",
  firstnameEn: "",
  middleNameEn: "",
  surnameEn: "",
  email: "",
  phoneNumber: "",
  lineId: "",
}

export const defaultTeamForm: TeamFormDataWithFile = {
  name: "",
  school: "",
  amount: 0,
  isComplete: false,
  teacherAttachment: null,
  advisor: defaultAdvisorData,
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
            obj={data.name}
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
            obj={data.advisor.prefixTh}
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
            obj={data.advisor.firstnameTh}
            setObj={setData}
            name="nameTH"
            label="ชื่อ (ภาษาไทย)"
            placeholder="Name"
            required
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.advisor.middleNameTh}
            setObj={setData}
            name="middleNameTH"
            label="ชื่อกลาง (ภาษาไทย)"
            placeholder="Middle name"
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.advisor.surnameTh}
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
            obj={data.advisor.prefixEn}
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
            obj={data.advisor.firstnameEn}
            setObj={setData}
            name="nameEN"
            label="Name"
            placeholder="Name"
            required
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.advisor.middleNameEn}
            setObj={setData}
            name="middleNameEN"
            label="Middle name"
            placeholder="Middle name"
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={data.advisor.surnameEn}
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
            obj={data.advisor.email}
            setObj={setData}
            name="email"
            label="Email"
            placeholder="Email"
            required
            width="w-full md:w-[30%]"
          />
          <PhoneInput
            obj={data.advisor.phoneNumber}
            setObj={setData}
            name="phone"
            label="เบอร์โทรศัพท์"
            placeholder="Tel. number"
            required
            width="w-full md:w-[25%]"
          />
          <InputBox
            obj={data.advisor.lineId}
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
