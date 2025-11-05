const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC-CNnsu6BO--90Lij7H-83N5uQcx.js","assets/index-Dnaj-s7H.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"])))=>i.map(i=>d[i]);
import{_ as O}from"./three-bundle-BXl3LOEh.js";import{S as E,i as c,N as e,r as u,a as M,O as $,l as g,t as K,b as i,K as G,Q as I,J as q,$ as U,Z as H,q as P,y as S,U as N,D as R}from"./index-Dnaj-s7H.js";import{V,v as X,T as J,i as Z,x as Q,m as W,t as _,J as f,Z as F,y as o,_ as j}from"./index-DcRM_7WJ-ry7PdAK9-C2GFryUe-DOXVJi4E-LcW867k7-DIDx1fbU-DYg3NujQ-3XPA3s9X.js";const y=(s,t=y,r=t.f||(t.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC-CNnsu6BO--90Lij7H.js","assets/index-CLutqaTD.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),w=(s,t=w,r=t.f||(t.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC-CNnsu6BO.js","assets/index-Dpy1jt4m.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),B=(s,t=B,r=t.f||(t.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC.js","assets/index-pHMAmh7A.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),D=(s,t=D,r=t.f||(t.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo.js","assets/index-DOLuPoTd.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),C=(s,t=C,r=t.f||(t.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv.js","assets/index-Btihv0AO.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),z=(s,t=z,r=t.f||(t.f=["assets/Globe-Ca0-irBv-zs37uTd0.js","assets/index-U1410IF1.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>s.map(a=>r[a]),A=(s,t=A,r=t.f||(t.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>s.map(a=>r[a]),Y=i.div`
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
`;function ie(){const{progress:s}=N();return e.jsx(R,{center:!0,children:e.jsxs(Y,{children:[e.jsxs(te,{children:[Math.round(s),"% Loaded"]}),e.jsx(ee,{children:e.jsx(se,{progress:s})})]})})}const re=c.lazy(()=>G(()=>I(()=>q(()=>U(()=>H(()=>P(()=>S(()=>O(()=>import("./Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC-CNnsu6BO--90Lij7H-83N5uQcx.js"),__vite__mapDeps([0,1,2,3])),y([0,1,2,3])),w([0,1,2,3])),B([0,1,2,3])),D([0,1,2,3])),C([0,1,2,3])),z([0,1,2,3])),A([0,1]))),ae=i.div`
  width: 100%;
`,ne=i(j)`
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
`,ce=i(o.div)`
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
`,le=i(o.h1)`
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
`,me=i(j)`
  background-color: var(--card-bg);
`,he=i(j)`
  text-align: center;
`,pe=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,xe=i(o.div)`
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
`,ve=i.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,je=i(o.div)`
  margin-top: 3rem;
`,be=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,_e=i.div`
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
`,ye=i(o.div)`
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
`,we=i(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,Be=(s,t,r)=>{const a=(90-s)*(Math.PI/180),l=(t+180)*(Math.PI/180),m=-(r*Math.sin(a)*Math.cos(l)),h=r*Math.sin(a)*Math.sin(l),p=r*Math.cos(a);return new K(m,p,h)},Te=()=>{const{t:s}=E(),[t,r]=c.useState(0),a=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=Be(37.5665,126.978,8),[p,De]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),T={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},b=[{icon:e.jsx(V,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(X,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(J,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],k=[{icon:e.jsx(Z,{}),title:s("strong_point_2_title"),desc:s("strong_point_2_desc")},{icon:e.jsx(Q,{}),title:s("strong_point_5_title"),desc:s("strong_point_5_desc")},{icon:e.jsx(W,{}),title:s("strong_point_6_title"),desc:s("strong_point_6_desc")}],L={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(ae,{children:[e.jsxs(ne,{children:[e.jsxs(oe,{variants:T,initial:"hidden",animate:"visible",children:[e.jsx(le,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("hero_title")}})}),e.jsx(de,{variants:x,children:s("hero_subtitle")}),e.jsx(u,{to:"/about",children:e.jsxs(v,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(_,{})]})})]}),e.jsx(ce,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(M,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(ie,{}),children:e.jsx(re,{...p})}),e.jsx($,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:g.ROTATE,MIDDLE:g.DOLLY,RIGHT:g.PAN}})]},l)})]}),e.jsxs(me,{children:[e.jsx(f,{children:s("home_services_title")}),e.jsxs(be,{children:[e.jsx(_e,{children:b.map((n,d)=>e.jsxs(fe,{$isActive:t===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:s(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(ye,{children:e.jsx(F,{mode:"wait",children:e.jsx(we,{...L,children:s(b[t].descKey)},t)})}),e.jsx(u,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:s("home_services_button")})})]})]}),e.jsxs(he,{children:[e.jsx(f,{children:s("home_strengths_title")}),e.jsx(pe,{children:k.map((n,d)=>e.jsxs(xe,{whileHover:{y:-10},children:[e.jsx(ue,{children:n.icon}),e.jsx(ge,{children:n.title}),e.jsx(ve,{children:n.desc})]},d))}),e.jsx(je,{children:e.jsx(u,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(_,{})]})})})]})]})};export{Te as default};
