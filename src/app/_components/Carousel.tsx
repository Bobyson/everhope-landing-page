import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const carouselData = [
  {
    id: 1,
    image: "/carousel1.jpg",
    description: "Description 1",
  },
  {
    id: 2,
    image: "/carousel2.png",
    description: "Description 2",
  },
  {
    id: 3,
    image: "/carousel3.png",
    description: "Description 3",
  },
  {
    id: 4,
    image: "/carousel4.jpg",
    description: "Description 4",
  },
  {
    id: 5,
    image: "/carousel3.png",
    description: "Description 5",
  },
  // Add more items as needed
];

export default function ResponsiveCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    gap: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 py-6">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-2xl shadow-md p-4"
          >
            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.description}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
            <p className="text-lg text-center text-gray-800 font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
