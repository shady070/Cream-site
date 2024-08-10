'use client'
import { useEffect, useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scrolling down
        setShowNav(false);
      } else {
        // if scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`md:px-[40px] px-[20px] py-[16px] border-b border-[#544B1F] flex justify-between items-center fixed top-0 left-0 w-full bg-white transition-transform duration-300 ${
        showNav ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div>
        <img className="w-[63px] md:w-[88px]" src="/logo.svg" alt="Logo" />
      </div>
      <div>
        <h1 className="text-[20px] text-[#544B1F] md:text-[32px]">
          Nigella<span className="text-[15px] md:text-[32px]">™</span>
        </h1>
      </div>
      <div className="md:flex text-[34px] gap-[25px] text-[#544B1F] hidden">
        <a href="#">
          <RiInstagramFill />
        </a>
        <a href="#">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <AiFillTikTok />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
