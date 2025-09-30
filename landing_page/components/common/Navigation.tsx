'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  mobile?: boolean
  onItemClick?: () => void
}

export default function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/consulting-process', label: '컨설팅 프로세스' },
    { href: '/consulting-inquiry', label: '컨설팅 문의' },
  ]

  const linkClasses = (href: string) => {
    const isActive = pathname === href
    const baseClasses = mobile
      ? 'block px-4 py-3 text-base font-medium transition-colors duration-200'
      : 'px-4 py-2 text-base font-medium rounded-lg transition-all duration-200'

    const activeClasses = isActive
      ? mobile
        ? 'bg-primary-50 text-primary border-l-4 border-primary'
        : 'text-primary bg-primary-50'
      : mobile
        ? 'text-gray-700 hover:bg-gray-50 hover:text-primary'
        : 'text-gray-700 hover:text-primary hover:bg-gray-50'

    return `${baseClasses} ${activeClasses}`
  }

  if (mobile) {
    return (
      <div className="py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={linkClasses(item.href)}
            onClick={onItemClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <ul className="flex items-center space-x-1">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={linkClasses(item.href)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}