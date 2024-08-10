import React from 'react'
import { Package } from '../../app/constants/constant.index'

interface FourBoxed {
  id?: string;
  icon: string;
  text: string;
}

const Category = ({id, icon, text} : FourBoxed) => {
  return (
    <>
      <div key={id} className="flex justify-center items-center flex-col p-4 relative bg-[#1A1A1A] border border-solid border-[#262626] rounded-[.625rem]">
        <div className="absolute right-0 top-0">{icon}</div>
        <div className="border border-separate mt-[1.875rem]"></div>
        <p className=' text-white font-medium'>{text}</p>
      </div>
    </>
  )
}

 export default function Categories(){
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
            />
          ))}
        </div>
      </div>
    </>
  )
 }