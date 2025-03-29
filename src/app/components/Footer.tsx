import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

type FooterLink = {
  id: number
  title: string
  href: string
}

type RecentPost = {
  id: number
  title: string
  date: string
  image: string
  href: string
}

interface FooterProps {
  usefulLinks?: FooterLink[]
  courses?: FooterLink[]
  recentPosts?: RecentPost[]
}

export default function Footer({ usefulLinks = [], courses = [], recentPosts = [] }: FooterProps) {
  return (
    <footer className="bg-[#0f0b2d] text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl font-bold">
              Still You Need Our <span className="text-purple-500">Support</span> ?
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Dont wait! Have a smart & digital quote here, its pretty easy.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-4 py-2 bg-[#1a1642] border border-[#2a2550] rounded-l-md focus:outline-none w-64"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Corporate clients and leisure travelers has been relying on Groundlink for dependable, safe, and
              professional chauffeured car service in major cities across.
            </p>
            <div className="bg-purple-900/50 p-4 flex items-start space-x-4">
              <div className="bg-purple-600 p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm">OPENING HOURS</h4>
                <p className="text-gray-400 text-xs mt-1">Mon - Saturday: 9.00-18.00</p>
                <p className="text-gray-400 text-xs">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Usefull Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Course</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link href={course.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link key={post.id} href={post.href} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-16 h-16 relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={64}
                      height={64}
                      className="rounded-md object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{post.date}</p>
                    <h4 className="text-sm font-medium group-hover:text-purple-400 transition-colors">{post.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#2a2550] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2">
              <Image
                src="/logo.png"
                alt="SkillBoost Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <span className="text-purple-400 font-bold text-lg">SkillBoost</span>
          </div>
          <div className="text-sm text-gray-400">Copyright © 2023 by educare. All Rights Reserved.</div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={18} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

