import Image from "next/image";
import type { TestimonialType } from "../types";
import type React from "react";
import { QuoteIcon } from "./Icon";
interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps): React.ReactElement {
  const { content, author, position, avatar } = testimonial;

  return (
    <>
      <div className="flex flex-col  bg-white border-white p-6">
        <QuoteIcon className="bg-[#5F2DED] text-white font-bold mb-5"/>
        <p className="text-gray-700 mb-6 text-xs leading-4">{content}</p>
        <div className="flex ">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={author}
            width={50}
            height={50}
            className="object-cover relative  rounded-full overflow-hidden mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </div>
    </>
  );
}
