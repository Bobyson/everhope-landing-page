"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type JourneyStepProps = {
  number: string;
  title: string;
  description: string;
  icon?: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  backgroundColor: string;
};

function JourneyStep({
  number,
  title,
  description,
  icon,
  isActive,
  onMouseEnter,
  onMouseLeave,
  backgroundColor,
}: JourneyStepProps) {
  return (
    <div
      className={`relative transition-all duration-300 ease-in-out cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md border-l-4 border-transparent ${
        isActive ? "flex-[40]" : "flex-[15]"
      }`}
      style={{ backgroundColor }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-full flex flex-col p-6">
        <div className="flex items-center my-8">
          <div
            className={`w-32 h-12 rounded-full transition-colors duration-300 flex items-center mr-4`}
          >
            <span
              className={`transition-all duration-300 ${
                isActive
                  ? "text-white text-[112px] font-extrabold"
                  : "text-gray-600 text-7xl"
              }`}
            >
              {number}
            </span>
          </div>
        </div>

        <div className={`transition-all duration-300 ease-in-out`}>
          {icon && (
            <div className={`flex mt-2 ${isActive ? "hidden" : "block"}`}>
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="h-15 w-15"
              />
            </div>
          )}
          <h3 className={`text-2xl text-gray-600`}>{title}</h3>
          <p className={`text-gray-600 mb-4 ${isActive ? "block" : "hidden"}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TreatmentJourneyAccordion() {
  const [activeStep, setActiveStep] = useState<string | null>(null); // Changed to null initially
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const getBackgroundColor = (index: number) => {
    const baseColor = "#F2BBA7";
    const shades = ["#F2BBA7", "#F5C9B9", "#F7D6CA", "#F9E0D7", "#FBEBE5"];
    return shades[index] || baseColor;
  };

  const handleMouseEnter = (stepNumber: string) => {
    setIsHovering(true);
    setActiveStep(stepNumber);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setActiveStep(null);
  };

  const steps = [
    {
      number: "1",
      title: "Your First Consultation",
      description:
        "Meet our experts to review your diagnosis and medical history, discuss treatment goals, get your questions answered, and understand the path forward.",
      icon: "/consultation.png",
    },
    {
      number: "2",
      title: "Your Personalised Care Plan",
      description:
        "Our team develops a comprehensive treatment plan tailored specifically to your diagnosis, health status, and personal preferences.",
      icon: "/plan.svg",
    },
    {
      number: "3",
      title: "Treatment at our Center",
      description:
        "Experience state-of-the-art treatment delivered by our expert team in a healing environment designed for your comfort and well-being.",
      icon: "/treatment.svg",
    },
    {
      number: "4",
      title: "Comfort-first Experience",
      description:
        "From amenities to support services, every aspect of your care is designed to make your treatment journey as comfortable as possible.",
      icon: "/comfort.svg",
    },
    {
      number: "5",
      title: "Caring for the Whole You",
      description:
        "Our holistic approach addresses not just your cancer, but your overall wellbeing with nutrition guidance, emotional support, and survivorship planning.",
      icon: "/rev_icon5.svg",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-start pl-4 sm:pl-0 sm:text-center text-gray-900 mb-4">
            Diagnosis Through Recovery: <br className="sm:hidden" />
            <span className="text-pink-600">We&apos;re With You</span>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden w-full lg:px-8 sm:flex md:flex-row min-h-[400px]">
          {steps.map((step, index) => (
            <JourneyStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={activeStep === step.number}
              onMouseEnter={() => handleMouseEnter(step.number)}
              onMouseLeave={handleMouseLeave}
              backgroundColor={getBackgroundColor(index)}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="px-4 sm:hidden">
          {steps.map((step, index) => (
            <Accordion key={index} type="single" collapsible className="pl-4 ">
              <AccordionItem value={step.title}>
                <AccordionTrigger className="border text-gray-600 data-[state=open]:text-white data-[state=open]:bg-[#D93B55] mb-4 shadow-md bg-[#FFF6F1] px-4 rounded-full border-gray-200">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="px-2">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
