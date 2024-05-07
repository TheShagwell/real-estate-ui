import { Button } from '@/components/ui/button'
import React from 'react'
import { Inview } from '../constants/constant.index'

interface BoxProps {
    id: string
    header: string
    testament: string
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
        <div className="flex gap-[5rem]">
            <div className="flex flex-col w-[43.125rem] h-full pt-[6.125rem] ml-20">
                <div className="flex flex-col w-full text-white">
                    <h2 className='text-[2.875rem] font-semibold leading-[120%] mb-5'>Discover Your Dream Property with Estatein</h2>
                    <p className='text-[#999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                </div>
                <div className="flex items-center gap-4 mt-[3.125rem]">
                    <Button size='esbutton' variant='estateinbgOutline'>Learn More</Button>
                    <Button size='esbutton' variant='estateinbg'>Browse Properties</Button>
                </div>
                <div className="flex gap-4 mt-[3.125rem]">
                   {Inview.map((item) => (
                    <HeroBoxed key={item.id} id={item.id} header={item.header} testament={item.testament} />
                   ))}
                </div>
            </div>
            <div className="h-full w-[43.125rem]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consectetur nostrum aperiam, quibusdam voluptatem animi assumenda error deserunt ducimus aut, sint veritatis saepe!</p>
            </div>
        </div>
    </>
  )
}