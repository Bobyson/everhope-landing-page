import { 
  Header, 
  HeroSection, 
  Features, 
  TreatmentJourneyAccordion, 
  Testimonials, 
  Team, 
  StandardOfCare, 
  Contact, 
  Footer 
} from "@/components";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <TreatmentJourneyAccordion />
        <Testimonials />
        <Team />
        <StandardOfCare />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
