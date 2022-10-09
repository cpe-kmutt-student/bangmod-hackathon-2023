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
