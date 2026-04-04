import { ContactSection } from "@/components/common/contactsection"; 
import { SocialSection } from "@/components/features/contact/socialsection";
import { Location } from "@/components/features/contact/location";

export default function ContactPage() {
    return (
       <>
          <ContactSection />
          <SocialSection />
          <Location />
       </>
    );
}
