import Image from "next/image";
import type { TestimonialType } from "../types";
import type React from "react";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps): React.ReactElement {
  const { content, author, position, avatar } = testimonial;

  return (
    <>
    <div className="flex flex-col  bg-white ">
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div className="flex ">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={author}
          width={50}
          height={50}
          className="object-cover relative  rounded-full overflow-hidden mr-4"
        />
        <div><h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-sm text-gray-500">{position}</p></div>
        
     </div>
     </div>  
    </>
  );
}
