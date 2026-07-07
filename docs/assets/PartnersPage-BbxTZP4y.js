import{C as h,r as c,E as n,A as r,ai as b,aj as v,ak as u,al as f,P as o,I as y,B as e,F as j,G as w,am as _,N as k}from"./index-DQuugmUd.js";const S=e.section`
  padding: clamp(5.5rem, 9vw, 8rem) clamp(1rem, 5vw, 5%) clamp(3rem, 6vw, 5rem);
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  border-bottom: 1px solid var(--border-color);
`,C=e.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(19rem, 0.9fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,z=e.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,P=e.h1`
  color: var(--text-color);
  font-size: clamp(2.2rem, 5vw, 3.35rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
`,F=e.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 620px;
  margin-bottom: 1.5rem;

  @media (max-width: 920px) {
    margin-left: auto;
    margin-right: auto;
  }
`,T=e(o.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  max-width: 560px;

  @media (max-width: 920px) {
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,L=e.div`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
`,A=e.div`
  color: var(--accent-amber);
  margin-bottom: 0.6rem;
`,I=e.div`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`,H=e.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.35rem;
`,$=e(o.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 920px) {
    max-width: 520px;
    margin: 0 auto;
  }
`,B=e.div`
  min-height: 92px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  place-items: center;

  &:first-child {
    grid-column: span 2;
  }

  img {
    max-width: 180px;
    max-height: 58px;
    object-fit: contain;
  }
`,E=e.section`
  padding: clamp(4rem, 7vw, 6rem) clamp(1rem, 5vw, 5%);
  background: var(--background-color);
`,M=e.div`
  width: min(100%, 720px);
  margin: 0 auto 2rem;
  text-align: center;
`,D=e.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,G=e.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
`,K=e.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`,N=e.div`
  width: min(100%, 760px);
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,R=e.button`
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
`,V=e(o.div)`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
`,O=e(o.article)`
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
`,Y=e.div`
  min-height: 116px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 1rem;
  display: grid;
  place-items: center;

  img {
    max-width: 180px;
    max-height: 64px;
    object-fit: contain;
  }
`,q=e.div`
  display: grid;
  gap: 0.5rem;
`,J=e.h3`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`,Q=e.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
`,U=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,W=e.span`
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
`,X=e.section`
  padding: clamp(3.5rem, 6vw, 5rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
  text-align: center;
`,Z=e.div`
  width: min(100%, 620px);
  margin: 0 auto;
`,rr=e.h2`
  color: var(--text-color);
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
`,er=e.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,ar=e(k)`
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
`,l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},tr={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},nr=()=>{const{t}=h(),[i,d]=c.useState("all"),m=["all",...new Set(n.map(a=>a.industryKey))],p=c.useMemo(()=>i==="all"?n:n.filter(a=>a.industryKey===i),[i]),g=[{icon:r.jsx(b,{}),value:`${n.length}+`,label:t("partners_stat_partners")},{icon:r.jsx(v,{}),value:"2",label:t("partners_stat_industries")},{icon:r.jsx(u,{}),value:"3PL",label:t("partners_stat_service_scope")}],x=a=>a==="partners_industry_automotive"?r.jsx(j,{}):a==="partners_industry_electronics"?r.jsx(w,{}):r.jsx(_,{});return r.jsxs(f,{children:[r.jsx(S,{children:r.jsxs(C,{children:[r.jsxs(o.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[r.jsx(z,{children:t("partners_section_label")}),r.jsx(P,{children:t("core_customers_title")}),r.jsx(F,{children:t("partners_hero_desc")}),r.jsx(T,{initial:"hidden",animate:"visible",variants:l,children:g.map(a=>r.jsxs(L,{children:[r.jsx(A,{children:a.icon}),r.jsx(I,{children:a.value}),r.jsx(H,{children:a.label})]},a.label))})]}),r.jsx($,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.12,duration:.45},children:n.slice(0,5).map(a=>r.jsx(B,{children:r.jsx("img",{src:a.logo,alt:`${a.name} logo`,loading:"lazy",decoding:"async"})},a.name))})]})}),r.jsxs(E,{children:[r.jsxs(M,{children:[r.jsx(D,{children:t("partners_catalog_label")}),r.jsx(G,{children:t("partners_section_title")}),r.jsx(K,{children:t("partners_section_desc")})]}),r.jsx(N,{"aria-label":t("partners_filter_label"),children:m.map(a=>r.jsxs(R,{type:"button",$active:i===a,"aria-pressed":i===a,onClick:()=>d(a),children:[x(a),t(a==="all"?"partners_filter_all":a)]},a))}),r.jsx(V,{variants:l,initial:"hidden",animate:"visible",children:p.map(a=>r.jsxs(O,{variants:tr,children:[r.jsx(Y,{children:r.jsx("img",{src:a.logo,alt:`${a.name} logo`,loading:"lazy",decoding:"async"})}),r.jsxs(q,{children:[r.jsx(J,{children:a.name}),r.jsx(Q,{children:t(a.industryKey)}),r.jsx(U,{children:a.scopes.map(s=>r.jsx(W,{children:t(s)},s))})]})]},a.name))})]}),r.jsx(X,{children:r.jsxs(Z,{children:[r.jsx(rr,{children:t("partners_cta_title")}),r.jsx(er,{children:t("partners_cta_desc")}),r.jsxs(ar,{to:"/contact",children:[t("partners_cta_button")," ",r.jsx(y,{})]})]})})]})};export{nr as default};
