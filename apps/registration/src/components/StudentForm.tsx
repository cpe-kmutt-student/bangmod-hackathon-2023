import DropDown from "@/components/DropDown";
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/InputBox";
import TextAreaBox from "@/components/TextAreaBox";
import { StateUpdater, useState } from "preact/hooks";

export type StudentForm = {
  prefixTH: string;
  nameTH: string;
  middleNameTH: string;
  surnameTH: string;
  prefixEN: string;
  nameEN: string;
  middleNameEN: string;
  surnameEN: string;
  nicknameTH: string;
  grade: string;
  coolQuote: string;
  email: string;
  phone: string;
  line: string;
  preferFood: string;
  allergyFood: string;
  allergyDrug: string;
  medicalProblem: string;
};

export const defaultStudentForm = {
  prefixTH: "",
  nameTH: "",
  middleNameTH: "",
  surnameTH: "",
  prefixEN: "",
  nameEN: "",
  middleNameEN: "",
  surnameEN: "",
  nicknameTH: "",
  grade: "",
  coolQuote: "",
  email: "",
  phone: "",
  line: "",
  preferFood: "",
  allergyFood: "",
  allergyDrug: "",
  medicalProblem: "",
};

type StudentFromProps = {
  data: StudentForm[];
  setData: StateUpdater<StudentForm[]>;
  index: number;
};

export const StudentForm = ({ data, setData, index }: StudentFromProps) => {
  const [file, setFile] = useState<FileList | null>(null);

  return (
    <div className="my-6 w-full rounded-[20px] bg-white bg-opacity-20 drop-shadow-lg">
      <h1 className="rounded-t-[20px] bg-white px-5 py-4 pl-6 text-2xl font-bold text-[#6c30a4]">
        รายละเอียดสมาชิกคนที่ {index + 1}
      </h1>

      <div action="" className="my-5  px-6 py-4">
        <div className="flex flex-wrap justify-between pb-4">
          <DropDown
            obj={data[index].prefixTH}
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
            index={index}
          />
          <InputBox
            obj={data[index].nameTH}
            setObj={setData}
            name="nameTH"
            label="ชื่อจริง(ภาษาไทย)"
            placeholder="ชื่อจริง"
            required
            width="w-full md:w-[27%]"
            index={index}
          />
          <InputBox
            obj={data[index].middleNameTH}
            setObj={setData}
            name="middleNameTH"
            label="ชื่อกลาง(ภาษาไทย)"
            placeholder="ชื่อกลาง"
            width="w-full md:w-[27%]"
            index={index}
          />
          <InputBox
            obj={data[index].surnameTH}
            setObj={setData}
            name="surnameTH"
            label="นามสกุล(ภาษาไทย)"
            placeholder="นามสกุล"
            required
            width="w-full md:w-[27%]"
            index={index}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-4">
          <DropDown
            obj={data[index].prefixEN}
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
            index={index}
          />
          <InputBox
            obj={data[index].nameEN}
            setObj={setData}
            name="nameEN"
            label="Firstname"
            placeholder="Firstname"
            required
            width="w-full md:w-[27%]"
            index={index}
          />
          <InputBox
            obj={data[index].middleNameEN}
            setObj={setData}
            name="middleNameEN"
            label="Middle Name"
            placeholder="Middle Name"
            width="w-full md:w-[27%]"
            index={index}
          />
          <InputBox
            obj={data[index].surnameEN}
            setObj={setData}
            name="surnameEN"
            label="Surname"
            placeholder="Surname"
            required
            width="w-full md:w-[27%]"
            index={index}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-4">
          <InputBox
            obj={data[index].nicknameTH}
            setObj={setData}
            name="nicknameTH"
            label="ชื่อเล่น(ภาษาไทย)"
            placeholder="Nickname"
            required
            width="w-full md:w-[25%]"
            index={index}
          />
          <InputBox
            obj={data[index].grade}
            setObj={setData}
            name="grade"
            label="ระดับชั้น"
            placeholder="Grade"
            required
            width="w-full md:w-[20%]"
            index={index}
          />
          <InputBox
            obj={data[index].coolQuote}
            setObj={setData}
            name="coolQuote"
            label="คำคมประจำใจ"
            placeholder="Cool Quote"
            width="w-full md:w-[51%]"
            index={index}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-4">
          <InputBox
            obj={data[index].email}
            setObj={setData}
            name="email"
            label="Email"
            placeholder="Email"
            required
            width="w-full md:w-[30%]"
            index={index}
          />
          <InputBox
            obj={data[index].phone}
            setObj={setData}
            name="phone"
            label="เบอร์โทรศัพท์"
            placeholder="Tel number"
            required
            width="w-full md:w-[25%]"
            index={index}
          />
          <InputBox
            obj={data[index].line}
            setObj={setData}
            name="line"
            label="ID LINE"
            placeholder="ID LINE"
            required
            width="w-full md:w-[41%]"
            index={index}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-4">
          <InputBox
            obj={data[index].preferFood}
            setObj={setData}
            name="preferFood"
            label="ประเภทอาหาร"
            placeholder="เช่น ฮาลาล มังสวิรัติ"
            width="w-full md:w-[49%]"
            index={index}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-4">
          <InputBox
            obj={data[index].allergyFood}
            setObj={setData}
            name="allergyFood"
            label="อาหารที่แพ้"
            placeholder="Food allergy"
            width="w-full md:w-[49%]"
            index={index}
          />
          <InputBox
            obj={data[index].allergyDrug}
            setObj={setData}
            name="allergyDrug"
            label="ยาที่แพ้"
            placeholder="Drugs allergy"
            width="w-full md:w-[49%]"
            index={index}
          />
        </div>
        <TextAreaBox
          obj={data[index].medicalProblem}
          setObj={setData}
          name="medicalProblem"
          label="โรคประจำตัวและวิธีประถมพยาบาลเบื้องต้น"
          placeholder="Medical problems and first-aid"
          width="w-full"
          index={index}
        />

        {/* TODO: Handle submit attachment */}
        <h1 className="pl-2 text-sm font-bold text-white md:text-2xl">
          {" "}
          แนบไฟล์เอกสาร{" "}
        </h1>
        <h2 className="py-4 pl-4 font-bold text-white">
          {" "}
          1. รูปนักเรียนขนาด 1.5นิ้ว{" "}
        </h2>
        <ImageInputBox obj={file} setObj={setFile} />
        <h2 className="py-4 pl-4 font-bold text-white">
          2. สำเนาบัตรประชาชนผู้เข้าร่วมเฉพาะด้านหน้า
          หรือบัตรนักเรียนพร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย
        </h2>
        <ImageInputBox obj={file} setObj={setFile} />
        <div>
          <h2 className="py-4 pl-4 font-bold text-white">
            3. ปพ.7 ของผู้เข้าแข่งขันตัวจริง
          </h2>
          <ImageInputBox obj={file} setObj={setFile} />
        </div>
      </div>
    </div>
  );
};
