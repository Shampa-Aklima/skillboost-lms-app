import Image from "next/image";
import Container from "./Container";
import { Check } from "lucide-react";
export default function Welcome(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
            <div className="relative w-full h-[300px] md:h-[400px] ">
              <Image
                src="/about1.png"
                alt="Student"
                fill
                className="object-contain "
              />
            </div>
            <div className=" flex justify-center items-center gap-8 m-[-50px] ">
              <div className="flex overflow-x-hidden bg-white p-8 border-l-4 border-[#5F2DED] drop-shadow-2xl shadow-gray-300 w-[280px] z-10">
                <span>0+</span>
                <h4>YEARS EXPERIENCE JUST ACHIVED</h4>
              </div>
              <Image
                src="/about2.png"
                alt="pic"
                width={120}
                height={300}
                className="z-10"
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
        <div className="grid grid-cols-4 gap-2 mt-30">
          <div className="flex overflow-x-hidden bg-white  ">
            <Image src="/about2.2.png" alt="icon" width={50} height={50} />
            <h4>
              <span>0+</span>Total Acheivment
            </h4>
          </div>
          <div className="flex overflow-x-hidden bg-white  ">
            <Image src="/about2.2.png" alt="icon" width={50} height={50} />
            <h4>
              <span>0+</span>Total Acheivment
            </h4>
          </div>
          <div className="flex overflow-x-hidden bg-white  ">
            <Image src="/about2.2.png" alt="icon" width={50} height={50} />
            <h4>
              <span>0+</span>Total Acheivment
            </h4>
          </div>
          <div className="flex overflow-x-hidden bg-white  ">
            <Image src="/about2.2.png" alt="icon" width={50} height={50} />
            <h4>
              <span>0+</span>Total Acheivment
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
}
