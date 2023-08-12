"use client"
import React from 'react'
import BlogSingleHero from './Components/BlogSingleHero'
import { BlogPostData } from '../Components/BlogPostData'
import { IBlogPost} from '@/types'
import { useParams } from 'next/navigation'

const page = () => {
    const param=useParams();
    const Blog : IBlogPost | undefined =BlogPostData.find((e=>e.id ==+param?.slug));

  return (
    <div>
        <BlogSingleHero Blog={Blog}/>
    </div>
  )
}

export default page