"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./Icon"
import Container from "./Container"
import type React from "react"

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-purple-700" />
              <span className="text-xl font-bold text-gray-900">SkillBoost</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Home
            </Link>
            <Link href="#courses" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Courses
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2 border border-purple-200 bg-transparent hover:bg-purple-100 text-purple-700">
              Log In
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2 bg-purple-700 text-white hover:bg-purple-800">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-purple-700 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <Container>
            <nav className="flex flex-col py-4 space-y-4">
              <Link
                href="/"
                className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#courses"
                className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="#pricing"
                className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2 border border-purple-200 bg-transparent hover:bg-purple-100 text-purple-700">
                  Log In
                </button>
                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2 bg-purple-700 text-white hover:bg-purple-800">
                  Sign Up
                </button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

