import { fetch } from '@/utils/Fetch';
import { AuthGetAuthApiSchema, AuthGetMeApiSchema, Payload } from 'api-schema';
import { ComponentChildren, createContext } from 'preact';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';

type User = {
  email: string,
  name: string,
  picture: string,
};

type AuthStatus = 'authenticating' | 'authenticated' | 'unauthenticated';

type AuthContextValue = {
  status: AuthStatus,
  user: User | null,
  login: Function;
};

type AuthProviderProps = {
  children: ComponentChildren,
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [status, setStatus] = useState<AuthStatus>('unauthenticated');
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    fetch
      .get<Payload<AuthGetAuthApiSchema>>('/auth')
      .then((response) => window.location.href = response.data.url);
  };

  const logout = async () => {
    // TODO
  };

  useEffect(() => {
    setStatus('authenticating');
    fetch
      .get<Payload<AuthGetMeApiSchema>>('/auth/me')
      .then((response) => {
        setStatus('authenticated');
        setUser(response.data);
      })
      .catch(() => setStatus('unauthenticated'));
  }, []);

  const contextValue = useMemo(() => {
    return {
      status,
      user,
      login,
      logout,
    };
  }, [status]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
