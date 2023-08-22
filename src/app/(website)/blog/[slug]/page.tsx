"use client"
import React from 'react'
import BlogSingleHero from './Components/BlogSingleHero'
import { BlogPostData } from '../Components/BlogPostData'
import { IBlogPost} from '@/types'
import { useParams } from 'next/navigation'
import BlogSingleAbout from './Components/BlogSingleAbout'
import Subscribe from '../../Components/Shared/Subsribe'
const page = () => {
    const param=useParams();
    const Blog : IBlogPost | undefined =BlogPostData.find((e=>e.id ==+param?.slug));

  return (
    <div>
        <BlogSingleHero Blog={Blog}/>
        <BlogSingleAbout/>
        <Subscribe/>
    </div>
  )
}

export default page