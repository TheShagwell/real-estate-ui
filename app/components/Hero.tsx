import { Button } from '@/components/ui/button'
import React from 'react'
import { Inview } from '../constants/constant.index'
import HeropageImage from "/public/Hero_page.png";
import Image from 'next/image';

interface BoxProps {
    id: string
    header: string
    testament: string
    button?: string
}

const HeroBoxed: React.FC<BoxProps> = ({header, testament}) => {
    return (
        <div className="bg-[#1A1A1A] border border-solid border-[#262626] rounded-[.625rem] py-[.875rem] px-5">
          <h3 className="text-[1.875rem] font-bold mb-2 text-[#fff]">{header}</h3>
          <p className='text-[#999999]'>{testament}</p>
        </div>
      );
}

export default function Hero() {
  return (
    <>
        <div className="flex gap-[3.75rem] mb-[6.25rem]">
            <div className="flex flex-col h-full pt-[6.125rem] ml-20">
                <div className="flex flex-col w-[38.75rem] text-white">
                    <h2 className='text-[2.875rem] font-semibold leading-[120%] mb-5'>Discover Your Dream Property with Estatein</h2>
                    <p className='text-[#999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                </div>
                <div className="flex items-center gap-4 mt-[3.125rem]">
                    <Button size='esbutton' variant='estateinbgOutline'>Learn More</Button>
                    <Button size='esbutton' variant='estateinbg'>Browse Properties</Button>
                </div>
                <div className="flex gap-4 lg:flex-row sm:flex-col mt-[3.125rem]">
                   {Inview.map((item) => (
                    <HeroBoxed key={item.id} id={item.id} header={item.header} testament={item.testament} />
                   ))}
                </div>
            </div>
            <div className="h-[38.875rem] bg-[url('/AbstractDesign.svg')] bg-cover  relative bg-[#1A1A1A]">
               <Image src={HeropageImage} alt='Hero Image' style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
               }}/>
            </div>
        </div>
    </>
  )
}