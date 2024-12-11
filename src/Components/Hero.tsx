import type { NextPage } from 'next';
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <div className="w-full h-[850px] relative text-center text-[36px] text-[#f05c52] font-inter overflow-hidden">
      <div className="absolute top-0 left-0 w-[1740px] h-[850px]">
        <div className="absolute top-0 left-0 rounded-b-[48px] bg-[#f0f2f3] w-[1740px] h-[850px]" />
        <Image className="absolute top-[115px] left-[777px] w-[434px] h-[584px] object-cover" width={434} height={584} alt="" src="/chair.png" />
       
      </div>
      <div className="absolute top-[229px] left-[70px] w-[557px] h-[337px] text-left text-[60px] text-[#272343]">
        <b className="capitalize leading-[110%]">
          <p>Best Furniture</p>
          <p>Collection for your</p>
          <p>interior.</p>
        </b>
        <div className="absolute top-[-30px] left-2 text-[14px] tracking-[0.12em] leading-[100%] uppercase ">Welcome to chairy</div>
        <div className="absolute top-[285px] left-0 flex items-center justify-center gap-[20px] p-[14px_24px] rounded-[8px] bg-[#029fae] text-[16px] font-semibold text-white">
          <div className="capitalize leading-[110%]">Shop Now</div>
          <Image className="w-[24px] h-[24px]" width={24} height={24} alt="" src="/Rightarrow.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
