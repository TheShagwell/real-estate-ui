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
        <div className="bg-[url('/AbstractDesign.svg')] relative flex bg-[#1A1A1A] border-b border-[#262626] border-solid justify-center px-[10rem] py-[18px]">
          <div className="flex justify-center items-center gap-[.625rem]">
            <span className="text-white">
              ✨Discover Your Dream Property with Estatein
            </span>
            <Link href="/" className="text-white underline hover:no-underline">
              Learn More
            </Link>
          </div>
          <div
            className={`flex items-center bg-[#262626] justify-center absolute right-8 rounded-full w-8 h-8`}
            onClick={closeToggleIcon}
          >
            <X color="#ffffff" />
          </div>
        </div>
      )}
    </>
  );
}
