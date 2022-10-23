import { LoadingScreen } from '@/components/LoadingScreen';
import { useAuth } from '@/contexts/AuthContext';
import { fetch } from '@/utils/Fetch';
import { AuthGetMeApiSchema, Payload } from '@bmh2023/api-schema';
import { useEffect } from 'preact/hooks';
import { useNavigate } from 'react-router-dom';

export const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const { user, login } = useAuth();

   useEffect(() => {
    fetch
      .get<Payload<AuthGetMeApiSchema>>('/auth/me')
      .catch(() => login());
   }, []);
    
    if (!user) return <LoadingScreen />;
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
