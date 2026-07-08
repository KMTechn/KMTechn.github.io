import{u as O,j as e,i as d,q as w,w as a,p as N,e as b,g as u,x as m,o as f,c as Q,d as r,m as c,y as p,z as _,A as Y,B as v,C as j,h as o,s as $,L as W,v as h}from"./index-BO5CLzz_.js";const J=r.div`
  color: var(--text-color);
  overflow-x: hidden;
  background: var(--background-color);
`,U=r.section`
  padding: clamp(3.2rem, 5vw, 4.3rem) clamp(1rem, 4vw, 3rem) clamp(1.2rem, 2.4vw, 1.7rem);
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 43%, rgba(255, 255, 255, 0.55) 62%, rgba(255, 255, 255, 0.08) 100%),
    image-set(
      url('/images/kmtech-about-warehouse-hero-960.webp') 1x type('image/webp'),
      url('/images/kmtech-about-warehouse-hero-1440.webp') 2x type('image/webp'),
      url('/images/kmtech-about-warehouse-hero.png') 2x type('image/png')
    ) right top / min(68%, 930px) clamp(300px, 35vw, 430px) no-repeat,
    #fff;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-top: 5.25rem;
  }
`,X=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  gap: clamp(1.05rem, 2vw, 1.55rem);
`,Z=r.div`
  display: grid;
  grid-template-columns: minmax(22rem, 0.48fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 3vw, 2.25rem);
  align-items: center;
  min-height: clamp(250px, 31vw, 390px);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,ee=r(c.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding-block: clamp(0.5rem, 2vw, 1rem);
`,re=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent-amber);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,ie=r.h1`
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
`,te=r.p`
  color: #394150;
  font-size: clamp(1rem, 1.25vw, 1.12rem);
  line-height: 1.62;
  max-width: 36rem;
  margin-bottom: 1.35rem;
  word-break: keep-all;
`,se=r.div`
  display: none;
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
`,ae=r.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 0.65rem;
  align-items: center;
  min-width: 0;
`,oe=r.div`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.45);
  background: rgba(var(--accent-amber-rgb), 0.08);
`,ne=r.strong`
  color: var(--text-color);
  display: block;
  font-size: 0.86rem;
  line-height: 1.3;
  word-break: keep-all;
`,ce=r.span`
  color: var(--text-secondary);
  display: block;
  font-size: 0.74rem;
  line-height: 1.35;
  margin-top: 0.1rem;
  word-break: keep-all;
`,le=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,M=r(W)`
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
`,de=r(M)`
  background: #fff;
  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    color: var(--text-color);
    background: #fff;
    border-color: rgba(var(--accent-amber-rgb), 0.6);
  }
`,me=r(c.div)`
  display: none;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: clamp(0.85rem, 1.6vw, 1.1rem);
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  min-width: 0;
  display: none;
  grid-template-columns: minmax(15rem, 0.74fr) minmax(0, 1fr);
  gap: 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`,pe=r.div`
  min-width: 0;
  display: grid;
  gap: 0.9rem;
  padding-right: clamp(0.9rem, 2vw, 1.2rem);
  border-right: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-right: 0;
    border-right: 0;
  }
`,k=r.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.85rem;
  min-width: 0;
`,K=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
`,z=r.h2`
  color: var(--text-color);
  font-size: 1.02rem;
  line-height: 1.25;
  margin: 0;
`,C=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  white-space: nowrap;
`,ge=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`,xe=r.div`
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
`,he=r.strong`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  line-height: 1;
  overflow-wrap: anywhere;
  white-space: nowrap;
`,be=r.span`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.35;
`,ue=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,_e=r.div`
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
`,ve=r.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.25;
  word-break: keep-all;
`,ye=r.div`
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
`,we=r.div`
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
`,fe=r(c.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.85rem, 1.7vw, 1.1rem);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,je=r(c.article)`
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0;
  min-width: 0;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 0;
  align-items: start;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.65);
    box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  }

  & > div:last-child {
    min-width: 0;
    padding: 1rem 1rem 1rem 0.4rem;
  }
`,ke=r.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #121212;
  background: rgba(var(--accent-amber-rgb), 0.2);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.4);

  margin: 1rem 0 0 1rem;

  svg {
    font-size: 1.05rem;
  }
`,Ke=r.h3`
  font-size: 1.05rem;
  color: var(--text-color);
  margin: 0 0 0.55rem;
  line-height: 1.25;
`,ze=r.p`
  display: none;
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 0.85rem;
`,Ce=r.div`
  width: 100%;
  height: clamp(92px, 11vw, 124px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: var(--background-color);
  margin: 0.45rem 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Se=r.ul`
  list-style: none;
  display: none;
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
`,Fe=r.div`
  display: grid;
  gap: 0;
  margin-top: 0.75rem;
  border-top: 1px solid var(--border-color);
