import { RouteUtil } from 'springpress';

export enum FileType {
  DOCUMENT,
  SOURCECODE,
};

export const AllowFile = (type: FileType, allowMultipleFiles: boolean) => {
  return RouteUtil.addRouteMetadata({
    allowMultipartFormData: {
      allowMultipleFiles: allowMultipleFiles,
      isDocument: type === FileType.DOCUMENT,
      isSourceCode: type === FileType.SOURCECODE,
    },
  });
};
