import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  variant: string;
  icon?: string;
  full?: boolean;
  isReversed?: boolean;
}

const button = ({type, title} : ButtonProps) => {
  return (
    <button 
      className={`px-6 py-4 flex justify-center text-system-purple-60`} type={type}>
        <span className='cursor-pointer'>{title}</span>
    </button>
  )
}

export default button