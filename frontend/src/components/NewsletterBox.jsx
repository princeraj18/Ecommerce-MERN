import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center flex flex-col items-center gap-5 py-10 my-1'>
            <p className='text-2xl font-medium text-gray-800 '>Subscribe to our newsletter for updates and offers</p>
            <p className=' text-gray-400 mt-3'>
                offers and updates will be sent to your email
            </p>
            <form action="" onSubmit={onSubmitHandler} className='text-center  w-full sm:w-1/2 sm:flex flex-col items-center gap-6 sm:gap-3 mx-auto mb-2'>
                <input className='w-full sm:flex-1 sm:mx-auto ml-6 outline-none bg-gray-300 rounded-md h-[100px] md:p-3' type="email" placeholder="Enter your email" required />
                <button type="submit" className='bg-black text-white px-4 py-2 ml-2 mt-2'>
                    SUBSCRIBE
                </button>
            </form>
    </div>
  )
}

export default NewsletterBox