import { IPortfolio } from '@/types';
import React from 'react'
import Image from 'next/image';
type Props = {
    portfolio : IPortfolio | undefined;

}

const PortfolioSingleHero = ({portfolio}:Props) => {
    const containerStyle = {
        backgroundImage: `url(${portfolio?.img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        
      };
      const divStyle: React.CSSProperties = {
        boxShadow: '0px 14px 36px 0px rgba(204, 204, 204, 0.25)',
        
      };
  return (
    <div className='h-[1120px]'>
    <div style={containerStyle} className=' w-screen h-[898px] pt-[730px] '>
                      <div style={divStyle} className='container max-w-[1400px]   h-[385px] flex bg-white rounded-[30px] '>
                        <div className='flex-none max-w-[891px] px-[82px] py-[97px] '>
                            <h1>Black Raspberry</h1>
                            <p className='max-w-[726px]'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                        </div>

                        <div className='bg-[#FAFAFA]  max-w-[509px] flex-none '>
                            <div className='flex flex-col px-[111px] py-[106px] items-center justify-center'>
                            <div className='flex gap-[13px]'>
                                <div className='flex justify-between w-[121px]'>
                                <h6>Date </h6>
                                <h6>:</h6>

                                </div>
                             
                            <p>December 4, 2022</p>
                            </div>

                            <div className='flex gap-[13px]'>
                                <div className='flex justify-between w-[122px]'>
                                <h6>Client</h6>
                                <h6>:</h6>

                                </div>
                             
                            <p>Kevin Martin</p>
                            </div>

                            <div className='flex gap-[13px]'>
                                <div className='flex justify-between w-[121px]'>
                                <h6>Client</h6>
                                <h6>:</h6>

                                </div>
                             
                            <p>Agriculture , Eco</p>
                            </div>

                            <div className='flex gap-[13px]'>
                                <div className='flex justify-between w-[121px]'>
                                <h6>Service </h6>
                                <h6>:</h6>

                                </div>
                             
                            <p>Organic Products</p>
                            </div>

                            </div>
                            
                           
                        </div>
                        
                      </div> 


                     </div>
   </div>
         
  )
}

export default PortfolioSingleHero