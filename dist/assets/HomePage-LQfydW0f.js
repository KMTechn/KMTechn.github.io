import{u as C,j as e,H as T,a as P,b as k,S as L,c as w,N as A,C as E,V as R,d as F,M as H,e as f}from"./three-vendor-I5c4ovf2.js";import{b as h,L as b}from"./react-vendor-BvbQ_S-X.js";import{d as n,F as K,a as I,b as B,c as _,S,m,e as D,f as $,g as O,h as y}from"./index-CSR6kvYZ.js";import{u as V}from"./i18n-vendor-Bdmv85-f.js";import{A as G}from"./index-BnltkLPx.js";const W=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,N=n.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,U=n.div`
  width: ${t=>t.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,Y=n.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function Z(){const{progress:t}=C();return e.jsx(T,{center:!0,children:e.jsxs(W,{children:[e.jsxs(Y,{children:[Math.round(t),"% Loaded"]}),e.jsx(N,{children:e.jsx(U,{progress:t})})]})})}const x=3.08,z=(t,l,r)=>{const o=(90-t)*(Math.PI/180),i=(l+180)*(Math.PI/180),a=-(r*Math.sin(o)*Math.cos(i)),d=r*Math.sin(o)*Math.sin(i),s=r*Math.cos(o);return new R(a,s,d)},M=[{name:"Seoul",lat:37.5665,lon:126.978},{name:"Berlin",lat:52.52,lon:13.405},{name:"Wuhu",lat:31.33,lon:118.38},{name:"Hong Kong",lat:22.3193,lon:114.1694}];function q({position:t,name:l}){const[r,o]=h.useState(!1),i=h.useRef();return k((a,d)=>{if(r&&i.current){const s=1+Math.sin(performance.now()*.005)*.2;i.current.scale.set(s,s,s)}else i.current.scale.x>1&&i.current.scale.lerp(new R(1,1,1),d*5)}),e.jsxs("mesh",{position:t,ref:i,onPointerOver:()=>o(!0),onPointerOut:()=>o(!1),children:[e.jsx("sphereGeometry",{args:[.055,16,16]}),e.jsx("meshBasicMaterial",{color:"gold",toneMapped:!1}),e.jsx(T,{as:"div",distanceFactor:10,style:{transition:"opacity 0.2s",opacity:r?1:0,pointerEvents:"none",padding:"5px 10px",background:"rgba(0, 0, 0, 0.7)",color:"white",borderRadius:"5px",fontSize:"14px",whiteSpace:"nowrap",transform:"translate(-50%, -150%)"},children:l})]})}function J({points:t}){const l=h.useMemo(()=>t.map(r=>({...r,position:z(r.lat,r.lon,x+.02)})),[t]);return e.jsx("group",{children:l.map(r=>e.jsx(q,{position:r.position,name:r.name},r.name))})}function Q({points:t}){const l=h.useMemo(()=>{const r=[],o=x+.05,i=t.map(a=>z(a.lat,a.lon,o));for(let a=0;a<i.length;a++){const d=i[a],s=i[(a+1)%i.length],v=1.05+d.distanceTo(s)/(x*2)*.25,p=d.clone().lerp(s,.5).normalize().multiplyScalar(x*v);r.push([d,p,s])}return r},[t]);return e.jsx("group",{children:l.map((r,o)=>e.jsx(E,{points:r,color:"cyan",lineWidth:2,transparent:!0,opacity:.7},o))})}const X=t=>{const{ambientIntensity:l=1,directionalIntensity:r=12,metalness:o=.2,roughness:i=.5,emissiveIntensity:a=2.5,cloudsOpacity:d=.25}=t,[s,u,v]=P(["/earth-day.jpg","/earth-night.jpg","/earth-clouds.jpg"]),p=h.useRef(),c=h.useRef();return k(({clock:g})=>{p.current&&(p.current.rotation.y=g.getElapsedTime()*.05),c.current&&(c.current.rotation.y=g.getElapsedTime()*.06)}),e.jsxs(e.Fragment,{children:[e.jsx("ambientLight",{intensity:l}),e.jsx("directionalLight",{position:[10,10,5],intensity:r}),e.jsx(L,{radius:300,depth:50,count:8e3,factor:5,saturation:0,fade:!1,speed:1}),e.jsxs("group",{ref:p,children:[e.jsx(w,{args:[x,32,32],children:e.jsx("meshStandardMaterial",{map:s,metalness:o,roughness:i,emissiveMap:u,emissive:"#ffffff",emissiveIntensity:a})}),e.jsx(w,{ref:c,args:[x+.05,32,32],castShadow:!1,receiveShadow:!1,children:e.jsx("meshStandardMaterial",{map:v,transparent:!0,opacity:d,blending:A})}),e.jsx(J,{points:M}),e.jsx(Q,{points:M})]})]})},ee=n.div`
  width: 100%;
