import { useNavbar } from '@/contexts/NavbarContext';
import { useState } from 'preact/hooks';
import { NavLink } from 'react-router-dom';

export const NavElement = ({
  text,
  to,
  className = "",
}: {
  text: string,
  to: string,
  className?: string
}) => {
  return (
    <a
      href={to}
      className={className + " flex-auto flex justify-center items-center md:border-y-[0.01px] border-white/20 hover:bg-white hover:text-black hover:backdrop-blur-md "}>{text}
    </a>
  );
};

export const Navbar = () => {
  const { visibleSection } = useNavbar();
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="fixed w-full h-16 md:h-30 z-50">
      <div className="static md:hidden w-full h-full bg-[#3E245D]/70 backdrop-blur-md md:bg-transparent p-0 m-0 flex justify-between items-center z-10 px-5">
        <span className="p-2 rounded-md w-10" />
        <a href="/register" className="p-2 h-20"><img src="logo.webp" alt="bangmod hackathon 2023 logo" className="h-[100%] w-auto"   /></a>
        <button
          className="p-2 rounded-md"
          onClick={() => setNavbar(!navbar)}
        >
          {!navbar ? (
            <div className="b h-[1rem] w-[1.3125rem] flex flex-col items-center justify-between">
              <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
              <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
              <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
            </div>
          ) : (
            <div className="relative b h-[1rem] w-[1.3125rem] flex flex-col items-center justify-center md:justify-between">
              <div className="absolute h-0 border-t-[0.2rem] border-white w-[1.3125rem] rounded-md rotate-45" />
              <div className="absolute h-0 border-t-[0.2rem] border-white w-[1.3125rem] rounded-md rotate-[-45deg]" />
            </div>
          )}
        </button>
      </div>

      <div className="static hidden md:flex justify-center items-center mx-4 my-2">
        <a
          href="/register"
          className="h-20"
        >
          <img src="logo.webp" alt="bangmod hackathon 2023 logo" className="h-[100%] w-auto" />
        </a>
        <nav className="w-full max-w-2xl h-10 rounded-md flex bg-gradient-to-r from-[#DB9116] p-0 text-white drop-shadow">
          <NavElement
            text="รายละเอียด"
            to="#information-section"
            className={`border-l-[0.01px] border-white/20 rounded-l-md ${visibleSection === 'info' ? 'bg-white text-black' : ''}`}
          />
          <NavElement
            className={visibleSection === 'qualification' ? 'bg-white text-black' : ''}
            text="คุณสมบัติ"
            to="#qualification-section"
          />
          <NavElement
            className={visibleSection === 'reward' ? 'bg-white text-black' : ''}
            text="รางวัล"
            to="#reward-section"
          />
          <NavElement
            className={visibleSection === 'timeline' ? 'bg-white text-black' : ''}
            text="ไทม์ไลน์"
            to="#"
          />
          <NavElement
            className={visibleSection === 'scope' ? 'bg-white text-black' : ''}
            text="ขอบเขตเนื้อหา"
            to="#scope-section"
          />
          <NavElement
            className={visibleSection === 'contact' ? 'bg-white text-black' : ''}
            text="ติดต่อสอบถาม"
            to="#"
          />
          <NavLink
            to="/register"
            className="bg-[#DB9116] flex-auto flex justify-center items-center rounded-r-md border-[0.01px] border-white"
          >
            สมัคร
          </NavLink>
        </nav>
      </div>
      {
        navbar && (
          <div className="static flex justify-center items-center md:hidden">
            <nav className="w-full h-[20rem] flex flex-col bg-[#3E245D]/70 backdrop-blur-md p-0 text-white pb-5">
              <NavElement
                text="รายละเอียด"
                to="#information-section"
              />
              <NavElement
                text="คุณสมบัติ"
                to="#qualification-section"
              />
              <NavElement
                text="รางวัล"
                to="#reward-section"
              />
              <NavElement
                text="ไทม์ไลน์"
                to="#"
              />
              <NavElement
                text="ขอบเขตเนื้อหา"
                to="#scope-section"
              />
              <NavElement
                text="ติดต่อสอบถาม"
                to="#"
              />
              <NavLink
                to="/register"
                className="bg-[#8B69AE] flex-auto flex justify-center items-center border-[0.01px] border-white rounded-md m-2 mx-20"
              >
                สมัคร
              </NavLink>
            </nav>
          </div>
        )
      }
    </div>
  );
};
