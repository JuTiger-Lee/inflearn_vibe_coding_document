## 프로젝트 개요

바이브코딩 컨설팅 회사 랜딩 페이지 현대적이고 깔끔한 기업 웹사이트

## 기술스택

### 프론트엔드 프레임워크
- **Next.js 14+** - React 기반 풀스택 프레임워크
  - App Router 사용 (최신 라우팅 시스템)
  - Server Components 지원
  - 자동 코드 스플리팅 및 최적화
  - Image 컴포넌트를 통한 이미지 최적화

### 프로그래밍 언어
- **TypeScript** - 타입 안정성과 개발 생산성 향상
  - 엄격한 타입 체킹
  - 인터페이스 기반 컴포넌트 props 정의
  - 자동 완성 및 리팩토링 지원

### 스타일링
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
  - 빠른 개발과 일관된 디자인 시스템
  - 반응형 디자인 내장 지원
  - 커스텀 테마 설정 가능
  - PurgeCSS를 통한 사용하지 않는 스타일 자동 제거

### 폼 관리 및 검증
- **React Hook Form** - 성능 최적화된 폼 상태 관리
  - 최소한의 리렌더링
  - 쉬운 유효성 검증 통합
  - 타입스크립트 완벽 지원
- **Zod** - TypeScript 우선 스키마 검증
  - 런타임 타입 체킹
  - 자동 타입 추론
  - 포괄적인 유효성 검증 규칙

### 이미지 슬라이더 (예정)
- **Swiper** 또는 **React-Slick** - 이미지 캐러셀 구현
  - 터치 스와이프 지원
  - 반응형 브레이크포인트
  - 자동 재생 및 네비게이션
  - 다양한 트랜지션 효과

### 개발 도구
- **ESLint** - 코드 품질 관리
  - Next.js 권장 설정 사용
  - TypeScript 규칙 적용
- **Prettier** - 코드 포매팅
  - 일관된 코드 스타일 유지
  - Tailwind CSS 클래스 자동 정렬
- **Git** - 버전 관리
- **npm** - 패키지 매니저

## 명령어 및 개발 작업

### 프로젝트 설정 및 개발
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 빌드 로컬 실행
npm start

# 코드 린트
npm run lint
```

## 프로젝트 아키텍처

### 디렉토리 구조
```
app/
├── layout.tsx                    # 루트 레이아웃 (메타데이터, 전역 스타일)
├── page.tsx                      # 메인 랜딩 페이지
├── consulting-inquiry/           # 컨설팅 문의 페이지
│   └── page.tsx
└── consulting-process/           # 컨설팅 프로세스 페이지
    └── page.tsx

components/
├── common/                       # 공통 컴포넌트
│   ├── Header.tsx               # 로고 및 네비게이션
│   ├── Footer.tsx              # 회사 정보 및 링크
│   └── Navigation.tsx          # 스티키 네비게이션 (모바일 햄버거 포함)
├── home/                        # 메인 페이지 컴포넌트
│   ├── HeroSlider.tsx          # 이미지 캐러셀 (3장, 자동재생)
│   └── CompanyIntro.tsx        # 회사 비전/미션/CTA
├── inquiry/                     # 문의 페이지 컴포넌트
│   └── ContactForm.tsx         # React Hook Form + Zod 유효성 검증
└── process/                     # 프로세스 페이지 컴포넌트
    └── ProcessTimeline.tsx     # 5단계 타임라인 시각화
```

## 개발이 규칙

### 개발이 완료 될때
- 개발 완료시 npm run build를 하여 에러가 나는지 확인 후 에러가나면 에러해결
