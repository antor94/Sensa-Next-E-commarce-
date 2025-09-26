import Image from 'next/image'
import React from 'react'

const ProductsCommon = ({proImg , proH2 , proP}) => {
  return (
    <>
    

    <div className='w-[308px] h-[480px] border border-[#B3B7B1]'>
        <div className='p-[24px]'>


                     <div><Image  src={proImg} width={500} height={500}  alt="main-logo"  /></div>
                     <div className='text-center mt-[24px]'>

                     <h2 className='text-[32px] mb-[12px] font-medium font-main text-main'>{proH2}</h2>
                     <div className='w-[260px]'><p className='text-[16px] font-normal font-main text-[#484A47]'>Choosing product you want to purchase and pay with payment method such as credit card or google pays</p></div>
                     </div>
        
        </div>

    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default ProductsCommon