`,te=n(y)`
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
`,ne=n(m.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`,re=n(m.div)`
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
`,ie=n(m.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`,se=n(m.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,j=n(m.button)`
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
`,oe=n(y)`
  background-color: var(--card-bg);
`,ae=n(y)`
  text-align: center;
`,ce=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`,le=n(m.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,de=n.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,he=n.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,me=n.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`,pe=n(m.div)`
  margin-top: 3rem;
`,ge=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`,xe=n.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`,ue=n.button`
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
`,ve=n(m.div)`
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
`,fe=n(m.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`,Se=()=>{const{t}=V(),[l,r]=h.useState(0),o=h.useRef(null),[i,a]=h.useState(Date.now());h.useEffect(()=>{const c=()=>{a(Date.now())};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const d={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},u=[{icon:e.jsx(D,{size:24}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:e.jsx($,{size:24}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:e.jsx(O,{size:24}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],v=[{icon:e.jsx(K,{}),title:t("strong_point_2_title"),desc:t("strong_point_2_desc")},{icon:e.jsx(I,{}),title:t("strong_point_5_title"),desc:t("strong_point_5_desc")},{icon:e.jsx(B,{}),title:t("strong_point_6_title"),desc:t("strong_point_6_desc")}],p={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2}};return e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsxs(ne,{variants:d,initial:"hidden",animate:"visible",children:[e.jsx(ie,{variants:s,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:t("hero_title")}})}),e.jsx(se,{variants:s,children:t("hero_subtitle")}),e.jsx(b,{to:"/about",children:e.jsxs(j,{variants:s,whileHover:{scale:1.05},whileTap:{scale:.95},children:[t("hero_button")," ",e.jsx(_,{})]})})]}),e.jsx(re,{ref:o,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.16,1,.3,1]},children:e.jsxs(F,{camera:{position:[0,0,8],fov:50},children:[e.jsx(h.Suspense,{fallback:e.jsx(Z,{}),children:e.jsx(X,{})}),e.jsx(H,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:f.ROTATE,MIDDLE:f.DOLLY,RIGHT:f.PAN}})]},i)})]}),e.jsxs(oe,{children:[e.jsx(S,{children:t("home_services_title")}),e.jsxs(ge,{children:[e.jsx(xe,{children:u.map((c,g)=>e.jsxs(ue,{$isActive:l===g,onMouseEnter:()=>r(g),children:[c.icon,e.jsx("span",{children:t(c.titleKey).split(" ")[0]})]},c.titleKey))}),e.jsx(ve,{children:e.jsx(G,{mode:"wait",children:e.jsx(fe,{...p,children:t(u[l].descKey)},l)})}),e.jsx(b,{to:"/business",children:e.jsx(j,{whileHover:{scale:1.05},whileTap:{scale:.95},children:t("home_services_button")})})]})]}),e.jsxs(ae,{children:[e.jsx(S,{children:t("home_strengths_title")}),e.jsx(ce,{children:v.map((c,g)=>e.jsxs(le,{whileHover:{y:-10},children:[e.jsx(de,{children:c.icon}),e.jsx(he,{children:c.title}),e.jsx(me,{children:c.desc})]},g))}),e.jsx(pe,{children:e.jsx(b,{to:"/about",children:e.jsxs(j,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[t("hero_button")," ",e.jsx(_,{})]})})})]})]})};export{Se as default};
//# sourceMappingURL=HomePage-LQfydW0f.js.map
