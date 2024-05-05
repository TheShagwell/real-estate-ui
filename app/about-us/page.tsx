// The button styles will be added here
import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'


const About = () => {
  return (
    <div className='max-container px-5 py-12 mt-margin-48'>
        About
        <Button className='mt-3' variant="destructive">Destructive</Button>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>Click here</Link>
    </div>
  )
}

export default About