# 바이브코딩 컨설팅 회사 웹사이트 PRD
## Product Requirements Document

---

## 1. 개요

### 1.1 프로젝트 명칭
바이브코딩 컨설팅 회사 웹사이트

### 1.2 프로젝트 목적
바이브코딩 컨설팅 서비스를 소개하고 잠재 고객의 문의를 받을 수 있는 현대적이고 깔끔한 기업 웹사이트 구축

### 1.3 대상 사용자
- 컨설팅 서비스를 필요로 하는 기업 및 개인
- 바이브코딩의 서비스에 관심이 있는 잠재 고객
- 컨설팅 프로세스를 알아보고자 하는 방문자

### 1.4 프로젝트 범위
- 메인 페이지 (회사 소개 및 이미지 슬라이더)
- 컨설팅 문의 페이지
- 컨설팅 프로세스 페이지

---

## 2. 기능 요구사항

### 2.1 메인 페이지

#### 2.1.1 이미지 슬라이더
- **위치**: 페이지 최상단 (Hero Section)
- **기능**:
  - 3장의 이미지 자동 슬라이드
  - 좌우 네비게이션 버튼
  - 하단 인디케이터 (현재 슬라이드 표시)
  - 자동 재생 (5초 간격)
  - 마우스 호버 시 일시정지
- **이미지 요구사항**:
  - 고해상도 이미지 (1920x1080 권장)
  - 반응형 대응
  - 로딩 최적화 (Next.js Image 컴포넌트 활용)

#### 2.1.2 회사 소개 섹션
- **구성요소**:
  - 회사 비전 및 미션
  - 핵심 가치
  - 간단한 서비스 소개
  - CTA (Call-to-Action) 버튼 - "컨설팅 문의하기"

### 2.2 컨설팅 문의 페이지

#### 2.2.1 문의 폼
- **입력 필드**:
  - 이름 (필수, 텍스트)
  - 전화번호 (필수, 전화번호 형식)
  - 이메일 (필수, 이메일 형식 검증)
  - 문의 내용 (선택, 텍스트에어리어)
- **기능**:
  - 클라이언트 사이드 유효성 검증
  - 전송 버튼 (실제 전송 기능 없음)
  - 전송 클릭 시 성공 메시지 표시
  - 폼 초기화 기능

#### 2.2.2 연락처 정보
- 회사 전화번호
- 이메일 주소
- 사무실 주소
- 영업 시간

### 2.3 컨설팅 프로세스 페이지

#### 2.3.1 프로세스 단계 표시
- **구성**:
  1. 초기 상담
  2. 현황 분석
  3. 전략 수립
  4. 실행 및 구현
  5. 모니터링 및 개선
- **표현 방식**:
  - 타임라인 형식 또는 스텝 바 형식
  - 각 단계별 아이콘 및 설명
  - 시각적으로 명확한 진행 흐름 표시

#### 2.3.2 세부 설명
- 각 프로세스 단계별 상세 설명
- 예상 소요 기간
- 주요 산출물

### 2.4 공통 컴포넌트

#### 2.4.1 네비게이션 바
- **구성**:
  - 로고 (좌측)
  - 메뉴 항목: 홈, 컨설팅 문의, 컨설팅 프로세스
  - 반응형 햄버거 메뉴 (모바일)
- **기능**:
  - 스크롤 시 상단 고정 (Sticky)
  - 현재 페이지 활성화 표시
  - 부드러운 페이지 전환

#### 2.4.2 푸터
- **구성**:
  - 회사 정보
  - 빠른 링크
  - 소셜 미디어 링크
  - 저작권 정보
  - 개인정보처리방침 링크

---

## 3. 비기능 요구사항

### 3.1 디자인 요구사항

#### 3.1.1 디자인 컨셉
- **스타일**: 모던하고 깔끔한 디자인
- **색상 스킴**:
  - 주 색상: 전문성을 나타내는 네이비 블루 (#1e3a8a)
  - 보조 색상: 신뢰를 주는 스카이 블루 (#3b82f6)
  - 강조 색상: 활력을 주는 오렌지 (#f97316)
  - 배경: 깨끗한 화이트 (#ffffff) 및 라이트 그레이 (#f9fafb)

#### 3.1.2 타이포그래피
- **주 폰트**: Pretendard 또는 Noto Sans KR
- **제목**: Bold, 32-48px
- **본문**: Regular, 16px
- **버튼 텍스트**: Medium, 16px

#### 3.1.3 레이아웃
- 최대 너비: 1280px
- 그리드 시스템: 12 컬럼
- 여백: 일관된 spacing 시스템 (8px 배수)

### 3.2 성능 요구사항
- **페이지 로드 시간**: 3초 이내
- **Lighthouse 점수**:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

### 3.3 반응형 디자인
- **지원 디바이스**:
  - 데스크톱 (1920px, 1440px, 1280px)
  - 태블릿 (768px - 1024px)
  - 모바일 (320px - 767px)
- **브레이크포인트**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

### 3.4 접근성
- WCAG 2.1 Level AA 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 적절한 색상 대비 (4.5:1 이상)

### 3.5 브라우저 호환성
- Chrome (최신 버전)
- Safari (최신 버전)
- Firefox (최신 버전)
- Edge (최신 버전)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## 4. 기술 사양

### 4.1 기술 스택

#### 4.1.1 프론트엔드
- **프레임워크**: Next.js 14+ (App Router)
- **언어**: TypeScript
- **스타일링**:
  - Tailwind CSS (유틸리티 우선 CSS)
  - CSS Modules (컴포넌트별 스타일링)
- **상태 관리**: React Hooks (useState, useContext)
- **폼 관리**: React Hook Form
- **유효성 검증**: Zod 또는 Yup

#### 4.1.2 개발 도구
- **패키지 매니저**: npm 또는 pnpm
- **린터**: ESLint
- **포매터**: Prettier
- **버전 관리**: Git

### 4.2 프로젝트 구조
```
landing_page/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── consulting-inquiry/
│   │   └── page.tsx
│   └── consulting-process/
│       └── page.tsx
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   └── CompanyIntro.tsx
│   ├── inquiry/
│   │   └── ContactForm.tsx
│   └── process/
│       └── ProcessTimeline.tsx
├── styles/
│   └── globals.css
├── public/
│   └── images/
├── lib/
│   └── utils/
└── types/
    └── index.ts
```

### 4.3 주요 컴포넌트 명세

#### 4.3.1 HeroSlider
```typescript
interface HeroSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  autoPlayInterval?: number;
}
```

#### 4.3.2 ContactForm
```typescript
interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}
```

#### 4.3.3 ProcessTimeline
```typescript
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: ReactNode;
}
```

---

## 5. 배포 및 운영

### 5.1 배포 환경
- **플랫폼**: Vercel
- **도메인**: 추후 결정
- **SSL**: Vercel 자동 제공

### 5.2 환경 변수
```env
NEXT_PUBLIC_SITE_URL=https://vibecoding.vercel.app
NEXT_PUBLIC_COMPANY_EMAIL=contact@vibecoding.com
NEXT_PUBLIC_COMPANY_PHONE=02-1234-5678
```

### 5.3 배포 프로세스
1. GitHub 리포지토리 생성
2. Vercel과 GitHub 연동
3. 자동 배포 설정 (main 브랜치)
4. 프리뷰 배포 (PR 생성 시)