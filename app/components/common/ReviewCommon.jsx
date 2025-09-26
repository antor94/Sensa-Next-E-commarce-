import Image from 'next/image'
import React from 'react'

const ReviewCommon = () => {
  return (



    <div className=' w-[490px] h-[347px] border border-[#DADFD8] rounded-[8px]'>

        <div>
            <div><Image src='/public/images/reLogo.png' width={75} height={75} alt='logo' ></Image></div>
            <h2>Andria Amesa</h2>
            <p>Customer <span>. Agu 22 2023</span></p>
        </div>
        <div><p>I purchased a laptop from Sansa website and it exceeded my expectations. The website was user-friendly, and the laptop's quality and performance were outstanding. Customer service was responsive and helpful. Shipping was fast and packaging was secure. With competitive pricing and overall satisfaction, I highly recommend Sansa.</p></div>




    </div>
  )
}

export default ReviewCommon