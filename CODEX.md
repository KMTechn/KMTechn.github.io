# CODEX 작업 안내서

작성 기준: 2026-06-11

이 문서는 Codex가 이 저장소를 빠르게 파악하기 위한 내부 작업 메모다. 회사 웹사이트 소스와 GitHub Pages 산출물을 구분해서 읽는다.

## 프로젝트 목적

`KMTechn.github.io`는 KMTech 회사 소개 웹사이트다. 회사 소개, 사업 영역, 파트너, 문의, 조직도, SEO/PWA, 다국어 지원, 3D 지구본/지도/문의 폼을 제공한다.

## 주요 기능

- React Router 기반 페이지 라우팅: 홈, 회사소개, 사업영역, 파트너, 문의, 404.
- `i18next` 기반 한국어/영어/중국어/독일어 번역.
- styled-components와 framer-motion 기반 UI/애니메이션.
- Three.js/react-three-fiber 기반 3D 지구본 컴포넌트.
- SEO meta, sitemap, robots, PWA manifest, CNAME 배포 파일 관리.
- 컴포넌트 단위 Vitest 테스트 일부 포함.

## 기술 스택

- React 19, Vite
- react-router-dom
- styled-components
- framer-motion
- three, @react-three/fiber, @react-three/drei
- i18next, react-i18next
- lucide-react, react-icons, react-leaflet
- Vitest, ESLint

## 실행 및 검증

```powershell
cd C:\company\program\KMTechn.github.io
npm install
npm run dev
npm run build
npm run preview
npm run test:run
npm run lint
```

`npm run lint`는 `eslint.config.js`가 `eslint-plugin-react-refresh`를 참조하지만 `package.json`에 명시되지 않은 상태일 수 있어 먼저 의존성 상태를 확인한다.

## 주요 파일

- `src/main.jsx`: React 앱 bootstrap.
- `src/App.jsx`: Router, lazy page 로딩, 공통 레이아웃.
- `src/pages/*`: 페이지 단위 구현.
- `src/components/Header.jsx`, `src/components/Footer.jsx`: 공통 내비게이션/푸터.
- `src/components/ui/*`: 지구본, 버튼, CTA, 이미지, 로더 등 재사용 UI.
- `src/contexts/ThemeContext.jsx`: 테마 상태.
- `src/i18n.js`: 번역 초기화.
- `locales/*/translation.json`, `public/locales/*/translation.json`: 번역 데이터.
- `public/org-structure.json`: 조직도 데이터.
- `docs/`: Vite build 산출물. GitHub Pages 배포 대상이다.

## 설정과 배포

- `package.json`: scripts와 의존성.
- `vite.config.js`: build 설정. 산출물은 `docs`로 보인다.
- `vitest.config.js`: 테스트 설정.
- `eslint.config.js`: lint 설정.
- `public/CNAME`: GitHub Pages 커스텀 도메인.
- `public/sitemap.xml`, `public/robots.txt`, `public/manifest.json`: SEO/PWA 파일.

## 작업 시 주의점

- `docs/`는 빌드 산출물이므로 소스 수정은 `src/`, `public/`, `locales/` 중심으로 한다.
- 배포용 산출물까지 갱신해야 하는 작업이면 `npm run build` 후 `docs/` 변경을 함께 확인한다.
- 다국어 텍스트를 바꾸면 `locales`와 `public/locales`의 중복 구조를 확인한다.
- 3D 지구본 변경은 데스크톱/모바일 렌더링과 성능을 브라우저에서 확인해야 한다.
- 2026-06-11 pull 결과: `origin/main` 최신, 작업트리 clean.
