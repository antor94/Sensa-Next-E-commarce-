import React from 'react'
import CommonHead from './common/CommonHead'
import ProductsCommon from './common/ProductsCommon'

const Products = () => {
  return (
    <>
    
    
    
    
    <section id='product' className='bg-[#F3F3F3] py-[60px]'>
        <div className="container">
            <div className='text-center flex justify-center'>
            <div className='w-[272px] '> <CommonHead comH2={'How To Order Our Products'} /></div>

            </div>
            <div id='product-row'>

                <ProductsCommon />



            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Products