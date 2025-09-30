'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navigation from './Navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="바이브코딩 홈"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
              바이브코딩
            </span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:block">
            <Navigation />
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-900 transform transition-all duration-200 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transform transition-all duration-200 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-200">
          <Navigation
            mobile
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </nav>
      </div>
    </header>
  )
}