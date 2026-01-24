import{j as e}from"./three-vendor-ZYLi6JSD.js";import{b as o,L as u}from"./react-vendor-VEkyeZpm.js";import{A as i,a4 as b,C as f,z as t,J as a,a5 as v,a6 as y,a7 as w}from"./index-C6eWm-mR.js";import{u as j}from"./i18n-vendor-BLj2OrmQ.js";const _=t.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  padding: 8rem 5% 5rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  }
`,k=t.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,z=t(a.div)`
  @media (max-width: 900px) {
    order: 2;
  }
`,C=t.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,A=t.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`,H=t.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 500px;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`,S=t(a.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`,T=t.div`
  text-align: center;
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
`,P=t.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 10px;
  margin: 0 auto 1rem;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`,I=t.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.25rem;
`,L=t.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,R=t.section`
  padding: 6rem 5%;
  background: var(--background-color);
`,K=t(a.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`,V=t.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,D=t.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,E=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,F=t(a.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`,G=t(a.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
`,M=t.img`
  max-width: 180px;
  max-height: 70px;
  object-fit: contain;
  margin-bottom: 1.25rem;
`,B=t.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
`,N=t.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`,O=t.section`
  padding: 5rem 5%;
  background: var(--card-bg);
  text-align: center;
`,Y=t(a.div)`
  max-width: 600px;
  margin: 0 auto;
`,Z=t.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,J=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,X=t(a.button)`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,$={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},q={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},te=()=>{const{t:n}=j(),s=o.useRef(null),c=o.useRef(null),l=o.useRef(null),d=i(s,{once:!0,margin:"-50px"}),m=i(c,{once:!0,margin:"-50px"}),g=i(l,{once:!0,margin:"-50px"}),p=[{name:"Continental",logo:"/logos/continental_new.png",industry:"Automotive Parts"},{name:"Humax",logo:"/logos/humax_new.png",industry:"Electronics"},{name:"Hyundai Motor",logo:"/logos/Hyundai_Motor_Company_logo.svg.png",industry:"Automotive"},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png",industry:"Mobility"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png",industry:"Automotive"},{name:"LG Display",logo:"/logos/lg_display_new.png",industry:"Display"},{name:"LG Electronics",logo:"/logos/lg_electronics_new.png",industry:"Electronics"}],x=[{icon:e.jsx(v,{}),value:"7+",labelKey:"partners_stat_partners"},{icon:e.jsx(y,{}),value:"15+",labelKey:"partners_stat_years"},{icon:e.jsx(w,{}),value:"99%",labelKey:"partners_stat_retention"}];return e.jsxs(b,{children:[e.jsx(_,{ref:s,children:e.jsxs(k,{children:[e.jsxs(z,{initial:{opacity:0,y:30},animate:d?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx(C,{children:"Our Partners"}),e.jsx(A,{children:n("core_customers_title")}),e.jsx(H,{children:n("partners_hero_desc")})]}),e.jsx(S,{initial:{opacity:0,x:30},animate:d?{opacity:1,x:0}:{},transition:{delay:.2,duration:.6},children:x.map((r,h)=>e.jsxs(T,{children:[e.jsx(P,{children:r.icon}),e.jsx(I,{children:r.value}),e.jsx(L,{children:n(r.labelKey)})]},h))})]})}),e.jsxs(R,{ref:c,children:[e.jsxs(K,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(V,{children:"Trusted By Industry Leaders"}),e.jsx(D,{children:n("partners_section_title")}),e.jsx(E,{children:n("partners_section_desc")})]}),e.jsx(F,{variants:$,initial:"hidden",animate:m?"visible":"hidden",children:p.map(r=>e.jsxs(G,{variants:q,children:[e.jsx(M,{src:r.logo,alt:`${r.name} logo`}),e.jsx(B,{children:r.name}),e.jsx(N,{children:r.industry})]},r.name))})]}),e.jsx(O,{ref:l,children:e.jsxs(Y,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(Z,{children:n("partners_cta_title")}),e.jsx(J,{children:n("partners_cta_desc")}),e.jsx(u,{to:"/contact",children:e.jsxs(X,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[n("partners_cta_button")," ",e.jsx(f,{})]})})]})})]})};export{te as default};
//# sourceMappingURL=PartnersPage-C3LAM2ci.js.map
