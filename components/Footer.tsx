import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-[10px] md:py-[10px] py-[5px]'>
      <div className="flex text-[24px] gap-[25px] text-[#544B1F] md:hidden">
        <a href="#"><RiInstagramFill /></a> 
        <a href="#"><FaFacebookSquare /></a> 
        <a href="#"><AiFillTikTok /></a> 
       </div>
      <p className='text-[14px] md:text-[20px] text-[#544B1F]'>Copyright © 2024 Nigella®. All rights reserved.</p>
    </footer>
  )
}

export default Footer