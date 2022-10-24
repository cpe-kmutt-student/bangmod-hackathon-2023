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
