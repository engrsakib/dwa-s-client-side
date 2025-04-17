import Image from "next/image";
import React from "react";
import sakib from "@/public/Md Nazmus Sakib pasport size.jpg";
import { IoLanguageSharp } from "react-icons/io5";
import { TbSandbox } from "react-icons/tb";
import { PiShieldCheckered } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";


export default function RightSide() {
    
  return (
    <div>
      {/* user icons */}
      <div className="flex items-center justify-end ">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="rounded-full">
              <Image src={sakib} className="rounded-full" alt="sakib" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right menue here */}

      <div className="flex flex-col items-center w-96 h-screen bg-gray-50 rounded-2xl shadow-xl p-2.5">
        {/* text */}
        <div>
          <h2 className="text-2xl text-black mt-5 font-bold">Settings</h2>
        </div>
        {/* menue */}
        <div className="flex bg-gray-100 shadow p-4 w-80 items-center gap-4 mt-5">
          <div className="rounded-full shadow border-gray-50">
          <IoLanguageSharp className="text-2xl text-[#868686]" />
          </div>
            <h2 className="text-xl text-gray-600">Language Settings</h2>
        </div>

        <div className="flex bg-gray-100 shadow p-4 w-80 items-center gap-4 mt-5">
          <div className="rounded-full shadow border-gray-50">
          <TbSandbox className="text-2xl text-[#868686]" />
          </div>
            <h2 className="text-xl text-gray-600">General Settings</h2>
        </div>

        <div className="flex bg-gray-100 shadow p-4 w-80 items-center gap-4 mt-5">
          <div className="rounded-full shadow border-gray-50">
          <RxDashboard className="text-2xl text-[#868686]"/>
          </div>
            <h2 className="text-xl text-gray-600">Font Settings</h2>
        </div>

        <div className="flex bg-gray-100 shadow p-4 w-80 items-center gap-4 mt-5">
          <div className="rounded-full shadow border-gray-50">
          <RxDashboard className="text-2xl text-[#1FA45B]" />
          </div>
            <h2 className="text-xl text-[#1FA45B]">Appearance Settings</h2>
        </div>

        <div className="flex bg-gray-100 p-4 w-80 items-center justify-between gap-4 mt-5">
          <div>
          <h2 className="text-xl text-gray-600">Night Mode</h2>
          </div>
          <input type="checkbox" defaultChecked className="toggle" />
        </div>
        
      </div>
    </div>
  );
}
