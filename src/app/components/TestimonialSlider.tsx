"use client"
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mirnsdo Jons",
    role: "Ui/Ux Designer",
    content: "The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas  ure of the moment.",
    image: "/testimo1.png"
  },
  {
    id: 2,
    name: "Mirnsdo Jons",
    role: "Ui/Ux Designer",
    content: "The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas  ure of the moment.",
    image: "/testimo1.png"
  },
  {
    id: 3,
    name: "Mirnsdo Jons",
    role: "Ui/Ux Designer",
    content: "The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas  ure of the moment.",
    image: "/testimo1.png"
  }
];

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 2,
    containScroll: "trimSnaps"
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_50%] min-w-0 p-4">
              <div className="bg-white rounded-lg shadow-lg p-10">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
} 