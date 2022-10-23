import { RouteUtil } from 'springpress';

export enum AccpetedFileType {
  DOCUMENT,
};

export const AllowFile = (type: AccpetedFileType, allowMultipleFiles: boolean) => {
  return RouteUtil.addRouteMetadata({
    allowMultipartFormData: {
      allowMultipleFiles: allowMultipleFiles,
      isDocument: type === AccpetedFileType.DOCUMENT,
    },
  });
};
