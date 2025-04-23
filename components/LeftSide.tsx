import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiHome } from "react-icons/ci";
import { IoBookOutline, IoChatbubblesOutline } from "react-icons/io5";
import { RiLightbulbFlashLine, RiMedicineBottleLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
export default function LeftSide() {
  return (
    <div className="flex bg-gray-50 rounded-2xl shadow-xl w-24 p-2.5 flex-col items-center justify-between h-screen">
      {/* image */}
      <div>
        <Image src="/munajat.png" width={50} height={50} alt="leftside" />
      </div>
      {/* middle items */}
      <div className="flex flex-col items-center justify-between gap-4">
        <Link href="/">
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <CiHome className="text-2xl text-[#868686]" />
        </div>
        </Link>
        <Link href="/dwa">
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <RxDashboard className="text-2xl text-[#868686]" />
        </div>
        </Link>
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <RiLightbulbFlashLine className="text-2xl text-[#868686]" />
        </div>
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <CiBookmark className="text-2xl text-[#868686]" />
        </div>
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <RiMedicineBottleLine className="text-2xl text-[#868686]" />
        </div>
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <IoChatbubblesOutline className="text-2xl text-[#868686]" />
        </div>
        <div className="bg-[#E8F0F5] p-4 rounded-full">
          <IoBookOutline className="text-2xl text-[#868686]" />
        </div>
      </div>
      {/* last items */}
      <div>
        <Image src="/icons.png" width={50} height={50} alt="leftside" />
      </div>
    </div>
  );
}
