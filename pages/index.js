import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

export default function Home(){
  const siteTitle = 'WebCraft Development — Website Profesional untuk Bisnis Anda'
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Jasa pembuatan website profesional untuk UMKM, company profile, landing page, toko online. Desain modern, cepat, SEO friendly." />
      </Head>
      <NextSeo
        title={siteTitle}
        description="Jasa pembuatan website profesional: company profile, landing page, toko online. Desain modern, cepat, dan SEO friendly."
        openGraph={{
          url: 'https://myweb-craft.co.id',
          title: siteTitle,
          description: 'Jasa pembuatan website profesional: company profile, landing page, toko online. Desain modern, cepat, dan SEO friendly.',
          images: [
            {
              url: '/assets/portfolio/indoprint-screenshot.svg',
              width: 1200,
              height: 630,
              alt: 'Indoprint screenshot'
            }
          ],
          site_name: 'WebCraft Development'
        }}
      />

      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
