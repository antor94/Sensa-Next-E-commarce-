import Image from "next/image";
import React from "react";

import { FaPlus } from "react-icons/fa6";


const SellerCommon = () => {
  return (
    <>
      <div className="w-[308px] h-[452px] border border-[#C6C6C6] rounded-[8px]">
        <div className="p-[24px]">
          <div className="w-full h-[260px]">
            <Image src="/images/PayPal.png" width={35} height={24} alt="logo" />
          </div>

          <div><h2 className="text-[32px] font-normal font-main text-main">Warning</h2></div>
          <div className="my-[12px]"><p className="text-[16px] font-normal font-main text-[#484A47]">Description</p></div>

          <div className="flex justify-between items-center">
            <p className="text-[20px] font-medium font-main text-main">8.00 USD</p>
            <button className="w-[32px] h-[32px] rounded-full bg-[#8AC732] text-[18px] flex justify-center items-center text-white"><FaPlus /></button>
          </div>


        </div>
      </div>
    </>
  );
};

export default SellerCommon;
