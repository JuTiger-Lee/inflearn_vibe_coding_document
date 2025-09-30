'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: '홈', href: '/' },
    { name: '컨설팅 프로세스', href: '/consulting-process' },
    { name: '컨설팅 문의', href: '/consulting-inquiry' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-linkedin-blue to-linkedin-darkBlue rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-linkedin-blue transition-colors">
                  바이브코딩
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-linkedin-blue px-3 py-2 text-sm font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linkedin-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-linkedin-blue p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="메뉴 열기"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-linkedin-blue hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}