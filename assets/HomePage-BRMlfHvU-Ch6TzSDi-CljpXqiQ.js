const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX.js","assets/index-C-F-a36E.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"])))=>i.map(i=>d[i]);
import{_ as T}from"./three-bundle-BXl3LOEh.js";import{o as E,i as c,N as e,a as g,M as D,A as I,l as u,t as K,b as t,W as L,y as $,T as A,E as C}from"./index-C-F-a36E.js";import{V as R,v as S,T as H,n as N,x as O,m as P,t as f,J as j,Z as G,g as o,_ as b}from"./index-BOUopA-f-B1LkvIfe-C77XVmtP.js";const y=(i,r=y,a=r.f||(r.f=["assets/Globe-Ca0-irBv-DIIoD6hj.js","assets/index-CXD94TNx.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>i.map(n=>a[n]),w=(i,r=w,a=r.f||(r.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>i.map(n=>a[n]),B=t.div`
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
`,Z=t.div`
  width: ${i=>i.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,F=t.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function J(){const{progress:i}=A();return e.jsx(C,{center:!0,children:e.jsxs(B,{children:[e.jsxs(F,{children:[Math.round(i),"% Loaded"]}),e.jsx(V,{children:e.jsx(Z,{progress:i})})]})})}const W=c.lazy(()=>L(()=>$(()=>T(()=>import("./Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX.js"),__vite__mapDeps([0,1,2,3])),y([0,1,2,3])),w([0,1]))),X=t.div`
  width: 100%;
`,Q=t(b)`
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
`,Y=t(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,q=t(o.div)`
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
`,U=t(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,ee=t(o.p)`
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
`,ie=t(b)`
  background-color: var(--card-bg);
`,te=t(b)`
  text-align: center;
`,re=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,se=t(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,ae=t.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,ne=t.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,oe=t.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ce=t(o.div)`
  margin-top: 3rem;
`,le=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,de=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,me=t.button`
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
`,he=t(o.div)`
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
`,pe=t(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,xe=(i,r,a)=>{const n=(90-i)*(Math.PI/180),l=(r+180)*(Math.PI/180),m=-(a*Math.sin(n)*Math.cos(l)),h=a*Math.sin(n)*Math.sin(l),p=a*Math.cos(n);return new K(m,p,h)},_e=()=>{const{t:i}=E(),[r,a]=c.useState(0),n=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const s=()=>{m(Date.now())};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const h=xe(37.5665,126.978,8),[p,ge]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(R,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(S,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(H,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],z=[{icon:e.jsx(N,{}),title:i("strong_point_2_title"),desc:i("strong_point_2_desc")},{icon:e.jsx(O,{}),title:i("strong_point_5_title"),desc:i("strong_point_5_desc")},{icon:e.jsx(P,{}),title:i("strong_point_6_title"),desc:i("strong_point_6_desc")}],M={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(X,{children:[e.jsxs(Q,{children:[e.jsxs(Y,{variants:k,initial:"hidden",animate:"visible",children:[e.jsx(U,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:i("hero_title")}})}),e.jsx(ee,{variants:x,children:i("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(f,{})]})})]}),e.jsx(q,{ref:n,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(D,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(J,{}),children:e.jsx(W,{...p})}),e.jsx(I,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(ie,{children:[e.jsx(j,{children:i("home_services_title")}),e.jsxs(le,{children:[e.jsx(de,{children:_.map((s,d)=>e.jsxs(me,{$isActive:r===d,onMouseEnter:()=>a(d),children:[s.icon,e.jsx("span",{children:i(s.titleKey).split(" ")[0]})]},s.titleKey))}),e.jsx(he,{children:e.jsx(G,{mode:"wait",children:e.jsx(pe,{...M,children:i(_[r].descKey)},r)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:i("home_services_button")})})]})]}),e.jsxs(te,{children:[e.jsx(j,{children:i("home_strengths_title")}),e.jsx(re,{children:z.map((s,d)=>e.jsxs(se,{whileHover:{y:-10},children:[e.jsx(ae,{children:s.icon}),e.jsx(ne,{children:s.title}),e.jsx(oe,{children:s.desc})]},d))}),e.jsx(ce,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(f,{})]})})})]})]})};export{_e as default};
