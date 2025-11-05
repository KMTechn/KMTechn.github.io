const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513-DNwjsq0L-B63G6pt7.js","assets/index-BjiKTb9t.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"])))=>i.map(i=>d[i]);
import{_ as z}from"./three-bundle-BXl3LOEh.js";import{_ as C,i as c,N as e,e as g,P as T,a as X,l as v,t as P,b as i,$ as S,Y as $,Z as M,X as G,q as N,y as O,I as A,R as H}from"./index-BjiKTb9t.js";import{V as R,v as Z,T as F,n as q,x as Y,m as V,t as _,J as f,Z as J,g as o,_ as j}from"./index-BOUopA-f-B1LkvIfe-C77XVmtP-CACf9Ol--DsKd4q5f--qqj9ryy-COq9UgFi.js";const y=(s,t=y,r=t.f||(t.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513-DNwjsq0L.js","assets/index-BZ0SPwxS.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>s.map(a=>r[a]),w=(s,t=w,r=t.f||(t.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513.js","assets/index-DiEEGOuf.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>s.map(a=>r[a]),I=(s,t=I,r=t.f||(t.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi.js","assets/index-BkAvuH1H.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>s.map(a=>r[a]),D=(s,t=D,r=t.f||(t.f=["assets/Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX.js","assets/index-C-F-a36E.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>s.map(a=>r[a]),E=(s,t=E,r=t.f||(t.f=["assets/Globe-Ca0-irBv-DIIoD6hj.js","assets/index-CXD94TNx.js","assets/three-bundle-BXl3LOEh.js","assets/index-CpES_K81.css"]))=>s.map(a=>r[a]),B=(s,t=B,r=t.f||(t.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>s.map(a=>r[a]),Q=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,U=i.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,W=i.div`
  width: ${s=>s.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,ee=i.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function se(){const{progress:s}=A();return e.jsx(H,{center:!0,children:e.jsxs(Q,{children:[e.jsxs(ee,{children:[Math.round(s),"% Loaded"]}),e.jsx(U,{children:e.jsx(W,{progress:s})})]})})}const ie=c.lazy(()=>S(()=>$(()=>M(()=>G(()=>N(()=>O(()=>z(()=>import("./Globe-Ca0-irBv-DIIoD6hj-BTXIlPvX-dvKdgBNi-v5F1L513-DNwjsq0L-B63G6pt7.js"),__vite__mapDeps([0,1,2,3])),y([0,1,2,3])),w([0,1,2,3])),I([0,1,2,3])),D([0,1,2,3])),E([0,1,2,3])),B([0,1]))),te=i.div`
  width: 100%;
`,re=i(j)`
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
`,ae=i(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,ne=i(o.div)`
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
`,oe=i(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,ce=i(o.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,u=i(o.button)`
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
`,le=i(j)`
  background-color: var(--card-bg);
`,de=i(j)`
  text-align: center;
`,he=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,me=i(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,pe=i.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,xe=i.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,ge=i.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ve=i(o.div)`
  margin-top: 3rem;
`,ue=i.div`
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
`,be=i.button`
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
`,_e=i(o.div)`
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
`,fe=i(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,ye=(s,t,r)=>{const a=(90-s)*(Math.PI/180),l=(t+180)*(Math.PI/180),h=-(r*Math.sin(a)*Math.cos(l)),m=r*Math.sin(a)*Math.sin(l),p=r*Math.cos(a);return new P(h,p,m)},Be=()=>{const{t:s}=C(),[t,r]=c.useState(0),a=c.useRef(null),[l,h]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{h(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const m=ye(37.5665,126.978,8),[p,we]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},b=[{icon:e.jsx(R,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(Z,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(F,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],L=[{icon:e.jsx(q,{}),title:s("strong_point_2_title"),desc:s("strong_point_2_desc")},{icon:e.jsx(Y,{}),title:s("strong_point_5_title"),desc:s("strong_point_5_desc")},{icon:e.jsx(V,{}),title:s("strong_point_6_title"),desc:s("strong_point_6_desc")}],K={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(te,{children:[e.jsxs(re,{children:[e.jsxs(ae,{variants:k,initial:"hidden",animate:"visible",children:[e.jsx(oe,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("hero_title")}})}),e.jsx(ce,{variants:x,children:s("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(u,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(_,{})]})})]}),e.jsx(ne,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(T,{camera:{position:m,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(se,{}),children:e.jsx(ie,{...p})}),e.jsx(X,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:v.ROTATE,MIDDLE:v.DOLLY,RIGHT:v.PAN}})]},l)})]}),e.jsxs(le,{children:[e.jsx(f,{children:s("home_services_title")}),e.jsxs(ue,{children:[e.jsx(je,{children:b.map((n,d)=>e.jsxs(be,{$isActive:t===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:s(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(_e,{children:e.jsx(J,{mode:"wait",children:e.jsx(fe,{...K,children:s(b[t].descKey)},t)})}),e.jsx(g,{to:"/business",children:e.jsx(u,{whileHover:{scale:1.05},whileTap:{scale:.95},children:s("home_services_button")})})]})]}),e.jsxs(de,{children:[e.jsx(f,{children:s("home_strengths_title")}),e.jsx(he,{children:L.map((n,d)=>e.jsxs(me,{whileHover:{y:-10},children:[e.jsx(pe,{children:n.icon}),e.jsx(xe,{children:n.title}),e.jsx(ge,{children:n.desc})]},d))}),e.jsx(ve,{children:e.jsx(g,{to:"/about",children:e.jsxs(u,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[s("hero_button")," ",e.jsx(_,{})]})})})]})]})};export{Be as default};
