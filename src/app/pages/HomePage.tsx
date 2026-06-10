import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { GamesSection } from '../components/GamesSection';
import { CasesSection } from '../components/CasesSection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <GamesSection />
      <CasesSection />
      <ContactSection />
    </>
  );
}
