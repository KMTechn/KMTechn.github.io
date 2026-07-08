import{u as C,r as c,c as n,j as e,Q as S,C as T,T as P,U as K,m as s,x as F,e as H,d as i,F as I,b as L,V as G,L as $}from"./index-BupFNGi0.js";const A=i.section`
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
`,B=i.div`
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
`,D=i.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,E=i.h1`
  color: var(--text-color);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
  word-break: keep-all;
`,N=i.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 1.5rem;

  @media (max-width: 820px) {
    margin-left: auto;
    margin-right: auto;
  }
`,R=i(s.div)`
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
`,V=i.div`
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
`,O=i.div`
  color: var(--accent-amber);
  margin-bottom: 0.6rem;

  @media (max-width: 520px) {
    margin-bottom: 0.35rem;
  }
`,Q=i.div`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`,U=i.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  word-break: keep-all;

  @media (max-width: 520px) {
    font-size: 0.72rem;
  }
`,W=i(s.div)`
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
`,Y=i.div`
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
`,q=i.div`
  display: none;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.2rem 0.25rem 0;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,J=i.h2`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,X=i.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`,Z=i.div`
  display: none;
  flex-wrap: wrap;
  gap: 0.45rem;
`,ee=i.span`
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
`,re=i.div`
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,ie=i.div`
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
`,te=i.section`
  padding: clamp(2rem, 3.6vw, 3rem) clamp(1rem, 5vw, 5%);
  background: linear-gradient(180deg, var(--background-color) 0%, #ffffff 100%);
`,h=i.div`
  width: min(100%, 720px);
  margin: 0 auto 1.55rem 0;
  text-align: left;
`,b=i.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,u=i.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
`,v=i.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`,ae=i.div`
  width: min(100%, 760px);
  margin: 0 auto 1.55rem;
  display: none;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,ne=i.button`
  min-height: 44px;
  border-radius: 8px;
  border: 1px solid ${({$active:t})=>t?"var(--accent-amber)":"var(--border-color)"};
  background: ${({$active:t})=>t?"rgba(var(--accent-amber-rgb), 0.12)":"var(--card-bg)"};
  color: var(--text-color);
  padding: 0.65rem 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
`,oe=i(s.div)`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18.5rem), 1fr));
  gap: 0.85rem;
`,se=i.section`
  width: min(100%, 1180px);
  margin: 0 auto clamp(1.15rem, 3vw, 2rem);

  &:last-child {
    margin-bottom: 0;
  }
`,de=i.div`
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
`,ce=i.h3`
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
`,le=i.span`
  color: var(--text-secondary);
  font-size: 0.84rem;
`,me=i(s.article)`
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
`,pe=i.div`
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
`,xe=i.div`
  display: grid;
  gap: 0.65rem;
`,ge=i.h3`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,he=i.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
`,f=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,w=i.span`
  min-height: 32px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--background-color);
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.2;
  padding: 0.42rem 0.6rem;
`,be=i.div`
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
`,ue=i.section`
  padding: clamp(1.8rem, 3.2vw, 2.5rem) clamp(1rem, 5vw, 5%);
  background: #fff;
  border-top: 1px solid var(--border-color);
