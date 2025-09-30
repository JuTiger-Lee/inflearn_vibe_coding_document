'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  href: string
  icon?: React.ReactNode
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  const navigationItems: NavigationItem[] = useMemo(() => [
    {
      name: '회사 소개',
      href: '#about',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: '서비스',
      href: '#services',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: '팀',
      href: '#team',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: '문의',
      href: '#contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // 스크롤 진행률 계산
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollPosition / totalHeight) * 100
      setScrollProgress(progress)

      // 현재 활성화된 섹션 감지
      const sections = navigationItems.map(item => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navigationItems])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // 홈페이지가 아닌 경우 네비게이션 숨김
  if (pathname !== '/') {
    return null
  }

  return (
    <>
      {/* Sticky Side Navigation - Desktop */}
      <nav
        className={`hidden lg:flex fixed left-0 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-4 p-4 transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white shadow-lg rounded-full p-2 border border-gray-200">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`group relative flex items-center p-3 rounded-full transition-all duration-200 hover:bg-linkedin-blue hover:text-white ${
                activeSection === item.href.substring(1)
                  ? 'bg-linkedin-blue text-white'
                  : 'text-gray-600'
              }`}
              title={item.name}
            >
              {item.icon}
              <span
                className={`absolute left-full ml-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Bottom Navigation - Mobile */}
      <nav
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-around items-center py-2">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex flex-col items-center p-2 transition-colors duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-linkedin-blue'
                  : 'text-gray-600 hover:text-linkedin-blue'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div
        className={`fixed top-16 left-0 right-0 h-1 bg-gray-200 z-30 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-linkedin-blue to-linkedin-lightBlue transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>
    </>
  )
}