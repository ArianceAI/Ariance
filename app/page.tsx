import Hero from '@/components/home/hero';
import UspBar from '@/components/home/usp-bar';
import FeatureSection from '@/components/home/feature-section';
import Narrative from '@/components/home/narrative';
import HowItWorks from '@/components/home/how-it-works';
import SocialProof from '@/components/home/social-proof';
import CtaSection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <UspBar />
      <FeatureSection variant="automatisering" />
      <FeatureSection variant="consultancy" />
      <Narrative />
      <HowItWorks />
      <SocialProof />
      <CtaSection />
    </>
  );
}
