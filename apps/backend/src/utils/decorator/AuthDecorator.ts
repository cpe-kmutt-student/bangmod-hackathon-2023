import { RouteUtil } from 'springpress';

export const RequireAuth = () => {
  return RouteUtil.addRouteMetadata({
    authentication: true,
  });
};
