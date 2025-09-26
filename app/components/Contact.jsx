import React from 'react'
import CommonHead from './common/CommonHead'
import { LuCircleUser } from "react-icons/lu";



const Contact = () => {
  return (
    <>
    
    
    
    <section id='contact'>
        <div className="container">
            <div className='text-center flex justify-center'> <div className='w-[200px] '> <CommonHead comH2={'Why You Picking Us'} /></div>  </div>

            <div id='contact-row' className=''>
                <div className='w-[696px] rounded-[24px] h-[516px] border border-[#DADFD8]'>
                    <div className='p-[36px]'>
                        <div>
                            <h2>Sign up as our customer</h2>
                            <p>Please enter your information</p>
                        </div>

                        <div className='w-[624px] border border-[#8D918C] rounded-[4px] flex py-[12px]'>
                   
                            <LuCircleUser className=' text-[24px] ' />
               
                            <input className='w-[90%] border-none outline-none text-[16px] font-normal font-main text-main' placeholder='Enter your name' type="text" />

                        </div>

             

                    </div>
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Contact