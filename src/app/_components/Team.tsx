"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export type Doctor = {
  name: string;
  qualification: string;
  experience: string;
  role: string;
  interests: string[];
  focusAreas: string[];
  image: string;
};

export type DoctorCardProps = {
  doctor: Doctor;
  className?: string;
};

export const ExpertsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDoctorsPerPage = () => {
    if (windowWidth >= 1024) return 3; // lg screens
    if (windowWidth >= 640) return 2; // sm screens
    return 1; // mobile
  };

  const doctorsPerPage = getDoctorsPerPage();

  const getCurrentDoctors = () => {
    const doctors = [];
    for (let i = 0; i < doctorsPerPage; i++) {
      const index = (currentIndex + i) % doctorsData.length;
      doctors.push(doctorsData[index]);
    }
    return doctors;
  };

  // const visibleDoctors = doctorsData.slice(currentIndex, currentIndex + 3);

  // Navigation handlers with infinite loop
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctorsData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % doctorsData.length);
  };

  const currentDoctors = getCurrentDoctors();

  return (
    <section className="bg-[#FBF3ED] py-10 md:py-16 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold sm:mt-8 mb-8">
          Meet the Experts <br className="sm:hidden" />{" "}
          <span className="text-red-600 pb-4 sm:pb-0">Behind Your Care</span>
        </h2>

        <div className="flex gap-3 hide-scrollbar justify-center pt-5 overflow-x-auto">
          {currentDoctors.map((doctor: Doctor, index: number) => (
            <DoctorCard
              key={`${currentIndex}-${index}`}
              doctor={doctor}
              className="w-[300px] sm:w-[320px]  flex-shrink-0"
            />
          ))}
        </div>

        {/* Pagination Controls - Always enabled */}
        <div className="flex justify-center items-center space-x-6 mt-8 mb-6">
          <button
            onClick={goToPrevious}
            className="p-3  text-gray-600 hover:bg-gray-600 hover:text-white transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="p-3   text-gray-600 hover:bg-gray-600 hover:text-white transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-[#0A2C2D] text-white py-2 px-6 rounded-full hover:bg-teal-800 transition">
            View All Doctors
          </button>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {/* Header with image and basic info */}
      <div className="flex gap-3 items-start mb-4">
        <div className="flex-shrink-0">
          <Image
            src={doctor.image}
            alt={doctor.name}
            height={60}
            width={60}
            className="w-15 h-15 object-cover rounded-lg"
          />
          <button className="text-xs underline text-red-600 mt-2 block">
            View Profile
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-md font-bold text-red-600 leading-tight">
            {doctor.name}
          </h3>
          <div className="space-y-1">
            <p className="text-xs text-gray-700 line-clamp-2 break-words">
              {doctor.qualification}
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Experience:</span>{" "}
              {doctor.experience}
            </p>
          </div>
        </div>
      </div>

      {/* Role */}
      <p className="text-xs border-y text-center py-2 font-bold mb-3 text-gray-800">
        {doctor.role}
      </p>

      {/* Clinical Interests */}
      <div className="text-xs mb-3">
        <p className="font-semibold mb-1 text-gray-800">Clinical Interests</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {doctor.interests.map((interest: string, index: number) => (
            <li key={index} className="leading-tight">
              {interest}
            </li>
          ))}
        </ul>
      </div>

      {/* Cancer Focus Areas */}
      <div className="text-xs">
        <p className="font-semibold mb-1 text-gray-800">Cancer Focus Areas</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {doctor.focusAreas.map((area: string, index: number) => (
            <li key={index} className="leading-tight">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const doctorsData: Doctor[] = [
  {
    name: "Dr. Sunny Garg",
    qualification: "MBBS, MD Medicine Oncology",
    experience: "12+ Years",
    role: "MEDICAL ONCOLOGIST",
    interests: [
      "Chemotherapy, Immunotherapy, Targeted therapy",
      "for Breast, Lung, GI, GU, and Hematologic cancers",
    ],
    focusAreas: [
      "Breast",
      "Lung",
      "GI, GU",
      "Head-neck",
      "Hematologic malignancies",
    ],
    image: "/Sunny-PSD 1.webp",
  },
  {
    name: "Dr. Manjari Chandra",
    qualification:
      "Doctorate Food & Nutrition, MSc Nutrition, Diploma Hospital Administration",
    experience: "27+ Years",
    role: "NUTRITION MEDICINE SPECIALIST",
    interests: [
      "Onco-nutrition, Gut health, Metabolic therapy",
      "Post-treatment rehabilitation, Immune nutrition",
    ],
    focusAreas: [
      "Preventive Oncology",
      "Nutritional Intervention for Terminal cancers",
      "Metabolic Disorders",
      "Nutritional Management",
    ],
    image: "/praveen.webp",
  },
  {
    name: "Dr. Praveen Yadav",
    qualification:
      "MBBS, MS (General Surgery), FAIS, FAIGES, FNB Fellowship in Thoracic Surgery (TMH, Mumbai)",
    experience: "20+ Years",
    role: "THORACIC SURGICAL ONCOLOGIST",
    interests: [
      "Minimally invasive thoracic surgery, lung &",
      "esophageal cancer, VATS",
    ],
    focusAreas: [
      "Lung",
      "Chest wall",
      "Mediastinal tumors",
      "Esophagus",
      "Tracheal tumors",
    ],
    image: "/praveen.webp",
  },
  {
    name: "Dr. Praveen Yadav",
    qualification:
      "MBBS, MS (General Surgery), FAIS, FAIGES, FNB Fellowship in Thoracic Surgery (TMH, Mumbai)",
    experience: "20+ Years",
    role: "THORACIC SURGICAL ONCOLOGIST",
    interests: [
      "Minimally invasive thoracic surgery, lung &",
      "esophageal cancer, VATS",
    ],
    focusAreas: [
      "Lung",
      "Chest wall",
      "Mediastinal tumors",
      "Esophagus",
      "Tracheal tumors",
    ],
    image: "/praveen.webp",
  },
  {
    name: "Dr. Praveen Yadav",
    qualification:
      "MBBS, MS (General Surgery), FAIS, FAIGES, FNB Fellowship in Thoracic Surgery (TMH, Mumbai)",
    experience: "20+ Years",
    role: "THORACIC SURGICAL ONCOLOGIST",
    interests: [
      "Minimally invasive thoracic surgery, lung &",
      "esophageal cancer, VATS",
    ],
    focusAreas: [
      "Lung",
      "Chest wall",
      "Mediastinal tumors",
      "Esophagus",
      "Tracheal tumors",
    ],
    image: "/praveen.webp",
  },
];
