import Image from 'next/image'
import React from 'react'

const PortfolioSingleAbout = () => {
  return (
    <div className='container flex flex-col items-center justify-center pt-[68px]'>
        <div className='w-[936px]'>
        <h4 className='pb-[24px]'>About The Farm:</h4>
        <p className='pb-[40px]'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 

Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
       

<div className='w-[936px] h-[426px] relative'>
    <Image src="/assets/images/portfolio/p1.png" fill alt="image"/>

</div>
<p className='text-center pt-[19px]'>The Organic Products</p>
<h4 className='pt-[20px]'>How To Farm:</h4>
<p className='pt-[24pxs]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 

<br></br><br></br>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
<h4>Conclusion:</h4>
<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 

<br></br><br></br>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

    </div>
    </div>
  )
}

export default PortfolioSingleAbout