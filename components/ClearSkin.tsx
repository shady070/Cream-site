import React from 'react'

const ClearSkin = () => {
  return (
    <div className='mt-[22px] md:mt-[56px] md:items-center md:gap-[45px] flex flex-col-reverse md:flex-row'>
        <div className='md:order-1 pt-[22px]'>
            <h1 className='text-[24px] md:text-[32px] text-black'>Instant Clear Skin</h1>
            <p className='text-[16px] md:text-[24px] text-[#544B1F] md:w-[463px] pt-[16px] pb-[30px]'>See results in just one day! Nigella Cream works overnight to reduce pimples and soothe your skin, naturally.</p>
        </div>
        <div className='md:order-2'>
            <img src="/img2.png" alt="ClearSkin" />
        </div>
    </div>
  )
}

export default ClearSkin