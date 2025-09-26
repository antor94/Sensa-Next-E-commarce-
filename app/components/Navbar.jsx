'use client'


import React from 'react'
import Link from 'next/link'
import { MdSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingCart } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
    
    
    
    
    <nav id='navbar' className='bg-[#F1FDDF] py-[12px]'>
        <div className="container">
            <div id='navbar-row' className='flex justify-between items-center'>

                {/* -------------- images */}

                <Link href='/' className=' w-30 ' > <Image  src="/images/mainLogo.png" width={500} height={50}  alt="main-logo"  /></Link>

                {/* ------------- nav-items */}
                <div>
                    <ul className='flex gap-[24px] items-center'>
                        <li><Link href={'/'}  className='text-[16px] font-normal font-main hover:text-[#8AC732] duration-[.3s] text-main' >Home</Link></li>
                        <li><Link href={'/'}  className='text-[16px] font-normal font-main hover:text-[#8AC732] duration-[.3s] text-main' >Product</Link></li>
                        <li><Link href={'/'}  className='text-[16px] font-normal font-main hover:text-[#8AC732] duration-[.3s] text-main' >Blog</Link></li>
                        <li><Link href={'/about'}  className='text-[16px] font-normal font-main hover:text-[#8AC732] duration-[.3s] text-main' >About us</Link></li>
                        <li><Link href={'/'}  className='text-[16px] font-normal font-main hover:text-[#8AC732] duration-[.3s] text-main' >Contact Us</Link></li>
                    </ul>
                </div>

                {/* ------------- others part */}
                <div className='flex gap-[12px] items-center'>
                    <button><MdSearch /></button>
                    <button><FaRegHeart /></button>
                    <button><TbShoppingCart /></button>
                    <Link href={'/'} ><CgProfile /></Link>
                </div>
            
            </div>
        </div>
    </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar