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
            
            </div>
        </div>
    </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar