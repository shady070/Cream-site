import { FaStar } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='max-h-screen md:flex md:gap-[45px] md:items-center md:justify-center'>
        <div>
            <div>
                <h1 className='text-[24px] text-black md:text-[40px]'>Nigella Pimple Cream</h1>
                <div className="flex gap-[4px] md:text-[24px] text-[#544B1F] pt-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
            <div>
            <img className="w-full h-[336] md:h-[436px] pt-[22px]" src="/img1.png" alt="Product Images" />
            </div>
        </div>
        <div className="md:pt-[100px]"> 
            <h1 className="text-[24px] pt-[22px] text-black md:text-[32px]">Description</h1>
            <p className="text-[16px] md:text-[24px] text-[#544B1F] pt-[16px] md:w-[463px]">Experience the magic of Nigella Cream. This fast-acting formula reduces pimples overnight, soothing and healing your skin naturally. Enriched with pure Nigella, it calms irritation, leaving your skin clear and radiant. Perfect for quick, effective results without harsh chemicals.</p>
            <p className="text-[24px] pt-[20px]">PKR - <span className="text-[#544B1F]">500/-</span></p>
            <div>
                <div className="w-[302px] h-[52px] bg-[#544B1F] text-white mt-[20px] flex items-center justify-center">
                    <a href="https://wa.me/923005780360" target="_blank">
                    ORDER NOW
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero