import React from "react";
import logo from "/public/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { NavItems } from "../../app/constants/constant.index";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className="px-20 py-[.875rem] bg-[#1A1A1A] border-b border-[#262626] border-solid flex justify-between items-center">
        <Link href="/">
          <Image src={logo} height={34} alt="Eastein Logo" />
        </Link>
        <ul className="flex items-center justify-center">
          {NavItems.map((link, index) => (
            <Link
              href={link.link}
              key={link.id}
              className={`${
                index == 0
                  ? "bg-[#141414] border border-solid border-[#262626] rounded-[.5rem] font-medium cursor-pointer transition-all hover:font-medium"
                  : "hover:bg-[#141414] hover:border hover:border-solid hover:border-[#262626] font-medium  hover:rounded-[.5rem] hover:cursor-pointer"
              } text-white py-3 px-5 text-[.875rem]`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <Link
          href="/"
          className="text-[.875rem] font-medium bg-[#141414] border border-solid border-[#262626] rounded-md py-[.875rem] px-5 text-white cursor-pointer  hover:bg-[#262626] hover:border-[#141414]"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
