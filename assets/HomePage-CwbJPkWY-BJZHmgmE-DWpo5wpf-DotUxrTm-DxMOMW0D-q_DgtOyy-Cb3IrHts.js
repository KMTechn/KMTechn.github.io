const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe-Ca0-irBv-DlOgDdtF-DD_Te7CD-C-cMIcgh-BhQop0Cy-CPtwGSRD-DB9k7ztS.js","assets/index-DTv4Mn4x.js","assets/index-CAv34ZaW.css"])))=>i.map(i=>d[i]);
import{b as I,i as c,N as e,t as g,I as B,D as $,l as u,a as L,c as t,$ as E,Y as K,X as O,G as A,j as H,H as P,_ as S,d as V,k as F}from"./index-DTv4Mn4x.js";import{V as R,v as Z,T as N,n as Q,x as Y,m as J,t as j,J as f,Z as X,g as o,_ as b}from"./index-S6VmQXuv-BDhuIUpk-DQYuRVUb-TbiitZxu-BMTN07ZU-UTQS0983-DpqAnU8i.js";const y=(i,s=y,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DlOgDdtF-DD_Te7CD-C-cMIcgh-BhQop0Cy-CPtwGSRD.js","assets/index-hM8ggtme.js","assets/index-CAv34ZaW.css"]))=>i.map(a=>r[a]),w=(i,s=w,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DlOgDdtF-DD_Te7CD-C-cMIcgh-BhQop0Cy.js","assets/index-Bd96V2M5.js","assets/index-DZaGsDyx.css"]))=>i.map(a=>r[a]),D=(i,s=D,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DlOgDdtF-DD_Te7CD-C-cMIcgh.js","assets/index-B7QnLQJB.js","assets/index-DZaGsDyx.css"]))=>i.map(a=>r[a]),C=(i,s=C,r=s.f||(s.f=["assets/Globe-Ca0-irBv-DlOgDdtF-DD_Te7CD.js","assets/index-BrUi1Yux.js","assets/index-DZaGsDyx.css"]))=>i.map(a=>r[a]),M=(i,s=M,r=s.f||(s.f=["assets/Globe-Ca0-irBv.js","assets/three-bundle-DMG25_7Q.js"]))=>i.map(a=>r[a]),U=t.div`
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
`,q=t.div`
  width: ${i=>i.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,ee=t.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function ie(){const{progress:i}=V();return e.jsx(F,{center:!0,children:e.jsxs(U,{children:[e.jsxs(ee,{children:[Math.round(i),"% Loaded"]}),e.jsx(W,{children:e.jsx(q,{progress:i})})]})})}const te=c.lazy(()=>E(()=>K(()=>O(()=>A(()=>H(()=>P(()=>S(()=>import("./Globe-Ca0-irBv-DlOgDdtF-DD_Te7CD-C-cMIcgh-BhQop0Cy-CPtwGSRD-DB9k7ztS.js"),__vite__mapDeps([0,1,2])),y([0,1,2])),w([0,1,2])),D([0,1,2])),C([0,1,2])),k([0,1,2])),M([0,1]))),se=t.div`
  width: 100%;
`,re=t(b)`
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
`,ae=t(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,ne=t(o.div)`
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
`,oe=t(o.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,ce=t(o.p)`
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
`,le=t(b)`
  background-color: var(--card-bg);
`,de=t(b)`
  text-align: center;
`,me=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,he=t(o.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,pe=t.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,xe=t.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,ge=t.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,ue=t(o.div)`
  margin-top: 3rem;
`,ve=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,be=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,_e=t.button`
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
`,je=t(o.div)`
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
`,fe=t(o.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,ye=(i,s,r)=>{const a=(90-i)*(Math.PI/180),l=(s+180)*(Math.PI/180),m=-(r*Math.sin(a)*Math.cos(l)),h=r*Math.sin(a)*Math.sin(l),p=r*Math.cos(a);return new L(m,p,h)},ke=()=>{const{t:i}=I(),[s,r]=c.useState(0),a=c.useRef(null),[l,m]=c.useState(Date.now());c.useEffect(()=>{const n=()=>{m(Date.now())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=ye(37.5665,126.978,8),[p,we]=c.useState({ambientIntensity:1,directionalIntensity:12,metalness:.2,roughness:.5,emissiveIntensity:2.5,cloudsOpacity:.25,atmosphereGlowColor:"#5080ff"}),z={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},x={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},_=[{icon:e.jsx(R,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx(Z,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(N,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],T=[{icon:e.jsx(Q,{}),title:i("strong_point_2_title"),desc:i("strong_point_2_desc")},{icon:e.jsx(Y,{}),title:i("strong_point_5_title"),desc:i("strong_point_5_desc")},{icon:e.jsx(J,{}),title:i("strong_point_6_title"),desc:i("strong_point_6_desc")}],G={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(se,{children:[e.jsxs(re,{children:[e.jsxs(ae,{variants:z,initial:"hidden",animate:"visible",children:[e.jsx(oe,{variants:x,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:i("hero_title")}})}),e.jsx(ce,{variants:x,children:i("hero_subtitle")}),e.jsx(g,{to:"/about",children:e.jsxs(v,{variants:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(j,{})]})})]}),e.jsx(ne,{ref:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(B,{camera:{position:h,fov:50},children:[e.jsx(c.Suspense,{fallback:e.jsx(ie,{}),children:e.jsx(te,{...p})}),e.jsx($,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN}})]},l)})]}),e.jsxs(le,{children:[e.jsx(f,{children:i("home_services_title")}),e.jsxs(ve,{children:[e.jsx(be,{children:_.map((n,d)=>e.jsxs(_e,{$isActive:s===d,onMouseEnter:()=>r(d),children:[n.icon,e.jsx("span",{children:i(n.titleKey).split(" ")[0]})]},n.titleKey))}),e.jsx(je,{children:e.jsx(X,{mode:"wait",children:e.jsx(fe,{...G,children:i(_[s].descKey)},s)})}),e.jsx(g,{to:"/business",children:e.jsx(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:i("home_services_button")})})]})]}),e.jsxs(de,{children:[e.jsx(f,{children:i("home_strengths_title")}),e.jsx(me,{children:T.map((n,d)=>e.jsxs(he,{whileHover:{y:-10},children:[e.jsx(pe,{children:n.icon}),e.jsx(xe,{children:n.title}),e.jsx(ge,{children:n.desc})]},d))}),e.jsx(ue,{children:e.jsx(g,{to:"/about",children:e.jsxs(v,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[i("hero_button")," ",e.jsx(j,{})]})})})]})]})};export{ke as default};
