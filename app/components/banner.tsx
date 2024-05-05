"use client";

import { DoorClosed, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Banner({}: Props) {
  const [closed, setclosed] = useState(true);
  const closeToggleIcon = () => {
    setclosed(false);
  };
  return (
    <>
      {closed && (
        <div className="bg-[url('/AbstractDesign.svg')] relative flex bg-[#1A1A1A] border-b border-[#262626] border-solid justify-center px-20 py-[.875rem]">
          <div className="flex justify-center items-center gap-[.625rem]">
            <span className="text-white text-[.875rem]">
              ✨Discover Your Dream Property with Estatein
            </span>
            <Link href="/" className="text-white text-[.875rem] underline hover:no-underline">
              Learn More
            </Link>
          </div>
          <div
            className={`flex items-center bg-[#262626] justify-center absolute right-8 rounded-full w-[1.625rem] h-[1.625rem]`}
            onClick={closeToggleIcon}
          >
            <X color="#ffffff" size={18}/>
          </div>
        </div>
      )}
    </>
  );
}
