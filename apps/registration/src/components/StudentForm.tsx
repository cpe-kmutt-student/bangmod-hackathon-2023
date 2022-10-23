import DropDown from "@/components/DropDown";
import EmailInputbox from '@/components/EmailInputbox';
import ImageInputBox from "@/components/ImageInputBox";
import InputBox from "@/components/Inputbox";
import PhoneInput from '@/components/PhoneInput';
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
  selfImageAttachment?: FileList | null;
  idCardAttachment?: FileList | null;
  pp7Attachment?: FileList | null;
};

export const defaultStudentFormData: StudentFormDataWithFile[] = Array(3).fill({
  prefixTh: "",
  firstnameTh: "",
  middleNameTh: "",
  surnameTh: "",
  prefixEn: "",
  firstnameEn: "",
  middleNameEn: "",
  surnameEn: "",
  nickname: "",
  grade: "",
  quote: "",
  email: "",
  phoneNumber: "",
  lineId: "",
  foodType: "",
  foodAllergy: "",
  drugAllergy: "",
  disease: "",
  selfImageAttachment: null,
  idCardAttachment: null,
  pp7Attachment: null,
});

type StudentFromProps = {
  isComplete: boolean,
  data: StudentFormDataWithFile[];
  setData: StateUpdater<StudentFormDataWithFile[]>;
  index: number;
};

