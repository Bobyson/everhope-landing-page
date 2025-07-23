import React from 'react';
import Image from 'next/image';

type StandardCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

function StandardCard({ title, description, imageSrc }: StandardCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative w-full aspect-video">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function StandardOfCare() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The <span className="text-pink-600">Everhope Standard</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Everhope, we deliver exceptional cancer care through our commitment to excellence in every aspect of your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StandardCard 
            title="Cutting-Edge Research" 
            description="Access to the latest clinical trials and innovative treatments to provide the best possible outcomes."
            imageSrc="/hero-img.png"
          />
          
          <StandardCard 
            title="Multidisciplinary Approach" 
            description="Collaborative care from specialists across disciplines to create comprehensive treatment plans."
            imageSrc="/hero-img.png"
          />
          
          <StandardCard 
            title="Patient-Centered Care" 
            description="Personalized attention and support services designed around your unique needs and preferences."
            imageSrc="/hero-img.png"
          />
          
          <StandardCard 
            title="Advanced Technology" 
            description="State-of-the-art diagnostic and treatment technologies for precise and effective care."
            imageSrc="/hero-img.png"
          />
          
          <StandardCard 
            title="Supportive Environment" 
            description="Compassionate care in a healing environment designed to support your physical and emotional wellbeing."
            imageSrc="/hero-img.png"
          />
          
          <StandardCard 
            title="Continuous Support" 
            description="Ongoing care and resources throughout your journey, from diagnosis through survivorship."
            imageSrc="/hero-img.png"
          />
        </div>
      </div>
    </section>
  );
}