import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { WhyHireMe } from '@/components/home/WhyHireMe'
import { Process } from '@/components/home/Process'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhyHireMe />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
