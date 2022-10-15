import { RegistrationForm } from '@/components/RegistrationForm';

export const RegistrationPage = () => {
  return (
    <div className="relative h-full min-h-screen overflow-hidden bg-[#5d298e]">
      <div className="container">
        <RegistrationForm />
      </div>
      <div className="absolute bottom-0 z-10">
        <img src="bg1.webp" alt="" />
      </div>
    </div>
  );
};
