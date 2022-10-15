import DropDown from "@/components/DropDown";
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/Inputbox";
import TextAreaBox from "@/components/TextAreaBox";
import { StudentFormData } from 'api-schema';
import { StateUpdater } from "preact/hooks";

const LengthValidate = (str: string) => {
  return str.length < 3 || str.length > 30 ? false : true;
};

const TextValidation = (str: string, lang: "EN" | "TH") => {
  if (lang === "EN") {
    return /^[a-zA-Z]+$/.test(str);
  } else if (lang === "TH") {
    return /^[ก-ฮ]+$/.test(str);
  }
};

const TextInputValidation = (text: string, lang: "EN" | "TH") => {
  return TextValidation(text, lang) && LengthValidate(text) ? true : false;
};

const InputFile = () => {
  return (
    <div className="flex align-center justify-center">
      <button
        className="text-[#B597D1] rounded-md drop-shadow-md bg-white border-2 border-dashed border-[#9F6FCE]
                          w-[80%] mb-4 min-h-[70px] sm:min-h-[100px] max-w-[300px]
                          md:max-w-[450px] md:text-[40px] md:w-[50%] md:min-h-[150px] md:mb-5"
      >
        +
      </button>
    </div>
  );
};

export type StudentFormDataWithFile = StudentFormData & {
  selfImageAttachment: FileList | null;
  idCardAttachment: FileList | null;
  pp7Attachment: FileList | null;
};

export const defaultStudentFormData = {
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
  selfImageAttachment: null,
  idCardAttachment: null,
  pp7Attachment: null,
};

type StudentFromProps = {
  data: StudentFormDataWithFile[];
  setData: StateUpdater<StudentFormDataWithFile[]>;
  index: number;
};

export const StudentForm = ({ data, setData, index }: StudentFromProps) => {
  return (
    <div className="bg-white bg-opacity-20 drop-shadow-lg rounded-[20px]">
      {/* <h1 className="      "> */}

      <h1 className="bg-white rounded-t-[20px] px-5 py-4 md:pl-6 text-2xl font-bold text-center md:text-left text-[#6c30a4]">
        รายละเอียดสมาชิกคนที่ {index + 1}
      </h1>

      <div className="text-white my-5 md:px-6 md:py-4">
        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
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
            label="ชื่อจริง (ภาษาไทย)"
            placeholder="ชื่อจริง"
            width="w-full md:w-[27%]"
            required
            index={index}
          />
          <InputBox
            obj={data[index].middleNameTH}
            setObj={setData}
            name="middleNameTH"
            label="ชื่อกลาง (ภาษาไทย)"
            placeholder="ชื่อกลาง"
            width="w-full md:w-[27%]"
            required={false}
            index={index}
          />
          <InputBox
            obj={data[index].surnameTH}
            setObj={setData}
            name="surnameTH"
            label="นามสกุล (ภาษาไทย)"
            placeholder="นามสกุล"
            width="w-full md:w-[27%]"
            required
            index={index}
          />
        </div>

        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
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
            width="w-full md:w-[27%]"
            required
            index={index}
          />

          <InputBox
            obj={data[index].middleNameEN}
            setObj={setData}
            name="middleNameEN"
            label="Middle Name"
            placeholder="Middle Name"
            width="w-full md:w-[27%]"
            required={false}
            index={index}
          />

          <InputBox
            obj={data[index].surnameEN}
            setObj={setData}
            name="surnameEN"
            label="Surname"
            placeholder="Surname"
            width="w-full md:w-[27%]"
            required
            index={index}
          />
        </div>

        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <InputBox
            obj={data[index].nicknameTH}
            setObj={setData}
            name="nicknameTH"
            label="ชื่อเล่น(ภาษาไทย)"
            placeholder="Nickname"
            width="w-full md:w-[25%]"
            required
            index={index}
          />
          <InputBox
            obj={data[index].grade}
            setObj={setData}
            name="grade"
            label="ระดับชั้น"
            placeholder="Grade"
            width="w-full md:w-[20%]"
            required
            index={index}
          />
          <InputBox
            obj={data[index].coolQuote}
            setObj={setData}
            name="coolQuote"
            label="คำคมประจำใจ"
            placeholder="Cool Qoute"
            width="w-full md:w-[51%]"
            required
            index={index}
          />
        </div>

        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <InputBox
            obj={data[index].email}
            setObj={setData}
            name="email"
            label="Email"
            placeholder="Email"
            width="w-full md:w-[30%]"
            required
            index={index}
          />

          <InputBox
            obj={data[index].phone}
            setObj={setData}
            name="phone"
            label="เบอร์โทรศัพท์"
            placeholder="Tel number"
            width="w-full md:w-[25%]"
            required
            index={index}
          />
          <InputBox
            obj={data[index].line}
            setObj={setData}
            name="line"
            label="ID LINE"
            placeholder="ID LINE"
            width="w-full md:w-[41%]"
            required
            index={index}
          />
        </div>

        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <InputBox
            obj={data[index].preferFood}
            setObj={setData}
            name="preferFood"
            label="ประเภทอาหาร"
            placeholder="เช่น ฮาลาล มังสวิรัติ"
            width="w-full md:w-[49%]"
            required={false}
            index={index}
          />
        </div>

        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <InputBox
            obj={data[index].allergyFood}
            setObj={setData}
            name="allergyFood"
            label="อาหารที่แพ้"
            placeholder="Food allergy"
            width="w-full md:w-[49%]"
            required={false}
            index={index}
          />

          <InputBox
            obj={data[index].allergyDrug}
            setObj={setData}
            name="allergyDrug"
            label="ยาที่แพ้"
            placeholder="Drugs allergy"
            width="w-full md:w-[49%]"
            required={false}
            index={index}
          />
        </div>

        <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
          <TextAreaBox
            obj={data[index].medicalProblem}
            setObj={setData}
            name="medicalProblem"
            label="โรคประจำตัวและวิธีประถมพยาบาลเบื้องต้น"
            placeholder="Medical problems and first-aid"
            width="w-full"
            required={false}
            index={index}
          />
        </div>

        <h1 className="pl-6 pt-2 md:pl-2 text-lg">แนบไฟล์เอกสาร</h1>
        <h2 className="pl-6 pr-4 md:pl-4 md:pr-0 py-4">
          1. รูปนักเรียนขนาด 1.5นิ้ว
        </h2>
        <ImageInputBox
          obj={data[index].selfImageAttachment}
          setObj={setData}
          name="selfImageAttachment"
          index={index}
        />
        <h2 className="pl-6 pr-4 md:pl-4 md:pr-0 py-4">
          2. สำเนาบัตรประชาชนผู้เข้าร่วมเฉพาะด้านหน้า
          หรือบัตรนักเรียนพร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย
        </h2>
        <ImageInputBox
          obj={data[index].idCardAttachment}
          setObj={setData}
          name="idCardAttachment"
          index={index}
        />
        <h2 className="pl-6 pr-4 md:pl-4 md:pr-0 py-4">
          3. ปพ.7 ของผู้เข้าแข่งขันตัวจริง
        </h2>
        {/* <InputFile /> */}
        <ImageInputBox
          obj={data[index].pp7Attachment}
          setObj={setData}
          name="pp7Attachment"
          index={index}
        />
      </div>
    </div>
  );
};
