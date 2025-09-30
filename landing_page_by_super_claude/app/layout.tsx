import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Navigation from '@/components/common/Navigation'

export const metadata: Metadata = {
  title: '바이브코딩 | AI 기반 컨설팅 전문 기업',
  description: 'AI 기술을 활용한 비즈니스 혁신과 디지털 트랜스포메이션을 지원하는 전문 컨설팅 서비스',
  keywords: 'AI 컨설팅, 디지털 트랜스포메이션, 비즈니스 혁신, 바이브코딩',
  authors: [{ name: '바이브코딩' }],
  openGraph: {
    title: '바이브코딩 | AI 기반 컨설팅 전문 기업',
    description: 'AI 기술을 활용한 비즈니스 혁신과 디지털 트랜스포메이션을 지원하는 전문 컨설팅 서비스',
    url: 'https://vibecoding.com',
    siteName: '바이브코딩',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen bg-white font-sans">
        <Header />
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}