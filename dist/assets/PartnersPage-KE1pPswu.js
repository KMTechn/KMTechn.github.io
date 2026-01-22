import{j as o}from"./three-vendor-I5c4ovf2.js";import"./react-vendor-BvbQ_S-X.js";import{y as g,h as c,S as m,d as i,m as t}from"./index-CSR6kvYZ.js";import{u as d}from"./i18n-vendor-Bdmv85-f.js";const p=i(t.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  justify-items: center;
`,n=i(t.div)`
  background: var(--background-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`,x=i.img`
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s;

  ${n}:hover & {
    filter: grayscale(0%);
  }
`,v=()=>{const{t:e}=d(),s=[{name:"Continental",logo:"/logos/continental.jpeg"},{name:"Humax",logo:"/logos/humax.jpeg"},{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi mobility.jpeg"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"LG Display",logo:"/logos/LG_Display_logo_(english).png"},{name:"LG Electronics",logo:"/logos/LG electronics.png"}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsx(g,{children:o.jsxs(c,{children:[o.jsx(m,{children:e("core_customers_title")}),o.jsx(p,{variants:r,initial:"hidden",animate:"visible",children:s.map(a=>o.jsx(n,{variants:l,children:o.jsx(x,{src:a.logo,alt:`${a.name} logo`})},a.name))})]})})};export{v as default};
//# sourceMappingURL=PartnersPage-KE1pPswu.js.map
