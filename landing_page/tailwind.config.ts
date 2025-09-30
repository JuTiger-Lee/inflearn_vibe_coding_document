import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 프로젝트 색상 스킴
        primary: {
          DEFAULT: '#1e3a8a', // 네이비 블루
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // 스카이 블루 (보조 색상)
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a', // 주 색상
        },
        accent: {
          DEFAULT: '#f97316', // 오렌지 (강조 색상)
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        // 타이포그래피 시스템
        'display': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1', fontWeight: '500' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // 8px 배수 스페이싱 시스템
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

export default config