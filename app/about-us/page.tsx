// The button styles will be added here
import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Banner from '../components/banner'
import Header from '../components/header'
import Hero from '../components/Hero'


const About = () => {
  return (
    <div className=''>
      <Banner/>
      <Header/>
      <Hero/>
    </div>
  )
}

export default About