const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C5ShRxlg.js","assets/index-mpwlQoeZ.css"])))=>i.map(i=>d[i]);
import{i as Ke,a as Ee,u as ge,m as Ve,r as p,M as ze,b as Ce,f as Ie,c as Me,d as Z,e as Re,g as Te,h as Le,j as ye,k as Pe,l as De,n as Fe,o as Ge,s as Oe,p as Be,V as He,q as Ne,t as We,v as $e,S as Ye,H as Qe,w as Q,x as Ue,y as Ze,z as Je,A as t,B as i,C as Xe,D as qe,E as R,F as et,G as tt,I as rt,J as se,K as nt,L as H,N as be,O as ce,R as it,P as u,_ as ot,Q as le,T as at,U as st,W as ct,X as lt,Y as dt,Z as mt,$ as ht,a0 as pt,a1 as q}from"./index-C5ShRxlg.js";const ut=(e,r,n)=>{const o=r-e;return((n-e)%o+o)%o+e};function ve(e,r){return Ke(e)?e[ut(0,e.length,r)]:e}class xt{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>r.finished))}getAll(r){return this.animations[0][r]}setAll(r,n){for(let o=0;o<this.animations.length;o++)this.animations[o][r]=n}attachTimeline(r){const n=this.animations.map(o=>o.attachTimeline(r));return()=>{n.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return de(this.animations,"duration")}get iterationDuration(){return de(this.animations,"iterationDuration")}runAll(r){this.animations.forEach(n=>n[r]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function de(e,r){let n=0;for(let o=0;o<e.length;o++){const a=e[o][r];a!==null&&a>n&&(n=a)}return n}class ft extends xt{then(r,n){return this.finished.finally(r).then(()=>{})}}function gt(...e){const r=!Array.isArray(e[0]),n=r?0:-1,o=e[0+n],a=e[1+n],d=e[2+n],l=e[3+n],h=Ee(a,d,l);return r?h(o):h}function we(e){const r=ge(()=>Ve(e)),{isStatic:n}=p.useContext(ze);if(n){const[,o]=p.useState(e);p.useEffect(()=>r.on("change",o),[])}return r}function je(e,r){const n=we(r()),o=()=>n.set(r());return o(),Ce(()=>{const a=()=>Ie.preRender(o,!1,!0),d=e.map(l=>l.on("change",a));return()=>{d.forEach(l=>l()),Me(o)}}),n}function yt(e){Z.current=[],e();const r=je(Z.current,e);return Z.current=void 0,r}function bt(e,r,n,o){if(typeof e=="function")return yt(e);const a=typeof r=="function"?r:gt(r,n,o);return Array.isArray(e)?me(e,a):me([e],([d])=>a(d))}function me(e,r){const n=ge(()=>[]);return je(e,()=>{n.length=0;const o=e.length;for(let a=0;a<o;a++)n[a]=e[a].get();return r(n)})}function ee(e){return typeof e=="object"&&!Array.isArray(e)}function _e(e,r,n,o){return typeof e=="string"&&ee(r)?Re(e,n,o):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function vt(e,r,n){return e*(r+1)}function he(e,r,n,o){return typeof r=="number"?r:r.startsWith("-")||r.startsWith("+")?Math.max(0,e+parseFloat(r)):r==="<"?n:r.startsWith("<")?Math.max(0,n+parseFloat(r.slice(1))):o.get(r)??e}function wt(e,r,n){for(let o=0;o<e.length;o++){const a=e[o];a.at>r&&a.at<n&&(Le(e,a),o--)}}function jt(e,r,n,o,a,d){wt(e,a,d);for(let l=0;l<r.length;l++)e.push({value:r[l],at:Te(a,d,o[l]),easing:ve(n,l)})}function _t(e,r){for(let n=0;n<e.length;n++)e[n]=e[n]/(r+1)}function St(e,r){return e.at===r.at?e.value===null?1:r.value===null?-1:0:e.at-r.at}const kt="easeInOut";function At(e,{defaultTransition:r={},...n}={},o,a){const d=r.duration||.3,l=new Map,h=new Map,x={},y=new Map;let A=0,m=0,T=0;for(let K=0;K<e.length;K++){const f=e[K];if(typeof f=="string"){y.set(f,m);continue}else if(!Array.isArray(f)){y.set(f.name,he(m,f.at,A,y));continue}let[w,b,g={}]=f;g.at!==void 0&&(m=he(m,g.at,A,y));let v=0;const z=(j,_,S,E=0,s=0)=>{const c=Kt(j),{delay:C=0,times:k=Pe(c),type:U="keyframes",repeat:G,repeatType:Yr,repeatDelay:Qr=0,...Ae}=_;let{ease:I=r.ease||"easeOut",duration:V}=_;const te=typeof C=="function"?C(E,s):C,re=c.length,ne=Ge(U)?U:a?.[U||"keyframes"];if(re<=2&&ne){let L=100;if(re===2&&zt(c)){const P=c[1]-c[0];L=Math.abs(P)}const O={...Ae};V!==void 0&&(O.duration=Oe(V));const B=De(O,L,ne);I=B.ease,V=B.duration}V??(V=d);const ie=m+te;k.length===1&&k[0]===0&&(k[1]=1);const oe=k.length-c.length;if(oe>0&&Fe(k,oe),c.length===1&&c.unshift(null),G){V=vt(V,G);const L=[...c],O=[...k];I=Array.isArray(I)?[...I]:[I];const B=[...I];for(let P=0;P<G;P++){c.push(...L);for(let D=0;D<L.length;D++)k.push(O[D]+(P+1)),I.push(D===0?"linear":ve(B,D-1))}_t(k,G)}const ae=ie+V;jt(S,c,I,k,ie,ae),v=Math.max(te+V,v),T=Math.max(ae,T)};if(ye(w)){const j=pe(w,h);z(b,g,ue("default",j))}else{const j=_e(w,b,o,x),_=j.length;for(let S=0;S<_;S++){b=b,g=g;const E=j[S],s=pe(E,h);for(const c in b)z(b[c],Et(g,c),ue(c,s),S,_)}}A=m,m+=v}return h.forEach((K,f)=>{for(const w in K){const b=K[w];b.sort(St);const g=[],v=[],z=[];for(let _=0;_<b.length;_++){const{at:S,value:E,easing:s}=b[_];g.push(E),v.push(Be(0,T,S)),z.push(s||"easeOut")}v[0]!==0&&(v.unshift(0),g.unshift(g[0]),z.unshift(kt)),v[v.length-1]!==1&&(v.push(1),g.push(null)),l.has(f)||l.set(f,{keyframes:{},transition:{}});const j=l.get(f);j.keyframes[w]=g,j.transition[w]={...r,duration:T,ease:z,times:v,...n}}}),l}function pe(e,r){return!r.has(e)&&r.set(e,{}),r.get(e)}function ue(e,r){return r[e]||(r[e]=[]),r[e]}function Kt(e){return Array.isArray(e)?e:[e]}function Et(e,r){return e&&e[r]?{...e,...e[r]}:{...e}}const Vt=e=>typeof e=="number",zt=e=>e.every(Vt);function Ct(e,r){return e in r}class It extends He{constructor(){super(...arguments),this.type="object"}readValueFromInstance(r,n){if(Ct(n,r)){const o=r[n];if(typeof o=="string"||typeof o=="number")return o}}getBaseTargetFromProps(){}removeValueFromRenderState(r,n){delete n.output[r]}measureInstanceViewportBox(){return Ne()}build(r,n){Object.assign(r.output,n)}renderInstance(r,{output:n}){Object.assign(r,n)}sortInstanceNodePosition(){return 0}}function Mt(e){const r={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=We(e)&&!$e(e)?new Ye(r):new Qe(r);n.mount(e),Q.set(e,n)}function Rt(e){const r={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new It(r);n.mount(e),Q.set(e,n)}function Tt(e,r){return ye(e)||typeof e=="number"||typeof e=="string"&&!ee(r)}function Se(e,r,n,o){const a=[];if(Tt(e,r))a.push(Ue(e,ee(r)&&r.default||r,n&&(n.default||n)));else{const d=_e(e,r,o),l=d.length;for(let h=0;h<l;h++){const x=d[h],y=x instanceof Element?Mt:Rt;Q.has(x)||y(x);const A=Q.get(x),m={...n};"delay"in m&&typeof m.delay=="function"&&(m.delay=m.delay(h,l)),a.push(...Ze(A,{...r,transition:m},{}))}}return a}function Lt(e,r,n){const o=[];return At(e,r,n,{spring:Je}).forEach(({keyframes:d,transition:l},h)=>{o.push(...Se(h,d,l))}),o}function Pt(e){return Array.isArray(e)&&e.some(Array.isArray)}function Dt(e){function r(n,o,a){let d=[],l;if(Pt(n))d=Lt(n,o,e);else{const{onComplete:x,...y}=a||{};typeof x=="function"&&(l=x),d=Se(n,o,y,e)}const h=new ft(d);return l&&h.finished.then(l),h}return r}const Ft=Dt(),Gt=(e=1024)=>{const[r,n]=p.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return p.useEffect(()=>{const o=()=>{const d=navigator.userAgent||navigator.vendor||window.opera;return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(d.toLowerCase())},a=()=>{const d=window.innerWidth<e,l=o();n(d||l)};if(a(),typeof ResizeObserver<"u"){const d=new ResizeObserver(a);return d.observe(document.documentElement),()=>d.disconnect()}else return window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[e]),r},Ot=()=>{const[e,r]=p.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return p.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)"),o=a=>{r(a.matches)};return n.addEventListener?(n.addEventListener("change",o),()=>n.removeEventListener("change",o)):(n.addListener(o),()=>n.removeListener(o))},[]),e},Bt=Xe`
  from { stroke-dashoffset: 90; }
  to { stroke-dashoffset: 0; }
`,Ht=i.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`,Nt=i.div`
  position: relative;
  width: min(100%, 520px);
  aspect-ratio: 1.14;
  display: grid;
  place-items: center;
`,Wt=i.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`,$t=i.path`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 14 10;
  animation: ${Bt} 4.2s linear infinite;
`,Yt=i.path`
  fill: none;
  stroke: var(--border-color);
  stroke-width: 14;
  stroke-linecap: round;
`,M=i.rect`
  fill: var(--card-bg);
  stroke: var(--border-color);
  stroke-width: 2;
  rx: 8;
`,F=i.rect`
  fill: var(--accent-amber);
  rx: 8;
`,N=i.text`
  fill: var(--text-color);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0;
`,W=i.text`
  fill: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
`,J=i.circle`
  fill: var(--accent-amber);
  stroke: var(--background-color);
  stroke-width: 5;
`,Qt=i.div`
  position: absolute;
  inset: auto 50% 50% auto;
  transform: translate(50%, 50%);
  width: clamp(72px, 18vw, 100px);
  height: clamp(72px, 18vw, 100px);
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  padding: 0.8rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,xe=()=>t.jsx(Ht,{"aria-hidden":"true",children:t.jsxs(Nt,{children:[t.jsxs(Wt,{viewBox:"0 0 520 455",role:"img",children:[t.jsx(Yt,{d:"M72 320 C130 190 206 155 260 224 C314 292 389 238 448 118"}),t.jsx($t,{d:"M72 320 C130 190 206 155 260 224 C314 292 389 238 448 118"}),t.jsx(M,{x:"40",y:"282",width:"142",height:"92"}),t.jsx(F,{x:"60",y:"302",width:"44",height:"18"}),t.jsx(F,{x:"112",y:"302",width:"48",height:"18"}),t.jsx(M,{x:"70",y:"330",width:"82",height:"20"}),t.jsx(N,{x:"58",y:"405",children:"JIKSAN 3PL"}),t.jsx(W,{x:"58",y:"424",children:"2,140m2 / 3,000 pallet"}),t.jsx(M,{x:"184",y:"74",width:"152",height:"102"}),t.jsx(M,{x:"205",y:"99",width:"110",height:"30"}),t.jsx(F,{x:"223",y:"142",width:"74",height:"14"}),t.jsx(N,{x:"206",y:"50",children:"QUALITY CHECK"}),t.jsx(W,{x:"206",y:"66",children:"3,000 Class clean booth"}),t.jsx(M,{x:"356",y:"74",width:"124",height:"88"}),t.jsx(F,{x:"374",y:"94",width:"88",height:"18"}),t.jsx(M,{x:"383",y:"124",width:"70",height:"18"}),t.jsx(N,{x:"358",y:"196",children:"ERP QR"}),t.jsx(W,{x:"358",y:"214",children:"Scan / repackage"}),t.jsx(M,{x:"332",y:"292",width:"130",height:"76"}),t.jsx(F,{x:"356",y:"316",width:"74",height:"18"}),t.jsx(M,{x:"374",y:"340",width:"38",height:"10"}),t.jsx(N,{x:"344",y:"401",children:"DELIVERY"}),t.jsx(W,{x:"344",y:"419",children:"Loading / outbound"}),t.jsx(J,{cx:"72",cy:"320",r:"12"}),t.jsx(J,{cx:"260",cy:"224",r:"12"}),t.jsx(J,{cx:"448",cy:"118",r:"12"})]}),t.jsx(Qt,{children:t.jsx("img",{src:"/logo.png",alt:""})})]})}),Ut=p.lazy(()=>ot(()=>import("./Desktop3DGlobe-BH7OlTjo.js"),__vite__mapDeps([0,1]))),Zt=i.div`
  width: 100%;
  overflow-x: hidden;
`,Jt=i.section`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 5%;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  gap: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: 5rem 5% 3rem;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem 2.5rem;
  }
`,Xt=i(u.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  min-width: 0;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
    order: 1;
  }
`,qt=i(u.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,er=i(u.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  width: 100%;
  color: var(--text-color);
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
`,tr=i(u.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  width: 100%;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,rr=i(u.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,nr=i(u.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,ir=i.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }

  &:hover {
    color: var(--accent-amber);
  }
`,X=i(u(be))`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: 1px solid transparent;
  min-height: 48px;
  min-width: 0;
  text-decoration: none;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    width: 100%;
  }
`,or=i(X)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,ar=i(u.div)`
  height: 500px;
  width: 100%;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 1024px) {
    order: 2;
    height: 260px;
    max-width: 360px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    height: 190px;
    max-width: 280px;
  }
`,sr=i(u.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7.5rem), 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 620px;
  margin-top: 1.5rem;
`,cr=i.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(var(--card-bg-rgb, 255, 255, 255), 0.64);
  padding: 0.85rem;
  min-width: 0;
`,lr=i.div`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
`,dr=i.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  overflow-wrap: anywhere;
`,mr=i.section`
  background: var(--card-bg);
  padding: 4.5rem 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 3rem 1.25rem;
  }
`,hr=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8.75rem), 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  max-width: 1200px;
  margin: 0 auto;
`,pr=i(u.div)`
  text-align: center;
  padding: 1.35rem 1rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
`,ur=i.div`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`,xr=i.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.35;
  overflow-wrap: anywhere;
`,fr=i(q)`
  background: var(--background-color);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,$=i(u.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
`,Y=i.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,fe=i.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,gr=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1200px;
  margin: 0 auto;
`,ke=i(u.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

`,yr=i.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`,br=i.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,vr=i.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,wr=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${ke}:hover & {
    gap: 0.75rem;
  }
`,jr=i(q)`
  background: var(--card-bg);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,_r=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1200px;
  margin: 0 auto 3rem;
`,Sr=i(u.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  min-width: 0;
  will-change: transform;
  transform: translateZ(0);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  }
`,kr=i.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 10px;
  flex-shrink: 0;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`,Ar=i.div`
  flex: 1;
  min-width: 0;
`,Kr=i.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,Er=i.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,Vr=i(u.div)`
  text-align: center;
`,zr=i(q)`
  background: var(--background-color);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,Cr=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,Ir=i(u.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 140px;
  max-width: 200px;

  @media (max-width: 768px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
    text-align: left;
    gap: 1rem;
    padding: 1rem 0;
  }
`,Mr=i.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 1rem;
  flex-shrink: 0;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    margin-bottom: 0;
  }
`,Rr=i.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Tr=i.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Lr=i.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,Pr=i.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,Dr=i(u.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Fr=i.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 4rem 1.25rem;
  }
`,Gr=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin: 0 auto;
`,Or=i(u.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Br=i.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`,Hr=i.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Nr=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Wr=i(u.img).attrs({loading:"lazy",decoding:"async"})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease, background 0.2s ease;
  will-change: transform;
  border-radius: 6px;

  /* White background for logos that need it in dark mode */
  ${e=>e.$needsBg&&`
    html[data-theme="dark"] & {
      background: white;
      padding: 8px 12px;
    }
  `}

  &:hover {
    transform: scale(1.05);
  }
`,$r=({value:e,suffix:r=""})=>{const n=p.useRef(null),o=R(n,{once:!0}),a=we(0),d=bt(a,x=>Math.round(x)),[l,h]=p.useState(0);return p.useEffect(()=>{if(o){const x=Ft(a,e,{duration:2,ease:"easeOut"}),y=d.on("change",A=>{h(A)});return()=>{x.stop(),y()}}},[o,e,a,d]),t.jsxs(ur,{ref:n,children:[l.toLocaleString(),t.jsx("span",{children:r})]})},Zr=()=>{const{t:e}=qe(),r=p.useRef(null),n=Gt(1024),o=Ot(),d=typeof window<"u"&&window.innerWidth>=1024&&!n&&!o,l=p.useRef(null),h=p.useRef(null),x=p.useRef(null),y=p.useRef(null),A=p.useRef(null),m=R(l,{once:!0,margin:"-50px"}),T=R(h,{once:!0,margin:"-50px"}),K=R(x,{once:!0,margin:"-50px"}),f=R(A,{once:!0,margin:"-50px"}),w=R(y,{once:!0,margin:"-50px"}),b=[{icon:t.jsx(ct,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:t.jsx(le,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:t.jsx(lt,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:t.jsx(dt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],g=[{icon:t.jsx(le,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:t.jsx(at,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:t.jsx(st,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],v=[{icon:t.jsx(mt,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:t.jsx(ht,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:t.jsx(pt,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],z=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:40,suffix:"ft x2",labelKey:"metric_container_dock"},{value:16,suffix:"CH",labelKey:"metric_cctv"}],j=[{value:"2,140㎡",labelKey:"hero_proof_facility"},{value:"3,000+",labelKey:"hero_proof_capacity"},{value:"40ft x2",labelKey:"metric_container_dock"},{value:"16CH",labelKey:"metric_cctv"}],_=Object.entries(et.reduce((s,c)=>(s[c.industryKey]=s[c.industryKey]||[],s[c.industryKey].push(c),s),{})).map(([s,c])=>({industry:e(s),icon:s==="partners_industry_automotive"?t.jsx(tt,{}):t.jsx(rt,{}),partners:c})),S=p.useRef(null),E=R(S,{once:!0,margin:"-50px"});return t.jsxs(Zt,{children:[t.jsxs(Jt,{ref:l,children:[t.jsxs(Xt,{initial:{opacity:0,y:30},animate:m?{opacity:1,y:0}:{},transition:{duration:.6},children:[t.jsx(qt,{initial:{opacity:0},animate:m?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),t.jsx(er,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),t.jsx(tr,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),t.jsxs(rr,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[t.jsxs(X,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_primary_cta")," ",t.jsx(se,{})]}),t.jsx(or,{to:"/business",whileHover:{scale:1.02},whileTap:{scale:.98},children:e("hero_secondary_cta")})]}),t.jsx(sr,{"aria-label":e("hero_proof_label"),initial:{opacity:0,y:16},animate:m?{opacity:1,y:0}:{},transition:{delay:.6,duration:.5},children:j.map(s=>t.jsxs(cr,{children:[t.jsx(lr,{children:s.value}),t.jsx(dr,{children:e(s.labelKey)})]},s.labelKey))}),t.jsx(nr,{initial:{opacity:0},animate:m?{opacity:1}:{},transition:{delay:.7,duration:.5},children:t.jsxs(ir,{href:"mailto:cgpark@kmtechn.com",children:[t.jsx(nt,{})," cgpark@kmtechn.com"]})})]}),t.jsx(ar,{ref:r,initial:{opacity:0,y:18},animate:m?{opacity:1,y:0}:{},transition:{delay:.3,duration:.7},children:d?t.jsx(p.Suspense,{fallback:t.jsx(xe,{}),children:t.jsx(Ut,{})}):t.jsx(xe,{})})]}),t.jsx(mr,{ref:h,children:t.jsx(hr,{children:z.map((s,c)=>t.jsxs(pr,{initial:{opacity:0,y:20},animate:T?{opacity:1,y:0}:{},transition:{delay:c*.1,duration:.5},children:[t.jsx($r,{value:s.value,suffix:s.suffix}),t.jsx(xr,{children:e(s.labelKey)})]},c))})}),t.jsxs(fr,{ref:x,children:[t.jsxs($,{initial:{opacity:0,y:20},animate:K?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(Y,{children:e("home_section_services_label")}),t.jsx(H,{children:e("home_services_title")}),t.jsx(fe,{children:e("home_services_3pl_desc")})]}),t.jsx(gr,{children:g.map((s,c)=>t.jsx(be,{to:"/business",style:{textDecoration:"none",height:"100%"},children:t.jsxs(ke,{initial:{opacity:0,y:30},animate:K?{opacity:1,y:0}:{},transition:{delay:c*.1,duration:.5},children:[t.jsx(yr,{children:s.icon}),t.jsx(br,{children:e(s.titleKey)}),t.jsx(vr,{children:e(s.descKey)}),t.jsxs(wr,{children:[e("home_services_button")," ",t.jsx(ce,{})]})]})},s.titleKey))})]}),t.jsxs(zr,{ref:A,children:[t.jsxs($,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(Y,{children:e("home_section_process_label")}),t.jsx(H,{children:e("process_home_title")}),t.jsx(fe,{children:e("process_home_desc")})]}),t.jsx(Cr,{children:b.map((s,c)=>t.jsxs(it.Fragment,{children:[t.jsxs(Ir,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{delay:c*.15,duration:.5},children:[t.jsx(Mr,{children:s.icon}),t.jsxs(Pr,{children:[t.jsx(Rr,{children:e("process_step_label",{number:c+1})}),t.jsx(Tr,{children:e(s.titleKey)}),t.jsx(Lr,{children:e(s.descKey)})]})]}),c<b.length-1&&t.jsx(Dr,{initial:{opacity:0},animate:f?{opacity:1}:{},transition:{delay:c*.15+.1,duration:.3},children:t.jsx(ce,{})})]},s.titleKey))})]}),t.jsxs(jr,{ref:y,children:[t.jsxs($,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(Y,{children:e("home_section_strengths_label")}),t.jsx(H,{children:e("home_strengths_title")})]}),t.jsx(_r,{children:v.map((s,c)=>t.jsxs(Sr,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{},transition:{delay:c*.1,duration:.5},children:[t.jsx(kr,{children:s.icon}),t.jsxs(Ar,{children:[t.jsx(Kr,{children:e(s.titleKey)}),t.jsx(Er,{children:e(s.descKey)})]})]},c))}),t.jsx(Vr,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:t.jsxs(X,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("home_strengths_cta")," ",t.jsx(se,{})]})})]}),t.jsxs(Fr,{ref:S,children:[t.jsxs($,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(Y,{children:e("home_section_partners_label")}),t.jsx(H,{children:e("core_customers_title")})]}),t.jsx(Gr,{children:_.map((s,c)=>t.jsxs(Or,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{delay:c*.15,duration:.5},children:[t.jsxs(Br,{children:[s.icon,t.jsx(Hr,{children:s.industry})]}),t.jsx(Nr,{children:s.partners.map((C,k)=>t.jsx(Wr,{src:C.logo,alt:`${C.name} logo`,$needsBg:C.needsBg,initial:{opacity:0},animate:E?{opacity:1}:{},transition:{delay:c*.15+k*.05,duration:.4}},C.name))})]},s.industry))})]})]})};export{Zr as default};
