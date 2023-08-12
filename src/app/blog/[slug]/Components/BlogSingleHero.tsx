import { IBlogPost } from '@/types'
import React from 'react'

type Props = {
    Blog : IBlogPost | undefined;

}

const BlogSingleHero = ({Blog}:Props) => {
  return (
    <div  className='w-screen h-screen'>
         <div style={{
                        background:`url(${Blog?.img}) no-repeat  `,
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover',
                        width:'1920px' ,
                        height:'100vh',
                    }} 

                    >


                     </div>

    </div>
  )
}

export default BlogSingleHero