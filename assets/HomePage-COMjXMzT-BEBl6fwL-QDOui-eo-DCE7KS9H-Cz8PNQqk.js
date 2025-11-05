const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-wBangyWw-o2WTS6lN-BLNv0Ha8-BAptJx_l.js","assets/index-DSZvnR8M.js","assets/three-bundle-BXl3LOEh.js","assets/index-CJxhOlbf.css"])))=>i.map(i=>d[i]);
import{_ as C}from"./three-bundle-BXl3LOEh.js";import{f as L,i as c,N as e,X as g,b as E,M as D,l as u,t as O,a as t,Z as $,G as S,W as G,y as I,S as K,x as N}from"./index-DSZvnR8M.js";import{V as W,v as A,T as H,i as R,x as X,m as J,t as j,J as _,Z as P,g as o,_ as b}from"./index-DysxAol--z3qlS56W-JDlFHwQw-CIWnHVvu-DD1gjNTz.js";const w=(i,r=w,s=r.f||(r.f=["assets/Globe-Ca0-irBv-wBangyWw-o2WTS6lN-BLNv0Ha8.js","assets/index-DetTu_Xx.js","assets/three-bundle-BXl3LOEh.js","assets/index-CJxhOlbf.css"]))=>i.map(a=>s[a]),y=(i,r=y,s=r.f||(r.f=["assets/Globe-Ca0-irBv-wBangyWw-o2WTS6lN.js","assets/index-B6rR8Bxw.js","assets/three-bundle-BXl3LOEh.js","assets/index-CJxhOlbf.css"]))=>i.map(a=>s[a]),k=(i,r=k,s=r.f||(r.f=["assets/Globe-Ca0-irBv-wBangyWw.js","assets/index-CxuDO7JV.js","assets/three-bundle-BXl3LOEh.js","assets/index-CJxhOlbf.css"]))=>i.map(a=>s[a]),z=(i,r=z,s=r.f||(r.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>i.map(a=>s[a]),Z=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,V=t.div`
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
`,Q=t.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function Y(){const{progress:i}=K();return e.jsx(N,{center:!0,children:e.jsxs(Z,{children:[e.jsxs(Q,{children:[Math.round(i),"% Loaded"]}),e.jsx(V,{children:e.jsx(F,{progress:i})})]})})}const q=c.lazy(()=>$(()=>S(()=>G(()=>I(()=>C(()=>import("./Globe-Ca0-irBv-wBangyWw-o2WTS6lN-BLNv0Ha8-BAptJx_l.js"),__vite__mapDeps([0,1,2,3])),w([0,1,2,3])),y([0,1,2,3])),k([0,1,2,3])),z([0,1]))),U=t.div`
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
`,re=t(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,se=t(o.p)`
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
`,xe=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,pe=t.div`
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
`,be=(i,r,s)=>{const a=(90-i)*(Math.PI/180),l=(r+180)*(Math.PI/180),m=-(s*Math.sin(a)*Math.cos(l)),h=s*Math.sin(a)*Math.sin(l),x=s*Math.cos(a);return new O(m,x,h)},ye=()=>{const{t:i}=L(),[r,s]=c.useState(0),a=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=be(37.5665,126.978,8),[x,fe]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),M={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},p={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},f=[{icon:e.jsx(W,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(A,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(H,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],T=[{icon:e.jsx(R,{}),title:i("strong_point_2_title"),desc:i("strong_point_2_desc")},{icon:e.jsx(X,{}),title:i("strong_point_5_title"),desc:i("strong_point_5_desc")},{icon:e.jsx(J,{}),title:i("strong_point_6_title"),desc:i("strong_point_6_desc")}],B={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(U,{children:[e.jsxs(ee,{children:[e.jsxs(ie,{variants:M,initial:"hidden",animate:"visible",children:[e.jsx(re,{variants:p,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:i("hero_title")}})}),e.jsx(se,{variants:p,children:i("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:p,whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(j,{})]})})]}),e.jsx(te,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(E,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(q,{...x})}),e.jsx(D,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(ae,{children:[e.jsx(_,{children:i("home_services_title")}),e.jsxs(xe,{children:[e.jsx(pe,{children:f.map((n,d)=>e.jsxs(ge,{$isActive:r===d,onMouseEnter:()=>s(d),children:[n.icon,e.jsx("span",{children:i(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(ue,{children:e.jsx(P,{mode:"wait",children:e.jsx(ve,{...B,children:i(f[r].descKey)},r)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:i("home_services_button")})})]})]}),e.jsxs(ne,{children:[e.jsx(_,{children:i("home_strengths_title")}),e.jsx(oe,{children:T.map((n,d)=>e.jsxs(ce,{whileHover:{y:-10},children:[e.jsx(le,{children:n.icon}),e.jsx(de,{children:n.title}),e.jsx(me,{children:n.desc})]},d))}),e.jsx(he,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(j,{})]})})})]})]})};export{ye as default};
