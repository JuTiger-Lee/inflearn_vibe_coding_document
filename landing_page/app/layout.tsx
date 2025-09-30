import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: '바이브코딩 | IT 컨설팅 전문 기업',
  description: '최고의 IT 컨설팅 서비스를 제공하는 바이브코딩입니다. 디지털 트랜스포메이션과 혁신적인 솔루션으로 비즈니스 성장을 지원합니다.',
  keywords: 'IT 컨설팅, 디지털 트랜스포메이션, 소프트웨어 개발, 바이브코딩, VibeCoding',
  authors: [{ name: '바이브코딩' }],
  openGraph: {
    title: '바이브코딩 | IT 컨설팅 전문 기업',
    description: '최고의 IT 컨설팅 서비스를 제공하는 바이브코딩입니다.',
    url: 'https://vibecoding.com',
    siteName: '바이브코딩',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '바이브코딩 | IT 컨설팅 전문 기업',
    description: '최고의 IT 컨설팅 서비스를 제공하는 바이브코딩입니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}