import{d as p,B as e,T as r,X as h}from"./index-CxuDO7JV.js";import{L as b,g as _,S as f,C as y,F as u,V as j,M as v,x as K,q as w,R as k,A as m,b as z,w as $,j as q,G as A,D as H,u as X,m as c,a as d,z as i,f as B,H as D}from"./index-DysxAol--z3qlS56W.js";import"./three-bundle-BXl3LOEh.js";const G=r(d)`
  background-color: var(--card-bg);
  text-align: center;
`,L=r(i.div)`
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
`,M=r(i.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,R=r(i.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,T=r.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,V=r.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  flex-grow: 1;
`,Y=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
`,x=r(i.div)`
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
`,C=r.div`
  height: 220px;
  overflow: hidden;
`,S=r.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;

  ${x}:hover & {
    transform: scale(1.05);
  }
`,E=r.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,F=r.div`
  font-size: 2.5rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,I=r.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-color);
`,J=r.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,N=r(d)`
  background-color: var(--background-color);
  padding: 6rem 2rem;
`,O=r.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`,Q=r.div`
  padding: 1.5rem;
  display: inline-block;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  min-width: 280px;
`,U=r(Q)`
  background: var(--accent-amber);
  color: #121212;
  font-weight: 700;
  box-shadow: 0 8px 25px -5px rgba(255, 193, 7, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
`,W=r.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`,Z=r.p`
  font-size: 1rem;
  margin: 0.25rem 0 0;
  opacity: 0.8;
`,P=r.ul`
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
`,ee=r.li`
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
`,re=r(i.div)`
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
`,te=r.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,oe=r.div`
  font-size: 1.5rem;
  color: var(--accent-amber);
`,ie=r.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  text-align: left;
`,ne=r(i.div)`
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid var(--divider-color);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ae=r.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
`,se=r.span`
  color: var(--text-secondary);
`,le=r.span`
  font-weight: 500;
`,ce=({node:t})=>{const[a,l]=h.useState(!1),{t:n}=p(),o=n(t.membersKey,{returnObjects:!0});return e.jsxs(re,{onClick:()=>l(!a),layout:!0,children:[e.jsxs(te,{children:[e.jsx(oe,{children:t.icon}),e.jsx(ie,{children:n(t.titleKey)}),e.jsx(i.div,{animate:{rotate:a?180:0},children:e.jsx(B,{size:14})})]}),e.jsx(D,{children:a&&Array.isArray(o)&&e.jsx(ne,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:o.map((s,g)=>e.jsxs(ae,{children:[e.jsx(se,{children:s.role}),e.jsx(le,{children:s.name})]},g))})})]})},xe=()=>{const{t}=p(),a=[{icon:e.jsx(b,{}),titleKey:"pillar_credibility"},{icon:e.jsx(_,{}),titleKey:"pillar_stability"},{icon:e.jsx(f,{}),titleKey:"pillar_environmental_quality"},{icon:e.jsx(y,{}),titleKey:"pillar_customer_orientation"},{icon:e.jsx(u,{}),titleKey:"pillar_ethical_behavior"},{icon:e.jsx(j,{}),titleKey:"pillar_company_development"}],l=[{icon:e.jsx(v,{}),img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_1_title",descKey:"strong_point_1_desc"},{icon:e.jsx(K,{}),img:"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:e.jsx(w,{}),img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_3_title",descKey:"strong_point_3_desc"},{icon:e.jsx(k,{}),img:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",titleKey:"strong_point_4_title",descKey:"strong_point_4_desc"},{icon:e.jsx(m,{}),img:"https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2070&auto=format&fit=crop",titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:e.jsx(z,{}),img:"https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop",titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],n={ceo:{titleKey:"org_ceo",nameKey:"org_ceo_name"},departments:[{icon:e.jsx($,{}),titleKey:"org_marketing_engineering_title",membersKey:"org_marketing_engineering_members"},{icon:e.jsx(q,{}),titleKey:"org_qc_technical_title",membersKey:"org_qc_technical_members"},{icon:e.jsx(A,{}),titleKey:"org_product_control_title",membersKey:"org_product_control_members"},{icon:e.jsx(m,{}),titleKey:"org_3pl_title",membersKey:"org_3pl_members"},{icon:e.jsx(H,{}),titleKey:"org_management_title",membersKey:"org_management_members"}]};return e.jsxs(X,{children:[e.jsxs(G,{children:[e.jsx(c,{children:t("about_ideology_title")}),e.jsxs(L,{children:[e.jsx("h3",{children:t("principle_customer_centered")}),e.jsx("p",{children:t("about_ideology_desc")})]}),e.jsx(M,{children:a.map(o=>e.jsxs(R,{whileHover:{y:-10},children:[e.jsx(T,{children:o.icon}),e.jsx(V,{children:t(o.titleKey)})]},o.titleKey))})]}),e.jsxs(d,{children:[e.jsx(c,{children:t("about_strong_points_title")}),e.jsx(Y,{children:l.map((o,s)=>e.jsxs(x,{whileHover:{y:-5},children:[e.jsx(C,{children:e.jsx(S,{style:{backgroundImage:`url(${o.img})`}})}),e.jsxs(E,{children:[e.jsx(F,{children:o.icon}),e.jsx(I,{children:t(o.titleKey)}),e.jsx(J,{children:t(o.descKey)})]})]},s))})]}),e.jsxs(N,{children:[e.jsx(c,{children:t("about_org_title")}),e.jsxs(O,{children:[e.jsxs(U,{children:[e.jsx(W,{children:t(n.ceo.nameKey)}),e.jsx(Z,{children:t(n.ceo.titleKey)})]}),e.jsx(P,{children:n.departments.map(o=>e.jsx(ee,{children:e.jsx(ce,{node:o})},o.titleKey))})]})]})]})};export{xe as default};
