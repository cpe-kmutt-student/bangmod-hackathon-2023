import { withAuth } from '@/components/hoc/withAuth';
import { RegistrationForm } from '@/components/RegistrationForm';
import { RegistrationNavbar } from '@/components/RegistrationNavbar';

export const RegistrationPage = withAuth(() => {
  return (
    <div className="relative h-full min-h-screen overflow-hidden bg-[#5d298e]">
      <RegistrationNavbar />

      <div className="container">
        <RegistrationForm />
      </div>
      <div className="absolute bottom-0 z-10">
        <img src="bg1.webp" alt="" />
      </div>
    </div>
  );
});
