import React from "react";

type JourneyStepProps = {
  number: string;
  title: string;
  description: string;
};

function JourneyStep({ number, title, description }: JourneyStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
        <span className="text-xl font-bold text-pink-600">{number}</span>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function TreatmentJourney() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Diagnosis Through Recovery:{" "}
            <span className="text-pink-600">We&apos;re With You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 lg:gap-6">
          <JourneyStep
            number="1"
            title="Initial Consultation"
            description="Meet with our care team to discuss your diagnosis"
          />

          <JourneyStep
            number="2"
            title="Personalized Care Plan"
            description="Develop a treatment plan tailored to your needs"
          />

          <JourneyStep
            number="3"
            title="Treatment & Support"
            description="Receive comprehensive care with ongoing support"
          />

          <JourneyStep
            number="4"
            title="Continuous Monitoring"
            description="Regular check-ins and adjustments to your care"
          />

          <JourneyStep
            number="5"
            title="Recovery & Beyond"
            description="Support continues through recovery and survivorship"
          />
        </div>
      </div>
    </section>
  );
}