`,Pe=r.div`
  display: grid;
  grid-template-columns: 5.2rem minmax(0, 1fr);
  gap: 0.65rem;
  align-items: start;
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.45;
  min-width: 0;
  padding: 0.62rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
`,Me=r.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.4;
`,Te=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 16px 46px rgba(15, 23, 42, 0.12);
  overflow: hidden;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Le=r.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: center;
  padding: 1.05rem clamp(0.9rem, 2vw, 1.25rem);
  min-width: 0;
  border-right: 1px solid var(--border-color);
  border-bottom: 0;

  &:last-child {
    border-right: 0;
  }
`,Ie=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  background: rgba(var(--accent-amber-rgb), 0.12);

  svg {
    font-size: 1.35rem;
  }
`,He=r.div`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 900;
  line-height: 1.05;
  overflow-wrap: anywhere;
  white-space: nowrap;
`,F=r.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.25rem;
`,Ae=r(h)`
  background: var(--card-bg);
`,y=r.div`
  width: min(100%, 760px);
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  text-align: center;
`,g=r.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,n=r.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.45rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: 0;
`,x=r.p`
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto;
`,Be=r.div`
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
`,Ge=r(c.article)`
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
`,Re=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,De=r.span`
  color: var(--accent-amber);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Ve=r.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.1);
  color: var(--accent-amber);
  flex: 0 0 auto;
`,Ee=r.h3`
  font-size: 1rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`,qe=r.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`,Oe=r(h)`
  background: var(--background-color);
