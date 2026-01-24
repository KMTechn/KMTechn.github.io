const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Desktop3DGlobe-gGWOGYxu.js","assets/three-vendor-uCD6w5gt.js","assets/react-vendor-VEkyeZpm.js","assets/index-C5R8fBgL.js","assets/i18n-vendor-Dc1ZlYGt.js","assets/index-C8rNJvCK.css"])))=>i.map(i=>d[i]);
import{u as Ke,j as t,H as Me,_ as Ee}from"./three-vendor-uCD6w5gt.js";import{b as u,L as O,R as ze}from"./react-vendor-VEkyeZpm.js";import{i as Ce,a as Ve,u as xe,m as Le,M as Ie,b as Te,f as Re,c as Pe,d as Q,r as De,e as Ge,g as Fe,h as ye,j as Oe,k as $e,l as He,n as Be,s as Ne,p as We,V as Ye,o as Ue,q as Qe,t as Ze,S as Xe,H as Je,v as N,w as qe,x as et,y as tt,z as o,A as W,B as I,F as nt,C as rt,D as oe,E as it,G as $,I as ae,J as h,K as se,L as ot,N as at,O as st,P as ct,Q as lt,R as dt,T as mt,U as ut,W as X}from"./index-C5R8fBgL.js";import{u as pt}from"./i18n-vendor-Dc1ZlYGt.js";const ht=(e,n,r)=>{const i=n-e;return((r-e)%i+i)%i+e};function be(e,n){return Ce(e)?e[ht(0,e.length,n)]:e}class ft{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,r){for(let i=0;i<this.animations.length;i++)this.animations[i][n]=r}attachTimeline(n){const r=this.animations.map(i=>i.attachTimeline(n));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return ce(this.animations,"duration")}get iterationDuration(){return ce(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(r=>r[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ce(e,n){let r=0;for(let i=0;i<e.length;i++){const a=e[i][n];a!==null&&a>r&&(r=a)}return r}class gt extends ft{then(n,r){return this.finished.finally(n).then(()=>{})}}function xt(...e){const n=!Array.isArray(e[0]),r=n?0:-1,i=e[0+r],a=e[1+r],c=e[2+r],s=e[3+r],d=Ve(a,c,s);return n?d(i):d}function ve(e){const n=xe(()=>Le(e)),{isStatic:r}=u.useContext(Ie);if(r){const[,i]=u.useState(e);u.useEffect(()=>n.on("change",i),[])}return n}function we(e,n){const r=ve(n()),i=()=>r.set(n());return i(),Te(()=>{const a=()=>Re.preRender(i,!1,!0),c=e.map(s=>s.on("change",a));return()=>{c.forEach(s=>s()),Pe(i)}}),r}function yt(e){Q.current=[],e();const n=we(Q.current,e);return Q.current=void 0,n}function bt(e,n,r,i){if(typeof e=="function")return yt(e);const a=typeof n=="function"?n:xt(n,r,i);return Array.isArray(e)?le(e,a):le([e],([c])=>a(c))}function le(e,n){const r=xe(()=>[]);return we(e,()=>{r.length=0;const i=e.length;for(let a=0;a<i;a++)r[a]=e[a].get();return n(r)})}function J(e){return typeof e=="object"&&!Array.isArray(e)}function je(e,n,r,i){return typeof e=="string"&&J(n)?De(e,r,i):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function vt(e,n,r){return e*(n+1)}function de(e,n,r,i){return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?r:n.startsWith("<")?Math.max(0,r+parseFloat(n.slice(1))):i.get(n)??e}function wt(e,n,r){for(let i=0;i<e.length;i++){const a=e[i];a.at>n&&a.at<r&&(Fe(e,a),i--)}}function jt(e,n,r,i,a,c){wt(e,a,c);for(let s=0;s<n.length;s++)e.push({value:n[s],at:Ge(a,c,i[s]),easing:be(r,s)})}function _t(e,n){for(let r=0;r<e.length;r++)e[r]=e[r]/(n+1)}function St(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const kt="easeInOut";function At(e,{defaultTransition:n={},...r}={},i,a){const c=n.duration||.3,s=new Map,d=new Map,f={},v=new Map;let g=0,x=0,L=0;for(let A=0;A<e.length;A++){const y=e[A];if(typeof y=="string"){v.set(y,x);continue}else if(!Array.isArray(y)){v.set(y.name,de(x,y.at,g,v));continue}let[K,_,b={}]=y;b.at!==void 0&&(x=de(x,b.at,g,v));let w=0;const C=(S,j,l,m=0,M=0)=>{const p=Kt(S),{delay:Y=0,times:E=Oe(p),type:U="keyframes",repeat:D,repeatType:Jn,repeatDelay:qn=0,...Ae}=j;let{ease:V=n.ease||"easeOut",duration:z}=j;const q=typeof Y=="function"?Y(m,M):Y,ee=p.length,te=Be(U)?U:a?.[U||"keyframes"];if(ee<=2&&te){let T=100;if(ee===2&&zt(p)){const R=p[1]-p[0];T=Math.abs(R)}const G={...Ae};z!==void 0&&(G.duration=Ne(z));const F=$e(G,T,te);V=F.ease,z=F.duration}z??(z=c);const ne=x+q;E.length===1&&E[0]===0&&(E[1]=1);const re=E.length-p.length;if(re>0&&He(E,re),p.length===1&&p.unshift(null),D){z=vt(z,D);const T=[...p],G=[...E];V=Array.isArray(V)?[...V]:[V];const F=[...V];for(let R=0;R<D;R++){p.push(...T);for(let P=0;P<T.length;P++)E.push(G[P]+(R+1)),V.push(P===0?"linear":be(F,P-1))}_t(E,D)}const ie=ne+z;jt(l,p,V,E,ne,ie),w=Math.max(q+z,w),L=Math.max(ie,L)};if(ye(K)){const S=me(K,d);C(_,b,ue("default",S))}else{const S=je(K,_,i,f),j=S.length;for(let l=0;l<j;l++){_=_,b=b;const m=S[l],M=me(m,d);for(const p in _)C(_[p],Mt(b,p),ue(p,M),l,j)}}g=x,x+=w}return d.forEach((A,y)=>{for(const K in A){const _=A[K];_.sort(St);const b=[],w=[],C=[];for(let j=0;j<_.length;j++){const{at:l,value:m,easing:M}=_[j];b.push(m),w.push(We(0,L,l)),C.push(M||"easeOut")}w[0]!==0&&(w.unshift(0),b.unshift(b[0]),C.unshift(kt)),w[w.length-1]!==1&&(w.push(1),b.push(null)),s.has(y)||s.set(y,{keyframes:{},transition:{}});const S=s.get(y);S.keyframes[K]=b,S.transition[K]={...n,duration:L,ease:C,times:w,...r}}}),s}function me(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function ue(e,n){return n[e]||(n[e]=[]),n[e]}function Kt(e){return Array.isArray(e)?e:[e]}function Mt(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const Et=e=>typeof e=="number",zt=e=>e.every(Et);function Ct(e,n){return e in n}class Vt extends Ye{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,r){if(Ct(r,n)){const i=n[r];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(n,r){delete r.output[n]}measureInstanceViewportBox(){return Ue()}build(n,r){Object.assign(n.output,r)}renderInstance(n,{output:r}){Object.assign(n,r)}sortInstanceNodePosition(){return 0}}function Lt(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Qe(e)&&!Ze(e)?new Xe(n):new Je(n);r.mount(e),N.set(e,r)}function It(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Vt(n);r.mount(e),N.set(e,r)}function Tt(e,n){return ye(e)||typeof e=="number"||typeof e=="string"&&!J(n)}function _e(e,n,r,i){const a=[];if(Tt(e,n))a.push(qe(e,J(n)&&n.default||n,r&&(r.default||r)));else{const c=je(e,n,i),s=c.length;for(let d=0;d<s;d++){const f=c[d],v=f instanceof Element?Lt:It;N.has(f)||v(f);const g=N.get(f),x={...r};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(d,s)),a.push(...et(g,{...n,transition:x},{}))}}return a}function Rt(e,n,r){const i=[];return At(e,n,r,{spring:tt}).forEach(({keyframes:c,transition:s},d)=>{i.push(..._e(d,c,s))}),i}function Pt(e){return Array.isArray(e)&&e.some(Array.isArray)}function Dt(e){function n(r,i,a){let c=[],s;if(Pt(r))c=Rt(r,i,e);else{const{onComplete:f,...v}=a||{};typeof f=="function"&&(s=f),c=_e(r,i,v,e)}const d=new gt(c);return s&&d.finished.then(s),d}return n}const Gt=Dt(),Ft=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Ot=o.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,$t=o.div`
  width: ${e=>e.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,Ht=o.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function ir(){const{progress:e}=Ke();return t.jsx(Me,{center:!0,children:t.jsxs(Ft,{children:[t.jsxs(Ht,{children:[Math.round(e),"% Loaded"]}),t.jsx(Ot,{children:t.jsx($t,{progress:e})})]})})}const Bt=(e=1024)=>{const[n,r]=u.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return u.useEffect(()=>{const i=()=>{const c=navigator.userAgent||navigator.vendor||window.opera;return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(c.toLowerCase())},a=()=>{const c=window.innerWidth<e,s=i();r(c||s)};if(a(),typeof ResizeObserver<"u"){const c=new ResizeObserver(a);return c.observe(document.documentElement),()=>c.disconnect()}else return window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[e]),n},Nt=()=>{const[e,n]=u.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return u.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=a=>{n(a.matches)};return r.addEventListener?(r.addEventListener("change",i),()=>r.removeEventListener("change",i)):(r.addListener(i),()=>r.removeListener(i))},[]),e},Se=W`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Wt=W`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`,Yt=W`
  to { stroke-dashoffset: 0; }
`,Ut=W`
  0%, 100% { filter: drop-shadow(0 0 3px var(--accent-amber)); }
  50% { filter: drop-shadow(0 0 8px var(--accent-amber)); }
`,Qt=o.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${Se} 0.8s ease-out;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`,Zt=o.svg`
  width: 100%;
  max-width: 400px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 320px;
  }
`,Xt=o.circle`
  fill: var(--accent-amber);
  animation: ${Wt} 2s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,Jt=o.circle`
  fill: var(--accent-amber);
  animation: ${Ut} 2s ease-in-out infinite;
`,qt=o.path`
  stroke: rgba(255, 204, 0, 0.4);
  stroke-width: 1.5;
  fill: none;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: ${Yt} 2s ease-out forwards;
  animation-delay: ${e=>e.$delay||0}s;
`,en=o.text`
  fill: var(--text-secondary);
  font-size: 10px;
  font-weight: 500;
  text-anchor: middle;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`,tn=o.text`
  fill: var(--accent-amber);
  font-size: 12px;
  font-weight: 700;
  text-anchor: middle;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`,pe=o.g`
  opacity: 0;
  animation: ${Se} 0.6s ease-out forwards;
  animation-delay: ${e=>e.$delay||0}s;
`,he=[{id:"korea",x:200,y:80,label:"KOREA",delay:.2},{id:"china",x:320,y:140,label:"CHINA",delay:.4},{id:"germany",x:80,y:140,label:"GERMANY",delay:.6},{id:"hongkong",x:280,y:260,label:"HONG KONG",delay:.8},{id:"global",x:120,y:260,label:"GLOBAL",delay:1}],k={x:200,y:180},fe=()=>t.jsx(Qt,{children:t.jsxs(Zt,{viewBox:"0 0 400 340",preserveAspectRatio:"xMidYMid meet",children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"lineGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 204, 0, 0.1)"}),t.jsx("stop",{offset:"50%",stopColor:"rgba(255, 204, 0, 0.6)"}),t.jsx("stop",{offset:"100%",stopColor:"rgba(255, 204, 0, 0.1)"})]}),t.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[t.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{in:"coloredBlur"}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),he.map((e,n)=>{const r=(k.x+e.x)/2,i=(k.y+e.y)/2-20;return t.jsx(qt,{d:`M ${k.x} ${k.y} Q ${r} ${i} ${e.x} ${e.y}`,$delay:.3+n*.15},`line-${e.id}`)}),he.map(e=>t.jsxs(pe,{$delay:e.delay,children:[t.jsx("circle",{cx:e.x,cy:e.y,r:24,fill:"none",stroke:"rgba(255, 204, 0, 0.2)",strokeWidth:"1"}),t.jsx(Xt,{cx:e.x,cy:e.y,r:8,$delay:e.delay}),t.jsx(en,{x:e.x,y:e.y+38,children:e.label})]},e.id)),t.jsxs(pe,{$delay:0,children:[t.jsx("circle",{cx:k.x,cy:k.y,r:45,fill:"none",stroke:"rgba(255, 204, 0, 0.15)",strokeWidth:"1"}),t.jsx("circle",{cx:k.x,cy:k.y,r:35,fill:"none",stroke:"rgba(255, 204, 0, 0.25)",strokeWidth:"1"}),t.jsx(Jt,{cx:k.x,cy:k.y,r:18,filter:"url(#glow)"}),t.jsx(tn,{x:k.x,y:k.y+4,children:"KM"})]}),t.jsx("circle",{cx:150,cy:120,r:2,fill:"rgba(255, 204, 0, 0.3)"}),t.jsx("circle",{cx:250,cy:200,r:2,fill:"rgba(255, 204, 0, 0.3)"}),t.jsx("circle",{cx:140,cy:200,r:2,fill:"rgba(255, 204, 0, 0.3)"}),t.jsx("circle",{cx:260,cy:120,r:2,fill:"rgba(255, 204, 0, 0.3)"})]})}),nn=u.lazy(()=>Ee(()=>import("./Desktop3DGlobe-gGWOGYxu.js"),__vite__mapDeps([0,1,2,3,4,5]))),rn=o.div`
  width: 100%;
  overflow-x: hidden;
`,on=o.section`
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
    padding: 4rem 5%;
    gap: 3rem;
  }
`,an=o(h.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
  }
`,sn=o(h.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,cn=o(h.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: -0.02em;
`,ln=o(h.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`,dn=o(h.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,mn=o(h.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,un=o.a`
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
`,Z=o(h.button)`
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
  border: none;

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
`,pn=o(Z)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,hn=o(h.div)`
  height: 500px;
  width: 100%;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 1024px) {
    order: 1;
    height: 350px;
    max-width: 400px;
    margin: 0 auto;
  }
`,fn=o.section`
  background: var(--card-bg);
  padding: 5rem 5%;
  border-bottom: 1px solid var(--border-color);
`,gn=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,xn=o(h.div)`
  text-align: center;
  padding: 1.5rem;
`,yn=o.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;

  span {
    color: var(--accent-amber);
  }
`,bn=o.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`,vn=o(X)`
  background: var(--background-color);
  padding: 7rem 5%;
`,H=o(h.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`,B=o.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,ge=o.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,wn=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,ke=o(h.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
`,jn=o.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 12px;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`,_n=o.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,Sn=o.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,kn=o.div`
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
`,An=o(X)`
  background: var(--card-bg);
  padding: 7rem 5%;
`,Kn=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Mn=o(h.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  will-change: transform;
  transform: translateZ(0);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  }
`,En=o.div`
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
`,zn=o.div`
  flex: 1;
`,Cn=o.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,Vn=o.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,Ln=o(h.div)`
  text-align: center;
`,In=o(X)`
  background: var(--background-color);
  padding: 7rem 5%;
`,Tn=o.div`
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
`,Rn=o(h.div)`
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
`,Pn=o.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 16px;
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
`,Dn=o.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Gn=o.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Fn=o.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,On=o.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,$n=o(h.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Hn=o.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);
`,Bn=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Nn=o(h.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Wn=o.div`
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
`,Yn=o.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Un=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Qn=o(h.img).attrs({loading:"lazy",decoding:"async"})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }
`,Zn=({value:e,suffix:n=""})=>{const r=u.useRef(null),i=I(r,{once:!0}),a=ve(0),c=bt(a,f=>Math.round(f)),[s,d]=u.useState(0);return u.useEffect(()=>{if(i){const f=Gt(a,e,{duration:2,ease:"easeOut"}),v=c.on("change",g=>{d(g)});return()=>{f.stop(),v()}}},[i,e,a,c]),t.jsxs(yn,{ref:r,children:[s.toLocaleString(),t.jsx("span",{children:n})]})},Xn=()=>{const{t:e}=pt(),n=u.useRef(null),r=Bt(1024),i=Nt(),a=!r&&!i,c=u.useRef(null),s=u.useRef(null),d=u.useRef(null),f=u.useRef(null),v=u.useRef(null),g=I(c,{once:!0,margin:"-50px"}),x=I(s,{once:!0,margin:"-50px"}),L=I(d,{once:!0,margin:"-50px"}),A=I(v,{once:!0,margin:"-50px"}),y=I(f,{once:!0,margin:"-50px"}),K=[{icon:t.jsx(st,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:t.jsx(se,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:t.jsx(ct,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:t.jsx(lt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],_=[{icon:t.jsx(se,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:t.jsx(ot,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:t.jsx(at,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],b=[{icon:t.jsx(dt,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:t.jsx(mt,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:t.jsx(ut,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],w=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:15,suffix:"+",labelKey:"stats_years_experience"},{value:99,suffix:"%",labelKey:"stats_customer_satisfaction"}],C=[{industry:e("partners_industry_automotive")||"자동차",icon:t.jsx(nt,{}),partners:[{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"Continental",logo:"/logos/continental_new.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png"}]},{industry:e("partners_industry_electronics")||"전자 / 디스플레이",icon:t.jsx(rt,{}),partners:[{name:"LG Display",logo:"/logos/lg_display_new.png"},{name:"LG Electronics",logo:"/logos/lg_electronics_new.png"},{name:"Humax",logo:"/logos/humax_new.png"}]}],S=u.useRef(null),j=I(S,{once:!0,margin:"-50px"});return t.jsxs(rn,{children:[t.jsxs(on,{ref:c,children:[t.jsxs(an,{initial:{opacity:0,y:30},animate:g?{opacity:1,y:0}:{},transition:{duration:.6},children:[t.jsx(sn,{initial:{opacity:0},animate:g?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),t.jsx(cn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),t.jsx(ln,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),t.jsxs(dn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[t.jsx(O,{to:"/about",children:t.jsxs(Z,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",t.jsx(oe,{})]})}),t.jsx(O,{to:"/contact",children:t.jsx(pn,{whileHover:{scale:1.02},whileTap:{scale:.98},children:e("nav_contact")})})]}),t.jsx(mn,{initial:{opacity:0},animate:g?{opacity:1}:{},transition:{delay:.7,duration:.5},children:t.jsxs(un,{href:"mailto:cgpark@kmtechn.com",children:[t.jsx(it,{})," cgpark@kmtechn.com"]})})]}),t.jsx(hn,{ref:n,initial:{opacity:0,x:30},animate:g?{opacity:1,x:0}:{},transition:{delay:.3,duration:.7},children:a?t.jsx(u.Suspense,{fallback:t.jsx(fe,{}),children:t.jsx(nn,{})}):t.jsx(fe,{})})]}),t.jsx(fn,{ref:s,children:t.jsx(gn,{children:w.map((l,m)=>t.jsxs(xn,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[t.jsx(Zn,{value:l.value,suffix:l.suffix}),t.jsx(bn,{children:e(l.labelKey)})]},m))})}),t.jsxs(vn,{ref:d,children:[t.jsxs(H,{initial:{opacity:0,y:20},animate:L?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(B,{children:"Our Services"}),t.jsx($,{children:e("home_services_title")}),t.jsx(ge,{children:e("home_services_3pl_desc")})]}),t.jsx(wn,{children:_.map((l,m)=>t.jsx(O,{to:"/business",style:{textDecoration:"none"},children:t.jsxs(ke,{initial:{opacity:0,y:30},animate:L?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[t.jsx(jn,{children:l.icon}),t.jsx(_n,{children:e(l.titleKey)}),t.jsx(Sn,{children:e(l.descKey)}),t.jsxs(kn,{children:[e("home_services_button")," ",t.jsx(ae,{})]})]})},l.titleKey))})]}),t.jsxs(In,{ref:v,children:[t.jsxs(H,{initial:{opacity:0,y:20},animate:A?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(B,{children:"How It Works"}),t.jsx($,{children:e("process_home_title")}),t.jsx(ge,{children:e("process_home_desc")})]}),t.jsx(Tn,{children:K.map((l,m)=>t.jsxs(ze.Fragment,{children:[t.jsxs(Rn,{initial:{opacity:0,y:20},animate:A?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[t.jsx(Pn,{children:l.icon}),t.jsxs(On,{children:[t.jsxs(Dn,{children:["STEP ",m+1]}),t.jsx(Gn,{children:e(l.titleKey)}),t.jsx(Fn,{children:e(l.descKey)})]})]}),m<K.length-1&&t.jsx($n,{initial:{opacity:0},animate:A?{opacity:1}:{},transition:{delay:m*.15+.1,duration:.3},children:t.jsx(ae,{})})]},l.titleKey))})]}),t.jsxs(An,{ref:f,children:[t.jsxs(H,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(B,{children:"Why Choose Us"}),t.jsx($,{children:e("home_strengths_title")})]}),t.jsx(Kn,{children:b.map((l,m)=>t.jsxs(Mn,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[t.jsx(En,{children:l.icon}),t.jsxs(zn,{children:[t.jsx(Cn,{children:e(l.titleKey)}),t.jsx(Vn,{children:e(l.descKey)})]})]},m))}),t.jsx(Ln,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:t.jsx(O,{to:"/about",children:t.jsxs(Z,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",t.jsx(oe,{})]})})})]}),t.jsxs(Hn,{ref:S,children:[t.jsxs(H,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{duration:.5},children:[t.jsx(B,{children:"Trusted By"}),t.jsx($,{children:e("core_customers_title")})]}),t.jsx(Bn,{children:C.map((l,m)=>t.jsxs(Nn,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[t.jsxs(Wn,{children:[l.icon,t.jsx(Yn,{children:l.industry})]}),t.jsx(Un,{children:l.partners.map((M,p)=>t.jsx(Qn,{src:M.logo,alt:`${M.name} logo`,initial:{opacity:0},animate:j?{opacity:1}:{},transition:{delay:m*.15+p*.05,duration:.4}},M.name))})]},l.industry))})]})]})},or=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"}));export{or as H,ir as L};
//# sourceMappingURL=HomePage-D9Koh-Uu.js.map
