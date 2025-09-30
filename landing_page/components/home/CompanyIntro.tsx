'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '빠른 솔루션 제공',
    description: '효율적인 프로세스를 통해 신속하고 정확한 솔루션을 제공합니다.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '검증된 기술력',
    description: '다양한 프로젝트 경험과 최신 기술 스택으로 안정적인 서비스를 보장합니다.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '전문적인 팀',
    description: '각 분야별 전문가들이 협력하여 최고의 결과를 만들어냅니다.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
      </svg>
    ),
    title: '지속적인 지원',
    description: '프로젝트 완료 후에도 지속적인 유지보수와 기술 지원을 제공합니다.'
  }
]

const services = [
  {
    title: 'IT 컨설팅',
    description: '비즈니스 요구사항 분석부터 기술 전략 수립까지 포괄적인 컨설팅 서비스',
    features: ['비즈니스 분석', '기술 전략 수립', '디지털 트랜스포메이션', '시스템 아키텍처 설계']
  },
  {
    title: '소프트웨어 개발',
    description: '웹, 모바일, 엔터프라이즈 애플리케이션까지 다양한 소프트웨어 개발',
    features: ['웹 애플리케이션', '모바일 앱', '엔터프라이즈 시스템', 'API 개발']
  },
  {
    title: '클라우드 서비스',
    description: '클라우드 마이그레이션부터 인프라 관리까지 전문적인 클라우드 서비스',
    features: ['클라우드 마이그레이션', '인프라 관리', 'DevOps 구축', '보안 강화']
  }
]

const stats = [
  { number: '150+', label: '완료 프로젝트', suffix: '' },
  { number: '50+', label: '만족한 고객', suffix: '' },
  { number: '5', label: '년 경력', suffix: '년+' },
  { number: '24', label: '기술 지원', suffix: '/7' }
]

export default function CompanyIntro() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateNumbers()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      const targetNumber = parseInt(stat.number)
      const duration = 2000
      const increment = targetNumber / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetNumber) {
          current = targetNumber
          clearInterval(timer)
        }
        setAnimatedStats(prev => {
          const newStats = [...prev]
          newStats[index] = Math.floor(current)
          return newStats
        })
      }, 16)
    })
  }

  return (
    <>
      {/* 회사 소개 섹션 */}
      <section ref={sectionRef} className="section-padding bg-gray-50" id="company">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">바이브코딩을 선택하는 이유</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 기술과 창의적인 솔루션으로 고객의 비즈니스 성장을 지원하는
              IT 컨설팅 전문 기업입니다.
            </p>
          </div>

          {/* 특징 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* 통계 섹션 */}
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">
                    {animatedStats[index]}{stat.suffix}
                  </div>
                  <div className="text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section className="section-padding" id="services">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">주요 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 IT 서비스를 통해 고객의 비즈니스 목표 달성을 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href="/consulting-inquiry"
                    className="inline-flex items-center text-primary hover:text-primary-600 font-semibold transition-colors group"
                  >
                    자세히 보기
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section-padding bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              비즈니스 성장을 위한 여정을
              <span className="text-accent block lg:inline lg:ml-3">
                바이브코딩과 함께 시작하세요
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              전문적인 IT 컨설팅과 개발 서비스로 귀하의 비즈니스가
              디지털 시대에 성공할 수 있도록 도와드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consulting-inquiry"
                className="btn-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                컨설팅 문의하기
              </Link>
              <Link
                href="/consulting-process"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                컨설팅 프로세스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}