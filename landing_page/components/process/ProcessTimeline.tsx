'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const processSteps = [
  {
    step: '01',
    title: '요구사항 분석',
    subtitle: 'Requirement Analysis',
    description: '고객의 비즈니스 목표와 요구사항을 정확히 파악하고 분석합니다.',
    details: [
      '비즈니스 목표 및 현황 분석',
      '기술적 요구사항 정의',
      '프로젝트 범위 및 일정 계획',
      '예산 및 리소스 계획 수립'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    duration: '1-2주',
    color: 'blue'
  },
  {
    step: '02',
    title: '설계 및 기획',
    subtitle: 'Design & Planning',
    description: '수집된 요구사항을 바탕으로 최적의 솔루션을 설계합니다.',
    details: [
      '시스템 아키텍처 설계',
      'UI/UX 디자인 및 프로토타입',
      '기술 스택 선정',
      '개발 방법론 및 프로세스 정의'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    duration: '2-3주',
    color: 'green'
  },
  {
    step: '03',
    title: '개발 및 구현',
    subtitle: 'Development & Implementation',
    description: '설계된 솔루션을 실제로 개발하고 구현합니다.',
    details: [
      'Agile 방법론을 통한 개발',
      '지속적인 코드 리뷰 및 품질 관리',
      '단계별 테스트 및 검증',
      '고객과의 정기적인 진행 상황 공유'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    duration: '4-8주',
    color: 'purple'
  },
  {
    step: '04',
    title: '테스트 및 배포',
    subtitle: 'Testing & Deployment',
    description: '완성된 솔루션의 품질을 검증하고 안전하게 배포합니다.',
    details: [
      '통합 테스트 및 성능 테스트',
      '사용자 승인 테스트 (UAT)',
      '보안 검증 및 취약점 분석',
      '프로덕션 환경 배포'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    duration: '1-2주',
    color: 'orange'
  },
  {
    step: '05',
    title: '운영 및 지원',
    subtitle: 'Operation & Support',
    description: '지속적인 모니터링과 기술 지원을 통해 안정적인 운영을 보장합니다.',
    details: [
      '시스템 모니터링 및 성능 최적화',
      '정기적인 업데이트 및 패치',
      '사용자 교육 및 기술 지원',
      '추가 기능 개발 및 확장'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 12a6 6 0 11-6-6 6 6 0 016 6z" />
      </svg>
    ),
    duration: '지속적',
    color: 'emerald'
  }
]

const colorClasses = {
  blue: {
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-500 to-blue-600'
  },
  green: {
    bg: 'bg-green-500',
    bgLight: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
    gradient: 'from-green-500 to-green-600'
  },
  purple: {
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
    gradient: 'from-purple-500 to-purple-600'
  },
  orange: {
    bg: 'bg-orange-500',
    bgLight: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
    gradient: 'from-orange-500 to-orange-600'
  },
  emerald: {
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    gradient: 'from-emerald-500 to-emerald-600'
  }
}

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(processSteps.length).fill(false))
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">5단계 컨설팅 프로세스</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적이고 전문적인 프로세스를 통해 고객의 성공을 보장합니다.
            각 단계별로 명확한 목표와 결과물을 제공합니다.
          </p>
        </div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 중앙 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses]
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className={`relative ${
                    visibleSteps[index] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* 데스크톱 레이아웃 */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* 좌측 콘텐츠 영역 */}
                    <div className={`${isEven ? 'text-right pr-8' : ''}`}>
                      {isEven && (
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                          <div className="space-y-4">
                            <div className="flex items-center justify-end space-x-3">
                              <div className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bgLight} ${colors.text}`}>
                                {step.duration}
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                            <p className="text-gray-500 font-medium">{step.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            <ul className="space-y-2 text-gray-600">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center justify-end">
                                  <span className="mr-2">{detail}</span>
                                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 우측 콘텐츠 영역 */}
                    <div className={`${!isEven ? 'pl-8' : ''}`}>
                      {!isEven && (
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                              <div className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bgLight} ${colors.text}`}>
                                {step.duration}
                              </div>
                            </div>
                            <p className="text-gray-500 font-medium">{step.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            <ul className="space-y-2 text-gray-600">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center">
                                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 중앙 아이콘 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} text-white flex items-center justify-center shadow-lg`}>
                        {step.icon}
                      </div>
                      <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${colors.bg} text-white flex items-center justify-center text-sm font-bold`}>
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* 모바일 레이아웃 */}
                  <div className="lg:hidden">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} text-white flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                          <div className="space-y-4">
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center space-x-2">
                                <span className={`w-6 h-6 rounded-full ${colors.bg} text-white flex items-center justify-center text-xs font-bold`}>
                                  {step.step}
                                </span>
                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${colors.bgLight} ${colors.text}`}>
                                  {step.duration}
                                </div>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                              <p className="text-gray-500 font-medium text-sm">{step.subtitle}</p>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center">
                                  <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              체계적인 프로세스로 성공을 보장합니다
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              5단계 프로세스를 통해 고객의 요구사항을 정확히 파악하고
              최고의 솔루션을 제공합니다.
            </p>
            <Link
              href="/consulting-inquiry"
              className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              컨설팅 시작하기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}