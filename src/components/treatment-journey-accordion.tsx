"use client";

import React, { useState } from "react";

import Image from "next/image";

type JourneyStepProps = {
  number: string;
  title: string;
  description: string;
  icon?: string;
  isActive: boolean;
  onMouseEnter: () => void;
};

function JourneyStep({
  number,
  title,
  description,
  icon,
  isActive,
  onMouseEnter,
}: JourneyStepProps) {
  return (
    <div
      className={`relative transition-all duration-300 ease-in-out cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md ${
        isActive 
          ? "flex-grow md:w-[40%] bg-pink-50 border-l-4 border-pink-500" 
          : "md:w-[15%] bg-pink-100/30 border-l-4 border-transparent"
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className="h-full flex flex-col p-6">
        <div className="flex items-center mb-4">
          <div
            className={`w-12 h-12 rounded-full transition-colors duration-300 ${
              isActive ? "bg-pink-600" : "bg-pink-100"
            } flex items-center justify-center mr-4`}
          >
            <span
              className={`text-xl transition-all duration-300 ${
                isActive ? "text-white font-extrabold" : "text-pink-600 font-bold"
              }`}
            >
              {number}
            </span>
          </div>
          <h3
            className={`text-lg transition-all duration-300 ${
              isActive ? "text-pink-600 font-semibold" : "text-gray-900 font-medium"
            }`}
          >
            {title}
          </h3>
        </div>

        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-gray-600 mb-4">{description}</p>
          {icon && (
            <div className="flex justify-center mt-2">
              <Image src={icon} alt={title} width={40} height={40} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TreatmentJourneyAccordion() {
  // Set the first step as active by default
  const [activeStep, setActiveStep] = useState<string>("1");

  const steps = [
    {
      number: "1",
      title: "Your First Consultation",
      description:
        "Meet our experts to review your diagnosis and medical history, discuss treatment goals, get your questions answered, and understand the path forward.",
      icon: "/care-icon.svg",
    },
    {
      number: "2",
      title: "Your Personalised Care Plan",
      description:
        "Our team develops a comprehensive treatment plan tailored specifically to your diagnosis, health status, and personal preferences.",
      icon: "/file.svg",
    },
    {
      number: "3",
      title: "Treatment at our Center",
      description:
        "Experience state-of-the-art treatment delivered by our expert team in a healing environment designed for your comfort and well-being.",
      icon: "/treatment-icon.svg",
    },
    {
      number: "4",
      title: "Comfort-first Experience",
      description:
        "From amenities to support services, every aspect of your care is designed to make your treatment journey as comfortable as possible.",
      icon: "/support-icon.svg",
    },
    {
      number: "5",
      title: "Caring for the Whole You",
      description:
        "Our holistic approach addresses not just your cancer, but your overall wellbeing with nutrition guidance, emotional support, and survivorship planning.",
      icon: "/globe.svg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Diagnosis Through Recovery:{" "}
            <span className="text-pink-600">We&apos;re With You</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 min-h-[400px] md:min-h-[300px]">
          {steps.map((step) => (
            <JourneyStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={activeStep === step.number}
              onMouseEnter={() => setActiveStep(step.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