`,Ne=r.div`
  width: min(100%, 1120px);
  margin: 0 auto clamp(1rem, 2.5vw, 1.6rem);
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Qe=r.article`
  min-height: 112px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.95rem;
  display: grid;
  gap: 0.45rem;

  svg {
    color: var(--text-color);
    font-size: 1rem;
  }

  strong {
    color: var(--text-color);
    font-size: 0.86rem;
    line-height: 1.35;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.74rem;
    line-height: 1.42;
  }
`,Ye=r.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-radius: 8px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(14, 14, 14, 0.88), rgba(14, 14, 14, 0.72)),
    url('/images/kmtech-about-warehouse-hero-1440.webp') center / cover no-repeat;
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,$e=r.div`
  min-height: 104px;
  padding: 1rem;
  display: grid;
  align-content: center;
  gap: 0.3rem;
  border-right: 1px solid rgba(255, 255, 255, 0.16);

  strong {
    color: #fff;
    font-size: clamp(1rem, 2vw, 1.45rem);
    line-height: 1;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.78rem;
    line-height: 1.3;
  }
`,We=r(h)`
  background: var(--background-color);
`,Je=r.div`
  width: min(100%, 1100px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 9rem), 1fr));
  gap: 0.85rem;
`,Ue=r.div`
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
`,Xe=r(h)`
  background:
    radial-gradient(circle at 80% 0%, rgba(var(--accent-amber-rgb), 0.12), transparent 24rem),
    var(--card-bg);
  border-top: 1px solid var(--border-color);
`,Ze=r.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 2rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,er=r.div`
  ${n} {
    margin-bottom: 0.85rem;
  }
`,rr=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,ir=r.article`
  min-height: 132px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.8rem;
  align-items: start;
`,tr=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  background: rgba(var(--accent-amber-rgb), 0.11);
`,sr=r.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.35;
  margin: 0 0 0.45rem;
`,ar=r.p`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
`,or={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},P={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},cr=()=>{const{t}=O(),l=i=>{const s=t(i,{returnObjects:!0});return Array.isArray(s)?s:[s]},T=[{icon:e.jsx(p,{}),titleKey:"business_feature_accuracy_title",descKey:"business_feature_accuracy_desc"},{icon:e.jsx(_,{}),titleKey:"business_feature_trace_title",descKey:"business_feature_trace_desc"},{icon:e.jsx(Y,{}),titleKey:"business_feature_flexible_title",descKey:"business_feature_flexible_desc"}],L=[{icon:e.jsx(d,{}),image:"/images/kmtech-about-warehouse-hero-960.webp",title:t("tpl_warehouse_title"),descKey:"business_warehouse_summary",items:l("tpl_warehouse_items").slice(0,3),facts:["business_warehouse_target","business_warehouse_operation","business_warehouse_output"]},{icon:e.jsx(w,{}),image:"/images/kmtech-contact-warehouse-hero-960.webp",title:t("tpl_inspection_title"),descKey:"business_inspection_summary",items:l("tpl_inspection_items").slice(0,3),facts:["business_inspection_target","business_inspection_operation","business_inspection_output"]},{icon:e.jsx(a,{}),image:"/images/kmtech-about-warehouse-hero-1440.webp",title:t("tpl_packaging_title"),descKey:"business_packaging_summary",items:l("tpl_packaging_items").slice(0,3),facts:["business_packaging_target","business_packaging_operation","business_packaging_output"]},{icon:e.jsx(N,{}),image:"/images/kmtech-contact-warehouse-hero-1440.webp",title:t("business_delivery_title"),descKey:"business_delivery_summary",items:l("business_delivery_items").slice(0,3),facts:["business_delivery_target","business_delivery_operation","business_delivery_output"]}],I=[{icon:e.jsx(o,{}),labelKey:"process_step_1_title"},{icon:e.jsx(w,{}),labelKey:"process_step_5_title"},{icon:e.jsx(d,{}),labelKey:"process_step_3_title"},{icon:e.jsx(a,{}),labelKey:"process_step_7_title"}],H=[{icon:e.jsx(d,{}),titleKey:"process_step_1_title",descKey:"process_step_1_desc"},{icon:e.jsx(o,{}),titleKey:"process_step_2_title",descKey:"process_step_2_desc"},{icon:e.jsx(a,{}),titleKey:"process_step_3_title",descKey:"process_step_3_desc"},{icon:e.jsx($,{}),titleKey:"process_step_4_title",descKey:"process_step_4_desc"},{icon:e.jsx(m,{}),titleKey:"process_step_5_title",descKey:"process_step_5_desc"},{icon:e.jsx(_,{}),titleKey:"process_step_6_title",descKey:"process_step_6_desc"},{icon:e.jsx(a,{}),titleKey:"process_step_7_title",descKey:"process_step_7_desc"},{icon:e.jsx(b,{}),titleKey:"process_step_8_title",descKey:"process_step_8_desc"}],A=[e.jsx(v,{}),e.jsx(j,{}),e.jsx(o,{}),e.jsx(p,{})],B=u,G=[e.jsx(v,{}),e.jsx(j,{}),e.jsx(o,{}),e.jsx(p,{})],R=[{icon:e.jsx(d,{}),title:"3,000 Class 클린 보관 환경",text:"전자·부품 검수와 보관 작업 대응"},{icon:e.jsx(_,{}),title:"ERP QR 기반 입출고 관리",text:"실시간 재고/위치/이력 데이터 연동"},{icon:e.jsx(o,{}),title:"40ft 컨테이너 2대 동시 하역",text:"대량 입고와 리드타임 단축"},{icon:e.jsx(p,{}),title:"16채널 CCTV 24시간 보안",text:"상시 녹화 및 출입 통제"},{icon:e.jsx(a,{}),title:"50 Pallet 동시 재포장 대응",text:"대량 해체·소분·라벨링 가능"},{icon:e.jsx(m,{}),title:"표준 운영 리포트",text:"검수·출고 결과를 기준화"}],D=[...u,f[0],f[2]],V=["business_module_target","business_module_operation","business_module_output"],E=[{icon:e.jsx(a,{}),titleKey:"business_consult_check_volume_title",descKey:"business_consult_check_volume_desc"},{icon:e.jsx(v,{}),titleKey:"business_consult_check_product_title",descKey:"business_consult_check_product_desc"},{icon:e.jsx(m,{}),titleKey:"business_consult_check_quality_title",descKey:"business_consult_check_quality_desc"},{icon:e.jsx(o,{}),titleKey:"business_consult_check_delivery_title",descKey:"business_consult_check_delivery_desc"}];return e.jsxs(J,{children:[e.jsx(U,{children:e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsxs(ee,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(re,{children:t("business_hero_label")}),e.jsx(ie,{children:t("business_title")}),e.jsx(te,{children:t("tpl_biz_desc")}),e.jsx(se,{children:T.map(i=>e.jsxs(ae,{children:[e.jsx(oe,{children:i.icon}),e.jsxs("div",{children:[e.jsx(ne,{children:t(i.titleKey)}),e.jsx(ce,{children:t(i.descKey)})]})]},i.titleKey))}),e.jsxs(le,{children:[e.jsxs(M,{to:"/contact",children:[t("business_consult_cta")," ",e.jsx(b,{})]}),e.jsxs(de,{to:"/partners",children:[t("business_partner_cta")," ",e.jsx(b,{})]})]})]}),e.jsxs(me,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.15,duration:.45},children:[e.jsxs(pe,{children:[e.jsxs(k,{children:[e.jsxs(K,{children:[e.jsx(z,{children:t("business_facility_snapshot")}),e.jsx(C,{children:t("business_actual_data_label")})]}),e.jsx(ge,{children:u.slice(0,4).map((i,s)=>e.jsxs(xe,{children:[A[s],e.jsx(he,{children:i.value}),e.jsx(be,{children:t(i.labelKey)})]},i.labelKey))})]}),e.jsxs(k,{children:[e.jsxs(K,{children:[e.jsx(z,{children:t("business_flow_label")}),e.jsx(C,{children:t("tpl_work_process_title")})]}),e.jsx(ue,{children:I.map(i=>e.jsxs(_e,{children:[i.icon,e.jsx(ve,{children:t(i.labelKey)})]},i.labelKey))})]})]}),e.jsxs(ye,{children:[e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 760px) 100vw, 46vw",alt:"",loading:"eager",decoding:"async",fetchPriority:"high"}),e.jsxs(we,{children:[e.jsx(S,{children:t("business_facility_snapshot")}),e.jsx(S,{children:t("business_actual_data_label")})]})]})]})]}),e.jsx(Te,{children:B.map((i,s)=>e.jsxs(Le,{children:[e.jsx(Ie,{children:G[s]}),e.jsxs("div",{children:[e.jsx(He,{children:i.value}),e.jsx(F,{children:t(i.labelKey)}),e.jsx(F,{children:t(i.detailKey)})]})]},i.labelKey))}),e.jsx(fe,{variants:or,initial:"hidden",animate:"visible",children:L.map(i=>e.jsxs(je,{variants:P,children:[e.jsx(ke,{children:i.icon}),e.jsxs("div",{children:[e.jsx(Ke,{children:i.title}),e.jsx(ze,{children:t(i.descKey)}),e.jsx(Ce,{children:e.jsx("img",{src:i.image,alt:"",loading:"lazy",decoding:"async"})}),e.jsx(Se,{children:i.items.map(s=>e.jsxs("li",{children:[e.jsx(m,{})," ",e.jsx("span",{children:s})]},s))}),e.jsx(Fe,{children:i.facts.map((s,q)=>e.jsxs(Pe,{children:[e.jsx(Me,{children:t(V[q])}),e.jsx("span",{children:t(s)})]},s))})]})]},i.title))})]})}),e.jsxs(Ae,{children:[e.jsxs(y,{children:[e.jsx(g,{children:t("business_flow_label")}),e.jsx(n,{children:t("tpl_work_process_title")}),e.jsx(x,{children:t("business_flow_desc")})]}),e.jsx(Be,{children:H.map((i,s)=>e.jsxs(Ge,{variants:P,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:[e.jsxs(Re,{children:[e.jsx(De,{children:t("process_step_label",{number:s+1})}),e.jsx(Ve,{children:i.icon})]}),e.jsx(Ee,{children:t(i.titleKey)}),e.jsx(qe,{children:t(i.descKey)})]},i.titleKey))})]}),e.jsxs(Oe,{children:[e.jsxs(y,{children:[e.jsx(g,{children:"운영 증명"}),e.jsx(n,{children:"시설 역량의 의미"}),e.jsx(x,{children:"KMTech 직산 물류센터의 실제 운영 기준입니다."})]}),e.jsx(Ne,{children:R.map(i=>e.jsxs(Qe,{children:[i.icon,e.jsx("strong",{children:i.title}),e.jsx("span",{children:i.text})]},i.title))}),e.jsx(Ye,{children:D.map(i=>e.jsxs($e,{children:[e.jsx("strong",{children:i.value}),e.jsx("span",{children:t(i.labelKey)})]},i.labelKey))})]}),e.jsxs(We,{children:[e.jsxs(y,{children:[e.jsx(g,{children:t("home_section_partners_label")}),e.jsx(n,{children:t("core_customers_title")}),e.jsx(x,{children:t("partners_section_desc")})]}),e.jsx(Je,{children:Q.map(i=>e.jsx(Ue,{children:e.jsx("img",{src:i.logo,alt:`${i.name} logo`,loading:"lazy",decoding:"async"})},i.name))})]}),e.jsx(Xe,{children:e.jsxs(Ze,{children:[e.jsxs(er,{children:[e.jsx(g,{children:t("business_consult_ready_label")}),e.jsx(n,{children:t("business_consult_ready_title")}),e.jsx(x,{children:t("business_consult_ready_desc")})]}),e.jsx(rr,{children:E.map(i=>e.jsxs(ir,{children:[e.jsx(tr,{children:i.icon}),e.jsxs("div",{children:[e.jsx(sr,{children:t(i.titleKey)}),e.jsx(ar,{children:t(i.descKey)})]})]},i.titleKey))})]})})]})};export{cr as default};
