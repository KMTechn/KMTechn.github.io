import{u as v,r as d,c as n,j as e,Q as w,C as f,T as y,U as j,m as s,e as k,d as t,F as _,b as z,V as C,L as S}from"./index-GDhbjks3.js";const P=t.section`
  min-height: clamp(390px, 47vh, 500px);
  display: flex;
  align-items: center;
  padding: clamp(2.9rem, 4.6vw, 4rem) clamp(1rem, 5vw, 5%) clamp(1.55rem, 3vw, 2.25rem);
  background:
    radial-gradient(circle at 83% 18%, rgba(var(--accent-amber-rgb), 0.11), transparent 22rem),
    linear-gradient(180deg, #ffffff 0%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;

  @media (max-width: 820px) {
    min-height: auto;
  }
`,M=t.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.78fr) minmax(20rem, 1fr);
  gap: clamp(1.35rem, 4vw, 3rem);
  align-items: center;
  min-width: 0;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,T=t.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,H=t.h1`
  color: var(--text-color);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
  word-break: keep-all;
`,K=t.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 1.5rem;

  @media (max-width: 820px) {
    margin-left: auto;
    margin-right: auto;
  }
`,F=t(s.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  max-width: 600px;
  min-width: 0;

  @media (max-width: 820px) {
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.45rem;
  }
`,I=t.div`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-height: 108px;
  min-width: 0;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.05);

  @media (max-width: 520px) {
    padding: 0.78rem 0.55rem;
    text-align: center;
  }
`,L=t.div`
  color: var(--accent-amber);
  margin-bottom: 0.6rem;

  @media (max-width: 520px) {
    margin-bottom: 0.35rem;
  }
`,G=t.div`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`,A=t.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  word-break: keep-all;

  @media (max-width: 520px) {
    font-size: 0.72rem;
  }
`,$=t(s.div)`
  position: relative;
  width: 100%;
  max-width: 620px;
  display: grid;
  gap: 0.8rem;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  min-width: 0;

  @media (max-width: 820px) {
    max-width: 640px;
    margin: 0 auto;
  }
`,B=t.div`
  position: relative;
  min-height: clamp(300px, 34vw, 410px);
  border-radius: 8px;
  overflow: hidden;
  background: #111;

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.08) 48%),
      linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.28) 100%);
    pointer-events: none;
  }
`,E=t.div`
  display: none;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.2rem 0.25rem 0;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,D=t.h2`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,R=t.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`,V=t.div`
  display: none;
  flex-wrap: wrap;
  gap: 0.45rem;
`,N=t.span`
  min-height: 30px;
  border: 1px solid rgba(var(--accent-amber-rgb), 0.34);
  border-radius: 8px;
  background: rgba(var(--accent-amber-rgb), 0.08);
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.55rem;
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.2;
`,O=t.div`
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Q=t.div`
  min-height: clamp(54px, 5.5vw, 70px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: clamp(0.65rem, 1.6vw, 0.95rem);
  display: grid;
  place-items: center;
  min-width: 0;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);

  img {
    max-width: min(150px, 100%);
    max-height: 34px;
    object-fit: contain;
  }
`,U=t.section`
  padding: clamp(2rem, 3.6vw, 3rem) clamp(1rem, 5vw, 5%);
  background: linear-gradient(180deg, var(--background-color) 0%, #ffffff 100%);
`,Y=t.div`
  width: min(100%, 720px);
  margin: 0 auto 1.55rem 0;
  text-align: left;
`,q=t.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,J=t.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
`,W=t.div`
  width: min(100%, 760px);
  margin: 0 auto 1.55rem;
  display: none;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,X=t.button`
  min-height: 44px;
  border-radius: 8px;
  border: 1px solid ${({$active:a})=>a?"var(--accent-amber)":"var(--border-color)"};
  background: ${({$active:a})=>a?"rgba(var(--accent-amber-rgb), 0.12)":"var(--card-bg)"};
  color: var(--text-color);
  padding: 0.65rem 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
`,Z=t(s.div)`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18.5rem), 1fr));
  gap: 0.85rem;
`,ee=t.section`
  width: min(100%, 1180px);
  margin: 0 auto clamp(1.15rem, 3vw, 2rem);

  &:last-child {
    margin-bottom: 0;
  }
`,re=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,te=t.h3`
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 1.08rem;
  line-height: 1.35;
  margin: 0;

  svg {
    color: var(--accent-amber);
  }
`,ae=t.span`
  color: var(--text-secondary);
  font-size: 0.84rem;
`,ie=t(s.article)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
  display: grid;
  gap: 0.75rem;
  min-height: 292px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  }
`,ne=t.div`
  min-height: 128px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 0.8rem;
  display: grid;
  place-items: center;

  img {
    max-width: min(180px, 100%);
    max-height: 64px;
    object-fit: contain;
  }
`,oe=t.div`
  display: grid;
  gap: 0.65rem;
`,se=t.h3`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,de=t.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
`,ce=t.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.45;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-color);

  strong {
    color: var(--text-color);
    font-weight: 700;
    margin-right: 0.45rem;
  }
`,me=t.section`
  padding: clamp(1.8rem, 3.2vw, 2.5rem) clamp(1rem, 5vw, 5%);
  background: #fff;
  border-top: 1px solid var(--border-color);
