import React from "react";
import { Package } from "../../app/constants/constant.index";
import Image from "next/image";

interface FourBoxed {
  id?: string;
  icon: string;
  text: string;
  absoluteIcon: string;
}

const Category = ({ id, icon, text, absoluteIcon }: FourBoxed) => {
  return (
    <>
      <div
        key={id}
        className="flex items-center flex-col p-4 relative bg-[#1A1A1A] border border-solid border-[#262626] rounded-[.625rem]"
      >
        <div className="absolute right-[.75rem] top-[1.25rem]">
          <Image src={absoluteIcon} alt="{text}" width={26} height={26} />
        </div>
        <div className="border-separate mt-[1.875rem]">
          <Image src={icon} alt={text} width={26} height={26} />
        </div>
        <p className=" text-white font-medium">{text}</p>
      </div>
    </>
  );
};

export default function Categories() {
  return (
    <>
      <div className="bg-[#141414] border border-solid border-[#262626] py-[.625rem] px-[.625rem]  shadow-inset shadow-[#000000]">
        <div className="grid grid-cols-4 gap-[.625rem]">
          {Package.map((item) => (
            <Category
              key={item.id}
              id={item.id}
              icon={item.icon}
              text={item.text}
              absoluteIcon={item.absoluteIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
