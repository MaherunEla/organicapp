import Subscribe from '@/Components/Shared/Subsribe'
import HomeAbout from '@/Components/home/Components/HomeAbout'
import HomeHero from '@/Components/home/Components/HomeHero'
import HomeProduct from '@/Components/home/Components/HomeProduct'
import Testimonial from '@/Components/home/Components/Testimonial'
import HomeOrganic from '@/Components/home/Components/HomeOrganic'
import Image from 'next/image'



export default function Home() {
  return (
    <main >
      <HomeHero/>
      <HomeAbout/>
      <Testimonial/>
      <HomeProduct/>
      <HomeOrganic/>
      <Subscribe/>
     
      
      
    </main>
  )
}
