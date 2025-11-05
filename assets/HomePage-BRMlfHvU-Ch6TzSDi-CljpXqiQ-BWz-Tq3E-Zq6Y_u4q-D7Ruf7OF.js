const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513-DNwjsq0L.js","assets/index-BZ0SPwxS.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"])))=>i.map(i=>d[i]);
import{_ as K}from"./three-bundle-BXl3LOEh.js";import{g as T,i as c,N as e,J as g,E as C,R as L,l as v,t as M,z as t,Z as G,Y as P,q as X,G as $,y as R,P as S,M as O}from"./index-BZ0SPwxS.js";import{V as A,v as H,T as V,i as N,x as J,m as Z,t as _,J as f,Z as F,y as o,_ as b}from"./index-BOUopA-f-B1LkvIfe-C77XVmtP-CACf9Ol--DsKd4q5f--qqj9ryy.js";const y=(i,s=y,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513.js","assets/index-DiEEGOuf.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>i.map(a=>r[a]),w=(i,s=w,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi.js","assets/index-BkAvuH1H.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>i.map(a=>r[a]),E=(i,s=E,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX.js","assets/index-C-F-a36E.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>i.map(a=>r[a]),I=(i,s=I,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DIIoD6hj.js","assets/index-CXD94TNx.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>i.map(a=>r[a]),k=(i,s=k,r=s.f||(s.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>i.map(a=>r[a]),Y=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,q=t.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,Q=t.div`
  width: ${i=>i.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,U=t.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function W(){const{progress:i}=S();return e.jsx(O,{center:!0,children:e.jsxs(Y,{children:[e.jsxs(U,{children:[Math.round(i),"% Loaded"]}),e.jsx(q,{children:e.jsx(Q,{progress:i})})]})})}const ee=c.lazy(()=>G(()=>P(()=>X(()=>$(()=>R(()=>K(()=>import("./Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513-DNwjsq0L.js"),__vite__mapDeps([0,1,2,3])),y([0,1,2,3])),w([0,1,2,3])),E([0,1,2,3])),I([0,1,2,3])),k([0,1]))),ie=t.div`
  width: 100%;
`,te=t(b)`
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
`,se=t(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,re=t(o.div)`
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
`,ae=t(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,ne=t(o.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,u=t(o.button)`
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
`,oe=t(b)`
  background-color: var(--card-bg);
`,ce=t(b)`
  text-align: center;
`,le=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,de=t(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,he=t.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,me=t.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,pe=t.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,xe=t(o.div)`
  margin-top: 3rem;
`,ge=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,ve=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,ue=t.button`
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
`,be=t(o.div)`
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
`,_e=(i,s,r)=>{const a=(90-i)*(Math.PI/180),l=(s+180)*(Math.PI/180),h=-(r*Math.sin(a)*Math.cos(l)),m=r*Math.sin(a)*Math.sin(l),p=r*Math.cos(a);return new M(h,p,m)},Ie=()=>{const{t:i}=T(),[s,r]=c.useState(0),a=c.useRef(null),[l,h]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{h(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const m=_e(37.5665,126.978,8),[p,fe]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),D={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},j=[{icon:e.jsx(A,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(H,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(V,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],z=[{icon:e.jsx(N,{}),title:i("strong_point_2_title"),desc:i("strong_point_2_desc")},{icon:e.jsx(J,{}),title:i("strong_point_5_title"),desc:i("strong_point_5_desc")},{icon:e.jsx(Z,{}),title:i("strong_point_6_title"),desc:i("strong_point_6_desc")}],B={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(ie,{children:[e.jsxs(te,{children:[e.jsxs(se,{variants:D,initial:"hidden",animate:"visible",children:[e.jsx(ae,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:i("hero_title")}})}),e.jsx(ne,{variants:x,children:i("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(u,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(_,{})]})})]}),e.jsx(re,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(C,{camera:{position:m,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(W,{}),children:e.jsx(ee,{...p})}),e.jsx(L,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:v.ROTATE,MIDDLE:v.DOLLY,RIGHT:v.PAN}})]},l)})]}),e.jsxs(oe,{children:[e.jsx(f,{children:i("home_services_title")}),e.jsxs(ge,{children:[e.jsx(ve,{children:j.map((n,d)=>e.jsxs(ue,{$isActive:s===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:i(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(be,{children:e.jsx(F,{mode:"wait",children:e.jsx(je,{...B,children:i(j[s].descKey)},s)})}),e.jsx(g,{to:"/business",children:e.jsx(u,{whileHover:{scale:1.05},whileTap:{scale:.95},children:i("home_services_button")})})]})]}),e.jsxs(ce,{children:[e.jsx(f,{children:i("home_strengths_title")}),e.jsx(le,{children:z.map((n,d)=>e.jsxs(de,{whileHover:{y:-10},children:[e.jsx(he,{children:n.icon}),e.jsx(me,{children:n.title}),e.jsx(pe,{children:n.desc})]},d))}),e.jsx(xe,{children:e.jsx(g,{to:"/about",children:e.jsxs(u,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(_,{})]})})})]})]})};export{Ie as default};
