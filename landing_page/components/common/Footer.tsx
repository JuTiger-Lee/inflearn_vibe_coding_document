import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: '회사 소개', href: '/#company' },
      { label: '컨설팅 프로세스', href: '/consulting-process' },
      { label: '고객 후기', href: '/#testimonials' },
    ],
    service: [
      { label: 'IT 컨설팅', href: '/#services' },
      { label: '디지털 트랜스포메이션', href: '/#services' },
      { label: '소프트웨어 개발', href: '/#services' },
    ],
    support: [
      { label: '문의하기', href: '/consulting-inquiry' },
      { label: '자주 묻는 질문', href: '/#faq' },
      { label: '이용약관', href: '/terms' },
      { label: '개인정보처리방침', href: '/privacy' },
    ],
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Blog',
      href: 'https://blog.vibecoding.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container-custom py-12 lg:py-16">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-xl font-bold text-white">바이브코딩</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              바이브코딩은 최신 기술과 창의적인 솔루션으로
              고객의 비즈니스 성장을 지원하는 IT 컨설팅 전문 기업입니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 링크 섹션들 */}
          <div>
            <h3 className="text-white font-semibold mb-4">회사</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">지원</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 연락처 정보 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-400">이메일:</span>
              <a href="mailto:contact@vibecoding.com" className="ml-2 hover:text-white transition-colors">
                contact@vibecoding.com
              </a>
            </div>
            <div>
              <span className="text-gray-400">전화:</span>
              <a href="tel:02-1234-5678" className="ml-2 hover:text-white transition-colors">
                02-1234-5678
              </a>
            </div>
            <div>
              <span className="text-gray-400">주소:</span>
              <span className="ml-2">서울특별시 강남구 테헤란로 123</span>
            </div>
          </div>
        </div>

        {/* 하단 섹션 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} 바이브코딩. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                이용약관
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                개인정보처리방침
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
                사이트맵
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}