`,le=t.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  min-height: clamp(230px, 24vw, 300px);
  border-radius: 8px;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 2.6rem);
  display: grid;
  align-content: center;
  justify-items: start;
  text-align: left;
  background:
    linear-gradient(90deg, rgba(17, 17, 17, 0.94) 0%, rgba(17, 17, 17, 0.78) 44%, rgba(17, 17, 17, 0.18) 100%),
    image-set(
      url('/images/kmtech-partners-consultation-v2-960.webp') 1x type('image/webp'),
      url('/images/kmtech-partners-consultation-v2-1440.webp') 2x type('image/webp'),
      url('/images/kmtech-partners-consultation-v2.png') 2x type('image/png')
    ) center / cover no-repeat;
  box-shadow: 0 22px 58px rgba(15, 23, 42, 0.16);

  @media (max-width: 620px) {
    min-height: auto;
    background-position: 58% center;
  }
`,pe=t.h2`
  color: #fff;
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
  max-width: 16em;
`,ge=t.p`
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 34rem;
`,xe=t(S)`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  padding: 0.85rem 1.2rem;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: #121212;
    background: #e6b800;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`,p={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},he={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},ue=()=>{const{t:a}=v(),[o,g]=d.useState("all"),x=["all",...new Set(n.map(r=>r.industryKey))],c=d.useMemo(()=>o==="all"?n:n.filter(r=>r.industryKey===o),[o]),m=d.useMemo(()=>[...new Set(n.flatMap(r=>r.scopes))],[]),h=d.useMemo(()=>Object.entries(c.reduce((r,i)=>(r[i.industryKey]=r[i.industryKey]||[],r[i.industryKey].push(i),r),{})).map(([r,i])=>({industryKey:r,partners:i})),[c]),b=[{icon:e.jsx(w,{}),value:`${n.length}+`,label:a("partners_stat_partners")},{icon:e.jsx(f,{}),value:"2",label:a("partners_stat_industries")},{icon:e.jsx(y,{}),value:`${m.length}`,label:a("partners_stat_service_scope")}],l=r=>r==="partners_industry_automotive"?e.jsx(_,{}):r==="partners_industry_electronics"?e.jsx(z,{}):e.jsx(C,{}),u={"Hyundai Motor":"2019.03 - 현재",Kia:"2020.07 - 현재",Continental:"2021.11 - 현재","Kanavi Mobility":"2021.08 - 현재","LG Display":"2018.06 - 현재","LG Electronics":"2019.01 - 현재",Humax:"2022.04 - 현재"};return e.jsxs(j,{children:[e.jsx(P,{children:e.jsxs(M,{children:[e.jsxs(s.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(T,{children:a("partners_section_label")}),e.jsx(H,{children:"산업별 고객 레퍼런스"}),e.jsx(K,{children:a("partners_hero_desc")}),e.jsx(F,{initial:"hidden",animate:"visible",variants:p,children:b.map(r=>e.jsxs(I,{children:[e.jsx(L,{children:r.icon}),e.jsx(G,{children:r.value}),e.jsx(A,{children:r.label})]},r.label))})]}),e.jsxs($,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.12,duration:.45},children:[e.jsx(B,{children:e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 820px) 100vw, 42vw",alt:"",loading:"eager",decoding:"async"})}),e.jsxs(E,{children:[e.jsx(D,{children:a("partners_matrix_title")}),e.jsxs(R,{children:[n.length," ",a("partners_stat_partners")]})]}),e.jsx(V,{children:m.map(r=>e.jsx(N,{children:a(r)},r))}),e.jsx(O,{children:n.map(r=>e.jsx(Q,{children:e.jsx("img",{src:r.logo,alt:`${r.name} logo`,loading:"lazy",decoding:"async"})},r.name))})]})]})}),e.jsxs(U,{children:[e.jsxs(Y,{children:[e.jsx(q,{children:a("partners_catalog_label")}),e.jsx(J,{children:"산업별 고객사"})]}),e.jsx(W,{"aria-label":a("partners_filter_label"),children:x.map(r=>e.jsxs(X,{type:"button",$active:o===r,"aria-pressed":o===r,onClick:()=>g(r),children:[l(r),a(r==="all"?"partners_filter_all":r)]},r))}),h.map(r=>e.jsxs(ee,{children:[e.jsxs(re,{children:[e.jsxs(te,{children:[l(r.industryKey),a(r.industryKey)]}),e.jsxs(ae,{children:[r.partners.length," ",a("partners_stat_partners")]})]}),e.jsx(Z,{variants:p,initial:"hidden",animate:"visible",children:r.partners.map(i=>e.jsxs(ie,{variants:he,children:[e.jsx(ne,{children:e.jsx("img",{src:i.logo,alt:`${i.name} logo`,loading:"lazy",decoding:"async"})}),e.jsxs(oe,{children:[e.jsx(se,{children:i.name}),e.jsx(de,{children:a(i.industryKey)}),e.jsxs(ce,{children:[e.jsx("strong",{children:"파트너십 기간"}),u[i.name]]})]})]},i.name))})]},r.industryKey))]}),e.jsx(me,{children:e.jsxs(le,{children:[e.jsx(pe,{children:a("partners_cta_title")}),e.jsx(ge,{children:a("partners_cta_desc")}),e.jsxs(xe,{to:"/contact",children:[a("partners_cta_button")," ",e.jsx(k,{})]})]})})]})};export{ue as default};
