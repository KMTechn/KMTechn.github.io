import{u as q,j as e,i as d,n as m,w as a,q as E,e as p,g as v,x as g,o as O,c as N,d as r,m as o,y,z as x,A as Y,B as h,C as w,h as c,p as f,L as $,v as _}from"./index-do66z6EZ.js";const Q=r.div`
  color: var(--text-color);
  overflow-x: hidden;
  background: var(--background-color);
`,W=r.section`
  padding: clamp(3.5rem, 5.5vw, 4.8rem) clamp(1rem, 4vw, 3rem) clamp(1rem, 2.4vw, 1.5rem);
  background:
    radial-gradient(circle at 82% 12%, rgba(var(--accent-amber-rgb), 0.08), transparent 24rem),
    linear-gradient(180deg, var(--background-color) 0%, #fff 52%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-top: 5.25rem;
  }
`,J=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  gap: clamp(1.25rem, 2vw, 1.8rem);
`,U=r.div`
  display: grid;
  grid-template-columns: minmax(18rem, 0.43fr) minmax(0, 0.9fr);
  gap: clamp(1.25rem, 3vw, 2.25rem);
  align-items: stretch;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,X=r(o.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding-block: clamp(0.5rem, 2vw, 1rem);
`,Z=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent-amber);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,ee=r.h1`
  color: var(--text-color);
  font-size: clamp(2.1rem, 3.75vw, 3.05rem);
  line-height: 1.08;
  margin-bottom: 1.15rem;
  letter-spacing: 0;
  word-break: keep-all;
  overflow-wrap: normal;
  max-width: 10.6em;

  @media (max-width: 520px) {
    font-size: clamp(2.2rem, 11vw, 3rem);
  }
`,re=r.p`
  color: #394150;
  font-size: clamp(1rem, 1.25vw, 1.12rem);
  line-height: 1.62;
  max-width: 36rem;
  margin-bottom: 1.35rem;
  word-break: keep-all;
`,ie=r.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.35rem;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,se=r.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 0.65rem;
  align-items: center;
  min-width: 0;
`,te=r.div`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.45);
  background: rgba(var(--accent-amber-rgb), 0.08);
`,ae=r.strong`
  color: var(--text-color);
  display: block;
  font-size: 0.86rem;
  line-height: 1.3;
  word-break: keep-all;
`,oe=r.span`
  color: var(--text-secondary);
  display: block;
  font-size: 0.74rem;
  line-height: 1.35;
  margin-top: 0.1rem;
  word-break: keep-all;
`,ne=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,L=r($)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 48px;
  padding: 0.78rem 1.15rem;
  border-radius: 8px;
  background: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  color: #121212;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    color: #121212;
    background: #e6b800;
    transform: translateY(-2px);
  }
`,ce=r(L)`
  background: #fff;
  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    color: var(--text-color);
    background: #fff;
    border-color: rgba(var(--accent-amber-rgb), 0.6);
  }
`,le=r(o.div)`
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: clamp(0.85rem, 1.6vw, 1.1rem);
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(15rem, 0.74fr) minmax(0, 1fr);
  gap: 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`,de=r.div`
  min-width: 0;
  display: grid;
  gap: 0.9rem;
  padding-right: clamp(0.9rem, 2vw, 1.2rem);
  border-right: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-right: 0;
    border-right: 0;
  }
`,j=r.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.85rem;
  min-width: 0;
`,k=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
`,K=r.h2`
  color: var(--text-color);
  font-size: 1.02rem;
  line-height: 1.25;
  margin: 0;
`,z=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  white-space: nowrap;
`,me=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`,pe=r.div`
  min-height: 82px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  padding: 0.85rem;
  display: grid;
  gap: 0.35rem;

  svg {
    color: var(--accent-amber);
    font-size: 1.2rem;
  }
`,ge=r.strong`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  line-height: 1;
  overflow-wrap: anywhere;
  white-space: nowrap;
`,xe=r.span`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.35;
`,he=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,be=r.div`
  min-height: 70px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.65rem;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 0.35rem;

  svg {
    color: var(--text-color);
    font-size: 1.35rem;
  }
