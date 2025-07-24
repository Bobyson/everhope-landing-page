// import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-auto py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="hidden sm:block w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-img.png')`,
          }}
        />
        <div
          className="sm:hidden w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/bnr_img_mb_updated_86956c0e37.png')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 sm:bottom-0 sm:left-10 container mx-auto px-4 md:px-6 flex flex-col gap-6 max-w-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white">
          Redefining <br />
          <span className="italic">Cancer Care</span>
        </h1>
        <p className="text-lg text-white font-semibold">
          Putting you first, with compassion <br />{" "}
          <span className="pl-2">and understanding</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button className="bg-[#ce0135] hover:bg-[#ce0135] w-[200px] sm:w-auto rounded-full text-white sm:px-4 h-12">
            Connect with Care Expert
          </Button>
        </div>
      </div>
    </section>
  );
}
