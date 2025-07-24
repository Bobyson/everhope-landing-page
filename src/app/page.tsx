import {
  Header,
  HeroSection,
  Features,
  TreatmentJourneyAccordion,
  StandardOfCare,
  Contact,
  Footer,
  ExpertsSection,
  RightPeopleComponent,
  Banner,
} from "@/app/_components";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Banner />
      <Header />
      <main>
        <HeroSection />
        <Features />
        <TreatmentJourneyAccordion />
        <RightPeopleComponent />
        <ExpertsSection />
        <StandardOfCare />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
