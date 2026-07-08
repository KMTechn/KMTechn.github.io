import{u as z,r as c,c as n,j as e,P as S,Q as C,T,U as P,m as s,x as F,e as I,d as a,F as K,b as $,V as H,L}from"./index-do66z6EZ.js";const G=a.section`
  min-height: clamp(360px, 48vh, 500px);
  display: flex;
  align-items: center;
  padding: clamp(3.6rem, 5.8vw, 5rem) clamp(1rem, 5vw, 5%) clamp(1.4rem, 3vw, 2.3rem);
  background:
    radial-gradient(circle at 83% 18%, rgba(var(--accent-amber-rgb), 0.11), transparent 22rem),
    linear-gradient(180deg, #ffffff 0%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;

  @media (max-width: 820px) {
    min-height: auto;
  }
`,A=a.div`
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
`,B=a.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,D=a.h1`
  color: var(--text-color);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
  word-break: keep-all;
`,E=a.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 1.5rem;

  @media (max-width: 820px) {
    margin-left: auto;
    margin-right: auto;
  }
`,N=a(s.div)`
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
`,R=a.div`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem 1.05rem;
  min-width: 0;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.05);

  @media (max-width: 520px) {
    padding: 0.78rem 0.55rem;
    text-align: center;
  }
`,V=a.div`
  color: var(--accent-amber);
  margin-bottom: 0.6rem;

  @media (max-width: 520px) {
    margin-bottom: 0.35rem;
  }
`,O=a.div`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`,Q=a.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  word-break: keep-all;

  @media (max-width: 520px) {
    font-size: 0.72rem;
  }
`,U=a(s.div)`
  position: relative;
  width: 100%;
  max-width: 620px;
  display: grid;
  gap: 0.8rem;
  padding: clamp(0.75rem, 2vw, 1rem);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86)),
    radial-gradient(circle at 14% 18%, rgba(var(--accent-amber-rgb), 0.13), transparent 16rem);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.12);
  min-width: 0;

  @media (max-width: 820px) {
    max-width: 640px;
    margin: 0 auto;
  }
`,W=a.div`
  position: relative;
  min-height: clamp(150px, 20vw, 230px);
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
`,Y=a.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.2rem 0.25rem 0;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,q=a.h2`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,J=a.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`,X=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,Z=a.span`
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
`,ee=a.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,re=a.div`
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
`,ae=a.section`
  padding: clamp(2.2rem, 4vw, 3.5rem) clamp(1rem, 5vw, 5%);
  background: linear-gradient(180deg, var(--background-color) 0%, #ffffff 100%);
`,h=a.div`
  width: min(100%, 720px);
  margin: 0 auto 2rem;
  text-align: center;
`,b=a.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,v=a.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
`,u=a.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`,ie=a.div`
  width: min(100%, 760px);
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,te=a.button`
  min-height: 44px;
  border-radius: 8px;
  border: 1px solid ${({$active:i})=>i?"var(--accent-amber)":"var(--border-color)"};
  background: ${({$active:i})=>i?"rgba(var(--accent-amber-rgb), 0.12)":"var(--card-bg)"};
  color: var(--text-color);
  padding: 0.65rem 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
`,ne=a(s.div)`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
`,oe=a.section`
  width: min(100%, 1180px);
  margin: 0 auto clamp(1.5rem, 4vw, 2.5rem);

  &:last-child {
    margin-bottom: 0;
  }
`,se=a.div`
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
`,de=a.h3`
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
`,ce=a.span`
  color: var(--text-secondary);
  font-size: 0.84rem;
`,le=a(s.article)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
  display: grid;
  gap: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  }
`,me=a.div`
  min-height: 116px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 1rem;
  display: grid;
  place-items: center;

  img {
    max-width: min(180px, 100%);
    max-height: 64px;
    object-fit: contain;
  }
`,pe=a.div`
  display: grid;
  gap: 0.5rem;
`,xe=a.h3`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,ge=a.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
`,f=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,w=a.span`
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--background-color);
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.2;
  padding: 0.35rem 0.55rem;
`,he=a.section`
  padding: clamp(3rem, 5vw, 4.2rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
  text-align: center;
`,be=a.section`
  padding: clamp(3rem, 5vw, 4.6rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
`,ve=a.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;

  @media (max-width: 620px) {
    display: none;
  }
`,ue=a.table`
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
`,l=a.th`
  text-align: left;
  color: var(--text-color);
  font-size: 0.78rem;
  line-height: 1.35;
  padding: 0.85rem;
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
`,m=a.td`
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.45;
  padding: 0.85rem;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
`,fe=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  color: ${({$active:i})=>i?"#121212":"transparent"};
  background: ${({$active:i})=>i?"var(--accent-amber)":"var(--background-color)"};
  border: 1px solid ${({$active:i})=>i?"var(--accent-amber)":"var(--border-color)"};
`,we=a.div`
  display: none;

  @media (max-width: 620px) {
    width: min(100%, 1180px);
    margin: 0 auto;
    display: grid;
    gap: 0.75rem;
  }
`,ye=a.article`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
`,je=a.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
`,_e=a.strong`
  color: var(--text-color);
  font-size: 0.98rem;
  line-height: 1.3;
