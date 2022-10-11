import { useState } from "preact/hooks";
import bg1 from "../assets/image/bg1.png";
import logo from "../assets/image/logo.png";

export const Background = () => {

  return (
    <div className="static w-full h-[100vh]">
      <div className="relative w-full h-[100vh] flex">
        <div className="absolute flex w-full h-full justify-center items-center pb-[15%]">
          <img src={logo} alt="logo" className="h-fit" />
        </div>        
        <div className="absolute flex w-full h-full items-end">
          <img src={bg1} alt="bg1"/>
        </div>
      </div>
    </div>
  )
};
