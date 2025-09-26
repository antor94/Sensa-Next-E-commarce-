import React from 'react'
import CommonHead from './common/CommonHead'
import ProductsCommon from './common/ProductsCommon'


const Products = () => {
  return (
    <>
    
    
    
    
    <section id='product' className='bg-[#F3F3F3] py-[60px]'>
        <div className="container">
            <div className='text-center flex justify-center'> <div className='w-[272px] '> <CommonHead comH2={'How To Order Our Products'} /></div>  </div>
            <div id='product-row' className='flex justify-center gap-[56px]'>

                <ProductsCommon proImg={''} proH2={'Select Product '} proP={'Choosing product you want to purchase and pay with payment method such as credit card or google pays'} />
                <ProductsCommon proImg={''} proH2={'Location '} proP={'Please choose a location near your residence where you can pick up product easyly and inquire about the product in more detail.'} />
                <ProductsCommon proImg={''} proH2={'Pick Up '} proP={'Once the product has arrived at the location you selected, you can proceed to pick it up.'} />



            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Products