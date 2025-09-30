'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

// Zod 스키마 정의
const contactSchema = z.object({
  name: z.string().min(2, '이름은 최소 2글자 이상이어야 합니다.'),
  email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
  phone: z.string().min(10, '연락처는 최소 10자리 이상이어야 합니다.'),
  company: z.string().min(1, '회사명을 입력해주세요.'),
  projectType: z.string().min(1, '프로젝트 유형을 선택해주세요.'),
  budget: z.string().min(1, '예산 범위를 선택해주세요.'),
  timeline: z.string().min(1, '희망 일정을 선택해주세요.'),
  message: z.string().min(10, '프로젝트 설명은 최소 10글자 이상 입력해주세요.'),
  agreement: z.boolean().refine(val => val === true, {
    message: '개인정보 처리방침에 동의해주세요.'
  })
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: 'web', label: '웹 개발' },
  { value: 'mobile', label: '모바일 앱 개발' },
  { value: 'system', label: '시스템 개발' },
  { value: 'consulting', label: '기술 컨설팅' },
  { value: 'maintenance', label: '유지보수' },
  { value: 'other', label: '기타' }
];

const budgetRanges = [
  { value: 'under-1000', label: '1,000만원 미만' },
  { value: '1000-3000', label: '1,000만원 ~ 3,000만원' },
  { value: '3000-5000', label: '3,000만원 ~ 5,000만원' },
  { value: '5000-10000', label: '5,000만원 ~ 1억원' },
  { value: 'over-10000', label: '1억원 이상' },
  { value: 'flexible', label: '협의 가능' }
];

const timelines = [
  { value: 'urgent', label: '1개월 이내' },
  { value: 'normal', label: '1-3개월' },
  { value: 'flexible', label: '3-6개월' },
  { value: 'long-term', label: '6개월 이상' },
  { value: 'discussion', label: '협의 필요' }
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // 실제 서버 제출 로직은 여기에 구현
      console.log('Form Data:', data);

      // 임시로 2초 대기 (실제 API 호출 시뮬레이션)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitMessage('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      reset();
    } catch (error) {
      setSubmitMessage('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          컨설팅 문의하기
        </h2>
        <p className="text-gray-600">
          프로젝트에 대한 자세한 정보를 알려주시면, 맞춤형 컨설팅을 제공해드립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 기본 정보 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              이름 *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              이메일 *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              연락처 *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="010-1234-5678"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              회사명 *
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="(주)바이브코딩"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
              프로젝트 유형 *
            </label>
            <select
              {...register('projectType')}
              id="projectType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">선택해주세요</option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              예산 범위 *
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
              희망 일정 *
            </label>
            <select
              {...register('timeline')}
              id="timeline"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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

        {/* 프로젝트 설명 */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            프로젝트 설명 *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
            placeholder="프로젝트의 목적, 주요 기능, 특별한 요구사항 등을 자세히 설명해주세요."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* 동의 */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              {...register('agreement')}
              id="agreement"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreement" className="font-medium text-gray-700">
              개인정보 처리방침에 동의합니다. *
            </label>
            <p className="text-gray-500 mt-1">
              수집된 정보는 문의 응답 목적으로만 사용되며, 완료 후 즉시 삭제됩니다.
            </p>
            {errors.agreement && (
              <p className="mt-1 text-sm text-red-600">{errors.agreement.message}</p>
            )}
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? '제출 중...' : '문의 접수하기'}
          </button>
        </div>

        {/* 제출 결과 메시지 */}
        {submitMessage && (
          <div className={`text-center p-4 rounded-lg ${
            submitMessage.includes('성공')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}