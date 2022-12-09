import { ConsentForm } from '@/components/ConsentForm';
import { withAuth } from '@/components/hoc/withAuth';
import { RegistrationForm } from '@/components/RegistrationForm';
import { RegistrationNavbar } from '@/components/RegistrationNavbar';
import { useEffect, useState } from 'preact/hooks';
import { useNavigate } from 'react-router-dom';

export const RegistrationPage = withAuth(() => {
  const [acceptConsent, setAcceptConsent] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (new Date() > new Date(import.meta.env.VITE_CLOSE_FORM_DATE)) {
      navigate('/');
    }
  }, []);

  return (
    <div className="relative h-full min-h-screen overflow-hidden bg-[#5d298e]">
      <RegistrationNavbar />

      <div className="container h-full">
        {acceptConsent
          ? <RegistrationForm />
          : <ConsentForm setAcceptConsent={setAcceptConsent} />
        }
      </div>
      <div className="absolute bottom-0 z-10 w-full">
        <img className="w-full" src="bg1.webp" alt="" />
      </div>
    </div>
  );
});