`,ke=a.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`,Me=a.div`
  width: min(100%, 620px);
  margin: 0 auto;
`,ze=a.h2`
  color: var(--text-color);
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
`,Se=a.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,Ce=a(L)`
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
`,y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},Te={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},Fe=()=>{const{t:i}=z(),[o,j]=c.useState("all"),_=["all",...new Set(n.map(r=>r.industryKey))],p=c.useMemo(()=>o==="all"?n:n.filter(r=>r.industryKey===o),[o]),d=c.useMemo(()=>[...new Set(n.flatMap(r=>r.scopes))],[]),k=c.useMemo(()=>Object.entries(p.reduce((r,t)=>(r[t.industryKey]=r[t.industryKey]||[],r[t.industryKey].push(t),r),{})).map(([r,t])=>({industryKey:r,partners:t})),[p]),M=[{icon:e.jsx(S,{}),value:`${n.length}+`,label:i("partners_stat_partners")},{icon:e.jsx(C,{}),value:"2",label:i("partners_stat_industries")},{icon:e.jsx(T,{}),value:`${d.length}`,label:i("partners_stat_service_scope")}],x=r=>r==="partners_industry_automotive"?e.jsx(K,{}):r==="partners_industry_electronics"?e.jsx($,{}):e.jsx(H,{});return e.jsxs(P,{children:[e.jsx(G,{children:e.jsxs(A,{children:[e.jsxs(s.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(B,{children:i("partners_section_label")}),e.jsx(D,{children:i("core_customers_title")}),e.jsx(E,{children:i("partners_hero_desc")}),e.jsx(N,{initial:"hidden",animate:"visible",variants:y,children:M.map(r=>e.jsxs(R,{children:[e.jsx(V,{children:r.icon}),e.jsx(O,{children:r.value}),e.jsx(Q,{children:r.label})]},r.label))})]}),e.jsxs(U,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.12,duration:.45},children:[e.jsx(W,{children:e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 820px) 100vw, 42vw",alt:"",loading:"eager",decoding:"async"})}),e.jsxs(Y,{children:[e.jsx(q,{children:i("partners_matrix_title")}),e.jsxs(J,{children:[n.length," ",i("partners_stat_partners")]})]}),e.jsx(X,{children:d.map(r=>e.jsx(Z,{children:i(r)},r))}),e.jsx(ee,{children:n.map(r=>e.jsx(re,{children:e.jsx("img",{src:r.logo,alt:`${r.name} logo`,loading:"lazy",decoding:"async"})},r.name))})]})]})}),e.jsxs(ae,{children:[e.jsxs(h,{children:[e.jsx(b,{children:i("partners_catalog_label")}),e.jsx(v,{children:i("partners_reference_title")}),e.jsx(u,{children:i("partners_reference_desc")})]}),e.jsx(ie,{"aria-label":i("partners_filter_label"),children:_.map(r=>e.jsxs(te,{type:"button",$active:o===r,"aria-pressed":o===r,onClick:()=>j(r),children:[x(r),i(r==="all"?"partners_filter_all":r)]},r))}),k.map(r=>e.jsxs(oe,{children:[e.jsxs(se,{children:[e.jsxs(de,{children:[x(r.industryKey),i(r.industryKey)]}),e.jsxs(ce,{children:[r.partners.length," ",i("partners_stat_partners")]})]}),e.jsx(ne,{variants:y,initial:"hidden",animate:"visible",children:r.partners.map(t=>e.jsxs(le,{variants:Te,children:[e.jsx(me,{children:e.jsx("img",{src:t.logo,alt:`${t.name} logo`,loading:"lazy",decoding:"async"})}),e.jsxs(pe,{children:[e.jsx(xe,{children:t.name}),e.jsx(ge,{children:i(t.industryKey)}),e.jsx(f,{children:t.scopes.map(g=>e.jsx(w,{children:i(g)},g))})]})]},t.name))})]},r.industryKey))]}),e.jsxs(be,{children:[e.jsxs(h,{children:[e.jsx(b,{children:i("partners_matrix_label")}),e.jsx(v,{children:i("partners_matrix_title")}),e.jsx(u,{children:i("partners_matrix_desc")})]}),e.jsx(ve,{children:e.jsxs(ue,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(l,{children:i("partners_stat_partners")}),e.jsx(l,{children:i("partners_stat_industries")}),d.map(r=>e.jsx(l,{children:i(r)},r))]})}),e.jsx("tbody",{children:n.map(r=>e.jsxs("tr",{children:[e.jsx(m,{children:e.jsx("strong",{children:r.name})}),e.jsx(m,{children:i(r.industryKey)}),d.map(t=>e.jsx(m,{children:e.jsx(fe,{$active:r.scopes.includes(t),"aria-label":r.scopes.includes(t)?i(t):"",children:e.jsx(F,{})})},t))]},r.name))})]})}),e.jsx(we,{children:n.map(r=>e.jsxs(ye,{children:[e.jsxs(je,{children:[e.jsx(_e,{children:r.name}),e.jsx(ke,{children:i(r.industryKey)})]}),e.jsx(f,{children:r.scopes.map(t=>e.jsx(w,{children:i(t)},t))})]},r.name))})]}),e.jsx(he,{children:e.jsxs(Me,{children:[e.jsx(ze,{children:i("partners_cta_title")}),e.jsx(Se,{children:i("partners_cta_desc")}),e.jsxs(Ce,{to:"/contact",children:[i("partners_cta_button")," ",e.jsx(I,{})]})]})})]})};export{Fe as default};
