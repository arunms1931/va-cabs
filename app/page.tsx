import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import OurCabSection from "@/components/OurCabSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BookingForm />
      <ServicesSection />
      <WhyChooseSection />
      <OurCabSection />
      <ServiceAreasSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
