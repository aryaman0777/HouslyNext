import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Feature2 from './components/Features2'
import FeaturedProperties from './components/FeaturedProperties'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Hero/>
      <Features/>
      <Feature2/>
      <FeaturedProperties/>
      <Stats/>
      <Partners/>
      <Testimonials />
      <Footer />
    </div>
  )
}
