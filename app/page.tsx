import Hero from '@/components/home/hero';
import FeatureSection from '@/components/home/feature-section';
import Narrative from '@/components/home/narrative';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import CtaSection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureSection variant="automatisering" />
      <FeatureSection variant="consultancy" />
      <Narrative />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </>
  );
}