`,ue=r.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.25;
  word-break: keep-all;
`,_e=r.div`
  position: relative;
  min-height: clamp(18rem, 30vw, 23rem);
  border: 0;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  background: #111;

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    padding: 0;
    display: block;
    filter: none;
  }

  @media (max-width: 760px) {
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }
`,ve=r.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: grid;
  gap: 0.35rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    display: none;
  }
`,S=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.3;
  word-break: keep-all;
  white-space: nowrap;

  &::before {
    content: '';
    width: 22px;
    height: 3px;
    border-radius: 8px;
    background: var(--accent-amber);
  }
`,ye=r(o.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.9rem, 2vw, 1.25rem);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,we=r(o.article)`
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1rem, 1.8vw, 1.25rem);
  min-width: 0;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.65);
    box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  }
`,fe=r.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #121212;
  background: rgba(var(--accent-amber-rgb), 0.2);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.4);

  svg {
    font-size: 1.65rem;
  }
`,je=r.h3`
  font-size: 1.25rem;
  color: var(--text-color);
  margin: 0 0 0.55rem;
  line-height: 1.25;
`,ke=r.p`
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 0.85rem;
`,Ke=r.div`
  width: 100%;
  height: clamp(88px, 11vw, 122px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: var(--background-color);
  margin: 0.3rem 0 0.85rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,ze=r.ul`
  list-style: none;
  display: grid;
  gap: 0.4rem;
  margin: 0 0 0.9rem;
  padding: 0;

  li {
    display: flex;
    gap: 0.45rem;
    color: var(--text-color);
    font-size: 0.82rem;
    line-height: 1.45;
    min-width: 0;
  }

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
    margin-top: 0.17rem;
  }
`,Se=r.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 0.8rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-color);
`,Ce=r.div`
  display: grid;
  grid-template-columns: 5.5rem minmax(0, 1fr);
  gap: 0.65rem;
  align-items: start;
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.5;
  min-width: 0;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
`,Fe=r.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.4;
`,Pe=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.05);
  overflow: hidden;
`,Le=r.div`
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: center;
  padding: 1rem clamp(1rem, 2vw, 1.35rem);
  min-width: 0;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-right: 0;
  }
`,Te=r.div`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--text-color);
  background: rgba(var(--accent-amber-rgb), 0.14);

  svg {
    font-size: 1.35rem;
  }
`,Ie=r.div`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 900;
  line-height: 1.05;
  overflow-wrap: anywhere;
  white-space: nowrap;
`,C=r.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.25rem;
`,He=r(_)`
  background: var(--card-bg);
`,F=r.div`
  width: min(100%, 760px);
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  text-align: center;
`,b=r.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,l=r.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.45rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: 0;
`,u=r.p`
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto;
`,Me=r.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,Ae=r(o.article)`
  position: relative;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
`,Be=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,Ge=r.span`
  color: var(--accent-amber);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Re=r.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.1);
  color: var(--accent-amber);
  flex: 0 0 auto;
