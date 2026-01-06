import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
   <div className='flex flex-col md:flex-row justify-between gap-10 py-16 border-t-2'>
        <div className='md:w-1/3 w-full  text-gray-500 flex flex-col gap-6'>
            <img src={assets.logo} className='w-30' alt="" />
            <p>
                Forever Fashion is your ultimate destination for trendy and affordable fashion.
                Discover the latest styles and elevate your wardrobe with us!
                Since 2023 , we have been committed to providing high-quality fashion products that cater to all styles and occasions.
            </p>
        </div>
        <div className='flex flex-col gap-4 '>
            <h1 className='text-3xl font-medium'>COMPANY</h1>
            <div className='flex flex-col  text-gray-500 cursor-pointer'>
                  <p>Home</p>
            <p>Collection</p>
            <p>About</p>
            <p>Contact</p>
            </div>
          
        </div>
        <div className='flex flex-col gap-4 '>
            <h1 className='text-3xl font-medium'>GET IN TOUCH</h1>
            <div className='flex flex-col  text-gray-500 cursor-pointer'>
                  <p>
                    +1 234 567 890
                  </p>
            <p>
                support@foreverfashion.com
            </p>
          
            </div>
          
        </div>
        <div></div>

    </div>
    <div>
        <hr />
        <p className='sm:py-5 text-sm text-center'>
  Copyright © 2024 Forever Fashion. All rights reserved.
        </p>
      
    </div>
    </div>
 
  )
}

export default Footer