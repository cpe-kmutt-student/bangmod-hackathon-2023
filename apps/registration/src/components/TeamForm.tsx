import DropDown from "@/components/DropDown";
import EmailInputbox from "@/components/EmailInputbox";
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/Inputbox";
import PhoneInput from "@/components/PhoneInput";
import { StateUpdater } from "preact/hooks";

export type TeamForm = {
  teamName: string;
  school: string;
  amount: number;
  prefixTH: string;
  nameTH: string;
  middleNameTH: string;
  surnameTH: string;
  prefixEN: string;
  nameEN: string;
  middleNameEN: string;
  surnameEN: string;
  email: string;
  phone: string;
  line: string;
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
  data: TeamForm;
  setData: StateUpdater<TeamForm>;
};

export const TeamForm = ({ data, setData }: TeamFormProps) => {
  return (
    <div className="my-6 w-full rounded-[20px] bg-white bg-opacity-20 drop-shadow-lg">
      <div className="px-6 py-6 md:space-y-3 md:py-9 md:px-12">
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
            width="w-full md:w-1/6"
          />
        </div>
        {/* Sensei */}
        <span className="ml-2 flex justify-center pt-4 text-2xl font-bold text-white md:justify-start">
          อาจารย์ที่ปรึกษา
        </span>
        {/* Second grid */}
        <div className="flex flex-col items-center justify-center md:flex-row  md:justify-between ">
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
            width="w-full md:w-2/12"
          />
          <InputBox
            obj={data.nameTH}
            setObj={setData}
            name="nameTH"
            label="ชื่อ (ภาษาไทย)"
            placeholder="Name"
            required
            width="w-full md:w-3/12"
          />
          <InputBox
            obj={data.middleNameTH}
            setObj={setData}
            name="middleNameTH"
            label="ชื่อกลาง (ภาษาไทย)"
            placeholder="Middle name"
            width="w-full md:w-3/12"
          />
          <InputBox
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
        <div className="flex flex-col justify-center md:flex-row  md:justify-between ">
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
            width="w-full md:w-2/12"
          />
          <InputBox
            obj={data.nameEN}
            setObj={setData}
            name="nameEN"
            label="Name"
            placeholder="Name"
            required
            width="w-full md:w-3/12"
          />
          <InputBox
            obj={data.middleNameEN}
            setObj={setData}
            name="middleNameEN"
            label="Middle name"
            placeholder="Middle name"
            width="w-full md:w-3/12"
          />
          <InputBox
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
        <div className="flex flex-col items-center justify-center md:flex-row  md:justify-between md:space-x-7">
          <EmailInputbox
            // <NewInputBox
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
            name="phone"
            label="เบอร์โทรศัพท์"
            placeholder="Tel. number"
            required
            width="w-full md:w-2/6"
          />
          <InputBox
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
        <div className="flex flex-col justify-between space-y-2 pt-4 md:flex-row md:space-y-0">
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
