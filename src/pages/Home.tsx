import { HeroSlider } from '../components/home/HeroSlider';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PremiumServices } from '../components/home/PremiumServices';
import { TeamSection } from '../components/home/TeamSection';
import { SkillsSection } from '../components/home/SkillsSection';
import { QuoteForm } from '../components/home/QuoteForm';
import { CaseStudies } from '../components/home/CaseStudies';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { StatsCounter } from '../components/home/StatsCounter';
import { ProcessSteps } from '../components/home/ProcessSteps';
import { CtaBanner } from '../components/home/CtaBanner';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { BlogPreview } from '../components/home/BlogPreview';
import { Seo } from '../components/Seo';
import { faqLd } from '../lib/structuredData';
import { faqItems } from '../data/siteData';

export function Home() {
  return (
    <>
      <Seo
        title="TSR Cargo Service | Freight Forwarding & Logistics Company"
        description="TSR Cargo Service is a trusted freight forwarding and logistics company offering ocean freight, air freight, warehousing, customs brokerage and door-to-door delivery worldwide."
        path="/"
        jsonLd={faqLd(faqItems)}
      />
      <h1 className="sr-only">TSR Cargo Service — Freight Forwarding &amp; Logistics Company</h1>
      <HeroSlider />
      <ServicesPreview />
      <AboutSection />
      <WhyChooseUs />
      <PremiumServices />
      <TeamSection />
      <SkillsSection />
      <QuoteForm />
      <CaseStudies />
      <TestimonialSlider />
      <StatsCounter />
      <ProcessSteps />
      <CtaBanner />
      <FAQAccordion />
      <BlogPreview />
    </>
  );
}
