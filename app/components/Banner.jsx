import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <>
    
    

    <section id='banner'>
        <div className="container">
            <div id='banner-row'>

                {/* ------------ left-side */}
                <div className='w-[609px] '>
                    <h2>Product Collection</h2>
                    <div><p>Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.</p></div>

                    <div className='flex'>
                        <div className='w-[113px] text-center border group border-[#6A6C68] rounded-full hover:bg-[#8AC732]'>   <Link href={'/'} className='text-[14px] font-medium group-hover:text-white py-[10px] font-main text-main' >Shop Now</Link>  </div>
                        <div className='w-[121px] border border-[#6A6C68]'>   <Link href={'/'} >Learn more</Link>  </div>
                    </div>

                </div>



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Banner