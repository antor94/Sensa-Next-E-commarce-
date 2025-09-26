import React from 'react'
import CommonHead from './common/CommonHead'
import ReviewCommon from './common/ReviewCommon'

const Review = () => {
  return (
    <>
    
    
    <section id='Review'>
        <div className="container">
            <div className='text-center flex justify-center'> <div className='w-[210px] '> <CommonHead comH2={'Review About Sansa'} /></div>  </div>

            <div id='Review-row'>

                <ReviewCommon />


            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Review