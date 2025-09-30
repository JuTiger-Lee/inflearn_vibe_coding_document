'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: '디지털 트랜스포메이션',
    subtitle: '혁신적인 기술로 비즈니스를 변화시키세요',
    description: '최신 IT 기술과 전략적 컨설팅으로 귀하의 비즈니스가 디지털 시대에 앞서 나갈 수 있도록 지원합니다.',
    image: '/images/hero-1.jpg',
    ctaText: '컨설팅 시작하기',
    ctaLink: '/consulting-inquiry'
  },
  {
    id: 2,
    title: '맞춤형 소프트웨어 개발',
    subtitle: '비즈니스에 특화된 솔루션 제공',
    description: '고객의 요구사항을 정확히 분석하여 최적화된 소프트웨어 솔루션을 개발하고 구축합니다.',
    image: '/images/hero-2.jpg',
    ctaText: '프로젝트 문의',
    ctaLink: '/consulting-inquiry'
  },
  {
    id: 3,
    title: '지속적인 기술 지원',
    subtitle: '성공적인 운영을 위한 파트너십',
    description: '개발 완료 후에도 지속적인 유지보수와 기술 지원으로 안정적인 시스템 운영을 보장합니다.',
    image: '/images/hero-3.jpg',
    ctaText: '지원 서비스 보기',
    ctaLink: '/consulting-process'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5초마다 변경

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // 3초 후 자동재생 재개
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* 슬라이드 컨테이너 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 transform translate-x-0'
                : index < currentSlide
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            {/* 배경 이미지 (임시로 그라디언트 사용) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                index === 0 ? 'from-blue-600 via-blue-700 to-purple-800' :
                index === 1 ? 'from-green-600 via-blue-600 to-purple-700' :
                'from-purple-600 via-pink-600 to-red-700'
              }`}
            />

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/30" />

            {/* 콘텐츠 */}
            <div className="relative z-10 flex items-center h-full">
              <div className="container-custom">
                <div className="max-w-4xl">
                  <div className="space-y-6">
                    {/* 서브타이틀 */}
                    <div className="overflow-hidden">
                      <p
                        className={`text-lg sm:text-xl text-white/90 font-medium transform transition-all duration-1000 delay-300 ${
                          index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                      >
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* 메인 타이틀 */}
                    <div className="overflow-hidden">
                      <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight transform transition-all duration-1000 delay-500 ${
                          index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                      >
                        {slide.title}
                      </h1>
                    </div>

                    {/* 설명 */}
                    <div className="overflow-hidden">
                      <p
                        className={`text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-700 ${
                          index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                      >
                        {slide.description}
                      </p>
                    </div>

                    {/* CTA 버튼 */}
                    <div className="overflow-hidden pt-4">
                      <Link
                        href={slide.ctaLink}
                        className={`inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform ${
                          index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: index === currentSlide ? '900ms' : '0ms' }}
                      >
                        {slide.ctaText}
                        <svg
                          className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 화살표 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 group"
        aria-label="이전 슬라이드"
      >
        <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 group"
        aria-label="다음 슬라이드"
      >
        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>

      {/* 재생/일시정지 버튼 */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        aria-label={isAutoPlaying ? '자동재생 일시정지' : '자동재생 시작'}
      >
        {isAutoPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2 rotate-90 origin-center whitespace-nowrap">아래로 스크롤</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}