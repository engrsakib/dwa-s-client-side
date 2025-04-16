import Image from "next/image";
import React from "react";
import sakib from "@/public/Md Nazmus Sakib pasport size.jpg";
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

    </div>
  );
}
