import Image from 'next/image';
import React from 'react';

const PsychologyOfFinancialSuccess: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div className="w-full h-[412px] flex flex-col justify-center items-center text-3xl bg-[#F8F6FF] bg-cover bg-center text-black font-semibold relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero3.png" alt="pattern" fill className="object-cover" />
        </div>
        <span className="text-sm mb-2 block text-center opacity-80 relative z-10">
        Psychology of Financial Success: Master Finance
        </span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-6 flex flex-col md:flex-row gap-8">
        {/* Main Content Column */}
        <div className="w-full md:w-2/3">
          {/* Featured Image */}
          <div className="mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative">
                {/* 5 Takeaways Section */}
                <div className="absolute top-4 left-4 bg-cyan-400 text-white font-bold py-1 px-3 rounded">
                  5 TAKEAWAYS
                </div>
                <Image 
                  src="/singlecourse1.jpeg" 
                  alt="Financial Success Concept" 
                  width={800}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* About Course Section */}
          <div className="mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">About Course</h2>
              <p className="text-gray-700 mb-4">
                This comprehensive course explores the psychological aspects of financial decision-making and success.
                Learn how to master your financial mindset, overcome limiting beliefs, and develop habits that lead to
                wealth creation and financial freedom.
              </p>
            </div>
          </div>

          {/* What Will You Learn Section */}
          <div className="mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">What Will You Learn?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="mr-2 text-green-500">✓</div>
                  <p>Money Mindset</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-green-500">✓</div>
                  <p>Wealth Psychology</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-green-500">✓</div>
                  <p>Investment Strategies</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-green-500">✓</div>
                  <p>Financial Freedom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Course Content</h2>
              <div className="mb-4">
                <h3 className="font-medium">Psychology of Finance</h3>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <p>4 lessons</p>
                  <p>1 hr</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium">Investment Mindset</h3>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <p>6 lessons</p>
                  <p>1.5 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Sections */}
          <div className="mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Lesson Sections</h2>
              <div className="border-t border-gray-200 pt-2 pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-2">•</div>
                    <p>Intro</p>
                  </div>
                  <div>
                    <span className="text-gray-500">→</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-2 pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-2">•</div>
                    <p>Section 1</p>
                  </div>
                  <div>
                    <span className="text-gray-500">→</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 pt-2 pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-2">•</div>
                    <p>Section 2</p>
                  </div>
                  <div>
                    <span className="text-gray-500">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          {/* Requirements Box */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold mb-4">Requirements</h3>
            <ul className="text-sm">
              <li className="mb-2">Basic understanding of finance</li>
              <li className="mb-2">Open mindset for growth</li>
              <li className="mb-2">Desire to improve financial situation</li>
              <li className="mb-2">Commitment to practice concepts</li>
            </ul>
          </div>

          {/* Feedback Box */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold mb-4">Feedback</h3>
            <ul className="text-sm">
              <li className="mb-2">Course Rating: 4.8/5</li>
              <li className="mb-2">Student Testimonials</li>
              <li className="mb-2">Instructor Responsiveness</li>
            </ul>
          </div>

          {/* Author Profile */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
              <Image 
                  src="/api/placeholder" 
                  alt="Financial Success Concept" 
                  width={100}
                  height={100}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="font-bold">Financial Expert</h3>
                <p className="text-sm text-gray-500">Finance Coach</p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-xs">📱</span>
                  <span className="text-xs">🌐</span>
                  <span className="text-xs">✉️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold mb-4">Search Filters</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Popular Courses */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold mb-4">Popular Courses</h3>
            <div className="mb-4">
              <div className="flex space-x-2">
                <div className="w-1/3">
                <Image 
                    src="/api/placeholder" 
                  alt="Financial Success Concept" 
                  width={100}
                  height={100}
                  className="w-full rounded-lg"
                />
                </div>
                <div className="w-2/3">
                  <p className="text-sm font-medium">Advanced Investment Psychology</p>
                  <p className="text-xs text-gray-500">Master the mindset of wealthy investors</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex space-x-2">
                <div className="w-1/3">
                <Image 
                  src="/api/placeholder" 
                  alt="Financial Success Concept" 
                  width={100}
                  height={100}
                  className="w-full rounded-lg"
                />
                </div>
                <div className="w-2/3">
                  <p className="text-sm font-medium">Financial Freedom Fundamentals</p>
                  <p className="text-xs text-gray-500">Create passive income streams</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Categories */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-4">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-600">Finance</div>
              <div className="text-gray-600">Psychology</div>
              <div className="text-gray-600">Investing</div>
              <div className="text-gray-600">Wealth</div>
              <div className="text-gray-600">Mindset</div>
              <div className="text-gray-600">Business</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologyOfFinancialSuccess;