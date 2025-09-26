import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <>
    
    

    <section id='banner'  className='py-[60px]'>
        <div className="container">
            <div id='banner-row' className='flex items-center justify-between'>

                {/* ------------ left-side */}
                <div className='w-[609px] '>
                    <h2 className='text-[32px] font-normal font-main text-main'>Product Collection</h2>
                    <div className='mt-[16px] mb-[24px]'><p className='text-[20px] font-normal font-main text-[#484A47]'>Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.</p></div>

                    <div className='flex gap-[16px]'>
                        <div className='w-[130px] text-center border group border-[#6A6C68] rounded-full py-[10px] hover:bg-[#8AC732]'>   <Link href={'/'} className='text-[14px] font-medium group-hover:text-white  font-main text-main' >Shop Now</Link>  </div>
                        <div className='w-[130px] text-center border group border-[#6A6C68] rounded-full py-[10px] hover:bg-[#8AC732] '>   <Link href={'/'} className='text-[14px] font-medium group-hover:text-white  font-main text-main' >Learn more</Link>  </div>
                    </div>

                </div>

                {/* ----------- right-side */}
             <div><Image  src="/images/bannerImg.png" width={500} height={500}  alt="main-logo"  /></div>




            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Banner