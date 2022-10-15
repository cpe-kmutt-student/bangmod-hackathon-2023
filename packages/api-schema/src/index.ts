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
    fileId: string,
    originalName: string,
  },
}>;

// For Registration form data types

export type StudentFormData = {
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

export type TeamFormData = {
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
};

export type RegistrationFormData = {
  students: StudentFormData[],
  team: TeamFormData,
};
