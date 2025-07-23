import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

type TeamMemberProps = {
  name: string;
  role: string;
  specialties: string[];
  imageSrc: string;
};

function TeamMember({ name, role, specialties, imageSrc }: TeamMemberProps) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
        <Image 
          src={imageSrc} 
          alt={name} 
          fill 
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="text-pink-600 mb-2">{role}</p>
      <ul className="space-y-1 mb-4">
        {specialties.map((specialty, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {specialty}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="mt-auto border-pink-600 text-pink-600 hover:bg-pink-50">
        View Profile
      </Button>
    </div>
  );
}

export function Team() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Meet The Experts <span className="text-pink-600">Behind Your Care</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary team of specialists is dedicated to providing exceptional care throughout your cancer journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Dr. Sarah Johnson" 
            role="Medical Oncologist" 
            specialties={[
              "Breast Cancer", 
              "Precision Medicine", 
              "Clinical Trials"
            ]}
            imageSrc="/hero-img.png"
          />
          
          <TeamMember 
            name="Dr. Michael Chen" 
            role="Radiation Oncologist" 
            specialties={[
              "Head and Neck Cancer", 
              "SBRT", 
              "Proton Therapy"
            ]}
            imageSrc="/hero-img.png"
          />
          
          <TeamMember 
            name="Dr. Rebecca Martinez" 
            role="Surgical Oncologist" 
            specialties={[
              "Colorectal Cancer", 
              "Minimally Invasive Surgery", 
              "Robotic Surgery"
            ]}
            imageSrc="/hero-img.png"
          />
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8">
            Meet Our Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}