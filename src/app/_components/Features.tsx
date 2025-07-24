import React from "react";

export function Features() {
  return (
    <section className="w-full py-10 md:py-24 bg-white">
      <div className="container px-5 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:min-w-[40%] mb-4 md:mb-0">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-medium text-gray-600 leading-tight">
              More Than Treatment: <br className="hidden md:block" />
              <span className="text-[#ce0135] block mt-1 md:mt-0 md:inline">
                A Better Experience
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-gray-600 leading-relaxed">
              We believe cancer is a word, <br className="" />{" "}
              <span className="font-medium text-gray-600">not a sentence.</span>
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Thoughtfully designed to enhance your well-being and comfort, our{" "}
              centers offer state-of-the-art oncology care in a non-clinical
              supportive space that is close to your home. We handle the details
              with personal attention, seamless care, and less waiting time, so
              you can focus on healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
