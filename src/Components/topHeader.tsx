'use client'

import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white w-full h-auto flex flex-col items-start text-left text-xs text-white font-inter overflow-x-hidden">
      <div className="w-full bg-[#3b3466] flex items-center justify-between p-2 md:p-[14px_10%] box-border">
        <div className="flex items-center opacity-70 justify-between w-full flex-wrap">
          <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0">
            <Image
              className="w-[16px] h-[16px] overflow-hidden flex-shrink-0"
              width={16}
              height={16}
              alt=""
              src="/check1.png"
            />
            <div className="relative leading-[110%] capitalize text-center md:text-left">
              Free shipping on all orders over $50
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6 opacity-70 text-center justify-center w-full md:w-auto">
            <div className="flex items-center gap-1">
              <div className="relative leading-[130%]">Eng</div>
              <Image
                className="w-[7px] h-[3.5px]"
                width={7}
                height={4}
                alt="Language dropdown"
                src="/Group.png"
              />
            </div>
            <div className="hidden md:flex items-center gap-1">
              <div className="relative leading-[130%]">USD</div>
              <Image
                className="w-[7px] h-[3.5px]"
                width={7}
                height={4}
                alt="Currency dropdown"
                src="/Group.png"
              />
            </div>
            <div className="relative leading-[130%]">
              <Link href="/Faq">Faqs</Link>
            </div>
            <div className="flex items-start gap-1 opacity-70">
              <Image
                className="w-[16px] h-[16px] overflow-hidden flex-shrink-0"
                width={16}
                height={16}
                alt=""
                src="/alert-circle1.png"
              />
              <div className="relative leading-[130%]">Need Help</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f0f2f3] flex items-center justify-between p-4 md:p-[20px_10%] box-border text-2xl text-[#272343]">
        <div className="flex items-center gap-2">
          <Image
            className="w-[40px] h-[40px] overflow-hidden flex-shrink-0"
            width={40}
            height={40}
            alt=""
            src="/Logoicon.png"
          />
          <div className="relative leading-[120%] font-medium">Comforty</div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="bg-white rounded-xl p-[11px_16px] flex items-center gap-3 text-black">
            <FaCartShopping className="w-6 h-6" />
            <div className="relative leading-[130%] hidden md:block">
              <Link href="/Cart">Cart</Link>
            </div>
          </div>
          <div className="relative w-[20px] h-[20px] text-xs font-dm-sans text-white">
            <div className="absolute top-0 left-0 rounded-full bg-[#007580] w-[20px] h-[20px]" />
            <div className="absolute top-[5px] left-[7px] leading-[100%] capitalize font-medium">
              2
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shadow-[0_1px_0px_#e1e3e5] bg-white h-auto md:h-[74px] flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-[14px_10%] box-border text-xs text-[#636270]">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <div className="relative leading-[110%] text-[#007580] capitalize font-medium md:hidden">

          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#272343] md:hidden"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <div className="relative leading-[110%] text-[#007580] capitalize font-medium">
            <Link href="/">Home</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="/Cart">Shop</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="/Product">Product</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="/SingleProduct">Pages</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="/About">About</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium md:hidden">
            <Link href="/ContactUs">Contact Us</Link>
          </div>
        </div>
        <div className="hidden md:flex items-start gap-2">
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="/ContactUs">Contact Us</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium text-[#272343]">
            (808) 555-0111
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

