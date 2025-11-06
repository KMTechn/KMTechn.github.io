import{j as e}from"./three-vendor-I5c4ovf2.js";import"./react-vendor-BvbQ_S-X.js";import{e as m,f as y,g,h as v,m as r,S as k,d as t,i as K,j as x,k as w,l as C,c as S,n as z}from"./index-DfVEVYYD.js";import{u as L}from"./i18n-vendor-Bdmv85-f.js";const P=t.div`
  color: var(--text-color);
  overflow-x: hidden;
`,c=t(r.div)`
  background-color: var(--card-bg);
  padding: 3rem 5%;
  border-radius: 12px;
  margin-bottom: 4rem;
`,l=t.div`
  margin-bottom: 4rem;
  &:last-child {
    margin-bottom: 0;
  }
`,d=t.h3`
  font-size: 2.2rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
  text-align: center;
`,T=t.p`
  margin-bottom: 3rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
`,F=t(r.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,B=t(r.div)`
  background: var(--background-color);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`,A=t.h4`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-color);
  font-weight: 600;
`,D=t.ul`
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    &::before {
      content: '•';
      color: var(--accent-amber);
      margin-right: 0.8rem;
      font-weight: bold;
    }
  }
`,G=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    width: 4px;
    background-color: var(--border-color);
    border-radius: 2px;
  }
`,$=t(r.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  padding-left: 50px;
`,H=t.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--accent-amber);
  color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 4px solid var(--card-bg);
`,X=t.div`
  background: var(--background-color);
  padding: 1.5rem;
  border-radius: 12px;
  flex: 1;
  border: 1px solid var(--border-color);
`,E=t.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,I=t.p`
  line-height: 1.6;
`,M=z`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,R=t.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
`,V=t(r.div)`
  display: flex;
  animation: ${M} 40s linear infinite;
`,W=t.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  margin: 0 1rem;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
`,O=t.img`
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
`,N=()=>{const{t:o}=L(),_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},n={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},a=i=>{const s=o(i,{returnObjects:!0});return Array.isArray(s)?s:[s]},h=[{icon:e.jsx(m,{}),title:o("tpl_warehouse_title"),items:a("tpl_warehouse_items")},{icon:e.jsx(y,{}),title:o("tpl_inspection_title"),items:a("tpl_inspection_items")},{icon:e.jsx(g,{}),title:o("tpl_packaging_title"),items:a("tpl_packaging_items")}],b=[{icon:e.jsx(m,{}),titleKey:"process_step_1_title",descKey:"process_step_1_desc"},{icon:e.jsx(K,{}),titleKey:"process_step_2_title",descKey:"process_step_2_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_3_title",descKey:"process_step_3_desc"},{icon:e.jsx(g,{}),titleKey:"process_step_4_title",descKey:"process_step_4_desc"},{icon:e.jsx(w,{}),titleKey:"process_step_5_title",descKey:"process_step_5_desc"},{icon:e.jsx(C,{}),titleKey:"process_step_6_title",descKey:"process_step_6_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_7_title",descKey:"process_step_7_desc"},{icon:e.jsx(S,{}),titleKey:"process_step_8_title",descKey:"process_step_8_desc"}],p=[{name:"Continental",logo:"/logos/continental.jpeg"},{name:"Humax",logo:"/logos/humax.jpeg"},{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi mobility.jpeg"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"LG Display",logo:"/logos/LG_Display_logo_(english).png"},{name:"LG Electronics",logo:"/logos/LG electronics.png"}],f=[...p,...p];return e.jsx(P,{children:e.jsxs(v,{children:[e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:e.jsx(k,{children:o("business_title")})}),e.jsx(c,{variants:n,children:e.jsxs(l,{children:[e.jsx(d,{children:o("tpl_biz_title")}),e.jsx(T,{children:o("tpl_biz_desc")}),e.jsx(F,{variants:_,initial:"hidden",animate:"visible",children:h.map((i,s)=>e.jsxs(B,{variants:n,children:[e.jsxs(A,{children:[i.icon," ",i.title]}),e.jsx(D,{children:i.items.map((u,j)=>e.jsx("li",{children:u},j))})]},s))})]})}),e.jsx(c,{variants:n,children:e.jsxs(l,{children:[e.jsx(d,{children:o("tpl_work_process_title")}),e.jsx(G,{children:b.map((i,s)=>e.jsxs($,{variants:n,children:[e.jsx(H,{children:i.icon}),e.jsxs(X,{children:[e.jsx(E,{children:o(i.titleKey)}),e.jsx(I,{children:o(i.descKey)})]})]},s))})]})}),e.jsx(c,{variants:n,children:e.jsxs(l,{children:[e.jsx(d,{children:o("core_customers_title")}),e.jsx(R,{children:e.jsx(V,{children:f.map((i,s)=>e.jsx(W,{children:e.jsx(O,{src:i.logo,alt:`${i.name} logo`})},`${i.name}-${s}`))})})]})})]})})};export{N as default};
//# sourceMappingURL=BusinessPage-CHgBJTC3.js.map
