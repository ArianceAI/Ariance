import Hero from '@/components/home/hero';
import ServicesSection from '@/components/home/services-section';
import Narrative from '@/components/home/narrative';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import CtaSection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Narrative />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </>
  );
}
