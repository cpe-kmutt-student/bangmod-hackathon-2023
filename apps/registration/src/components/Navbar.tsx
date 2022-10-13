import { useState } from 'preact/hooks';
import { useAuth } from '@/contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import logo from "../assets/image/logo.png";

export const NavElement = ({
  text,
  to,
  className,
}: {
  text: string,
  to: string,
  className?: string
}) => {
  !className ? className = "" : className
  console.log(className)
  return (
    <a href={to} className={className + " flex-auto flex justify-center items-center md:border-y-[0.01px] border-white/20 hover:bg-white/90 hover:text-black hover:backdrop-blur-md "}>{text}</a>
  );
};

export const Navbar = () => {
  const [ navbar, setNavbar ] = useState(false);

  return (
    <div className="fixed w-full h-16 md:h-30 z-10">
      <div className="static md:hidden w-full h-full bg-[#3E245D]/70 backdrop-blur-md md:bg-transparent p-0 m-0 flex justify-end items-center z-10 pr-5">
        <button
          className="p-2 rounded-md"
          onClick={() => setNavbar(!navbar)}
        >
          { navbar ? (
            <div className="b h-[1rem] w-[1.3125rem] flex flex-col items-center justify-between">
              <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
              <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
              <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
            </div>
          ) :
          (
              <div className="relative b h-[1rem] w-[1.3125rem] flex flex-col items-center justify-center md:justify-between">
                <div className="absolute h-0 border-t-[0.2rem] border-white w-[1.3125rem] rounded-md rotate-45" />
                <div className="absolute h-0 border-t-[0.2rem] border-white w-[1.3125rem] rounded-md rotate-[-45deg]" />
              </div>
          )
          }
        </button>
      </div>
      <div className="static hidden md:flex justify-center items-center">
        <a href="/registration" className="h-20"><img src={logo} alt="logo" className="h-[100%] w-auto" /></a>
        <nav className="w-full max-w-2xl h-10 rounded-md flex bg-gradient-to-r from-[#DB9116] m-10 p-0 text-white drop-shadow">
          <NavElement text="รายละเอียด" to="#" className="border-l-[0.01px] border-white/20 rounded-l-md" />
          <NavElement text="คุณสมบัติ" to="#" />
          <NavElement text="รางวัล" to="#" />
          <NavElement text="ไทม์ไลน์" to="#" />
          <NavElement text="ขอบเขตเนื้อหา" to="#" />
          <NavElement text="ติดต่อสอบถาม" to="#" />
          <NavLink to="/registration" className="bg-[#DB9116] flex-auto flex justify-center items-center rounded-r-md border-[0.01px] border-white"> สมัคร </NavLink>
        </nav>
      </div>
      {
        !navbar && (
          <div className="static flex justify-center items-center md:hidden">
            <nav className="w-full h-[20rem] flex flex-col bg-[#3E245D]/70 backdrop-blur-md p-0 text-white pb-5">
              <NavElement text="รายละเอียด" to="#" />
              <NavElement text="คุณสมบัติ" to="#" />
              <NavElement text="รางวัล" to="#" />
              <NavElement text="ไทม์ไลน์" to="#" />
              <NavElement text="ขอบเขตเนื้อหา" to="#" />
              <NavElement text="ติดต่อสอบถาม" to="#" />
              <NavLink to="/registration" className="bg-[#8B69AE] flex-auto flex justify-center items-center border-[0.01px] border-white rounded-md m-2 mx-20"> สมัคร </NavLink>
            </nav>
          </div>
        )
      }
    </div>
  );
};
