import Image from 'next/image';
import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  variant: string;
  icon?: string;
  full?: boolean;
  isReversed?: boolean;
}

const button = ({type, title, icon, full, isReversed, variant} : ButtonProps) => {
  return (
    <button 
      className={`px-6 py-4 flex justify-center text-system-purple-60`} type={type}>
        <span className='cursor-pointer'>{title}</span>
        {icon && <Image src={icon} alt={title} width={20} height={20}/>}
    </button>
  )
}

export default button