import React from 'react'
import CommonHead from './common/CommonHead'
import ReviewCommon from './common/ReviewCommon'

const Review = () => {
  return (
    <>
    
    
    <section id='Review' className='py-[60px]'>
        <div className="container">
            <div className='text-center flex justify-center'> <div className='w-[210px] '> <CommonHead comH2={'Review About Sansa'} /></div>  </div>

            <div id='Review-row' className='flex justify-center gap-[56px]'>

                <ReviewCommon reImg={''} reName={'Andria Amesa'} reP={'Customer'} reDate={'Agu 22 2023'} reDis={"I purchased a laptop from Sansa website and it exceeded my expectations. The website was user-friendly, and the laptop's quality and performance were outstanding. Customer service was responsive and helpful. Shipping was fast and packaging was secure. With competitive pricing and overall satisfaction, I highly recommend Sansa."} />
                <ReviewCommon reImg={''} reName={'Devid Machi'} reP={'Sansa’s Customer'} reDate={' Nov 22 2023'} reDis={"Partnering with Sansa website is an absolute delight. The user-friendly design and diverse product offerings showcase their commitment to excellence. Prompt customer service and efficient order processing make for a seamless experience. I highly recommend partnering with Sansa for their competitive pricing and top-notch service."} />



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Review