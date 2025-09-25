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

                    <div>
                        <div className='w-[113px] border border-[#6A6C68] hover:bg-[#8AC732]'>   <Link href={'/'} className='' >Shop Now</Link>  </div>
                        <div className='w-[113px] border border-[#6A6C68]'>   <Link href={'/'} >Learn more</Link>  </div>
                    </div>

                </div>



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Banner