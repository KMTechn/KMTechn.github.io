const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"])))=>i.map(i=>d[i]);
import{u as k,j as e,H as T,r as o,C,M as z,c as x,V as M,_ as P}from"./three-bundle-DMG25_7Q.js";import{d as r,L as v}from"./index-BBce-Mkc.js";import{F as A,a as L,b as E,c as _,S as j,d as F,e as K,f as H,g as b}from"./index-DysxAol-.js";import{u as I}from"./i18n-DaXBaqKC.js";import{A as R,m as n}from"./animation-BcFAGHWn.js";import"./icons-DtnRUAqg.js";import"./map-B8zYJnfq.js";const D=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,$=r.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,V=r.div`
  width: ${t=>t.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,B=r.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function G(){const{progress:t}=k();return e.jsx(T,{center:!0,children:e.jsxs(D,{children:[e.jsxs(B,{children:[Math.round(t),"% Loaded"]}),e.jsx($,{children:e.jsx(V,{progress:t})})]})})}const O=o.lazy(()=>P(()=>import("./Globe-Ca0-irBv.js"),__vite__mapDeps([0,1]))),W=r.div`
  width: 100%;
`,N=r(b)`
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
`,U=r(n.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,Y=r(n.div)`
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
`,Z=r(n.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,q=r(n.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,u=r(n.button)`
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
`,J=r(b)`
  background-color: var(--card-bg);
`,Q=r(b)`
  text-align: center;
`,X=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,ee=r(n.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,te=r.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,re=r.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,ie=r.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ne=r(n.div)`
  margin-top: 3rem;
`,oe=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,se=r.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,ae=r.button`
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
`,ce=r(n.div)`
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
`,le=r(n.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,de=(t,s,a)=>{const c=(90-t)*(Math.PI/180),l=(s+180)*(Math.PI/180),m=-(a*Math.sin(c)*Math.cos(l)),h=a*Math.sin(c)*Math.sin(l),p=a*Math.cos(c);return new M(m,p,h)},fe=()=>{const{t}=I(),[s,a]=o.useState(0),c=o.useRef(null),[l,m]=o.useState(Date.now());o.useEffect(()=>{const i=()=>{m(Date.now())};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const h=de(37.5665,126.978,8),[p,me]=o.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},f=[{icon:e.jsx(F,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(K,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(H,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],w=[{icon:e.jsx(A,{}),title:t("strong_point_2_title"),desc:t("strong_point_2_desc")},{icon:e.jsx(L,{}),title:t("strong_point_5_title"),desc:t("strong_point_5_desc")},{icon:e.jsx(E,{}),title:t("strong_point_6_title"),desc:t("strong_point_6_desc")}],S={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(W,{children:[e.jsxs(N,{children:[e.jsxs(U,{variants:y,initial:"hidden",animate:"visible",children:[e.jsx(Z,{variants:g,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:t("hero_title")}})}),e.jsx(q,{variants:g,children:t("hero_subtitle")}),e.jsx(v,{to:"/about",children:e.jsxs(u,{variants:g,whileHover:{scale:1.05},whileTap:{scale:.95},children:[t("hero_button")," ",e.jsx(_,{})]})})]}),e.jsx(Y,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(C,{camera:{position:h,fov:50},children:[e.jsx(o.Suspense,{fallback:e.jsx(G,{}),children:e.jsx(O,{...p})}),e.jsx(z,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:x.ROTATE,MIDDLE:x.DOLLY,RIGHT:x.PAN}})]},l)})]}),e.jsxs(J,{children:[e.jsx(j,{children:t("home_services_title")}),e.jsxs(oe,{children:[e.jsx(se,{children:f.map((i,d)=>e.jsxs(ae,{$isActive:s===d,onMouseEnter:()=>a(d),children:[i.icon,e.jsx("span",{children:t(i.titleKey).split(" ")[0]})]},i.titleKey))}),e.jsx(ce,{children:e.jsx(R,{mode:"wait",children:e.jsx(le,{...S,children:t(f[s].descKey)},s)})}),e.jsx(v,{to:"/business",children:e.jsx(u,{whileHover:{scale:1.05},whileTap:{scale:.95},children:t("home_services_button")})})]})]}),e.jsxs(Q,{children:[e.jsx(j,{children:t("home_strengths_title")}),e.jsx(X,{children:w.map((i,d)=>e.jsxs(ee,{whileHover:{y:-10},children:[e.jsx(te,{children:i.icon}),e.jsx(re,{children:i.title}),e.jsx(ie,{children:i.desc})]},d))}),e.jsx(ne,{children:e.jsx(v,{to:"/about",children:e.jsxs(u,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[t("hero_button")," ",e.jsx(_,{})]})})})]})]})};export{fe as default};
