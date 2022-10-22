import DropDown from "@/components/DropDown";
import EmailInputbox from "@/components/EmailInputbox";
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/Inputbox";
import PhoneInput from "@/components/PhoneInput";
import { AdvisorFormData, TeamFormData } from 'api-schema';
import { StateUpdater } from "preact/hooks";

export type TeamFormDataWithFile = TeamFormData & {
  teacherAttachment?: FileList | null;
};

export const defaultAdvisorData: AdvisorFormData[] = [{
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
}]

export const defaultTeamForm: TeamFormDataWithFile[] = [{
  name: "",
  school: "",
  amount: 0,
  isComplete: false,
  teacherAttachment: null,
}];



type TeamFormProps = {
  isComplete: boolean,
  data: TeamFormDataWithFile[];
  setData: StateUpdater<TeamFormDataWithFile[]>;
  advisor: AdvisorFormData[],
  setAdvisor: StateUpdater<AdvisorFormData[]>;
};

export const TeamForm = ({
  isComplete,
  data,
  setData,
  advisor,
  setAdvisor,
}: TeamFormProps) => {
  return (
    <div className="bg-white bg-opacity-20 drop-shadow-lg rounded-[20px]">
      {isComplete && <div className="z-20 absolute w-full h-full bg-gray-700 bg-opacity-60 rounded-[20px]"></div>}

      <img className="absolute z-10 top-0 left-0 transform -translate-x-40 -translate-y-12 w-48 blur-md" src="cloud.webp" alt="" />
      <img className="absolute z-10 top-0 right-0 transform translate-x-12 -translate-y-20 w-36" src="cloud.webp" alt="" />
      <img className="absolute z-10 top-0 right-0 transform translate-x-24 -translate-y-28 w-28 blur-sm" src="cloud.webp" alt="" />
      
      <img className="w-64 absolute top-0 right-0 transform translate-x-48 opacity-70" src="flower.svg" alt="" />
      <img className="w-64 absolute bottom-0 left-0 transform -translate-x-44 translate-y-24 opacity-70" src="flower.svg" alt="" />

      <div className="text-white my-5 md:px-6 md:py-4">
        {/* first grid */}
        <div className="flex flex-col items-center justify-center  md:flex-row md:justify-between md:space-x-5">
          <InputBox
            obj={data[0].name}
            setObj={setData}
            name="name"
            label="ชื่อทีม"
            placeholder="ชื่อทีม"
            required
            width="w-full md:w-3/6"
          />
          <InputBox
            obj={data[0].school}
            setObj={setData}
            name="school"
            label="โรงเรียน"
            placeholder="โรงเรียน"
            required
            width="w-full md:w-2/6"
          />
          <DropDown
            obj={data[0].amount}
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
            obj={advisor[0].prefixTh}
            setObj={setAdvisor}
            name="prefixTh"
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
            obj={advisor[0].firstnameTh}
            setObj={setAdvisor}
            name="firstnameTh"
            label="ชื่อจริง (ภาษาไทย)"
            placeholder="ชื่อจริง"
            required
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={advisor[0].middleNameTh}
            setObj={setAdvisor}
            name="middleNameTh"
            label="ชื่อกลาง (ภาษาไทย)"
            placeholder="ชื่อกลาง"
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={advisor[0].surnameTh}
            setObj={setAdvisor}
            name="surnameTh"
            label="นามสกุล (ภาษาไทย)"
            placeholder="นามสกุล"
            required
            width="w-full md:w-[27%]"
          />
        </div>
        {/* Thrid grid */}
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          {/* <div className="flex flex-col justify-center md:flex-row  md:justify-between "> */}
          <DropDown
            obj={advisor[0].prefixEn}
            setObj={setAdvisor}
            name="prefixEn"
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
            obj={advisor[0].firstnameEn}
            setObj={setAdvisor}
            name="firstnameEn"
            label="ชื่อจริง (ภาษาอังกฤษ)"
            placeholder="Name"
            required
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={advisor[0].middleNameEn}
            setObj={setAdvisor}
            name="middleNameEn"
            label="ชื่อกลาง (ภาษาอังกฤษ)"
            placeholder="Middle name"
            width="w-full md:w-[27%]"
          />
          <InputBox
            obj={advisor[0].surnameEn}
            setObj={setAdvisor}
            name="surnameEn"
            label="นามสกุล (ภาษาอังกฤษ)"
            placeholder="Surname"
            required
            width="w-full md:w-[27%]"
          />
        </div>
        {/* Fourth grid */}
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <EmailInputbox
            obj={advisor[0].email}
            setObj={setAdvisor}
            name="email"
            label="E-mail"
            placeholder="E-mail"
            required
            width="w-full md:w-[30%]"
          />
          <PhoneInput
            obj={advisor[0].phoneNumber}
            setObj={setAdvisor}
            name="phoneNumber"
            label="เบอร์โทรศัพท์"
            placeholder="เบอร์โทรศัพท์"
            required
            width="w-full md:w-[25%]"
          />
          <InputBox
            obj={advisor[0].lineId}
            setObj={setAdvisor}
            name="lineId"
            label="Line ID"
            placeholder="Line ID"
            required
            width="w-full md:w-[41%]"
          />
        </div>
        {/* File system */}
        <div className="flex md:pb-4 py-2 flex-col md:flex-row md:justify-between">
          {/* Left side */}
          <div class="px-4 md:px-0 ml-2 md:w-1/2">
            <h1 className="text-white md:text-2xl font-bold">
              แนบไฟล์เอกสาร
            </h1>
            <span className="text-white">
              1. หนังสือรับรองของอาจารย์ที่ปรึกษาตัวจริง
            </span>
            <span className="text-[#ffdc19]">
              *
            </span>

          </div>
          {/* Right side */}
          <div class="relative md:w-1/2">
            <ImageInputBox
              name="teacherAttachment"
              obj={data[0].teacherAttachment || null}
              setObj={setData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
