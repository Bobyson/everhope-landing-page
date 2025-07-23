// import Image from 'next/image';
import { Button } from "./ui/button";

// export function HeroSection() {
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-white to-pink-50">
//       <div className="container px-4 md:px-6 mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
//         <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//             Redefining <span className="text-pink-600">Cancer Care</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-[600px]">
//             Compassion and Comprehensive Care at Every Step
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 h-auto">
//               Get Started
//             </Button>
//             <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-6 h-auto">
//               Learn More
//             </Button>
//           </div>
//         </div>
//         <div className="lg:w-1/2">
//           <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
//             <Image
//               src="/hero-img.png"
//               alt="Cancer care professionals with patients"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export function HeroSection() {
  return (
    <section className="relative w-full h-auto py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-img.png')`,
          }}
        />
        {/* <div className="absolute inset-0 bg-white/70" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 bottom-0 left-10 container mx-auto px-4 md:px-6 flex flex-col gap-6 max-w-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white">
          Redefining <br />
          <span className="italic">Cancer Care</span>
        </h1>
        <p className="text-lg text-white font-semibold">
          Putting you first, with compassion <br />{" "}
          <span className="pl-2">and understanding</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button className="bg-[#ce0135] hover:bg-[#ce0135] rounded-full text-white px-4 h-12">
            Connect with Care Expert
          </Button>
        </div>
      </div>
    </section>
  );
}
