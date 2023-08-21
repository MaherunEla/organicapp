import React from 'react'

const page = () => {
  return (
    <div className={`bg-[url('/assets/images/Home/pagenot.png')] bg-styles w-full h-[800px]`}>
        <div className='container'>
        <h1 className='text-right text-[300px] opacity-40'>404</h1>
        <h1 className='text-right'>Page not found</h1>
        <p className='text-right'>The page you are looking for doesn&apos;t exist or has been moved</p>
        <button className='mb-6 px-[45px] py-[20px] border rounded-lg border-sea_green bg-sea_green text-white'>Go to HomePage</button>

        </div>
       

    </div>
  )
}

export default page