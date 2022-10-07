import { Response } from 'express';

export interface TypedResponse<T> extends Response<T> { };

export type AuthGetOAuthUrlResponse = {
  url: string,
};

export type AuthGetOAuthCallbackResponse = {
  success: boolean,
};

export type AuthGetMeResponse = {
  name: string,
};
