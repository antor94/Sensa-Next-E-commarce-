import Image from 'next/image'
import React from 'react'
import { IoStar } from "react-icons/io5";

const ReviewCommon = ({reImg , reName , reP , reDis}) => {
  return (



    <div className=' w-[490px] h-[347px] border border-[#DADFD8] rounded-[8px]'>
      <div className='p-[24px]'>



        <div className='flex items-center gap-[31px]'>
            <div><Image src={reImg} width={75} height={75} alt='logo' ></Image></div>
            <div>

            <h2 className='text-[22px] font-normal font-main text-main'>Andria Amesa</h2>
            <p className='text-[16px] font-normal font-main text-main'>Customer <span className='text-[12px]'>. Agu 22 2023</span></p>
            </div>
        </div>
        <div className='w-[442px] my-[28px]'><p className='text-[16px] font-normal font-main text-main'>I purchased a laptop from Sansa website and it exceeded my expectations. The website was user-friendly, and the laptop's quality and performance were outstanding. Customer service was responsive and helpful. Shipping was fast and packaging was secure. With competitive pricing and overall satisfaction, I highly recommend Sansa.</p></div>


<div className='flex gap-[8px]'>
  
    <IoStar  className='text-[#EECF2D] text-[24px]'/>
    <IoStar  className='text-[#EECF2D] text-[24px]'/>
    <IoStar  className='text-[#EECF2D] text-[24px]'/>
    <IoStar  className='text-[#EECF2D] text-[24px]'/>
    <IoStar  className='text-[#EECF2D] text-[24px]'/>
  
  <p className='text-[16px] font-normal font-main text-[#36510E]'>5.0 stars</p>
</div>

      </div>


    </div>
  )
}

export default ReviewCommon