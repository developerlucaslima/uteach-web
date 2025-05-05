import { Header } from '@components/header/header'

import { AboutSection } from '@/sections/2-about-section/about-section'
import { HeroSection } from '@/sections/hero-section/hero-section'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
    </>
  )
}