export const StudentForm = ({ isComplete, data, setData, index }: StudentFromProps) => {
  return (
    <div className="bg-white bg-opacity-20 drop-shadow-lg rounded-[20px]">
      {isComplete && <div className="z-20 absolute w-full h-full bg-gray-700 bg-opacity-60 rounded-[20px]"></div>}

      <div className="z-10">
        <img className="w-64 absolute top-2/3 left-0 transform -translate-x-44 scale-75 opacity-70" src="flower.svg" alt="" />
        <img className="w-64 absolute bottom-0 right-0 transform translate-x-40 opacity-70" src="flower.svg" alt="" />

        <h1 className="bg-white rounded-t-[20px] px-5 py-4 md:pl-6 text-2xl font-bold text-center md:text-left text-[#6c30a4]">
          รายละเอียดสมาชิกคนที่ {index + 1}
        </h1>

        <div className="text-white my-5 md:px-6 md:py-4">
          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <DropDown
              obj={data[index].prefixTh}
              setObj={setData}
              name="prefixTh"
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
              obj={data[index].firstnameTh}
              setObj={setData}
              name="firstnameTh"
              label="ชื่อจริง (ภาษาไทย)"
              placeholder="ชื่อจริง"
              width="w-full md:w-[27%]"
              required
              index={index}
            />
            <InputBox
              obj={data[index].middleNameTh}
              setObj={setData}
              name="middleNameTh"
              label="ชื่อกลาง (ภาษาไทย)"
              placeholder="ชื่อกลาง"
              width="w-full md:w-[27%]"
              required={false}
              index={index}
            />
            <InputBox
              obj={data[index].surnameTh}
              setObj={setData}
              name="surnameTh"
              label="นามสกุล (ภาษาไทย)"
              placeholder="นามสกุล"
              width="w-full md:w-[27%]"
              required
              index={index}
            />
          </div>

          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <DropDown
              obj={data[index].prefixEn}
              setObj={setData}
              name="prefixEn"
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
              obj={data[index].firstnameEn}
              setObj={setData}
              name="firstnameEn"
              label="ชื่อจริง (ภาษาอังกฤษ)"
              placeholder="Firstname"
              width="w-full md:w-[27%]"
              required
              index={index}
            />

            <InputBox
              obj={data[index].middleNameEn}
              setObj={setData}
              name="middleNameEn"
              label="ชื่อกลาง (ภาษาอังกฤษ)"
              placeholder="Middle Name"
              width="w-full md:w-[27%]"
              required={false}
              index={index}
            />

            <InputBox
              obj={data[index].surnameEn}
              setObj={setData}
              name="surnameEn"
              label="นามสกุล (ภาษาอังกฤษ)"
              placeholder="Surname"
              width="w-full md:w-[27%]"
              required
              index={index}
            />
          </div>

          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <InputBox
              obj={data[index].nickname}
              setObj={setData}
              name="nickname"
              label="ชื่อเล่น (ภาษาไทย)"
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
              placeholder="ระดับชั้น"
              width="w-full md:w-[20%]"
              required
              index={index}
            />
            <InputBox
              obj={data[index].quote}
              setObj={setData}
              name="quote"
              label="คำคมประจำใจ"
              placeholder="คำคมประจำใจ"
              width="w-full md:w-[51%]"
              required
              index={index}
            />
          </div>

          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <EmailInputbox
              obj={data[index].email}
              setObj={setData}
              name="email"
              label="E-mail"
              placeholder="E-mail"
              width="w-full md:w-[30%]"
              required
              index={index}
            />

            <PhoneInput
              obj={data[index].phoneNumber}
              setObj={setData}
              name="phoneNumber"
              label="เบอร์โทรศัพท์"
              placeholder="เบอร์โทรศัพท์"
              width="w-full md:w-[25%]"
              required
              index={index}
            />
            <InputBox
              obj={data[index].lineId}
              setObj={setData}
              name="lineId"
              label="LINE ID"
              placeholder="LINE ID"
              width="w-full md:w-[41%]"
              required
              index={index}
            />
          </div>

          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <InputBox
              obj={data[index].foodType}
              setObj={setData}
              name="foodType"
              label="ประเภทอาหาร"
              placeholder="เช่น ฮาลาล มังสวิรัติ"
              width="w-full md:w-[49%]"
              required={false}
              index={index}
            />
          </div>

          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <InputBox
              obj={data[index].foodAllergy}
              setObj={setData}
              name="foodAllergy"
              label="อาหารที่แพ้"
              placeholder="อาหารที่แพ้"
              width="w-full md:w-[49%]"
              required={false}
              index={index}
            />

            <InputBox
              obj={data[index].drugAllergy}
              setObj={setData}
              name="drugAllergy"
              label="ยาที่แพ้"
              placeholder="ยาที่แพ้"
              width="w-full md:w-[49%]"
              required={false}
              index={index}
            />
          </div>

          <div className="flex md:pb-4 flex-col md:flex-row md:justify-between">
            <TextAreaBox
              obj={data[index].disease}
              setObj={setData}
              name="disease"
              label="โรคประจำตัวและวิธีปฐมพยาบาลเบื้องต้น"
              placeholder="โรคประจำตัวและวิธีปฐมพยาบาลเบื้องต้น"
              width="w-full"
              required={false}
              index={index}
            />
          </div>

          <h1 className="text-white pt-2 pl-6 md:pl-0 md:text-2xl font-bold">
            แนบไฟล์เอกสาร
          </h1>
          <h2 className="pl-6 pr-4 md:pl-0 md:pr-0">
            1. รูปนักเรียนขนาด 1.5นิ้ว
            <span className="text-[#ffdc19]">
              *
            </span>
          </h2>
          <ImageInputBox
            obj={data[index].selfImageAttachment || null}
            setObj={setData}
            name="selfImageAttachment"
            attachmentType={1}
            index={index}
          />
          <h2 className="pl-6 pr-4 md:pl-0 md:pr-0">
            2. สำเนาบัตรประชาชนผู้เข้าร่วมเฉพาะด้านหน้า
            หรือบัตรนักเรียนพร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย
            <span className="text-[#ffdc19]">
              *
            </span>
          </h2>
          <ImageInputBox
            obj={data[index].idCardAttachment || null}
            setObj={setData}
            name="idCardAttachment"
            attachmentType={2}
            index={index}
          />
          <h2 className="pl-6 pr-4 md:pl-0 md:pr-0">
            3. ปพ.7 ของผู้เข้าแข่งขันตัวจริง
            <span className="text-[#ffdc19]">
              *
            </span>
          </h2>
          {/* <InputFile /> */}
          <ImageInputBox
            obj={data[index].pp7Attachment || null}
            setObj={setData}
            name="pp7Attachment"
            attachmentType={3}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};
