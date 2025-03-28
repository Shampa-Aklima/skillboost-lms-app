import Image from "next/image";
import Container from "./Container";
import { Check } from "lucide-react";
export default function Welcome(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="absolute left-[100px]  w-[138px] h-[135px] md:h-[135px]">
              <Image
                src="/about4.png"
                alt="Student"
                fill
                className="object-contain "
              />
            </div>
            <div className="absolute w-[138px] h-[135px] md:h-[135px]">
              <Image
                src="/about3.png"
                alt="Student"
                fill
                className="object-contain "
              />
            </div>
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src="/about1.png"
                alt="Student"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              About
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to the <span>online</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Learning Center
            </h2>
            <p className="text-gray-600 text-lg">
              25+Contrary to popular belief, Lorem Ipsum is not simply random
              text roots in a piece of classical Latin literature from 45 BC
            </p>
            <div className="flex flex-col">
              <li className="list-none inline-flex mr-3">
                <Check /> Lorem Ipsum is simply dummy
              </li>
              <li className="list-none inline-flex mr-3">
                <Check /> Explore a variety of fresh educational teach
              </li>
              <li className="list-none inline-flex mr-3">
                {" "}
                <Check />
                Lorem Ipsum is simply dummy
              </li>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
