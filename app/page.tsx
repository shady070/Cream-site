import Benifits from '@/components/Benifits'
import ClearSkin from '@/components/ClearSkin'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <main className='md:px-[65px] md:pt-[120px] pt-[90px] px-[35px] py-[30px]'>
      <Hero />
      <Benifits />
      <ClearSkin />
    </main>
  )
}

export default page