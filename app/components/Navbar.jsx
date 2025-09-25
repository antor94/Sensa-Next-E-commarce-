import React from 'react'
import mainLogo from '../../public/images/mainLogo.png'
import Link from 'next/link'
import { MdSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingCart } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
    
    
    
    
    <nav id='navbar'>
        <div className="container">
            <div id='navbar-row'>

                {/* -------------- images */}
                <Link href={'/'} ><img src={mainLogo} alt="main-logo" /></Link>

                {/* ------------- nav-items */}
                <div>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>Product</Link></li>
                        <li><Link href={'/'}>Blog</Link></li>
                        <li><Link href={'/'}>About us</Link></li>
                        <li><Link href={'/'}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* ------------- others part */}
                <div>
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