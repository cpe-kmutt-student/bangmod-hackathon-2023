import { withAuth } from '@/components/hoc/withAuth';
import { RegistrationForm } from '@/components/RegistrationForm';
import { RegistrationNavbar } from '@/components/RegistrationNavbar';

export const RegistrationPage = withAuth(() => {
  return (
    <div className="relative h-full min-h-screen overflow-hidden bg-[#5d298e]">
      <RegistrationNavbar />

      <div className="relative h-full">
        <div className="container">
          <RegistrationForm />
        </div>
        <img className="w-full h-full absolute bottom-0" src="bg1.webp" alt="" />
      </div>
    </div>
  );
});
