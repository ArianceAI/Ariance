import Hero from '@/components/home/hero';
import UspBar from '@/components/home/usp-bar';
import ServicesSection from '@/components/home/services-section';
import HowItWorks from '@/components/home/how-it-works';
import SocialProof from '@/components/home/social-proof';
import AboutSection from '@/components/home/about-section';
import CtaSection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <UspBar />
      <ServicesSection />
      <HowItWorks />
      <SocialProof />
      <AboutSection />
      <CtaSection />
    </>
  );
}
