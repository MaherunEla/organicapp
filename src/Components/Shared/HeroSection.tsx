import React from 'react'

const HeroSection = (props: {title:string; backgroundimg:string}) => {
  const containerStyle = {
    backgroundImage: `url(${props.backgroundimg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    
  };
  return (
    <div style={containerStyle} className='flex justify-center items-center w-full xl:w-screen h-[450px] '>
      <h1>{props.title}</h1>

    </div>
  )
}

export default HeroSection