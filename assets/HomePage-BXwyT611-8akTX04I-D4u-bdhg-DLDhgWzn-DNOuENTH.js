const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC.js","assets/index-pHMAmh7A.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"])))=>i.map(i=>d[i]);
import{_ as M}from"./three-bundle-BXl3LOEh.js";import{f as A,i as c,N as e,Z as g,_ as B,w as E,l as u,t as $,a as t,X as C,G as I,W as G,b as K,x as O,c as P}from"./index-pHMAmh7A.js";import{V as H,v as R,T as S,i as X,x as Z,m as N,t as j,J as f,Z as U,g as o,_ as b}from"./index-DcRM_7WJ-ry7PdAK9-C2GFryUe-DOXVJi4E-LcW867k7.js";const y=(i,s=y,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo.js","assets/index-DOLuPoTd.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>i.map(a=>r[a]),w=(i,s=w,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv.js","assets/index-Btihv0AO.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>i.map(a=>r[a]),k=(i,s=k,r=s.f||(s.f=["assets/Globe-Ca0-irBv-zs37uTd0.js","assets/index-U1410IF1.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"]))=>i.map(a=>r[a]),z=(i,s=z,r=s.f||(s.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>i.map(a=>r[a]),q=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,W=t.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,F=t.div`
  width: ${i=>i.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,J=t.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function V(){const{progress:i}=O();return e.jsx(P,{center:!0,children:e.jsxs(q,{children:[e.jsxs(J,{children:[Math.round(i),"% Loaded"]}),e.jsx(W,{children:e.jsx(F,{progress:i})})]})})}const Q=c.lazy(()=>C(()=>I(()=>G(()=>K(()=>M(()=>import("./Globe-Ca0-irBv-zs37uTd0-B3tyj9Dv-BApWcCyo-C2pj9VvC.js"),__vite__mapDeps([0,1,2,3])),y([0,1,2,3])),w([0,1,2,3])),k([0,1,2,3])),z([0,1]))),Y=t.div`
  width: 100%;
`,ee=t(b)`
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
`,ie=t(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,te=t(o.div)`
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
`,se=t(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,re=t(o.p)`
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
`,ae=t(b)`
  background-color: var(--card-bg);
`,ne=t(b)`
  text-align: center;
`,oe=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,ce=t(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,le=t.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,de=t.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,me=t.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,he=t(o.div)`
  margin-top: 3rem;
`,pe=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,xe=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,ge=t.button`
  background-color: ${i=>i.$isActive?"var(--accent-amber)":"transparent"};
  color: ${i=>i.$isActive?"#121212":"var(--text-color)"};
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
    background-color: ${i=>!i.$isActive&&"var(--card-bg)"};
  }
`,ue=t(o.div)`
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
`,ve=t(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,be=(i,s,r)=>{const a=(90-i)*(Math.PI/180),l=(s+180)*(Math.PI/180),m=-(r*Math.sin(a)*Math.cos(l)),h=r*Math.sin(a)*Math.sin(l),p=r*Math.cos(a);return new $(m,p,h)},we=()=>{const{t:i}=A(),[s,r]=c.useState(0),a=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=be(37.5665,126.978,8),[p,_e]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),T={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(H,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(R,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(S,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],D=[{icon:e.jsx(X,{}),title:i("strong_point_2_title"),desc:i("strong_point_2_desc")},{icon:e.jsx(Z,{}),title:i("strong_point_5_title"),desc:i("strong_point_5_desc")},{icon:e.jsx(N,{}),title:i("strong_point_6_title"),desc:i("strong_point_6_desc")}],L={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ie,{variants:T,initial:"hidden",animate:"visible",children:[e.jsx(se,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:i("hero_title")}})}),e.jsx(re,{variants:x,children:i("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(j,{})]})})]}),e.jsx(te,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(B,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(V,{}),children:e.jsx(Q,{...p})}),e.jsx(E,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(ae,{children:[e.jsx(f,{children:i("home_services_title")}),e.jsxs(pe,{children:[e.jsx(xe,{children:_.map((n,d)=>e.jsxs(ge,{$isActive:s===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:i(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(ue,{children:e.jsx(U,{mode:"wait",children:e.jsx(ve,{...L,children:i(_[s].descKey)},s)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:i("home_services_button")})})]})]}),e.jsxs(ne,{children:[e.jsx(f,{children:i("home_strengths_title")}),e.jsx(oe,{children:D.map((n,d)=>e.jsxs(ce,{whileHover:{y:-10},children:[e.jsx(le,{children:n.icon}),e.jsx(de,{children:n.title}),e.jsx(me,{children:n.desc})]},d))}),e.jsx(he,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(j,{})]})})})]})]})};export{we as default};
