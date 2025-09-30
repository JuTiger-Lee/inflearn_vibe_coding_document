'use client';

import Link from 'next/link';

const features = [
  {
    icon: (
      <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '혁신적인 기술',
    description: '최신 기술 트렌드를 반영한 혁신적인 솔루션으로 비즈니스 경쟁력을 강화합니다.'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '전문 팀',
    description: '풍부한 경험과 전문성을 갖춘 개발팀이 프로젝트의 성공을 보장합니다.'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '품질 보장',
    description: '체계적인 개발 프로세스와 엄격한 품질 관리로 안정적인 서비스를 제공합니다.'
  }
];

const stats = [
  { number: '50+', label: '완료 프로젝트' },
  { number: '5년+', label: '업계 경험' },
  { number: '100%', label: '고객 만족도' },
  { number: '24/7', label: '기술 지원' }
];

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Vision & Mission */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            바이브코딩의 <span className="text-blue-600">비전</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            기술과 창의성을 결합하여 고객의 비즈니스 성장을 이끄는
            디지털 트랜스포메이션의 파트너가 되겠습니다.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            우리의 <span className="text-blue-600">미션</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              고객의 비즈니스 목표를 깊이 이해하고, 최적의 기술 솔루션을 통해
              지속 가능한 성장을 지원하는 것이 바이브코딩의 사명입니다.
            </p>
            <p className="text-lg text-gray-600">
              단순한 개발을 넘어서, 고객과 함께 미래를 설계하고 혁신을 만들어갑니다.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            프로젝트를 시작할 준비가 되셨나요?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            전문적인 컨설팅부터 완성도 높은 개발까지,
            바이브코딩과 함께 성공적인 디지털 여정을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consulting-inquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/consulting-process"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              컨설팅 프로세스 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}