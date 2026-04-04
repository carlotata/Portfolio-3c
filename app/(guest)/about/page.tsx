import { EducationExperience } from "@/components/features/about/educ-exp";
import { TechStack } from "@/components/features/about/techstack";
import { Welcome } from "@/components/features/about/welcome";
import { ContactSection } from "@/components/common/contactsection";

export default function AboutPage() {
   return (
      <>
         <Welcome />
         <EducationExperience />
         <TechStack />
         <ContactSection />
      </>
   );
}
