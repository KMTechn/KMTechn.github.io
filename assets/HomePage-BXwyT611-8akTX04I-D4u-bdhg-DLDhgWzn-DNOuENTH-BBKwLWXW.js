const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC-CNnsu6BO.js","assets/index-Dpy1jt4m.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"])))=>i.map(i=>d[i]);
import{_ as E}from"./three-bundle-BXl3LOEh.js";import{g as L,i as c,N as e,J as g,T as M,C,l as u,t as $,z as i,Z as G,q as I,X as O,G as K,y as V,M as R,E as q}from"./index-Dpy1jt4m.js";import{V as H,v as P,T as S,i as X,x as J,m as U,t as j,J as f,Z,y as o,_ as b}from"./index-DcRM_7WJ-ry7PdAK9-C2GFryUe-DOXVJi4E-LcW867k7-DIDx1fbU.js";const y=(t,s=y,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC.js","assets/index-pHMAmh7A.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>t.map(a=>r[a]),w=(t,s=w,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo.js","assets/index-DOLuPoTd.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>t.map(a=>r[a]),z=(t,s=z,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv.js","assets/index-Btihv0AO.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>t.map(a=>r[a]),k=(t,s=k,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0.js","assets/index-U1410IF1.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>t.map(a=>r[a]),T=(t,s=T,r=s.f||(s.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>t.map(a=>r[a]),F=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,N=i.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,W=i.div`
  width: ${t=>t.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,Q=i.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function Y(){const{progress:t}=R();return e.jsx(q,{center:!0,children:e.jsxs(F,{children:[e.jsxs(Q,{children:[Math.round(t),"% Loaded"]}),e.jsx(N,{children:e.jsx(W,{progress:t})})]})})}const ee=c.lazy(()=>G(()=>I(()=>O(()=>K(()=>V(()=>E(()=>import("./Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC-CNnsu6BO.js"),__vite__mapDeps([0,1,2,3])),y([0,1,2,3])),w([0,1,2,3])),z([0,1,2,3])),k([0,1,2,3])),T([0,1]))),te=i.div`
  width: 100%;
`,ie=i(b)`
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
`,se=i(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,re=i(o.div)`
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
`,ae=i(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,ne=i(o.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,v=i(o.button)`
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
`,oe=i(b)`
  background-color: var(--card-bg);
`,ce=i(b)`
  text-align: center;
`,le=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,de=i(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,me=i.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,he=i.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,pe=i.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,xe=i(o.div)`
  margin-top: 3rem;
`,ge=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,ue=i.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,ve=i.button`
  background-color: ${t=>t.$isActive?"var(--accent-amber)":"transparent"};
  color: ${t=>t.$isActive?"#121212":"var(--text-color)"};
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
    background-color: ${t=>!t.$isActive&&"var(--card-bg)"};
  }
`,be=i(o.div)`
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
`,_e=i(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,je=(t,s,r)=>{const a=(90-t)*(Math.PI/180),l=(s+180)*(Math.PI/180),m=-(r*Math.sin(a)*Math.cos(l)),h=r*Math.sin(a)*Math.sin(l),p=r*Math.cos(a);return new $(m,p,h)},ke=()=>{const{t}=L(),[s,r]=c.useState(0),a=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=je(37.5665,126.978,8),[p,fe]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),D={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(H,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(P,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(S,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],A=[{icon:e.jsx(X,{}),title:t("strong_point_2_title"),desc:t("strong_point_2_desc")},{icon:e.jsx(J,{}),title:t("strong_point_5_title"),desc:t("strong_point_5_desc")},{icon:e.jsx(U,{}),title:t("strong_point_6_title"),desc:t("strong_point_6_desc")}],B={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(te,{children:[e.jsxs(ie,{children:[e.jsxs(se,{variants:D,initial:"hidden",animate:"visible",children:[e.jsx(ae,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:t("hero_title")}})}),e.jsx(ne,{variants:x,children:t("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[t("hero_button")," ",e.jsx(j,{})]})})]}),e.jsx(re,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(M,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(ee,{...p})}),e.jsx(C,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(oe,{children:[e.jsx(f,{children:t("home_services_title")}),e.jsxs(ge,{children:[e.jsx(ue,{children:_.map((n,d)=>e.jsxs(ve,{$isActive:s===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:t(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(be,{children:e.jsx(Z,{mode:"wait",children:e.jsx(_e,{...B,children:t(_[s].descKey)},s)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:t("home_services_button")})})]})]}),e.jsxs(ce,{children:[e.jsx(f,{children:t("home_strengths_title")}),e.jsx(le,{children:A.map((n,d)=>e.jsxs(de,{whileHover:{y:-10},children:[e.jsx(me,{children:n.icon}),e.jsx(he,{children:n.title}),e.jsx(pe,{children:n.desc})]},d))}),e.jsx(xe,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[t("hero_button")," ",e.jsx(j,{})]})})})]})]})};export{ke as default};
