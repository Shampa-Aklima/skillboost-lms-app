"use client";

import { type FormEvent, useState } from "react";
import Container from "./Container";
// import Image from "next/image"
import type React from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="h-[521px] py-16 md:py-24 bg-[#260094ED] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          <div className="flex flex-col py-16 px-5">
            <div className="w-1/3  bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Course List
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Register Your <span>Account Get</span> free access to 60000 online
              course
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Learn Something new & Build Your Career From Anywhere In The World
            </p>

            {/* <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="Contact us" fill className="object-cover" />
            </div> */}
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 text-gray-900 w-[430px] h-[530px]">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Fill Your Registration
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  id="name"
                  placeholder="Your Name"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  id="phone"
                  placeholder="phone"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  id="name"
                  placeholder="Your Name"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <textarea
                  id="comment"
                  placeholder="comment."
                  className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2 bg-purple-700 text-white hover:bg-purple-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
