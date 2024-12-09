import { CallToAction } from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <LogoTicker/>
  <Introduction/>
  <Features/>
  <ProductShowcase/>
  <Testimonials/>
  <Faqs/>
  <CallToAction/>
  <Footer/>
  </>
  )
}
