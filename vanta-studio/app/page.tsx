import { Nav }          from '@/components/Nav'
import { Hero }         from '@/components/Hero'
import { Statement }    from '@/components/Statement'
import { WorkGrid }     from '@/components/WorkGrid'
import { Services }     from '@/components/Services'
import { Process }      from '@/components/Process'
import { About }        from '@/components/About'
import { PressMarquee } from '@/components/PressMarquee'
import { Testimonials } from '@/components/Testimonials'
import { ContactCTA }   from '@/components/ContactCTA'
import { Footer }       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <WorkGrid />
        <Services />
        <Process />
        <About />
        <PressMarquee />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
