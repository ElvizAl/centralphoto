"use client"
import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import NeoBrutalismSocialLinks from "@/components/sosial-link";
import TestimonialSlider from "@/components/testimonialSlider";


export default function Home() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <NeoBrutalismSocialLinks />
      <TestimonialSlider />
      <Footer />
    </Container>
  );
}