"use client";

import ResponsiveCarousel from "./Carousel";

// interface CardData {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   badge?: string;
// }

// interface CarouselProps {

//   autoSlideInterval?: number;
// }

// interface CarouselCardProps {
//   card: CardData;
//   className?: string;
// }

export function StandardOfCare() {
  return (
    <div className="bg-[#FBF3ED] py-12">
      <div className=" container mx-auto py-10 sm:py-20">
        <div className="flex flex-col space-y-4 items-center justify-center">
          <h2 className="text-3xl lg:text-4xl text-center text-gray-600">
            The <span className="text-[#D0093B]">Everhope</span> Standard
          </h2>
          <p className="text-gray-600 text-xl px-2 sm:px-0 text-center">
            At EverHope, we deliver an unparalled recovery experience by
          </p>
        </div>
      </div>
      <ResponsiveCarousel />
    </div>
  );
}

// export const ResponsiveCarousel: React.FC<CarouselProps> = ({
//   data,
//   autoSlideInterval = 3000,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

//   // Detect screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Auto-slide functionality for large screens
//   useEffect(() => {
//     if (isLargeScreen && !isPaused) {
//       autoSlideRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % data.length);
//       }, autoSlideInterval);
//     } else {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//         autoSlideRef.current = null;
//       }
//     }

//     return () => {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//         autoSlideRef.current = null;
//       }
//     };
//   }, [isLargeScreen, isPaused, autoSlideInterval, data.length]);

//   // Get current visible cards (3 cards)
//   const getCurrentCards = () => {
//     const cards = [];
//     for (let i = 0; i < 5; i++) {
//       const index = (currentIndex + i) % data.length;
//       cards.push(data[index]);
//     }
//     return cards;
//   };

//   // Navigation handlers
//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
//     if (!isLargeScreen && scrollContainerRef.current) {
//       scrollToIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
//     }
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % data.length);
//     if (!isLargeScreen && scrollContainerRef.current) {
//       scrollToIndex((currentIndex + 1) % data.length);
//     }
//   };

//   // Scroll to specific index for mobile
//   const scrollToIndex = (index: number) => {
//     if (scrollContainerRef.current) {
//       const cardWidth = scrollContainerRef.current.offsetWidth / 3;
//       scrollContainerRef.current.scrollTo({
//         left: cardWidth * index,
//         behavior: "smooth",
//       });
//     }
//   };

//   const currentCards = getCurrentCards();

//   return (
//     <section className="bg-[#FBF3ED] py-10 px-4 sm:px-6 relative">
//       <div className="relative z-10">
//         {/* Large Screen: Auto-sliding Carousel */}
//         <div
//           className="hidden sm:flex gap-4"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {currentCards.map((card, index) => (
//             <CarouselCard
//               key={`${currentIndex}-${index}`}
//               card={card}
//               className={`transform transition-all duration-500 ease-in-out ${
//                 index === 2 ? "" : "opacity-60"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Mobile Screen: Horizontal Scroll */}
//         <div className="sm:hidden">
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-hidden gap-4 pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
//           >
//             {data.map((card, index) => (
//               <div key={index} className="flex-shrink-0 w-80 snap-center">
//                 <CarouselCard card={card} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex sm:hidden justify-center items-center space-x-6 mt-8">
//           <button
//             onClick={goToPrevious}
//             className="p-3 rounded-full border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition-all active:scale-95"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Progress Indicators (Large Screen Only) */}
//           <div className="hidden md:flex space-x-2">
//             {data.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === currentIndex
//                     ? "bg-red-600"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={goToNext}
//             className="p-3 rounded-full border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition-all active:scale-95"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// const CarouselCard: React.FC<CarouselCardProps> = ({
//   card,
//   className = "",
// }) => {
//   return (
//     <div
//       className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 ${className}`}
//     >
//       {/* Image Section */}
//       <div className="">
//         <Image
//           src={card.image}
//           alt={card.title}
//           height={300}
//           width={300}
//           // fill
//           className="object-contain transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         <p className="text-gray-600 text-sm leading-relaxed">
//           {card.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export const carouselData: CardData[] = [
//   {
//     id: 1,
//     title: "Advanced Cancer Treatment",
//     subtitle: "Oncology Department",
//     description: "Maintaining proactive, transparent communication",
//     image: "/carousel5.png",
//     badge: "New",
//   },
//   {
//     id: 2,
//     title: "Emergency Care Services",
//     subtitle: "24/7 Emergency",
//     description: "Complete emotional, nutritional and financial support",
//     image: "/carousel4.jpg",
//   },
//   {
//     id: 3,
//     title: "Cardiac Surgery",
//     subtitle: "Heart Specialists",
//     description:
//       "Providing care in a comfortable home like setting (not a clinic)",
//     image: "/carousel1.jpg",
//     badge: "Featured",
//   },
//   {
//     id: 4,
//     title: "Pediatric Care",
//     subtitle: "Children's Health",
//     description: "Bringing personalised care right to your doorstep",
//     image: "/carousel2.png",
//   },
//   {
//     id: 5,
//     title: "Neurological Services",
//     subtitle: "Brain & Spine",
//     description: "Ensuring convenience for you and your love ones",
//     image: "/carousel3.png",
//   },
// ];
