import React from 'react';

type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
};

function Testimonial({ quote, name, title }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <svg className="h-8 w-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-pink-600">{title}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 bg-pink-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Having the <span className="text-pink-600">Right People</span> Beside You Changes Everything
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from patients who have experienced the Everhope difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="The personalized care I received at Everhope made all the difference in my cancer journey. The team treated me like family and gave me hope when I needed it most."
            name="Jennifer L."
            title="Breast Cancer Survivor"
          />
          
          <Testimonial 
            quote="From diagnosis through treatment, the Everhope team was with me every step of the way. Their expertise and compassion helped me face each day with courage."
            name="Robert T."
            title="Prostate Cancer Survivor"
          />
          
          <Testimonial 
            quote="The integrated approach to my care meant that all my needs were addressed - not just the medical aspects. This comprehensive support was crucial to my recovery."
            name="Maria S."
            title="Lymphoma Survivor"
          />
        </div>
      </div>
    </section>
  );
}