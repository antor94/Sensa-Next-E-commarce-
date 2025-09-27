import Link from 'next/link'
import React from 'react'
import { FiFacebook } from "react-icons/fi";




const Footer = () => {
  return (
    <>
    
    
    
    <section id='footer'>
        <div className="container">
            <div id='footer-row'>

                <div className='foo-col-1'>
                    <h2 className='text-[22px] font-normal font-main text-main'>Make money with us</h2>
                    <p className='text-[16px] font-normal font-main text-main'>Sell product on Sansa</p>
                    <p className='text-[16px] font-normal font-main text-main'>Sell on Sansa Business</p>
                    <p className='text-[16px] font-normal font-main text-main'>Self-Publish with Us</p>

                </div>

                <div className='foo-col-2'>
                    <h2 className='text-[22px] font-normal font-main text-main'>Connects</h2>
                    <div>
                        <ul>
                            <li><Link href={'/'} >facebook</Link></li>
                            <li><Link href={'/'} >Instagram</Link></li>
                            <li><Link href={'/'} >LinkedIn</Link></li>
                            <li><Link href={'/'} >x</Link></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Footer