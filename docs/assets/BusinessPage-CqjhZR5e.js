import{D as K,A as e,Q as n,T as S,U as x,$ as g,P as a,a2 as z,J as h,a3 as F,a4 as P,a1 as p,a5 as b,F as H,B as r,W as v,X as C,a6 as _,a7 as L,N as T}from"./index-C5ShRxlg.js";const A=r.div`
  color: var(--text-color);
  overflow-x: hidden;
`,M=r.section`
  padding: clamp(5.5rem, 9vw, 8rem) clamp(1rem, 5vw, 5%) clamp(4rem, 7vw, 5rem);
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  border-bottom: 1px solid var(--border-color);
`,D=r.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,u=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`,V=r.h1`
  color: var(--text-color);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: 0;
  word-break: keep-all;
`,G=r.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 2rem;
`,I=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`,f=r(T)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.85rem 1.2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  color: #121212;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    color: #121212;
    background: #e6b800;
    transform: translateY(-2px);
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`,B=r(f)`
  background: transparent;
  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    color: var(--accent-amber);
    background: transparent;
    border-color: var(--accent-amber);
  }
`,N=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  max-width: 720px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`,O=r.div`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
`,R=r.div`
  color: var(--text-color);
  font-size: clamp(1.15rem, 3vw, 1.55rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`,E=r.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.4rem;
`,Q=r.div`
  color: var(--text-secondary);
  font-size: 0.74rem;
  line-height: 1.35;
  margin-top: 0.35rem;
`,W=r(a.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  box-shadow: 0 14px 48px rgba(0, 0, 0, 0.08);
  min-width: 0;
`,Y=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
`,$=r.div`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  padding: 0.65rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,J=r.h2`
  color: var(--text-color);
  font-size: clamp(1.15rem, 2.5vw, 1.55rem);
  margin: 0;
  line-height: 1.3;
`,U=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,X=r.div`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.85rem;
  min-height: 92px;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }
`,q=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Z=r.strong`
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.3;
`,ee=r.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,re=r.div`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-radius: 8px;
  padding: 0.85rem;
`,ie=r.div`
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--text-color);
  line-height: 1.2;
`,te=r.div`
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.35;
  margin-top: 0.35rem;
`,c=r.div`
  width: min(100%, 760px);
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  text-align: center;
`,l=r.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,d=r.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.45rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: 0;
`,m=r.p`
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto;
`,se=r(a.div)`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.25rem);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,ae=r(a.article)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.1rem, 3vw, 1.45rem);
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  }
`,oe=r.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #121212;
  background: var(--accent-amber);

  svg {
    font-size: 1.25rem;
  }
`,ne=r.h3`
  font-size: 1.08rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`,ce=r.ul`
  list-style: none;
  display: grid;
  gap: 0.65rem;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: 0.55rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.55;
    min-width: 0;
  }

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
    margin-top: 0.2rem;
  }
`,le=r(p)`
  background: var(--card-bg);
`,de=r.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,me=r(a.article)`
  position: relative;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
`,pe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,xe=r.span`
  color: var(--accent-amber);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,ge=r.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.1);
  color: var(--accent-amber);
  flex: 0 0 auto;
