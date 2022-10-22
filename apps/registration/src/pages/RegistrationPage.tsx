import { ConsentForm } from '@/components/ConsentForm';
import { withAuth } from '@/components/hoc/withAuth';
import { RegistrationForm } from '@/components/RegistrationForm';
import { RegistrationNavbar } from '@/components/RegistrationNavbar';
import { useState } from 'preact/hooks';

export const RegistrationPage = withAuth(() => {
  const [acceptConsent, setAcceptConsent] = useState<boolean>(false);

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
