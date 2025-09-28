import Link from 'next/link'
import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import Image from 'next/image';



const Footer = () => {
  return (
    <>
    
    
    
    <section id='footer' className='bg-[#F3F3F3] pt-[40px] pb-[47px]'>
        <div className="container">
            <div id='footer-row' className='flex justify-center gap-[111px]'>

                <div className='foo-col-1'>
                    <h2 className='text-[22px] font-normal font-main text-main'>Make money with us</h2>
                    <div className='mt-[16px]'>

                    <p className='text-[16px] font-normal font-main text-main'>Sell product on Sansa</p>
                    <p className='text-[16px] font-normal font-main text-main'>Sell on Sansa Business</p>
                    <p className='text-[16px] font-normal font-main text-main'>Self-Publish with Us</p>
                    </div>

                </div>

                <div className='foo-col-2'>
                    <h2 className='text-[22px] font-normal font-main text-main'>Connects</h2>
                    <div className='mt-[16px]'>
                        <ul className='flex flex-col gap-[6px]' >
                            <li><Link href={'/'}  className='text-[16px] font-normal flex items-center gap-[4px]  font-main text-[#484A47]'> <FiFacebook className='text-[16px]'  /> facebook</Link></li>
                            <li><Link href={'/'}  className='text-[16px] font-normal flex items-center gap-[4px]  font-main text-[#484A47]'><GrInstagram  className='text-[16px]' /> Instagram</Link></li>
                            <li><Link href={'/'}  className='text-[16px] font-normal flex items-center gap-[4px]  font-main text-[#484A47]'><AiOutlineLinkedin className='text-[16px]'  />  LinkedIn</Link></li>
                            <li><Link href={'/'} className='text-[16px] font-normal  flex items-center gap-[4px] font-main text-[#484A47]' ><TbBrandTwitter  className='text-[16px]' /> x</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='foo-col-3'>
                    <h2 className='text-[22px] font-normal font-main text-main'>Payment Method</h2>

                    <div className='w-[167px] mt-[16px]'>
                        <ul className='flex flex-wrap gap-[6px]'>
                            <li><Link href={'/'} ><Image src='/images/PayPal.png' width={35} height={24} alt='logo' /></Link></li>
                            <li><Link href={'/'} ><Image src='/images/ApplePay.png' width={35} height={24} alt='logo' /></Link></li>
                            <li><Link href={'/'} ><Image src='/images/GooglePay.png' width={35} height={24} alt='logo' /></Link></li>
                            <li><Link href={'/'} ><Image src='/images/Mastercard.png' width={35} height={24} alt='logo' /></Link></li>
                            <li><Link href={'/'} ><Image src='/images/UnionPay.png' width={35} height={24} alt='logo' /></Link></li>
                            <li><Link href={'/'} ><Image src='/images/Visa.png' width={35} height={24} alt='logo' /></Link></li>
                        </ul>

                    </div>


                </div>
                <div className='foo-col-4'>
                <h2 className='text-[22px] font-normal font-main text-main'>Terms and Conditions</h2>
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Footer