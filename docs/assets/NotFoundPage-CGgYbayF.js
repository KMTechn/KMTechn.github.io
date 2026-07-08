import{u as n,j as e,W as a,f as i,d as t,m as c,L as o}from"./index-DQXp_2FR.js";const s=t.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
`,l=t(c.div)`
  text-align: center;
  max-width: 500px;
`,d=t.h1`
  font-size: clamp(6rem, 20vw, 10rem);
  font-weight: 700;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,m=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 1rem 0;
`,g=t.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
`,x=t.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,p=t(o)`
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
`,u=t(o)`
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
`,h=t.img`
  height: 60px;
  width: auto;
  margin-bottom: 2rem;
  opacity: 0.8;
`,f=()=>{const{t:r}=n();return e.jsx(s,{children:e.jsxs(l,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx(h,{src:"/logo.png",alt:"KMTech"}),e.jsx(d,{children:"404"}),e.jsx(m,{children:r("error_404_title",{defaultValue:"Page not found"})}),e.jsx(g,{children:r("error_404_desc",{defaultValue:"The page you requested does not exist or may have moved. Use the buttons below to continue."})}),e.jsxs(x,{children:[e.jsxs(p,{to:"/",children:[e.jsx(a,{})," ",r("error_404_home",{defaultValue:"Go home"})]}),e.jsxs(u,{to:"/contact",children:[e.jsx(i,{})," ",r("nav_contact")||"문의하기"]})]})]})})};export{f as default};
