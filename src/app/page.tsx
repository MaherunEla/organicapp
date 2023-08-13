import Image from 'next/image'
import HomeHero from './home/Components/HomeHero'
import Subscribe from '@/Components/Shared/Subsribe'
import HomeAbout from './home/Components/HomeAbout'
import Testimonial from './home/Testimonial'

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
