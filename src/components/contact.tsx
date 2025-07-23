import React from "react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#ce0135] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
              Connect With Us
            </h2>
            <p className=" text-white mb-6">
              A guided journey begins with a conversation. <br />
              Our team is here to help you understand your treatment options
              with clarity <br /> and compassion.
            </p>
            <div className="flex flex-col">
              <p>
                <span className="font-semibold">Location:</span> Everhope
                Oncology, Gurugram
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 7795060087
              </p>
              <p>
                <span className="font-medium">Location:</span>{" "}
                support@everhope.care
              </p>
            </div>
            <Button className="bg-gray-700 text-white rounded-full mt-4">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
