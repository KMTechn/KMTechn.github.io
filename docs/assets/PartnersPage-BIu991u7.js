import{j as e}from"./three-vendor-I5c4ovf2.js";import{b as o,L as u}from"./react-vendor-BvbQ_S-X.js";import{A as a,a0 as b,F as f,z as t,D as n,a1 as v,a2 as y,a3 as j}from"./index-fTJW31f7.js";import{u as w}from"./i18n-vendor-Bdmv85-f.js";const k=t.section`
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
`,z=t.div`
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
`,T=t(n.div)`
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
`,S=t(n.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`,L=t.div`
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
`,_=t.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,R=t.section`
  padding: 6rem 5%;
  background: var(--background-color);
`,D=t(n.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`,G=t.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,M=t.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,V=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,E=t(n.div)`
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
`,F=t(n.div)`
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
`,K=t.img`
  max-width: 120px;
  max-height: 50px;
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
`,Y=t(n.div)`
  max-width: 600px;
  margin: 0 auto;
`,Z=t.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,X=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,$=t(n.button)`
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
`,q={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},J={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},te=()=>{const{t:m}=w(),i=o.useRef(null),s=o.useRef(null),c=o.useRef(null),l=a(i,{once:!0,margin:"-50px"}),d=a(s,{once:!0,margin:"-50px"}),g=a(c,{once:!0,margin:"-50px"}),p=[{name:"Continental",logo:"/logos/continental.jpeg",industry:"Automotive Parts"},{name:"Humax",logo:"/logos/humax.jpeg",industry:"Electronics"},{name:"Hyundai Motor",logo:"/logos/Hyundai_Motor_Company_logo.svg.png",industry:"Automotive"},{name:"Kanavi Mobility",logo:"/logos/kanavi mobility.jpeg",industry:"Mobility"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png",industry:"Automotive"},{name:"LG Display",logo:"/logos/LG_Display_logo_(english).png",industry:"Display"},{name:"LG Electronics",logo:"/logos/LG electronics.png",industry:"Electronics"}],x=[{icon:e.jsx(v,{}),value:"7+",label:"파트너사"},{icon:e.jsx(y,{}),value:"15+",label:"협력 연수"},{icon:e.jsx(j,{}),value:"99%",label:"재계약률"}];return e.jsxs(b,{children:[e.jsx(k,{ref:i,children:e.jsxs(z,{children:[e.jsxs(T,{initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx(C,{children:"Our Partners"}),e.jsx(A,{children:m("core_customers_title")}),e.jsx(H,{children:"글로벌 자동차 및 전자 산업의 선도 기업들과 함께합니다. 신뢰를 바탕으로 한 장기적인 파트너십을 통해 최고의 물류 서비스를 제공합니다."})]}),e.jsx(S,{initial:{opacity:0,x:30},animate:l?{opacity:1,x:0}:{},transition:{delay:.2,duration:.6},children:x.map((r,h)=>e.jsxs(L,{children:[e.jsx(P,{children:r.icon}),e.jsx(I,{children:r.value}),e.jsx(_,{children:r.label})]},h))})]})}),e.jsxs(R,{ref:s,children:[e.jsxs(D,{initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(G,{children:"Trusted By Industry Leaders"}),e.jsx(M,{children:"신뢰받는 파트너십"}),e.jsx(V,{children:"자동차, 전자, 디스플레이 등 다양한 산업 분야의 글로벌 기업들이 KMTech의 전문 물류 서비스를 신뢰합니다."})]}),e.jsx(E,{variants:q,initial:"hidden",animate:d?"visible":"hidden",children:p.map(r=>e.jsxs(F,{variants:J,children:[e.jsx(K,{src:r.logo,alt:`${r.name} logo`}),e.jsx(B,{children:r.name}),e.jsx(N,{children:r.industry})]},r.name))})]}),e.jsx(O,{ref:c,children:e.jsxs(Y,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(Z,{children:"파트너가 되어주세요"}),e.jsx(X,{children:"KMTech와 함께 효율적인 물류 솔루션을 경험해 보세요. 귀사의 요구에 맞춘 맞춤형 서비스를 제공해 드립니다."}),e.jsx(u,{to:"/contact",children:e.jsxs($,{whileHover:{scale:1.02},whileTap:{scale:.98},children:["문의하기 ",e.jsx(f,{})]})})]})})]})};export{te as default};
//# sourceMappingURL=PartnersPage-BIu991u7.js.map