`,ve=i.section`
  padding: clamp(2rem, 3.6vw, 3rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
`,fe=i.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;

  @media (max-width: 620px) {
    display: none;
  }
`,we=i.table`
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
`,l=i.th`
  text-align: left;
  color: var(--text-color);
  font-size: 0.78rem;
  line-height: 1.35;
  padding: 0.85rem;
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
`,m=i.td`
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.45;
  padding: 1rem 0.85rem;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
`,ye=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  color: ${({$active:t})=>t?"#121212":"transparent"};
  background: ${({$active:t})=>t?"var(--accent-amber)":"var(--background-color)"};
  border: 1px solid ${({$active:t})=>t?"var(--accent-amber)":"var(--border-color)"};
`,je=i.div`
  display: none;

  @media (max-width: 620px) {
    width: min(100%, 1180px);
    margin: 0 auto;
    display: grid;
    gap: 0.75rem;
  }
`,_e=i.article`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
`,ke=i.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
`,Me=i.strong`
  color: var(--text-color);
  font-size: 0.98rem;
  line-height: 1.3;
`,ze=i.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`,Ce=i.div`
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
`,Se=i.h2`
  color: #fff;
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
  max-width: 16em;
`,Te=i.p`
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 34rem;
`,Pe=i($)`
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
`,y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},Ke={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},He=()=>{const{t}=C(),[o,j]=c.useState("all"),_=["all",...new Set(n.map(r=>r.industryKey))],p=c.useMemo(()=>o==="all"?n:n.filter(r=>r.industryKey===o),[o]),d=c.useMemo(()=>[...new Set(n.flatMap(r=>r.scopes))],[]),k=c.useMemo(()=>Object.entries(p.reduce((r,a)=>(r[a.industryKey]=r[a.industryKey]||[],r[a.industryKey].push(a),r),{})).map(([r,a])=>({industryKey:r,partners:a})),[p]),M=[{icon:e.jsx(S,{}),value:`${n.length}+`,label:t("partners_stat_partners")},{icon:e.jsx(T,{}),value:"2",label:t("partners_stat_industries")},{icon:e.jsx(P,{}),value:`${d.length}`,label:t("partners_stat_service_scope")}],x=r=>r==="partners_industry_automotive"?e.jsx(I,{}):r==="partners_industry_electronics"?e.jsx(L,{}):e.jsx(G,{}),z={"Hyundai Motor":"2019.03 - 현재",Kia:"2020.07 - 현재",Continental:"2021.11 - 현재","Kanavi Mobility":"2021.08 - 현재","LG Display":"2018.06 - 현재","LG Electronics":"2019.01 - 현재",Humax:"2022.04 - 현재"};return e.jsxs(K,{children:[e.jsx(A,{children:e.jsxs(B,{children:[e.jsxs(s.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(D,{children:t("partners_section_label")}),e.jsx(E,{children:"산업별 고객 레퍼런스"}),e.jsx(N,{children:t("partners_hero_desc")}),e.jsx(R,{initial:"hidden",animate:"visible",variants:y,children:M.map(r=>e.jsxs(V,{children:[e.jsx(O,{children:r.icon}),e.jsx(Q,{children:r.value}),e.jsx(U,{children:r.label})]},r.label))})]}),e.jsxs(W,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.12,duration:.45},children:[e.jsx(Y,{children:e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 820px) 100vw, 42vw",alt:"",loading:"eager",decoding:"async"})}),e.jsxs(q,{children:[e.jsx(J,{children:t("partners_matrix_title")}),e.jsxs(X,{children:[n.length," ",t("partners_stat_partners")]})]}),e.jsx(Z,{children:d.map(r=>e.jsx(ee,{children:t(r)},r))}),e.jsx(re,{children:n.map(r=>e.jsx(ie,{children:e.jsx("img",{src:r.logo,alt:`${r.name} logo`,loading:"lazy",decoding:"async"})},r.name))})]})]})}),e.jsxs(te,{children:[e.jsxs(h,{children:[e.jsx(b,{children:t("partners_catalog_label")}),e.jsx(u,{children:"산업별 고객사"}),e.jsx(v,{children:t("partners_reference_desc")})]}),e.jsx(ae,{"aria-label":t("partners_filter_label"),children:_.map(r=>e.jsxs(ne,{type:"button",$active:o===r,"aria-pressed":o===r,onClick:()=>j(r),children:[x(r),t(r==="all"?"partners_filter_all":r)]},r))}),k.map(r=>e.jsxs(se,{children:[e.jsxs(de,{children:[e.jsxs(ce,{children:[x(r.industryKey),t(r.industryKey)]}),e.jsxs(le,{children:[r.partners.length," ",t("partners_stat_partners")]})]}),e.jsx(oe,{variants:y,initial:"hidden",animate:"visible",children:r.partners.map(a=>e.jsxs(me,{variants:Ke,children:[e.jsx(pe,{children:e.jsx("img",{src:a.logo,alt:`${a.name} logo`,loading:"lazy",decoding:"async"})}),e.jsxs(xe,{children:[e.jsx(ge,{children:a.name}),e.jsx(he,{children:t(a.industryKey)}),e.jsx(f,{children:a.scopes.map(g=>e.jsx(w,{children:t(g)},g))}),e.jsxs(be,{children:[e.jsx("strong",{children:"파트너십 기간"}),z[a.name]]})]})]},a.name))})]},r.industryKey))]}),e.jsxs(ve,{children:[e.jsxs(h,{children:[e.jsx(b,{children:t("partners_matrix_label")}),e.jsx(u,{children:t("partners_matrix_title")}),e.jsx(v,{children:t("partners_matrix_desc")})]}),e.jsx(fe,{children:e.jsxs(we,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(l,{children:t("partners_stat_partners")}),e.jsx(l,{children:t("partners_stat_industries")}),d.map(r=>e.jsx(l,{children:t(r)},r))]})}),e.jsx("tbody",{children:n.map(r=>e.jsxs("tr",{children:[e.jsx(m,{children:e.jsx("strong",{children:r.name})}),e.jsx(m,{children:t(r.industryKey)}),d.map(a=>e.jsx(m,{children:e.jsx(ye,{$active:r.scopes.includes(a),"aria-label":r.scopes.includes(a)?t(a):"",children:e.jsx(F,{})})},a))]},r.name))})]})}),e.jsx(je,{children:n.map(r=>e.jsxs(_e,{children:[e.jsxs(ke,{children:[e.jsx(Me,{children:r.name}),e.jsx(ze,{children:t(r.industryKey)})]}),e.jsx(f,{children:r.scopes.map(a=>e.jsx(w,{children:t(a)},a))})]},r.name))})]}),e.jsx(ue,{children:e.jsxs(Ce,{children:[e.jsx(Se,{children:t("partners_cta_title")}),e.jsx(Te,{children:t("partners_cta_desc")}),e.jsxs(Pe,{to:"/contact",children:[t("partners_cta_button")," ",e.jsx(H,{})]})]})})]})};export{He as default};
