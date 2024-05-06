import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
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
            </div>
            <div className="h-full w-[43.125rem]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consectetur nostrum aperiam, quibusdam voluptatem animi assumenda error deserunt ducimus aut, sint veritatis saepe!</p>
            </div>
        </div>
    </>
  )
}