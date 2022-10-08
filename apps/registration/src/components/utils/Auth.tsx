import { api } from '@/components/utils/api';
import { ComponentChildren, createContext } from 'preact';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';

export type Session = { user: string, profileImage: string };

export type SessionStatus = 'loading' | 'error' | 'login' | 'authenticated' | 'unauthenticated';

export interface SessionUserData {
  user: string;
  profileImage: string;
}

export type SessionContextValue = { data: SessionUserData | null, status: SessionStatus }

export const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export interface SessionProviderProps {
  children: ComponentChildren
}

export const getLoginUrl = async () : Promise<string> => {
  const LoginPageUrl: Promise<string> = api.get('/auth').then((response) => {
    return response.request?.res?.responseUrl || '';
  });
  return LoginPageUrl;
}

const sessionState : { setStatus : any } = { setStatus : () => {} };

export const SessionProvider = (props: SessionProviderProps) => {
  const { children } = props;
  const [data, setData] = useState<SessionUserData | null>(null);
  const [status, setStatus] = useState<SessionStatus>('loading');
  const session = useMemo(() => ({ data, status }), [data, status]);
  sessionState.setStatus = setStatus;

  useEffect(() => {
    if (status === 'loading'){
      api.get('/auth/me').then((response) => {
        switch (response.status) {
          case 401:
            setStatus('unauthenticated');
            break;          
          case 200:
            setData(response.data);
            setStatus('authenticated');
        }
      })
    } else if (status === 'login') {
        const interval = setInterval(() => {
          api.get('/auth/me').then((response) => {
            switch (response.status) {
              case 200:
                setData(response.data);
                setStatus('authenticated');
            }
          })
        }, 7000);
        return () => clearInterval(interval);
    }
  },[status]);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const sessionValue: SessionContextValue | undefined = useContext(SessionContext);
  if (sessionValue){
    if(sessionValue.status === 'login'){
        sessionState.setStatus('loading');
      }
    return sessionValue;
  }

  return { data: null, status: 'error' };
}

