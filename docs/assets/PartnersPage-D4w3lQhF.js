import{j as o}from"./three-vendor-I5c4ovf2.js";import"./react-vendor-BvbQ_S-X.js";import{a0 as g,N as m,B as c,z as n,D as i}from"./index-FwG3UEV9.js";import{u as d}from"./i18n-vendor-Bdmv85-f.js";const p=n(i.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  justify-items: center;
`,t=n(i.div)`
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
`,x=n.img`
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${t}:hover & {
    transform: scale(1.05);
  }
`,b=()=>{const{t:s}=d(),e=[{name:"Continental",logo:"/logos/continental.jpeg"},{name:"Humax",logo:"/logos/humax.jpeg"},{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi mobility.jpeg"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"LG Display",logo:"/logos/LG_Display_logo_(english).png"},{name:"LG Electronics",logo:"/logos/LG electronics.png"}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return o.jsx(g,{children:o.jsxs(m,{children:[o.jsx(c,{children:s("core_customers_title")}),o.jsx(p,{variants:r,initial:"hidden",animate:"visible",children:e.map(a=>o.jsx(t,{variants:l,children:o.jsx(x,{src:a.logo,alt:`${a.name} logo`})},a.name))})]})})};export{b as default};
//# sourceMappingURL=PartnersPage-D4w3lQhF.js.map
