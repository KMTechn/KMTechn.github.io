import{u as k,r as d,c as n,j as e,P as z,Q as S,T as C,U as M,m as s,x as T,e as P,d as t,F,b as K,V as $,L as H}from"./index-9--Ztt39.js";const I=t.section`
  min-height: clamp(500px, 62vh, 640px);
  display: flex;
  align-items: center;
  padding: clamp(5.75rem, 8vw, 7rem) clamp(1rem, 5vw, 5%) clamp(2.25rem, 4vw, 3.5rem);
  background:
    radial-gradient(circle at 83% 18%, rgba(var(--accent-amber-rgb), 0.11), transparent 22rem),
    linear-gradient(180deg, #ffffff 0%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;

  @media (max-width: 920px) {
    min-height: auto;
  }
`,L=t.div`
  width: min(100%, 1360px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(20rem, 1fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  min-width: 0;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,G=t.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,A=t.h1`
  color: var(--text-color);
  font-size: clamp(2.2rem, 5vw, 3.35rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
`,B=t.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 1.5rem;

  @media (max-width: 920px) {
    margin-left: auto;
    margin-right: auto;
  }
`,D=t(s.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  max-width: 600px;
  min-width: 0;

  @media (max-width: 920px) {
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.45rem;
  }
`,E=t.div`
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
`,R=t.div`
  color: var(--accent-amber);
  margin-bottom: 0.6rem;

  @media (max-width: 520px) {
    margin-bottom: 0.35rem;
  }
`,V=t.div`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`,N=t.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.35rem;

  @media (max-width: 520px) {
    font-size: 0.72rem;
  }
`,O=t(s.div)`
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

  @media (max-width: 920px) {
    max-width: 640px;
    margin: 0 auto;
  }
`,Q=t.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.35rem 0.25rem 0.2rem;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,U=t.h2`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,W=t.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`,Y=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,q=t.span`
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
`,J=t.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,X=t.div`
  min-height: clamp(72px, 7vw, 92px);
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
    max-height: 42px;
    object-fit: contain;
  }
`,Z=t.section`
  padding: clamp(4rem, 7vw, 6rem) clamp(1rem, 5vw, 5%);
  background: linear-gradient(180deg, var(--background-color) 0%, #ffffff 100%);
`,h=t.div`
  width: min(100%, 720px);
  margin: 0 auto 2rem;
  text-align: center;
`,b=t.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,v=t.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
`,u=t.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`,ee=t.div`
  width: min(100%, 760px);
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,re=t.button`
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
`,te=t(s.div)`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
`,ae=t.section`
  width: min(100%, 1180px);
  margin: 0 auto clamp(1.5rem, 4vw, 2.5rem);

  &:last-child {
    margin-bottom: 0;
  }
`,ie=t.div`
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
`,ne=t.h3`
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
`,oe=t.span`
  color: var(--text-secondary);
  font-size: 0.84rem;
`,se=t(s.article)`
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
`,ce=t.div`
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
`,de=t.div`
  display: grid;
  gap: 0.5rem;
`,le=t.h3`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,me=t.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
`,pe=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,xe=t.span`
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
`,ge=t.section`
  padding: clamp(3.5rem, 6vw, 5rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
  text-align: center;
`,he=t.section`
  padding: clamp(4rem, 7vw, 6rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
`,be=t.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
`,ve=t.table`
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
`,l=t.th`
  text-align: left;
  color: var(--text-color);
  font-size: 0.78rem;
  line-height: 1.35;
  padding: 0.85rem;
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
`,m=t.td`
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.45;
  padding: 0.85rem;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
`,ue=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  color: ${({$active:a})=>a?"#121212":"transparent"};
  background: ${({$active:a})=>a?"var(--accent-amber)":"var(--background-color)"};
  border: 1px solid ${({$active:a})=>a?"var(--accent-amber)":"var(--border-color)"};
`,fe=t.div`
  width: min(100%, 620px);
  margin: 0 auto;
`,we=t.h2`
  color: var(--text-color);
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
`,ye=t.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,je=t(H)`
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
`,f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},_e={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},ze=()=>{const{t:a}=k(),[o,w]=d.useState("all"),y=["all",...new Set(n.map(r=>r.industryKey))],p=d.useMemo(()=>o==="all"?n:n.filter(r=>r.industryKey===o),[o]),c=d.useMemo(()=>[...new Set(n.flatMap(r=>r.scopes))],[]),j=d.useMemo(()=>Object.entries(p.reduce((r,i)=>(r[i.industryKey]=r[i.industryKey]||[],r[i.industryKey].push(i),r),{})).map(([r,i])=>({industryKey:r,partners:i})),[p]),_=[{icon:e.jsx(z,{}),value:`${n.length}+`,label:a("partners_stat_partners")},{icon:e.jsx(S,{}),value:"2",label:a("partners_stat_industries")},{icon:e.jsx(C,{}),value:`${c.length}`,label:a("partners_stat_service_scope")}],x=r=>r==="partners_industry_automotive"?e.jsx(F,{}):r==="partners_industry_electronics"?e.jsx(K,{}):e.jsx($,{});return e.jsxs(M,{children:[e.jsx(I,{children:e.jsxs(L,{children:[e.jsxs(s.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(G,{children:a("partners_section_label")}),e.jsx(A,{children:a("core_customers_title")}),e.jsx(B,{children:a("partners_hero_desc")}),e.jsx(D,{initial:"hidden",animate:"visible",variants:f,children:_.map(r=>e.jsxs(E,{children:[e.jsx(R,{children:r.icon}),e.jsx(V,{children:r.value}),e.jsx(N,{children:r.label})]},r.label))})]}),e.jsxs(O,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.12,duration:.45},children:[e.jsxs(Q,{children:[e.jsx(U,{children:a("partners_matrix_title")}),e.jsxs(W,{children:[n.length," ",a("partners_stat_partners")]})]}),e.jsx(Y,{children:c.map(r=>e.jsx(q,{children:a(r)},r))}),e.jsx(J,{children:n.slice(0,6).map(r=>e.jsx(X,{children:e.jsx("img",{src:r.logo,alt:`${r.name} logo`,loading:"lazy",decoding:"async"})},r.name))})]})]})}),e.jsxs(Z,{children:[e.jsxs(h,{children:[e.jsx(b,{children:a("partners_catalog_label")}),e.jsx(v,{children:a("partners_reference_title")}),e.jsx(u,{children:a("partners_reference_desc")})]}),e.jsx(ee,{"aria-label":a("partners_filter_label"),children:y.map(r=>e.jsxs(re,{type:"button",$active:o===r,"aria-pressed":o===r,onClick:()=>w(r),children:[x(r),a(r==="all"?"partners_filter_all":r)]},r))}),j.map(r=>e.jsxs(ae,{children:[e.jsxs(ie,{children:[e.jsxs(ne,{children:[x(r.industryKey),a(r.industryKey)]}),e.jsxs(oe,{children:[r.partners.length," ",a("partners_stat_partners")]})]}),e.jsx(te,{variants:f,initial:"hidden",animate:"visible",children:r.partners.map(i=>e.jsxs(se,{variants:_e,children:[e.jsx(ce,{children:e.jsx("img",{src:i.logo,alt:`${i.name} logo`,loading:"lazy",decoding:"async"})}),e.jsxs(de,{children:[e.jsx(le,{children:i.name}),e.jsx(me,{children:a(i.industryKey)}),e.jsx(pe,{children:i.scopes.map(g=>e.jsx(xe,{children:a(g)},g))})]})]},i.name))})]},r.industryKey))]}),e.jsxs(he,{children:[e.jsxs(h,{children:[e.jsx(b,{children:a("partners_matrix_label")}),e.jsx(v,{children:a("partners_matrix_title")}),e.jsx(u,{children:a("partners_matrix_desc")})]}),e.jsx(be,{children:e.jsxs(ve,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(l,{children:a("partners_stat_partners")}),e.jsx(l,{children:a("partners_stat_industries")}),c.map(r=>e.jsx(l,{children:a(r)},r))]})}),e.jsx("tbody",{children:n.map(r=>e.jsxs("tr",{children:[e.jsx(m,{children:e.jsx("strong",{children:r.name})}),e.jsx(m,{children:a(r.industryKey)}),c.map(i=>e.jsx(m,{children:e.jsx(ue,{$active:r.scopes.includes(i),"aria-label":r.scopes.includes(i)?a(i):"",children:e.jsx(T,{})})},i))]},r.name))})]})})]}),e.jsx(ge,{children:e.jsxs(fe,{children:[e.jsx(we,{children:a("partners_cta_title")}),e.jsx(ye,{children:a("partners_cta_desc")}),e.jsxs(je,{to:"/contact",children:[a("partners_cta_button")," ",e.jsx(P,{})]})]})})]})};export{ze as default};
