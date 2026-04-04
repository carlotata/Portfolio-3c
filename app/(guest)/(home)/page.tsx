import Mainlayout from "@/components/features/homepage/mainlayout";
import { ProjectShowcase } from "@/components/common/projectshowcase";
import { ContactSection } from "@/components/common/contactsection";

export default function HomePage() {
   return (
      <div id="top">
         <Mainlayout />
         <ProjectShowcase />
         <ContactSection />
      </div>
   );
}
