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
        // LinkedIn 스타일 색상
        linkedin: {
          blue: '#0A66C2',       // LinkedIn 메인 블루
          darkBlue: '#004182',   // 진한 블루
          lightBlue: '#70B5F9',  // 연한 블루
          green: '#057642',      // 성공/온라인 상태
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E5E5',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        },
        primary: {
          DEFAULT: '#0A66C2', // LinkedIn blue
          dark: '#004182',
          light: '#70B5F9',
        },
        secondary: {
          DEFAULT: '#057642', // Professional green
          dark: '#034A2A',
          light: '#86EFAC',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FCD34D',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config