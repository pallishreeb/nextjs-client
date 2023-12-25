import About from '@/components/About'
import HeroBanner from '@/components/HeroBanner'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <HeroBanner/>
   <About/>
   <Testimonials/>
    </>

  )
}
