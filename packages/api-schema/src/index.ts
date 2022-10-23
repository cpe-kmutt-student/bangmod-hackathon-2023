import { ApiSchema, CreateApiSchema } from 'springpress';

export type Payload<T extends ApiSchema> = T['res'];

export type AuthGetAuthApiSchema = CreateApiSchema<{
  res: {
    url: string
  },
}>;

export type AuthGetCallbackApiSchema = CreateApiSchema<{
  query: {
    code: string,
  },
}>;

export type AuthGetMeApiSchema = CreateApiSchema<{
  res: {
    email: string,
    name: string,
    picture: string,
  },
}>;

export type AuthGetLogoutApiSchema = CreateApiSchema<{
  res: {
    message: string
  }
}>

export type FileGetApiSchema = CreateApiSchema<{
  param: {
    hashedEmail: string,
    fileKey: string,
    originalName: string,
  },
}>;

export type FilePostApiSchema = CreateApiSchema<{
  query: {
    type: string,
    i: string,
  },
}>;

export type InputSavePostApiSchema = CreateApiSchema<{
  body: RegistrationFormData,
}>;

// For Registration form data types

export type StudentFormData = {
  prefixTh: string | null;
  firstnameTh: string | null;
  middleNameTh: string | null;
  surnameTh: string | null;
  prefixEn: string | null;
  firstnameEn: string | null;
  middleNameEn: string | null;
  surnameEn: string | null;
  nickname: string | null;
  grade: string | null;
  quote: string | null;
  email: string | null;
  phoneNumber: string | null;
  lineId: string | null;
  foodType: string | null;
  foodAllergy: string | null;
  drugAllergy: string | null;
  disease: string | null;
};

export type AdvisorFormData = Pick<StudentFormData, "prefixTh" | "firstnameTh" | "middleNameTh" | "surnameTh" | "prefixEn" | "firstnameEn" | "middleNameEn" | "surnameEn" | "email" | "phoneNumber" | "lineId">;

export type TeamFormData = {
  name: string | null;
  school: string | null;
  amount: number | null;
  isComplete: boolean | null;
};

export type RegistrationFormData = {
  students: StudentFormData[],
  advisor: AdvisorFormData,
  team: TeamFormData,
};

export const RegistrationFormDataTemplate = {
  students: [
    {
      drugAllergy: "",
      quote: "",
      foodAllergy: "",
      email: "shinnapatjr@gmail.com",
      grade: "Sophomore",
      lineId: "shinnapat_krabphom",
      disease: "",
      middleNameEn: "",
      middleNameTh: "",
      firstnameEn: "Shinnapat",
      firstnameTh: "ชินพรรธน์",
      nickname: "เปปเปอร์",
      phoneNumber: "0875908288",
      foodType: "อะไรก็ได้",
      prefixEn: "Mr.",
      prefixTh: "นาย",
      surnameEn: "Koparamestrisin",
      surnameTh: "โกปาราเมศไตรสิน",
    },
    {
      drugAllergy: "-",
      quote: "-",
      foodAllergy: "-",
      email: "shin_gg@hotmail.com",
      grade: "ม.7",
      lineId: "มายไลน์ไอดี",
      disease: "แพ้คนอย่างเธอ",
      middleNameEn: "",
      middleNameTh: "",
      firstnameEn: "PPHamster",
      firstnameTh: "พีพีแฮมสเตอร์",
      nickname: "พีพี",
      phoneNumber: "0812345678",
      foodType: "บาร์บีก้อน",
      prefixEn: "Mr.",
      prefixTh: "นาย",
      surnameEn: "Incursio",
      surnameTh: "อินครูซิโอ้"
    },
    {
      drugAllergy: "",
      quote: "",
      foodAllergy: "",
      email: "",
      grade: "",
      lineId: "",
      disease: "",
      middleNameEn: "",
      middleNameTh: "",
      firstnameEn: "Third Person",
      firstnameTh: "คนที่สาม",
      nickname: "",
      phoneNumber: "",
      foodType: "",
      prefixEn: "",
      prefixTh: "",
      surnameEn: "",
      surnameTh: ""
    },
  ],
  team: {
    amount: 3,
    school: "King Mongkut University of Technology Thonburi",
    name: "Made In Abyss",
    isComplete: true,
  },
  advisor: {
    email: "",
    lineId: "",
    middleNameEn: "",
    middleNameTh: "",
    firstnameEn: "",
    firstnameTh: "",
    phoneNumber: "0812345678",
    prefixEn: "",
    prefixTh: "",
    surnameEn: "",
    surnameTh: ""
  }
};
