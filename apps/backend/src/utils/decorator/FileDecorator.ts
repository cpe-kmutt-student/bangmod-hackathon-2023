import { RouteUtil } from 'springpress';

export enum AccpetedFileType {
  DOCUMENT,
  SOURCECODE,
};

export const AllowFile = (type: AccpetedFileType, allowMultipleFiles: boolean) => {
  return RouteUtil.addRouteMetadata({
    allowMultipartFormData: {
      allowMultipleFiles: allowMultipleFiles,
      isDocument: type === AccpetedFileType.DOCUMENT,
      isSourceCode: type === AccpetedFileType.SOURCECODE,
    },
  });
};
