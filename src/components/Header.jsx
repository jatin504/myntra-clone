import React from "react";
import logo from "../assets/images/logo.webp";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className=" hidden md:block">
    <div className=" flex h-20 w-full px-10 py-4 items-center justify-between border-gray-200 border-b-4 ">
      <div className="">
        <img src={logo} alt="" className="w-14" />
      </div>
      <div>
        <ul className="flex items-center gap-10 px-5 text-base font-bold hover:cursor-pointer">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>LIVING</li>
          <li>BEAYTY</li>
          <li>STUDIO</li>
        </ul>
      </div>
      <div className="flex w-80 border-[1px] rounded items-center px-2 border-slate-600">
        <HiMiniMagnifyingGlass className="mr-2"/>
        <input
          type="text"
          placeholder="Search"
          className=" rounded text-[1vw] font-bold p-1 text-black "
        />
      </div>
      <div className="flex items-center justify-center gap-6 text-2xl hover:cursor-pointer">
        <IoPersonOutline />
        <CiHeart />
        <IoBagHandleOutline />
      </div>
    </div>
    </div>
  );
};

export default Header;