`,he=r.h3`
  font-size: 1rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`,be=r.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`,ve=r.div`
  width: min(100%, 1100px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 9rem), 1fr));
  gap: 0.85rem;
`,_e=r.div`
  min-height: 112px;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  place-items: center;

  img {
    max-width: 150px;
    max-height: 58px;
    object-fit: contain;
  }
`,ue={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},y={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},fe=()=>{const{t:i}=K(),o=t=>{const s=i(t,{returnObjects:!0});return Array.isArray(s)?s:[s]},j=[{icon:e.jsx(n,{}),title:i("tpl_warehouse_title"),items:o("tpl_warehouse_items")},{icon:e.jsx(S,{}),title:i("tpl_inspection_title"),items:o("tpl_inspection_items")},{icon:e.jsx(x,{}),title:i("tpl_packaging_title"),items:o("tpl_packaging_items")},{icon:e.jsx(g,{}),title:i("business_delivery_title"),items:o("business_delivery_items")}],w=[{icon:e.jsx(v,{}),labelKey:"process_step_1_title"},{icon:e.jsx(n,{}),labelKey:"process_step_3_title"},{icon:e.jsx(C,{}),labelKey:"process_step_5_title"},{icon:e.jsx(g,{}),labelKey:"process_step_8_title"}],k=[{icon:e.jsx(n,{}),titleKey:"process_step_1_title",descKey:"process_step_1_desc"},{icon:e.jsx(v,{}),titleKey:"process_step_2_title",descKey:"process_step_2_desc"},{icon:e.jsx(_,{}),titleKey:"process_step_3_title",descKey:"process_step_3_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_4_title",descKey:"process_step_4_desc"},{icon:e.jsx(b,{}),titleKey:"process_step_5_title",descKey:"process_step_5_desc"},{icon:e.jsx(L,{}),titleKey:"process_step_6_title",descKey:"process_step_6_desc"},{icon:e.jsx(_,{}),titleKey:"process_step_7_title",descKey:"process_step_7_desc"},{icon:e.jsx(h,{}),titleKey:"process_step_8_title",descKey:"process_step_8_desc"}];return e.jsxs(A,{children:[e.jsx(M,{children:e.jsxs(D,{children:[e.jsxs(a.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsxs(u,{children:[e.jsx(z,{})," ",i("business_hero_label")]}),e.jsx(V,{children:i("business_title")}),e.jsx(G,{children:i("tpl_biz_desc")}),e.jsxs(I,{children:[e.jsxs(f,{to:"/contact",children:[i("business_consult_cta")," ",e.jsx(h,{})]}),e.jsx(B,{to:"/partners",children:i("business_partner_cta")})]}),e.jsx(N,{children:F.map(t=>e.jsxs(O,{children:[e.jsx(R,{children:t.value}),e.jsx(E,{children:i(t.labelKey)}),e.jsx(Q,{children:i(t.detailKey)})]},t.labelKey))})]}),e.jsxs(W,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.15,duration:.45},children:[e.jsxs(Y,{children:[e.jsx($,{children:e.jsx("img",{src:"/logo.png",alt:"KMTech"})}),e.jsxs("div",{children:[e.jsx(u,{children:i("business_flow_label")}),e.jsx(J,{children:i("business_operations_title")})]})]}),e.jsx(U,{children:w.map((t,s)=>e.jsxs(X,{children:[t.icon,e.jsx(q,{children:i("process_step_label",{number:s+1})}),e.jsx(Z,{children:i(t.labelKey)})]},t.labelKey))}),e.jsx(ee,{children:P.map(t=>e.jsxs(re,{children:[e.jsx(ie,{children:t.value}),e.jsx(te,{children:i(t.detailKey)})]},t.labelKey))})]})]})}),e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx(l,{children:i("business_services_label")}),e.jsx(d,{children:i("tpl_biz_title")}),e.jsx(m,{children:i("business_services_desc")})]}),e.jsx(se,{variants:ue,initial:"hidden",animate:"visible",children:j.map(t=>e.jsxs(ae,{variants:y,children:[e.jsx(oe,{children:t.icon}),e.jsx(ne,{children:t.title}),e.jsx(ce,{children:t.items.map(s=>e.jsxs("li",{children:[e.jsx(b,{})," ",e.jsx("span",{children:s})]},s))})]},t.title))})]}),e.jsxs(le,{children:[e.jsxs(c,{children:[e.jsx(l,{children:i("business_flow_label")}),e.jsx(d,{children:i("tpl_work_process_title")}),e.jsx(m,{children:i("business_flow_desc")})]}),e.jsx(de,{children:k.map((t,s)=>e.jsxs(me,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:[e.jsxs(pe,{children:[e.jsx(xe,{children:i("process_step_label",{number:s+1})}),e.jsx(ge,{children:t.icon})]}),e.jsx(he,{children:i(t.titleKey)}),e.jsx(be,{children:i(t.descKey)})]},t.titleKey))})]}),e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx(l,{children:i("home_section_partners_label")}),e.jsx(d,{children:i("core_customers_title")}),e.jsx(m,{children:i("partners_section_desc")})]}),e.jsx(ve,{children:H.map(t=>e.jsx(_e,{children:e.jsx("img",{src:t.logo,alt:`${t.name} logo`,loading:"lazy",decoding:"async"})},t.name))})]})]})};export{fe as default};
