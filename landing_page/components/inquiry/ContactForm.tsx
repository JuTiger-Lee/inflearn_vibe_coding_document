'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, '이름은 2글자 이상 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().min(10, '연락처를 정확히 입력해주세요'),
  company: z.string().min(2, '회사명을 입력해주세요'),
  position: z.string().optional(),
  serviceType: z.string().min(1, '서비스 유형을 선택해주세요'),
  budget: z.string().min(1, '예산 범위를 선택해주세요'),
  timeline: z.string().min(1, '프로젝트 일정을 선택해주세요'),
  message: z.string().min(10, '문의 내용을 10글자 이상 입력해주세요'),
  agreement: z.boolean().refine(val => val === true, '개인정보처리방침에 동의해주세요')
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceTypes = [
  { value: 'it-consulting', label: 'IT 컨설팅' },
  { value: 'software-development', label: '소프트웨어 개발' },
  { value: 'digital-transformation', label: '디지털 트랜스포메이션' },
  { value: 'cloud-services', label: '클라우드 서비스' },
  { value: 'system-integration', label: '시스템 통합' },
  { value: 'maintenance-support', label: '유지보수 및 지원' },
  { value: 'other', label: '기타' }
]

const budgetRanges = [
  { value: 'under-1000', label: '1,000만원 미만' },
  { value: '1000-3000', label: '1,000만원 ~ 3,000만원' },
  { value: '3000-5000', label: '3,000만원 ~ 5,000만원' },
  { value: '5000-10000', label: '5,000만원 ~ 1억원' },
  { value: 'over-10000', label: '1억원 이상' },
  { value: 'discuss', label: '협의 후 결정' }
]

const timelines = [
  { value: 'urgent', label: '긴급 (1개월 이내)' },
  { value: 'short', label: '단기 (1-3개월)' },
  { value: 'medium', label: '중기 (3-6개월)' },
  { value: 'long', label: '장기 (6개월 이상)' },
  { value: 'flexible', label: '유연하게 조정 가능' }
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // 실제 구현에서는 API 엔드포인트로 데이터를 전송합니다
      console.log('Form submitted:', data)

      // 임시로 2초 대기
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetStatus = () => {
    setSubmitStatus('idle')
  }

  if (submitStatus === 'success') {
    return (
      <div className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">문의가 성공적으로 전송되었습니다!</h2>
            <p className="text-gray-600 mb-6">
              소중한 문의를 주셔서 감사합니다. 영업일 기준 24시간 이내에 담당자가 연락드리겠습니다.
            </p>
            <button
              onClick={resetStatus}
              className="btn-primary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              새로운 문의하기
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-primary to-primary-600 p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">컨설팅 문의</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              비즈니스 성장을 위한 첫 걸음을 함께 시작하세요.
              전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다.
            </p>
          </div>

          {/* 폼 */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            {/* 기본 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="홍길동"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="hong@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="010-1234-5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  회사명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  {...register('company')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="회사명을 입력해주세요"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                직책
              </label>
              <input
                type="text"
                id="position"
                {...register('position')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="직책을 입력해주세요 (선택사항)"
              />
            </div>

            {/* 프로젝트 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  서비스 유형 <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  {...register('serviceType')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.serviceType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">선택해주세요</option>
                  {serviceTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  예산 범위 <span className="text-red-500">*</span>
                </label>
                <select
                  id="budget"
                  {...register('budget')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.budget ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">선택해주세요</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  프로젝트 일정 <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeline"
                  {...register('timeline')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.timeline ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">선택해주세요</option>
                  {timelines.map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                )}
              </div>
            </div>

            {/* 문의 내용 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="프로젝트에 대한 상세한 내용을 입력해주세요. 현재 상황, 해결하고 싶은 문제, 기대하는 결과 등을 포함해주시면 더 정확한 제안을 드릴 수 있습니다."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* 개인정보처리방침 동의 */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreement"
                {...register('agreement')}
                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700">
                <span className="text-red-500">*</span> 개인정보처리방침에 동의합니다.{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  자세히 보기
                </a>
              </label>
            </div>
            {errors.agreement && (
              <p className="text-sm text-red-600">{errors.agreement.message}</p>
            )}

            {/* 제출 버튼 */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-600 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    전송 중...
                  </span>
                ) : (
                  '무료 컨설팅 신청하기'
                )}
              </button>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">전송 중 오류가 발생했습니다</h3>
                    <p className="mt-1 text-sm text-red-700">
                      잠시 후 다시 시도해주시거나, 직접 연락처로 문의해주세요.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>

          {/* 연락처 정보 */}
          <div className="bg-gray-50 px-8 py-6 border-t">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">직접 연락하기</h3>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@vibecoding.com
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02-1234-5678
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  평일 09:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}