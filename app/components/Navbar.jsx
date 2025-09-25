import React from 'react'
import mainLogo from '../../public/images/mainLogo.png'
import Link from 'next/link'

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
                        <li><Link href={'/'}>About us</Link></li>
                    </ul>
                </div>
            
            </div>
        </div>
    </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar