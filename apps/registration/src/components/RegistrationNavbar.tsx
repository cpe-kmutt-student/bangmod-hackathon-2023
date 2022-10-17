import { useAuth } from '@/contexts/AuthContext';

export const RegistrationNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky flex flex-row justify-between items-center px-4 md:px-24 py-2 bg-[#6a3f93] z-50">
      <a href="/">
        <img className="w-16 h-16" src="logo.webp" alt="" />
      </a>

      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-col items-end text-white">
          <div className="text-xs sm:text-sm text-gray-200 leading-snug">{user!.name}</div>
          <div className="text-xs sm:text-sm bg-[#8440c4] px-1 text-gray-200 leading-snug">{user!.email}</div>
        </div>
        <img className="w-10 h-10 rounded-lg" src={user!.picture} alt="" referrerpolicy="no-referrer" />

        <button
          onClick={() => logout()}
          className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 sm:px-4 sm:py-2"
        >
          <div className="hidden sm:block">ออกจากระบบ</div>
          <div className="block sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};
