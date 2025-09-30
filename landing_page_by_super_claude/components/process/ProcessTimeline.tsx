'use client';

import { useState } from 'react';

const processes = [
  {
    step: 1,
    title: '요구사항 분석',
    description: '프로젝트의 목표와 요구사항을 정확히 파악합니다.',
    details: [
      '고객 니즈 분석 및 비즈니스 목표 설정',
      '기술적 요구사항 및 제약사항 파악',
      '프로젝트 범위 및 우선순위 결정',
      '예상 리스크 요소 식별 및 대응 방안 수립'
    ],
    duration: '1-2주',
    deliverable: '요구사항 명세서, 프로젝트 계획서'
  },
  {
    step: 2,
    title: '시스템 설계',
    description: '최적의 아키텍처와 기술 스택을 선정합니다.',
    details: [
      '시스템 아키텍처 설계 및 기술 스택 선정',
      'UI/UX 디자인 및 사용자 경험 설계',
      '데이터베이스 스키마 및 API 설계',
      '개발 환경 및 배포 전략 수립'
    ],
    duration: '2-3주',
    deliverable: '시스템 설계서, UI/UX 디자인, API 명세서'
  },
  {
    step: 3,
    title: '개발 및 구현',
    description: '체계적인 개발 프로세스로 안정적인 시스템을 구축합니다.',
    details: [
      '애자일 방법론 기반 반복적 개발',
      '코드 리뷰 및 품질 관리',
      '지속적 통합 및 배포 환경 구축',
      '정기적인 진행 상황 보고 및 피드백 반영'
    ],
    duration: '4-12주',
    deliverable: '개발된 시스템, 소스코드, 개발 문서'
  },
  {
    step: 4,
    title: '테스트 및 검증',
    description: '철저한 테스트를 통해 품질을 보장합니다.',
    details: [
      '단위 테스트, 통합 테스트, 시스템 테스트',
      '성능 테스트 및 보안 취약점 검사',
      '사용자 승인 테스트 (UAT) 지원',
      '버그 수정 및 성능 최적화'
    ],
    duration: '1-2주',
    deliverable: '테스트 결과서, 성능 리포트, 보안 검사 결과'
  },
  {
    step: 5,
    title: '배포 및 운영',
    description: '안정적인 서비스 런칭과 지속적인 지원을 제공합니다.',
    details: [
      '프로덕션 환경 배포 및 모니터링 시스템 구축',
      '운영진 교육 및 매뉴얼 제공',
      '사후 지원 및 유지보수 계획 수립',
      '성과 측정 및 개선 방안 제안'
    ],
    duration: '1주',
    deliverable: '운영 시스템, 운영 매뉴얼, 사후지원 계획서'
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleStepClick = (step: number) => {
    setActiveStep(activeStep === step ? null : step);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            컨설팅 <span className="text-blue-600">프로세스</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적이고 투명한 5단계 프로세스로 프로젝트의 성공을 보장합니다.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 h-1 bg-blue-600 transform -translate-y-1/2 transition-all duration-1000"
                 style={{ width: '100%' }} />

            {/* Timeline Steps */}
            <div className="relative flex justify-between items-center">
              {processes.map((process, index) => (
                <div key={process.step} className="flex flex-col items-center group">
                  {/* Step Circle */}
                  <div
                    className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeStep === process.step
                        ? 'bg-blue-600 text-white scale-110'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => handleStepClick(process.step)}
                  >
                    <span className="text-xl font-bold">{process.step}</span>
                  </div>

                  {/* Step Title */}
                  <div className="mt-4 text-center">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      activeStep === process.step ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {process.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{process.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          {activeStep && (
            <div className="mt-12 bg-gray-50 rounded-xl p-8 animate-fadeIn">
              {(() => {
                const activeProcess = processes.find(p => p.step === activeStep);
                if (!activeProcess) return null;

                return (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {activeProcess.step}단계: {activeProcess.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        {activeProcess.description}
                      </p>
                      <div className="flex items-center text-blue-600 mb-4">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">소요 기간: {activeProcess.duration}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 활동</h4>
                      <ul className="space-y-3 mb-6">
                        {activeProcess.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">산출물</h5>
                        <p className="text-blue-700">{activeProcess.deliverable}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processes.map((process, index) => (
            <div key={process.step} className="relative">
              {/* Connector Line */}
              {index < processes.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200" />
              )}

              <div
                className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === process.step
                    ? 'border-blue-500 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleStepClick(process.step)}
              >
                <div className="flex items-start">
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeStep === process.step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <span className="text-lg font-bold">{process.step}</span>
                  </div>

                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{process.description}</p>
                    <span className="text-sm text-blue-600 font-semibold">
                      소요 기간: {process.duration}
                    </span>

                    {/* Expanded Details */}
                    {activeStep === process.step && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">주요 활동</h4>
                        <ul className="space-y-2 mb-6">
                          {process.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-sm">
                              <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-900 mb-2">산출물</h5>
                          <p className="text-blue-700 text-sm">{process.deliverable}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              체계적인 프로세스로 성공을 보장합니다
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              각 단계별 명확한 목표와 산출물로 투명하고 예측 가능한 프로젝트 진행을 약속드립니다.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              무료 컨설팅 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}