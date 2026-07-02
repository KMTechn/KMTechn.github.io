import{D as u,r as o,E as i,A as e,aa as v,I as w,B as t,O as a,ab as b,ac as f,ad as y,L as j}from"./index-xMOrffVN.js";const _=t.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  padding: clamp(5.5rem, 9vw, 8rem) clamp(1rem, 5vw, 5%) clamp(4rem, 7vw, 5rem);
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
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  min-width: 0;
  overflow-x: clip;
  overflow-wrap: anywhere;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,z=t(a.div)`
  min-width: 0;

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
  letter-spacing: 0;
  overflow-wrap: anywhere;
`,H=t.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 500px;
  overflow-wrap: anywhere;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`,S=t(a.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2.5vw, 1.5rem);
  width: 100%;
  min-width: 0;

  @media (max-width: 900px) {
    order: 1;
    max-width: min(100%, 400px);
    margin: 0 auto;
  }
`,P=t.div`
  text-align: center;
  padding: clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1.5rem);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  min-width: 0;
`,T=t.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 8px;
  margin: 0 auto 1rem;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`,I=t.div`
  font-size: clamp(1.35rem, 5vw, 1.75rem);
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.25rem;
  line-height: 1.1;
  white-space: nowrap;
`,L=t.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.35;
  overflow-wrap: anywhere;
`,R=t.section`
  padding: 6rem 5%;
  background: var(--background-color);
`,B=t(a.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  min-width: 0;
`,K=t.span`
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
`,V=t(a.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 13.5rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1100px;
  margin: 0 auto;
`,F=t(a.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.25rem, 4vw, 2rem);
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
`,G=t.img`
  max-width: min(180px, 100%);
  max-height: 70px;
  object-fit: contain;
  margin-bottom: 1.25rem;
  border-radius: 6px;
  transition: background 0.2s ease;

  /* White background for logos that need it in dark mode */
  ${r=>r.$needsBg&&`
    html[data-theme="dark"] & {
      background: white;
      padding: 8px 12px;
    }
  `}
`,M=t.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
`,$=t.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`,O=t.section`
  padding: 5rem 5%;
  background: var(--card-bg);
  text-align: center;
`,N=t(a.div)`
  max-width: 600px;
  margin: 0 auto;
`,Y=t.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,Z=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,W=t(a(j))`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  justify-content: center;
  min-height: 48px;
  max-width: 100%;

  @media (max-width: 420px) {
    width: 100%;
  }

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
`,X={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},q={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},Q=()=>{const{t:r}=u(),s=o.useRef(null),c=o.useRef(null),l=o.useRef(null),d=i(s,{once:!0,margin:"-50px"}),m=i(c,{once:!0,margin:"-50px"}),g=i(l,{once:!0,margin:"-50px"}),p=[{name:"Continental",logo:"/logos/continental_new.png",industry:"Automotive Parts",needsBg:!0},{name:"Humax",logo:"/logos/humax_new.png",industry:"Electronics",needsBg:!0},{name:"Hyundai Motor",logo:"/logos/Hyundai_Motor_Company_logo.svg.png",industry:"Automotive"},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png",industry:"Mobility"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png",industry:"Automotive"},{name:"LG Display",logo:"/logos/lg_display_new.png",industry:"Display"},{name:"LG Electronics",logo:"/logos/lg_electronics_new.png",industry:"Electronics"}],x=[{icon:e.jsx(b,{}),value:"7+",labelKey:"partners_stat_partners"},{icon:e.jsx(f,{}),value:"15+",labelKey:"partners_stat_years"},{icon:e.jsx(y,{}),value:"99%",labelKey:"partners_stat_retention"}];return e.jsxs(v,{children:[e.jsx(_,{ref:s,children:e.jsxs(k,{children:[e.jsxs(z,{initial:{opacity:0,y:30},animate:d?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx(C,{children:"Our Partners"}),e.jsx(A,{children:r("core_customers_title")}),e.jsx(H,{children:r("partners_hero_desc")})]}),e.jsx(S,{initial:{opacity:0,x:30},animate:d?{opacity:1,x:0}:{},transition:{delay:.2,duration:.6},children:x.map((n,h)=>e.jsxs(P,{children:[e.jsx(T,{children:n.icon}),e.jsx(I,{children:n.value}),e.jsx(L,{children:r(n.labelKey)})]},h))})]})}),e.jsxs(R,{ref:c,children:[e.jsxs(B,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(K,{children:r("partners_section_label")}),e.jsx(D,{children:r("partners_section_title")}),e.jsx(E,{children:r("partners_section_desc")})]}),e.jsx(V,{variants:X,initial:"hidden",animate:m?"visible":"hidden",children:p.map(n=>e.jsxs(F,{variants:q,children:[e.jsx(G,{src:n.logo,alt:`${n.name} logo`,$needsBg:n.needsBg}),e.jsx(M,{children:n.name}),e.jsx($,{children:n.industry})]},n.name))})]}),e.jsx(O,{ref:l,children:e.jsxs(N,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(Y,{children:r("partners_cta_title")}),e.jsx(Z,{children:r("partners_cta_desc")}),e.jsxs(W,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r("partners_cta_button")," ",e.jsx(w,{})]})]})})]})};export{Q as default};
