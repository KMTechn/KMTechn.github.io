import{F as y,I as e,z as i,k as v}from"./index-lh4eiqWo.js";import{A as m,w as K,S as g,b as w,c as x,p as k,T as z,r as A,i as $,x as o,s as C}from"./index-DM6CndqC-C5A4jazG-DjvQhGeV-BzSXu72R-Bhi-JCak-CE7iGsj2-C-yqistX-CFbEYI6j-uGzCXOep-DjNzDNdy.js";import"./three-bundle-BXl3LOEh.js";const G=i.div`
  color: var(--text-color);
  overflow-x: hidden;
`,l=i(o.div)`
  background-color: var(--card-bg);
  padding: 3rem 5%;
  border-radius: 12px;
  margin-bottom: 4rem;
`,c=i.div`
  margin-bottom: 4rem;
  &:last-child {
    margin-bottom: 0;
  }
`,d=i.h3`
  font-size: 2.2rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
  text-align: center;
`,H=i.p`
  margin-bottom: 3rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
`,I=i(o.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,L=i(o.div)`
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
`,D=i.h4`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-color);
  font-weight: 600;
`,F=i.ul`
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
`,M=i.div`
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
`,S=i(o.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  padding-left: 50px;
`,T=i.div`
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
`,X=i.div`
  background: var(--background-color);
  padding: 1.5rem;
  border-radius: 12px;
  flex: 1;
  border: 1px solid var(--border-color);
`,E=i.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,O=i.p`
  line-height: 1.6;
`,Y=v`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,q=i.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
`,B=i(o.div)`
  display: flex;
  animation: ${Y} 40s linear infinite;
`,J=i.div`
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
`,Q=i.img`
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
`,R=()=>{const{t:r}=y(),_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},n={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},a=t=>{const s=r(t,{returnObjects:!0});return Array.isArray(s)?s:[s]},h=[{icon:e.jsx(m,{}),title:r("tpl_warehouse_title"),items:a("tpl_warehouse_items")},{icon:e.jsx(K,{}),title:r("tpl_inspection_title"),items:a("tpl_inspection_items")},{icon:e.jsx(g,{}),title:r("tpl_packaging_title"),items:a("tpl_packaging_items")}],b=[{icon:e.jsx(m,{}),titleKey:"process_step_1_title",descKey:"process_step_1_desc"},{icon:e.jsx(w,{}),titleKey:"process_step_2_title",descKey:"process_step_2_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_3_title",descKey:"process_step_3_desc"},{icon:e.jsx(g,{}),titleKey:"process_step_4_title",descKey:"process_step_4_desc"},{icon:e.jsx(k,{}),titleKey:"process_step_5_title",descKey:"process_step_5_desc"},{icon:e.jsx(z,{}),titleKey:"process_step_6_title",descKey:"process_step_6_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_7_title",descKey:"process_step_7_desc"},{icon:e.jsx(A,{}),titleKey:"process_step_8_title",descKey:"process_step_8_desc"}],p=[{name:"Continental",logo:"/logos/continental.jpeg"},{name:"Humax",logo:"/logos/humax.jpeg"},{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi mobility.jpeg"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"LG Display",logo:"/logos/LG_Display_logo_(english).png"},{name:"LG Electronics",logo:"/logos/LG electronics.png"}],f=[...p,...p];return e.jsx(G,{children:e.jsxs($,{children:[e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:e.jsx(C,{children:r("business_title")})}),e.jsx(l,{variants:n,children:e.jsxs(c,{children:[e.jsx(d,{children:r("tpl_biz_title")}),e.jsx(H,{children:r("tpl_biz_desc")}),e.jsx(I,{variants:_,initial:"hidden",animate:"visible",children:h.map((t,s)=>e.jsxs(L,{variants:n,children:[e.jsxs(D,{children:[t.icon," ",t.title]}),e.jsx(F,{children:t.items.map((j,u)=>e.jsx("li",{children:j},u))})]},s))})]})}),e.jsx(l,{variants:n,children:e.jsxs(c,{children:[e.jsx(d,{children:r("tpl_work_process_title")}),e.jsx(M,{children:b.map((t,s)=>e.jsxs(S,{variants:n,children:[e.jsx(T,{children:t.icon}),e.jsxs(X,{children:[e.jsx(E,{children:r(t.titleKey)}),e.jsx(O,{children:r(t.descKey)})]})]},s))})]})}),e.jsx(l,{variants:n,children:e.jsxs(c,{children:[e.jsx(d,{children:r("core_customers_title")}),e.jsx(q,{children:e.jsx(B,{children:f.map((t,s)=>e.jsx(J,{children:e.jsx(Q,{src:t.logo,alt:`${t.name} logo`})},`${t.name}-${s}`))})})]})})]})})};export{R as default};
