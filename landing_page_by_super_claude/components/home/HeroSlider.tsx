'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    bgClass: 'hero-bg-1',
    bgImage: '/images/hero/hero-1.jpg',
    title: '바이브코딩과 함께하는',
    subtitle: '디지털 혁신의 시작',
    description: '최신 기술과 전문 컨설팅으로 귀하의 비즈니스를 성공으로 이끌어갑니다.',
    cta: '컨설팅 문의하기'
  },
  {
    id: 2,
    bgClass: 'hero-bg-2',
    bgImage: '/images/hero/hero-2.jpg',
    title: '전문적인 기술 컨설팅',
    subtitle: '맞춤형 솔루션 제공',
    description: '다년간의 경험과 노하우로 귀하의 프로젝트에 최적화된 솔루션을 제공합니다.',
    cta: '프로세스 알아보기'
  },
  {
    id: 3,
    bgClass: 'hero-bg-3',
    bgImage: '/images/hero/hero-3.jpg',
    title: '성공적인 디지털 전환',
    subtitle: '함께 만들어가는 미래',
    description: '고객의 성공이 곧 저희의 성공입니다. 신뢰할 수 있는 파트너가 되겠습니다.',
    cta: '포트폴리오 보기'
  }
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <Image
              src={slide.bgImage}
              alt={`${slide.title} 배경 이미지`}
              fill
              priority={slide.id === 1}
              className="object-cover"
              sizes="100vw"
            />

            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 ${slide.bgClass}`}>
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto">
                  <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <h2 className="mb-6 text-2xl font-light md:text-3xl lg:text-4xl">
                    {slide.subtitle}
                  </h2>
                  <p className="mb-8 text-lg md:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>

      <div className="swiper-button-next-custom absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {/* Pagination dots will be rendered here by Swiper */}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm">스크롤하여 더보기</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}