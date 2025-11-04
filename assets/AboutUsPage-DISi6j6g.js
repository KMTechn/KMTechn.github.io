import{j as e,r as h}from"./three-bundle-DMG25_7Q.js";import{d as t}from"./index-D0dg2X0r.js";import{P as b,S as l,g as d,h as _,i as f,j as u,k as y,l as j,m as v,n as w,F as K,o as k,p as F,a as m,b as S,q as z,r as C,s as O,t as P,u as q}from"./index-BOUopA-f.js";import{u as p}from"./i18n-DaXBaqKC.js";import{m as i,A as I}from"./animation-BcFAGHWn.js";import"./icons-DtnRUAqg.js";import"./map-B8zYJnfq.js";const T=t(d)`
  background-color: var(--card-bg);
  text-align: center;
`,D=t(i.div)`
  max-width: 800px;
  margin: 0 auto 4rem;
  h3 {
    font-size: 2.5rem;
    color: var(--accent-amber);
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
`,A=t(i.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,M=t(i.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,B=t.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,N=t.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  flex-grow: 1;
`,U=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
`,g=t(i.div)`
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }
`,G=t.div`
  height: 220px;
  overflow: hidden;
`,H=t.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;

  ${g}:hover & {
    transform: scale(1.05);
  }
`,R=t.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,E=t.div`
  font-size: 2.5rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,L=t.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-color);
`,Y=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,$=t(d)`
  background-color: var(--background-color);
  padding: 6rem 2rem;
`,X=t.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`,J=t.div`
  padding: 1.5rem;
  display: inline-block;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  min-width: 280px;
`,Q=t(J)`
  background: var(--accent-amber);
  color: #121212;
  font-weight: 700;
  box-shadow: 0 8px 25px -5px rgba(255, 193, 7, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
`,V=t.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`,W=t.p`
  font-size: 1rem;
  margin: 0.25rem 0 0;
  opacity: 0.8;
`,Z=t.ul`
  padding-top: 2rem;
  position: relative;
  list-style: none;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 2rem;
    background: var(--border-color);
  }
`,ee=t.li`
  display: inline-block;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    width: 50%;
    height: 2rem;
    border-top: 1px solid var(--border-color);
  }

  &::after {
    left: 50%;
    border-left: 1px solid var(--border-color);
  }

  &:first-child::before, &:last-child::after {
    border: 0 none;
  }

  &:last-child::before {
    border-right: 1px solid var(--border-color);
    border-radius: 0 6px 0 0;
  }

  &:first-child::after {
    border-radius: 6px 0 0 0;
  }
`,te=t(i.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.25rem;
  min-width: 250px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }
`,re=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,oe=t.div`
  font-size: 1.5rem;
  color: var(--accent-amber);
`,ie=t.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  text-align: left;
`,ne=t(i.div)`
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid var(--divider-color);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,se=t.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
`,ae=t.span`
  color: var(--text-secondary);
`,ce=t.span`
  font-weight: 500;
`,le=({node:r})=>{const[s,c]=h.useState(!1),{t:n}=p(),o=n(r.membersKey,{returnObjects:!0});return e.jsxs(te,{onClick:()=>c(!s),layout:!0,children:[e.jsxs(re,{children:[e.jsx(oe,{children:r.icon}),e.jsx(ie,{children:n(r.titleKey)}),e.jsx(i.div,{animate:{rotate:s?180:0},children:e.jsx(q,{size:14})})]}),e.jsx(I,{children:s&&Array.isArray(o)&&e.jsx(ne,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:o.map((a,x)=>e.jsxs(se,{children:[e.jsx(ae,{children:a.role}),e.jsx(ce,{children:a.name})]},x))})})]})},_e=()=>{const{t:r}=p(),s=[{icon:e.jsx(_,{}),titleKey:"pillar_credibility"},{icon:e.jsx(f,{}),titleKey:"pillar_stability"},{icon:e.jsx(u,{}),titleKey:"pillar_environmental_quality"},{icon:e.jsx(y,{}),titleKey:"pillar_customer_orientation"},{icon:e.jsx(j,{}),titleKey:"pillar_ethical_behavior"},{icon:e.jsx(v,{}),titleKey:"pillar_company_development"}],c=[{icon:e.jsx(w,{}),img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_1_title",descKey:"strong_point_1_desc"},{icon:e.jsx(K,{}),img:"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:e.jsx(k,{}),img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_3_title",descKey:"strong_point_3_desc"},{icon:e.jsx(F,{}),img:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",titleKey:"strong_point_4_title",descKey:"strong_point_4_desc"},{icon:e.jsx(m,{}),img:"https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:e.jsx(S,{}),img:"https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop",titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],n={ceo:{titleKey:"org_ceo",nameKey:"org_ceo_name"},departments:[{icon:e.jsx(z,{}),titleKey:"org_marketing_engineering_title",membersKey:"org_marketing_engineering_members"},{icon:e.jsx(C,{}),titleKey:"org_qc_technical_title",membersKey:"org_qc_technical_members"},{icon:e.jsx(O,{}),titleKey:"org_product_control_title",membersKey:"org_product_control_members"},{icon:e.jsx(m,{}),titleKey:"org_3pl_title",membersKey:"org_3pl_members"},{icon:e.jsx(P,{}),titleKey:"org_management_title",membersKey:"org_management_members"}]};return e.jsxs(b,{children:[e.jsxs(T,{children:[e.jsx(l,{children:r("about_ideology_title")}),e.jsxs(D,{children:[e.jsx("h3",{children:r("principle_customer_centered")}),e.jsx("p",{children:r("about_ideology_desc")})]}),e.jsx(A,{children:s.map(o=>e.jsxs(M,{whileHover:{y:-10},children:[e.jsx(B,{children:o.icon}),e.jsx(N,{children:r(o.titleKey)})]},o.titleKey))})]}),e.jsxs(d,{children:[e.jsx(l,{children:r("about_strong_points_title")}),e.jsx(U,{children:c.map((o,a)=>e.jsxs(g,{whileHover:{y:-5},children:[e.jsx(G,{children:e.jsx(H,{style:{backgroundImage:`url(${o.img})`}})}),e.jsxs(R,{children:[e.jsx(E,{children:o.icon}),e.jsx(L,{children:r(o.titleKey)}),e.jsx(Y,{children:r(o.descKey)})]})]},a))})]}),e.jsxs($,{children:[e.jsx(l,{children:r("about_org_title")}),e.jsxs(X,{children:[e.jsxs(Q,{children:[e.jsx(V,{children:r(n.ceo.nameKey)}),e.jsx(W,{children:r(n.ceo.titleKey)})]}),e.jsx(Z,{children:n.departments.map(o=>e.jsx(ee,{children:e.jsx(le,{node:o})},o.titleKey))})]})]})]})};export{_e as default};
