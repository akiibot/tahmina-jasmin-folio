import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <AffiliationsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
