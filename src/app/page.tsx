import Subscribe from '@/Components/Shared/Subsribe'
import HomeAbout from '@/Components/home/Components/HomeAbout'
import HomeHero from '@/Components/home/Components/HomeHero'
import Testimonial from '@/Components/home/Components/Testimonial'
import Image from 'next/image'



export default function Home() {
  return (
    <main >
      <HomeHero/>
      <HomeAbout/>
      <Testimonial/>
      <Subscribe/>
     
      
      
    </main>
  )
}
