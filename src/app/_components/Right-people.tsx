"use client";

import Image from "next/image";
import React, { useState } from "react";

type ContentItem = {
  icon: string;

  description: string;
};

type TabContent = {
  id: string;
  label: string;
  image: string;
  description: string;
  items: ContentItem[];
};

type RightPeopleComponentProps = {
  className?: string;
};

type ContentCardProps = {
  item: ContentItem;
};

export const RightPeopleComponent: React.FC<RightPeopleComponentProps> = ({
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>("patients");

  return (
    <section className={`bg-white container mx-auto py-10 px-4 ${className}`}>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Image/Visual */}
          <div className="hidden sm:block">
            <Image
              src={getActiveContent().image}
              alt={getActiveContent().label}
              height={400}
              width={400}
              className="w-full object-cover rounded-2xl "
            />
          </div>

          {/* Right Side - Content */}
          <div className="pl-0 sm:pl-20">
            <h2 className="text-3xl lg:text-4xl text-center sm:text-start font-light text-gray-700 mb-8">
              Having the{" "}
              <span className="text-[#E91E63] font-medium">Right People</span>
              <br />
              Beside You Changes <br /> Everything
            </h2>
            <div className="flex justify-center sm:inline-flex bg-[#FCF6F1] rounded-full p-1 shadow-sm border border-gray-200">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 w-full rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#FFD9CB] text-[#E91E63] shadow-inner"
                      : "text-gray-600  hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="">
              <h2 className="sm:hidden text-center text-lg text-gray-600 py-4">
                {getActiveContent().description}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1">
              {getActiveContent().items.map((item, index) => (
                <ContentCard key={index} item={item} />
              ))}
            </div>

            {/* Know More Button */}
            <div className="hidden sm:block pt-6">
              <button className="bg-[#0A2C2D] text-white px-8 py-3 rounded-full hover:bg-[#0A2C2D]/90 transition-colors duration-300 font-medium">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Helper function to get active content
  function getActiveContent(): TabContent {
    return tabsData.find((tab) => tab.id === activeTab) || tabsData[0];
  }
};

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <div className="space-x-4 p-4 transition-shadow duration-300">
      <div className="flex justify-center items-center flex-col sm:justify-start sm:flex-row gap-4">
        <Image
          src={item.icon}
          alt={item.icon}
          height={40}
          width={40}
          className="text-white h-15 w-15 p-2 rounded-full text-xl"
        />

        <p className="text-gray-600 text-center sm:text-start leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const tabsData: TabContent[] = [
  {
    id: "patients",
    label: "Patients",
    description:
      "Dont let a diagnosis limit your identity. You deserve assistance that acknowledges who you are and fosters your resilience.",
    image: "/Patients.png",
    items: [
      {
        icon: "/house.svg",
        description: "Individual patient suites that offer privacy and peace",
      },
      {
        icon: "/managersupport.svg",
        description:
          "A dedicated Care Manager for support through every step in your treatment",
      },
      {
        icon: "/car.svg",
        description: "Convenient home pick-up and drop-off and valet services",
      },
      {
        icon: "/msg.svg",
        description:
          "Clear, transparent communication so you always know what to expect",
      },
    ],
  },
  {
    id: "caregivers",
    label: "Caregivers",
    description:
      "Caregiving is a team effort and we're part of your team, ready to provide what's necessary, whenever necessary.",
    image: "/caregiver.png",
    items: [
      {
        icon: "/sleeing.svg",
        description:
          "Comfortable spaces to rest, recharge, or focus when you need it",
      },
      {
        icon: "/computer.svg",
        description:
          "Reliable Wi-Fi and workspaces — so your life doesn't have to be on hold",
      },
      {
        icon: "/tick.svg",
        description: "Regular updates so you don't have to chase information",
      },
      {
        icon: "/calender.svg",
        description:
          "Resources and guidance to help you support your loved one effectively",
      },
    ],
  },
];
