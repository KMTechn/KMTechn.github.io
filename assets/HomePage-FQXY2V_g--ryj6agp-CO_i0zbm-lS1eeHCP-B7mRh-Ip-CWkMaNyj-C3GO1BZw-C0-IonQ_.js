const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx-CmQhSrk9-D_40ZSbs.js","assets/index-Cw26RRU1.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"])))=>i.map(i=>d[i]);
import{_ as E}from"./three-bundle-BXl3LOEh.js";import{N as G,r as l,I as e,g as u,Y as S,e as M,a as g,b as P,D as i,d as K,u as O,c as $,l as T,s as X,f as Q,y as R,Q as Z,K as q}from"./index-Cw26RRU1.js";import{A as C,w as U,S as J,u as N,P as V,v as Y,r as j,s as f,n as F,x as o,i as v}from"./index-DM6CndqC-C5A4jazG-DjvQhGeV-BzSXu72R-Bhi-JCak-CE7iGsj2-C-yqistX-CFbEYI6j.js";const w=(s,t=w,r=t.f||(t.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx-CmQhSrk9.js","assets/index-Mp6_5dW4.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),y=(s,t=y,r=t.f||(t.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx.js","assets/index-HrEHLTiB.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),D=(s,t=D,r=t.f||(t.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2.js","assets/index-B1Oid0md.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),B=(s,t=B,r=t.f||(t.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb.js","assets/index-D81e9yNn.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),I=(s,t=I,r=t.f||(t.f=["assets/Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl.js","assets/index-BQwRlzHw.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),H=(s,t=H,r=t.f||(t.f=["assets/Globe-DI8te4ia-B4rHm9Ib.js","assets/index-DShMUXqZ.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),L=(s,t=L,r=t.f||(t.f=["assets/Globe-DI8te4ia.js","assets/three-bundle-BZQHYXQX.js"]))=>s.map(a=>r[a]),W=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,ee=i.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,se=i.div`
  width: ${s=>s.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,te=i.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function ie(){const{progress:s}=Z();return e.jsx(q,{center:!0,children:e.jsxs(W,{children:[e.jsxs(te,{children:[Math.round(s),"% Loaded"]}),e.jsx(ee,{children:e.jsx(se,{progress:s})})]})})}const re=l.lazy(()=>K(()=>O(()=>$(()=>T(()=>X(()=>Q(()=>R(()=>E(()=>import("./Globe-DI8te4ia-B4rHm9Ib-BexZ3JHl-BxtDPSAb-LxHLbiG2-DCQovIGx-CmQhSrk9-D_40ZSbs.js"),__vite__mapDeps([0,1,2,3])),w([0,1,2,3])),y([0,1,2,3])),D([0,1,2,3])),B([0,1,2,3])),I([0,1,2,3])),H([0,1,2,3])),L([0,1]))),ae=i.div`
  width: 100%;
`,ne=i(v)`
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
`,oe=i(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,le=i(o.div)`
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
`,ce=i(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,de=i(o.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,b=i(o.button)`
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
`,me=i(v)`
  background-color: var(--card-bg);
`,he=i(v)`
  text-align: center;
`,xe=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,pe=i(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,ue=i.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,ge=i.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,be=i.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ve=i(o.div)`
  margin-top: 3rem;
`,_e=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,je=i.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,fe=i.button`
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
`,we=i(o.div)`
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
`,ye=i(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,De=(s,t,r)=>{const a=(90-s)*(Math.PI/180),c=(t+180)*(Math.PI/180),m=-(r*Math.sin(a)*Math.cos(c)),h=r*Math.sin(a)*Math.sin(c),x=r*Math.cos(a);return new P(m,x,h)},ke=()=>{const{t:s}=G(),[t,r]=l.useState(0),a=l.useRef(null),[c,m]=l.useState(Date.now());l.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=De(37.5665,126.978,8),[x,Be]=l.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},p={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(C,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(U,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(J,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],A=[{icon:e.jsx(N,{}),title:s("strong_point_2_title"),desc:s("strong_point_2_desc")},{icon:e.jsx(V,{}),title:s("strong_point_5_title"),desc:s("strong_point_5_desc")},{icon:e.jsx(Y,{}),title:s("strong_point_6_title"),desc:s("strong_point_6_desc")}],z={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(ae,{children:[e.jsxs(ne,{children:[e.jsxs(oe,{variants:k,initial:"hidden",animate:"visible",children:[e.jsx(ce,{variants:p,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("hero_title")}})}),e.jsx(de,{variants:p,children:s("hero_subtitle")}),e.jsx(u,{to:"/about",children:e.jsxs(b,{variants:p,whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(j,{})]})})]}),e.jsx(le,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(S,{camera:{position:h,fov:50},children:[e.jsx(l.Suspense,{fallback:e.jsx(ie,{}),children:e.jsx(re,{...x})}),e.jsx(M,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:g.ROTATE,MIDDLE:g.DOLLY,RIGHT:g.PAN}})]},c)})]}),e.jsxs(me,{children:[e.jsx(f,{children:s("home_services_title")}),e.jsxs(_e,{children:[e.jsx(je,{children:_.map((n,d)=>e.jsxs(fe,{$isActive:t===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:s(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(we,{children:e.jsx(F,{mode:"wait",children:e.jsx(ye,{...z,children:s(_[t].descKey)},t)})}),e.jsx(u,{to:"/business",children:e.jsx(b,{whileHover:{scale:1.05},whileTap:{scale:.95},children:s("home_services_button")})})]})]}),e.jsxs(he,{children:[e.jsx(f,{children:s("home_strengths_title")}),e.jsx(xe,{children:A.map((n,d)=>e.jsxs(pe,{whileHover:{y:-10},children:[e.jsx(ue,{children:n.icon}),e.jsx(ge,{children:n.title}),e.jsx(be,{children:n.desc})]},d))}),e.jsx(ve,{children:e.jsx(u,{to:"/about",children:e.jsxs(b,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(j,{})]})})})]})]})};export{ke as default};
