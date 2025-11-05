const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx-CmQhSrk9.js","assets/index-Mp6_5dW4.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"])))=>i.map(i=>d[i]);
import{_ as A}from"./three-bundle-BXl3LOEh.js";import{R as E,r as c,k as e,f as g,G,Y as M,a as u,e as S,z as t,c as P,l as $,o as O,b as T,s as X,y as K,Z as R,X as Z}from"./index-Mp6_5dW4.js";import{A as q,w as U,S as J,u as Q,P as V,v as Y,r as f,i as j,s as C,a as o,n as b}from"./index-DM6CndqC-C5A4jazG-DjvQhGeV-BzSXu72R-Bhi-JCak-CE7iGsj2-C-yqistX.js";const w=(s,i=w,r=i.f||(i.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx.js","assets/index-HrEHLTiB.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),y=(s,i=y,r=i.f||(i.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2.js","assets/index-B1Oid0md.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),D=(s,i=D,r=i.f||(i.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb.js","assets/index-D81e9yNn.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),B=(s,i=B,r=i.f||(i.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl.js","assets/index-BQwRlzHw.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),I=(s,i=I,r=i.f||(i.f=["assets/Globe-DI8te4ia-B4rHm9Ib.js","assets/index-DShMUXqZ.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),H=(s,i=H,r=i.f||(i.f=["assets/Globe-DI8te4ia.js","assets/three-bundle-BZQHYXQX.js"]))=>s.map(a=>r[a]),N=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,F=t.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,W=t.div`
  width: ${s=>s.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,ee=t.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function se(){const{progress:s}=R();return e.jsx(Z,{center:!0,children:e.jsxs(N,{children:[e.jsxs(ee,{children:[Math.round(s),"% Loaded"]}),e.jsx(F,{children:e.jsx(W,{progress:s})})]})})}const te=c.lazy(()=>P(()=>$(()=>O(()=>T(()=>X(()=>K(()=>A(()=>import("./Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx-CmQhSrk9.js"),__vite__mapDeps([0,1,2,3])),w([0,1,2,3])),y([0,1,2,3])),D([0,1,2,3])),B([0,1,2,3])),I([0,1,2,3])),H([0,1]))),ie=t.div`
  width: 100%;
`,re=t(b)`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 5%;
  background: var(--background-color);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: 3rem 5%;
  }
`,ae=t(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,ne=t(o.div)`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 900px) {
    order: 1;
    width: 90%;
    max-width: 450px;
    margin: 0 auto 2rem;
    aspect-ratio: 1 / 1;
  }
`,oe=t(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,ce=t(o.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,v=t(o.button)`
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: 50px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--accent-amber);

  &:hover {
    background-color: transparent;
    color: var(--accent-amber);
  }
`,le=t(b)`
  background-color: var(--card-bg);
`,de=t(b)`
  text-align: center;
`,me=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,he=t(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,xe=t.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,pe=t.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,ge=t.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ue=t(o.div)`
  margin-top: 3rem;
`,ve=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,be=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,_e=t.button`
  background-color: ${s=>s.$isActive?"var(--accent-amber)":"transparent"};
  color: ${s=>s.$isActive?"#121212":"var(--text-color)"};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;

  &:hover:not(.active) {
    background-color: ${s=>!s.$isActive&&"var(--card-bg)"};
  }
`,fe=t(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 800px;
  min-height: 160px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,je=t(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,we=(s,i,r)=>{const a=(90-s)*(Math.PI/180),l=(i+180)*(Math.PI/180),m=-(r*Math.sin(a)*Math.cos(l)),h=r*Math.sin(a)*Math.sin(l),x=r*Math.cos(a);return new S(m,x,h)},He=()=>{const{t:s}=E(),[i,r]=c.useState(0),a=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=we(37.5665,126.978,8),[x,ye]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},p={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(q,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(U,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(J,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],L=[{icon:e.jsx(Q,{}),title:s("strong_point_2_title"),desc:s("strong_point_2_desc")},{icon:e.jsx(V,{}),title:s("strong_point_5_title"),desc:s("strong_point_5_desc")},{icon:e.jsx(Y,{}),title:s("strong_point_6_title"),desc:s("strong_point_6_desc")}],z={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(ie,{children:[e.jsxs(re,{children:[e.jsxs(ae,{variants:k,initial:"hidden",animate:"visible",children:[e.jsx(oe,{variants:p,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("hero_title")}})}),e.jsx(ce,{variants:p,children:s("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:p,whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(f,{})]})})]}),e.jsx(ne,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(G,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(se,{}),children:e.jsx(te,{...x})}),e.jsx(M,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(le,{children:[e.jsx(j,{children:s("home_services_title")}),e.jsxs(ve,{children:[e.jsx(be,{children:_.map((n,d)=>e.jsxs(_e,{$isActive:i===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:s(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(fe,{children:e.jsx(C,{mode:"wait",children:e.jsx(je,{...z,children:s(_[i].descKey)},i)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:s("home_services_button")})})]})]}),e.jsxs(de,{children:[e.jsx(j,{children:s("home_strengths_title")}),e.jsx(me,{children:L.map((n,d)=>e.jsxs(he,{whileHover:{y:-10},children:[e.jsx(xe,{children:n.icon}),e.jsx(pe,{children:n.title}),e.jsx(ge,{children:n.desc})]},d))}),e.jsx(ue,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(f,{})]})})})]})]})};export{He as default};