`,Ve=r.h3`
  font-size: 1rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`,De=r.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`,qe=r(_)`
  background: var(--background-color);
`,Ee=r.div`
  width: min(100%, 1100px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 9rem), 1fr));
  gap: 0.85rem;
`,Oe=r.div`
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
`,Ne=r(_)`
  background:
    radial-gradient(circle at 80% 0%, rgba(var(--accent-amber-rgb), 0.12), transparent 24rem),
    var(--card-bg);
  border-top: 1px solid var(--border-color);
`,Ye=r.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 2rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,$e=r.div`
  ${l} {
    margin-bottom: 0.85rem;
  }
`,Qe=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,We=r.article`
  min-height: 132px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.8rem;
  align-items: start;
`,Je=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  background: rgba(var(--accent-amber-rgb), 0.11);
`,Ue=r.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.35;
  margin: 0 0 0.45rem;
`,Xe=r.p`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
`,Ze={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},P={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},rr=()=>{const{t:s}=q(),n=i=>{const t=s(i,{returnObjects:!0});return Array.isArray(t)?t:[t]},T=[{icon:e.jsx(y,{}),titleKey:"business_feature_accuracy_title",descKey:"business_feature_accuracy_desc"},{icon:e.jsx(x,{}),titleKey:"business_feature_trace_title",descKey:"business_feature_trace_desc"},{icon:e.jsx(Y,{}),titleKey:"business_feature_flexible_title",descKey:"business_feature_flexible_desc"}],I=[{icon:e.jsx(d,{}),image:"/images/kmtech-about-warehouse-hero-960.webp",title:s("tpl_warehouse_title"),descKey:"business_warehouse_summary",items:n("tpl_warehouse_items").slice(0,3),facts:["business_warehouse_target","business_warehouse_operation","business_warehouse_output"]},{icon:e.jsx(m,{}),image:"/images/kmtech-contact-warehouse-hero-960.webp",title:s("tpl_inspection_title"),descKey:"business_inspection_summary",items:n("tpl_inspection_items").slice(0,3),facts:["business_inspection_target","business_inspection_operation","business_inspection_output"]},{icon:e.jsx(a,{}),image:"/images/kmtech-about-warehouse-hero-1440.webp",title:s("tpl_packaging_title"),descKey:"business_packaging_summary",items:n("tpl_packaging_items").slice(0,3),facts:["business_packaging_target","business_packaging_operation","business_packaging_output"]},{icon:e.jsx(E,{}),image:"/images/kmtech-contact-warehouse-hero-1440.webp",title:s("business_delivery_title"),descKey:"business_delivery_summary",items:n("business_delivery_items").slice(0,3),facts:["business_delivery_target","business_delivery_operation","business_delivery_output"]}],H=[{icon:e.jsx(c,{}),labelKey:"process_step_1_title"},{icon:e.jsx(m,{}),labelKey:"process_step_5_title"},{icon:e.jsx(d,{}),labelKey:"process_step_3_title"},{icon:e.jsx(a,{}),labelKey:"process_step_7_title"}],M=[{icon:e.jsx(d,{}),titleKey:"process_step_1_title",descKey:"process_step_1_desc"},{icon:e.jsx(c,{}),titleKey:"process_step_2_title",descKey:"process_step_2_desc"},{icon:e.jsx(a,{}),titleKey:"process_step_3_title",descKey:"process_step_3_desc"},{icon:e.jsx(f,{}),titleKey:"process_step_4_title",descKey:"process_step_4_desc"},{icon:e.jsx(g,{}),titleKey:"process_step_5_title",descKey:"process_step_5_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_6_title",descKey:"process_step_6_desc"},{icon:e.jsx(a,{}),titleKey:"process_step_7_title",descKey:"process_step_7_desc"},{icon:e.jsx(p,{}),titleKey:"process_step_8_title",descKey:"process_step_8_desc"}],A=[e.jsx(h,{}),e.jsx(w,{}),e.jsx(c,{}),e.jsx(y,{})],B=[...v.slice(0,2),...O],G=[e.jsx(h,{}),e.jsx(w,{}),e.jsx(m,{}),e.jsx(x,{}),e.jsx(f,{})],R=["business_module_target","business_module_operation","business_module_output"],V=[{icon:e.jsx(a,{}),titleKey:"business_consult_check_volume_title",descKey:"business_consult_check_volume_desc"},{icon:e.jsx(h,{}),titleKey:"business_consult_check_product_title",descKey:"business_consult_check_product_desc"},{icon:e.jsx(g,{}),titleKey:"business_consult_check_quality_title",descKey:"business_consult_check_quality_desc"},{icon:e.jsx(c,{}),titleKey:"business_consult_check_delivery_title",descKey:"business_consult_check_delivery_desc"}];return e.jsxs(Q,{children:[e.jsx(W,{children:e.jsxs(J,{children:[e.jsxs(U,{children:[e.jsxs(X,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(Z,{children:s("business_hero_label")}),e.jsx(ee,{children:s("business_title")}),e.jsx(re,{children:s("tpl_biz_desc")}),e.jsx(ie,{children:T.map(i=>e.jsxs(se,{children:[e.jsx(te,{children:i.icon}),e.jsxs("div",{children:[e.jsx(ae,{children:s(i.titleKey)}),e.jsx(oe,{children:s(i.descKey)})]})]},i.titleKey))}),e.jsxs(ne,{children:[e.jsxs(L,{to:"/contact",children:[s("business_consult_cta")," ",e.jsx(p,{})]}),e.jsxs(ce,{to:"/partners",children:[s("business_partner_cta")," ",e.jsx(p,{})]})]})]}),e.jsxs(le,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.15,duration:.45},children:[e.jsxs(de,{children:[e.jsxs(j,{children:[e.jsxs(k,{children:[e.jsx(K,{children:s("business_facility_snapshot")}),e.jsx(z,{children:s("business_actual_data_label")})]}),e.jsx(me,{children:v.slice(0,4).map((i,t)=>e.jsxs(pe,{children:[A[t],e.jsx(ge,{children:i.value}),e.jsx(xe,{children:s(i.labelKey)})]},i.labelKey))})]}),e.jsxs(j,{children:[e.jsxs(k,{children:[e.jsx(K,{children:s("business_flow_label")}),e.jsx(z,{children:s("tpl_work_process_title")})]}),e.jsx(he,{children:H.map(i=>e.jsxs(be,{children:[i.icon,e.jsx(ue,{children:s(i.labelKey)})]},i.labelKey))})]})]}),e.jsxs(_e,{children:[e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 760px) 100vw, 46vw",alt:"",loading:"eager",decoding:"async",fetchPriority:"high"}),e.jsxs(ve,{children:[e.jsx(S,{children:s("business_facility_snapshot")}),e.jsx(S,{children:s("business_actual_data_label")})]})]})]})]}),e.jsx(ye,{variants:Ze,initial:"hidden",animate:"visible",children:I.map(i=>e.jsxs(we,{variants:P,children:[e.jsx(fe,{children:i.icon}),e.jsxs("div",{children:[e.jsx(je,{children:i.title}),e.jsx(ke,{children:s(i.descKey)}),e.jsx(Ke,{children:e.jsx("img",{src:i.image,alt:"",loading:"lazy",decoding:"async"})}),e.jsx(ze,{children:i.items.map(t=>e.jsxs("li",{children:[e.jsx(g,{})," ",e.jsx("span",{children:t})]},t))}),e.jsx(Se,{children:i.facts.map((t,D)=>e.jsxs(Ce,{children:[e.jsx(Fe,{children:s(R[D])}),e.jsx("span",{children:s(t)})]},t))})]})]},i.title))}),e.jsx(Pe,{children:B.map((i,t)=>e.jsxs(Le,{children:[e.jsx(Te,{children:G[t]}),e.jsxs("div",{children:[e.jsx(Ie,{children:i.value}),e.jsx(C,{children:s(i.labelKey)}),e.jsx(C,{children:s(i.detailKey)})]})]},i.labelKey))})]})}),e.jsxs(He,{children:[e.jsxs(F,{children:[e.jsx(b,{children:s("business_flow_label")}),e.jsx(l,{children:s("tpl_work_process_title")}),e.jsx(u,{children:s("business_flow_desc")})]}),e.jsx(Me,{children:M.map((i,t)=>e.jsxs(Ae,{variants:P,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:[e.jsxs(Be,{children:[e.jsx(Ge,{children:s("process_step_label",{number:t+1})}),e.jsx(Re,{children:i.icon})]}),e.jsx(Ve,{children:s(i.titleKey)}),e.jsx(De,{children:s(i.descKey)})]},i.titleKey))})]}),e.jsxs(qe,{children:[e.jsxs(F,{children:[e.jsx(b,{children:s("home_section_partners_label")}),e.jsx(l,{children:s("core_customers_title")}),e.jsx(u,{children:s("partners_section_desc")})]}),e.jsx(Ee,{children:N.map(i=>e.jsx(Oe,{children:e.jsx("img",{src:i.logo,alt:`${i.name} logo`,loading:"lazy",decoding:"async"})},i.name))})]}),e.jsx(Ne,{children:e.jsxs(Ye,{children:[e.jsxs($e,{children:[e.jsx(b,{children:s("business_consult_ready_label")}),e.jsx(l,{children:s("business_consult_ready_title")}),e.jsx(u,{children:s("business_consult_ready_desc")})]}),e.jsx(Qe,{children:V.map(i=>e.jsxs(We,{children:[e.jsx(Je,{children:i.icon}),e.jsxs("div",{children:[e.jsx(Ue,{children:s(i.titleKey)}),e.jsx(Xe,{children:s(i.descKey)})]})]},i.titleKey))})]})})]})};export{rr as default};
