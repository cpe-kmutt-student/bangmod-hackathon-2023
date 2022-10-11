import { useState } from "preact/hooks";
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
    <a href={to} className={className + " flex-auto flex justify-center items-center border-y-[0.01px] border-white/20"}>{text}</a>
  );
};

export const Navbar = () => {
  const [ navbar, setNavbar ] = useState(false);

  return (
    <div className="fixed w-full h-16 md:h-30 z-10">
      <div className="static md:hidden w-full h-full p-0 m-0 flex justify-end items-center z-10 pr-5">
        <button
          className="p-2 rounded-md"
          onClick={() => setNavbar(!navbar)}
        >
          <div className="b h-[1rem] w-[1.3125rem] flex flex-col items-center justify-between">
            <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
            <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
            <div className="h-0 border-t-[0.13rem] border-white w-[1.3125rem] rounded-md" />
          </div>
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
    </div>
  );
};
