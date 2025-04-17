import React from "react";

export default function TopSide() {
  return (
    <div className="flex rounded-2xl w-full h-32 flex-col items-center justify-between">
      {/* logo */}
      <div></div>
      {/* search */}
      <div>
        <label className="input absolute">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="btn relative left-3 outline-hidden">search</kbd>
        </label>
      </div>
    </div>
  );
}
