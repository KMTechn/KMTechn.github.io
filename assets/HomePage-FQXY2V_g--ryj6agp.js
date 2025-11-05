const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-DI8te4ia-B4rHm9Ib.js","assets/index-DShMUXqZ.js","assets/three-bundle-BXl3LOEh.js","assets/index-D_A_Uq57.css"])))=>i.map(i=>d[i]);
import{_ as $}from"./three-bundle-BXl3LOEh.js";import{g as I,G as c,I as e,a as g,b as T,k as M,x as u,Y as D,T as r,P as E,q as K,X as L}from"./index-DShMUXqZ.js";import{E as P,k as S,j as A,x as G,T as H,S as R,p as f,m as j,q,J as n,z as b}from"./index-DM6CndqC-C5A4jazG.js";const y=(i,s=y,a=s.f||(s.f=["assets/Globe-DI8te4ia.js","assets/three-bundle-BZQHYXQX.js"]))=>i.map(o=>a[o]),O=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,X=r.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,Y=r.div`
  width: ${i=>i.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,B=r.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function C(){const{progress:i}=K();return e.jsx(L,{center:!0,children:e.jsxs(O,{children:[e.jsxs(B,{children:[Math.round(i),"% Loaded"]}),e.jsx(X,{children:e.jsx(Y,{progress:i})})]})})}const J=c.lazy(()=>E(()=>$(()=>import("./Globe-DI8te4ia-B4rHm9Ib.js"),__vite__mapDeps([0,1,2,3])),y([0,1]))),Q=r.div`
  width: 100%;
`,Z=r(b)`
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
`,F=r(n.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,N=r(n.div)`
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
`,V=r(n.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,U=r(n.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,v=r(n.button)`
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
`,W=r(b)`
  background-color: var(--card-bg);
`,ee=r(b)`
  text-align: center;
`,ie=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,re=r(n.div)`
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
`,ne=r.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,se=r.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ae=r(n.div)`
  margin-top: 3rem;
`,oe=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,ce=r.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,le=r.button`
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
`,de=r(n.div)`
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
`,me=r(n.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,he=(i,s,a)=>{const o=(90-i)*(Math.PI/180),l=(s+180)*(Math.PI/180),m=-(a*Math.sin(o)*Math.cos(l)),h=a*Math.sin(o)*Math.sin(l),p=a*Math.cos(o);return new D(m,p,h)},ve=()=>{const{t:i}=I(),[s,a]=c.useState(0),o=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const t=()=>{m(Date.now())};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const h=he(37.5665,126.978,8),[p,pe]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(P,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(S,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(A,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],k=[{icon:e.jsx(G,{}),title:i("strong_point_2_title"),desc:i("strong_point_2_desc")},{icon:e.jsx(H,{}),title:i("strong_point_5_title"),desc:i("strong_point_5_desc")},{icon:e.jsx(R,{}),title:i("strong_point_6_title"),desc:i("strong_point_6_desc")}],z={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(Q,{children:[e.jsxs(Z,{children:[e.jsxs(F,{variants:w,initial:"hidden",animate:"visible",children:[e.jsx(V,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:i("hero_title")}})}),e.jsx(U,{variants:x,children:i("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(f,{})]})})]}),e.jsx(N,{ref:o,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(T,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(C,{}),children:e.jsx(J,{...p})}),e.jsx(M,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(W,{children:[e.jsx(j,{children:i("home_services_title")}),e.jsxs(oe,{children:[e.jsx(ce,{children:_.map((t,d)=>e.jsxs(le,{$isActive:s===d,onMouseEnter:()=>a(d),children:[t.icon,e.jsx("span",{children:i(t.titleKey).split(" ")[0]})]},t.titleKey))}),e.jsx(de,{children:e.jsx(q,{mode:"wait",children:e.jsx(me,{...z,children:i(_[s].descKey)},s)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:i("home_services_button")})})]})]}),e.jsxs(ee,{children:[e.jsx(j,{children:i("home_strengths_title")}),e.jsx(ie,{children:k.map((t,d)=>e.jsxs(re,{whileHover:{y:-10},children:[e.jsx(te,{children:t.icon}),e.jsx(ne,{children:t.title}),e.jsx(se,{children:t.desc})]},d))}),e.jsx(ae,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(f,{})]})})})]})]})};export{ve as default};
