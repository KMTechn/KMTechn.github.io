import{j as r}from"./three-vendor-uCD6w5gt.js";import{L as o}from"./react-vendor-VEkyeZpm.js";import{a7 as n,E as a,z as e,J as i}from"./index-p51PCxHP.js";import{u as c}from"./i18n-vendor-Dc1ZlYGt.js";const s=e.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
`,l=e(i.div)`
  text-align: center;
  max-width: 500px;
`,d=e.h1`
  font-size: clamp(6rem, 20vw, 10rem);
  font-weight: 700;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,m=e.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 1rem 0;
`,g=e.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
`,p=e.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,x=e(o)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--accent-amber);
  color: #121212;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 204, 0, 0.3);
  }
`,h=e(o)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: var(--text-color);
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
  }
`,b=e.img`
  height: 60px;
  width: auto;
  margin-bottom: 2rem;
  opacity: 0.8;
`,y=()=>{const{t}=c();return r.jsx(s,{children:r.jsxs(l,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsx(b,{src:"/logo.png",alt:"KMTech"}),r.jsx(d,{children:"404"}),r.jsx(m,{children:t("error_404_title")||"페이지를 찾을 수 없습니다"}),r.jsx(g,{children:t("error_404_desc")||"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. 아래 버튼을 통해 다른 페이지로 이동해 주세요."}),r.jsxs(p,{children:[r.jsxs(x,{to:"/",children:[r.jsx(n,{})," ",t("error_404_home")||"홈으로 가기"]}),r.jsxs(h,{to:"/contact",children:[r.jsx(a,{})," ",t("nav_contact")||"문의하기"]})]})]})})};export{y as default};
//# sourceMappingURL=NotFoundPage-D4U2ySjO.js.map
