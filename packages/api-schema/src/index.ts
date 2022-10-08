import { CreateApiSchema } from 'springpress';

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
    name: string,
  },
}>; 
