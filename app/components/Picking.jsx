import React from 'react'
import CommonHead from './common/CommonHead'

const Picking = () => {
  return (
    <>
    

    <section id='Picking' className='bg-[#F3F3F3] py-[60px]'>
        <div className="container">
            <div className='text-center flex justify-center'> <div className='w-[200px] '> <CommonHead comH2={'Why You Picking Us'} /></div>  </div>

            <div id='Picking-row'>

                <div className='w-[209px] h-[144px] border border-[#C5C8B9] rounded-[12px]'>
                    <div className='p-[24px]'>
                        <h2 className='text-[57px] font-bold font-main text-green'>1000+</h2>
                        <p className='text-[16px] font-normal font-main text-[#8D918C]'>Brands</p>
                    </div>

                </div>
                
                <div className='w-[242px] h-[144px] border border-[#C5C8B9] rounded-[12px]'>
                    <div className='p-[24px]'>
                        <h2 className='text-[57px] font-bold font-main text-green'>35000+</h2>
                        <p className='text-[16px] font-normal font-main text-[#8D918C]'>Customers</p>
                    </div>

                </div>


                <div className='w-[209px] h-[144px] border border-[#C5C8B9] rounded-[12px]'>
                    <div className='p-[24px]'>
                        <h2 className='text-[57px] font-bold font-main text-green'>350++</h2>
                        <p className='text-[16px] font-normal font-main text-[#8D918C]'>Partners</p>
                    </div>

                </div>



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Picking