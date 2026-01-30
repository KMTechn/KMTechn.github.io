const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Desktop3DGlobe-C1WPGKrt.js","assets/three-vendor-uCD6w5gt.js","assets/react-vendor-VEkyeZpm.js","assets/index-DdCyKUx2.js","assets/i18n-vendor-Dc1ZlYGt.js","assets/index-C8rNJvCK.css"])))=>i.map(i=>d[i]);
import{u as Ke,j as n,H as Ee,_ as Ie}from"./three-vendor-uCD6w5gt.js";import{b as u,L as F,R as Pe}from"./react-vendor-VEkyeZpm.js";import{i as Ve,a as ze,u as ge,m as Ce,M as Te,b as Re,f as De,c as Le,d as Y,r as $e,e as Ge,g as Fe,h as xe,j as Oe,k as He,l as Be,n as We,s as Ne,p as Ue,V as Ye,o as Ze,q as Qe,t as Je,S as Xe,H as qe,v as W,w as et,x as tt,y as nt,z as o,A as D,B as z,F as rt,C as it,D as ae,E as ot,G as O,I as se,J as h,K as ce,L as at,N as st,O as ct,P as lt,Q as dt,R as mt,T as ut,U as pt,W as X}from"./index-DdCyKUx2.js";import{u as ht}from"./i18n-vendor-Dc1ZlYGt.js";const ft=(e,t,r)=>{const i=t-e;return((r-e)%i+i)%i+e};function ye(e,t){return Ve(e)?e[ft(0,e.length,t)]:e}class gt{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=r}attachTimeline(t){const r=this.animations.map(i=>i.attachTimeline(t));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return le(this.animations,"duration")}get iterationDuration(){return le(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(r=>r[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function le(e,t){let r=0;for(let i=0;i<e.length;i++){const a=e[i][t];a!==null&&a>r&&(r=a)}return r}class xt extends gt{then(t,r){return this.finished.finally(t).then(()=>{})}}function yt(...e){const t=!Array.isArray(e[0]),r=t?0:-1,i=e[0+r],a=e[1+r],s=e[2+r],c=e[3+r],d=ze(a,s,c);return t?d(i):d}function ve(e){const t=ge(()=>Ce(e)),{isStatic:r}=u.useContext(Te);if(r){const[,i]=u.useState(e);u.useEffect(()=>t.on("change",i),[])}return t}function be(e,t){const r=ve(t()),i=()=>r.set(t());return i(),Re(()=>{const a=()=>De.preRender(i,!1,!0),s=e.map(c=>c.on("change",a));return()=>{s.forEach(c=>c()),Le(i)}}),r}function vt(e){Y.current=[],e();const t=be(Y.current,e);return Y.current=void 0,t}function bt(e,t,r,i){if(typeof e=="function")return vt(e);const a=typeof t=="function"?t:yt(t,r,i);return Array.isArray(e)?de(e,a):de([e],([s])=>a(s))}function de(e,t){const r=ge(()=>[]);return be(e,()=>{r.length=0;const i=e.length;for(let a=0;a<i;a++)r[a]=e[a].get();return t(r)})}function q(e){return typeof e=="object"&&!Array.isArray(e)}function we(e,t,r,i){return typeof e=="string"&&q(t)?$e(e,r,i):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function wt(e,t,r){return e*(t+1)}function me(e,t,r,i){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?r:t.startsWith("<")?Math.max(0,r+parseFloat(t.slice(1))):i.get(t)??e}function jt(e,t,r){for(let i=0;i<e.length;i++){const a=e[i];a.at>t&&a.at<r&&(Fe(e,a),i--)}}function _t(e,t,r,i,a,s){jt(e,a,s);for(let c=0;c<t.length;c++)e.push({value:t[c],at:Ge(a,s,i[c]),easing:ye(r,c)})}function St(e,t){for(let r=0;r<e.length;r++)e[r]=e[r]/(t+1)}function Mt(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const kt="easeInOut";function At(e,{defaultTransition:t={},...r}={},i,a){const s=t.duration||.3,c=new Map,d=new Map,f={},b=new Map;let g=0,x=0,V=0;for(let M=0;M<e.length;M++){const y=e[M];if(typeof y=="string"){b.set(y,x);continue}else if(!Array.isArray(y)){b.set(y.name,me(x,y.at,g,b));continue}let[k,_,v={}]=y;v.at!==void 0&&(x=me(x,v.at,g,b));let w=0;const I=(S,j,l,m=0,A=0)=>{const p=Kt(S),{delay:N=0,times:K=Oe(p),type:U="keyframes",repeat:L,repeatType:ir,repeatDelay:or=0,...Ae}=j;let{ease:P=t.ease||"easeOut",duration:E}=j;const ee=typeof N=="function"?N(m,A):N,te=p.length,ne=We(U)?U:a?.[U||"keyframes"];if(te<=2&&ne){let C=100;if(te===2&&Pt(p)){const T=p[1]-p[0];C=Math.abs(T)}const $={...Ae};E!==void 0&&($.duration=Ne(E));const G=He($,C,ne);P=G.ease,E=G.duration}E??(E=s);const re=x+ee;K.length===1&&K[0]===0&&(K[1]=1);const ie=K.length-p.length;if(ie>0&&Be(K,ie),p.length===1&&p.unshift(null),L){E=wt(E,L);const C=[...p],$=[...K];P=Array.isArray(P)?[...P]:[P];const G=[...P];for(let T=0;T<L;T++){p.push(...C);for(let R=0;R<C.length;R++)K.push($[R]+(T+1)),P.push(R===0?"linear":ye(G,R-1))}St(K,L)}const oe=re+E;_t(l,p,P,K,re,oe),w=Math.max(ee+E,w),V=Math.max(oe,V)};if(xe(k)){const S=ue(k,d);I(_,v,pe("default",S))}else{const S=we(k,_,i,f),j=S.length;for(let l=0;l<j;l++){_=_,v=v;const m=S[l],A=ue(m,d);for(const p in _)I(_[p],Et(v,p),pe(p,A),l,j)}}g=x,x+=w}return d.forEach((M,y)=>{for(const k in M){const _=M[k];_.sort(Mt);const v=[],w=[],I=[];for(let j=0;j<_.length;j++){const{at:l,value:m,easing:A}=_[j];v.push(m),w.push(Ue(0,V,l)),I.push(A||"easeOut")}w[0]!==0&&(w.unshift(0),v.unshift(v[0]),I.unshift(kt)),w[w.length-1]!==1&&(w.push(1),v.push(null)),c.has(y)||c.set(y,{keyframes:{},transition:{}});const S=c.get(y);S.keyframes[k]=v,S.transition[k]={...t,duration:V,ease:I,times:w,...r}}}),c}function ue(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function pe(e,t){return t[e]||(t[e]=[]),t[e]}function Kt(e){return Array.isArray(e)?e:[e]}function Et(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const It=e=>typeof e=="number",Pt=e=>e.every(It);function Vt(e,t){return e in t}class zt extends Ye{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,r){if(Vt(r,t)){const i=t[r];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(t,r){delete r.output[t]}measureInstanceViewportBox(){return Ze()}build(t,r){Object.assign(t.output,r)}renderInstance(t,{output:r}){Object.assign(t,r)}sortInstanceNodePosition(){return 0}}function Ct(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Qe(e)&&!Je(e)?new Xe(t):new qe(t);r.mount(e),W.set(e,r)}function Tt(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new zt(t);r.mount(e),W.set(e,r)}function Rt(e,t){return xe(e)||typeof e=="number"||typeof e=="string"&&!q(t)}function je(e,t,r,i){const a=[];if(Rt(e,t))a.push(et(e,q(t)&&t.default||t,r&&(r.default||r)));else{const s=we(e,t,i),c=s.length;for(let d=0;d<c;d++){const f=s[d],b=f instanceof Element?Ct:Tt;W.has(f)||b(f);const g=W.get(f),x={...r};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(d,c)),a.push(...tt(g,{...t,transition:x},{}))}}return a}function Dt(e,t,r){const i=[];return At(e,t,r,{spring:nt}).forEach(({keyframes:s,transition:c},d)=>{i.push(...je(d,s,c))}),i}function Lt(e){return Array.isArray(e)&&e.some(Array.isArray)}function $t(e){function t(r,i,a){let s=[],c;if(Lt(r))s=Dt(r,i,e);else{const{onComplete:f,...b}=a||{};typeof f=="function"&&(c=f),s=je(r,i,b,e)}const d=new xt(s);return c&&d.finished.then(c),d}return t}const Gt=$t(),Ft=o.div`
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
`,Ht=o.div`
  width: ${e=>e.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,Bt=o.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function dr(){const{progress:e}=Ke();return n.jsx(Ee,{center:!0,children:n.jsxs(Ft,{children:[n.jsxs(Bt,{children:[Math.round(e),"% Loaded"]}),n.jsx(Ot,{children:n.jsx(Ht,{progress:e})})]})})}const Wt=(e=1024)=>{const[t,r]=u.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return u.useEffect(()=>{const i=()=>{const s=navigator.userAgent||navigator.vendor||window.opera;return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(s.toLowerCase())},a=()=>{const s=window.innerWidth<e,c=i();r(s||c)};if(a(),typeof ResizeObserver<"u"){const s=new ResizeObserver(a);return s.observe(document.documentElement),()=>s.disconnect()}else return window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[e]),t},Nt=()=>{const[e,t]=u.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return u.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=a=>{t(a.matches)};return r.addEventListener?(r.addEventListener("change",i),()=>r.removeEventListener("change",i)):(r.addListener(i),()=>r.removeListener(i))},[]),e},_e=D`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Se=D`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`,Me=D`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`,Ut=D`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,Yt=D`
  0%, 100% { filter: drop-shadow(0 0 5px var(--accent-amber)); }
  50% { filter: drop-shadow(0 0 15px var(--accent-amber)); }
`,Zt=o.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 280px;
  }
`,Qt=o.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`,Jt=o.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`,Xt=o.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: 0.2;
  transform-origin: center;
  animation: ${_e} 30s linear infinite;
`,qt=o.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  stroke-dasharray: 10 5;
  opacity: 0.3;
  transform-origin: center;
  animation: ${Se} 20s linear infinite;
`,en=o.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 2;
  opacity: 0.4;
  transform-origin: center;
  animation: ${_e} 15s linear infinite;
`,tn=o.g`
  transform-origin: center;
  animation: ${Se} 25s linear infinite;
`,Z=o.polygon`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: ${e=>e.$opacity||.3};
  animation: ${Me} 3s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,nn=o.g`
  animation: ${Ut} 4s ease-in-out infinite;
`,rn=o.circle`
  fill: var(--accent-amber);
  animation: ${Yt} 2s ease-in-out infinite;
`,on=o.text`
  fill: #121212;
  font-size: 16px;
  font-weight: 700;
  text-anchor: middle;
`,an=o.circle`
  fill: var(--accent-amber);
  opacity: 0.8;
`,sn=o.line`
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: 0.3;
`,cn=o.circle`
  fill: var(--accent-amber);
  opacity: ${e=>e.$opacity||.5};
  animation: ${Me} ${e=>e.$duration||2}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,Q=(e,t,r)=>{const i=[];for(let a=0;a<6;a++){const s=Math.PI/3*a-Math.PI/2;i.push(`${e+r*Math.cos(s)},${t+r*Math.sin(s)}`)}return i.join(" ")},he=()=>{const e={x:150,y:150},t=u.useMemo(()=>Array.from({length:12},(i,a)=>({x:e.x+Math.cos(Math.PI*2*a/12)*110,y:e.y+Math.sin(Math.PI*2*a/12)*110,size:2+a%3,opacity:.3+a%4*.1,duration:2+a%3,delay:a%4*.5})),[e.x,e.y]),r=u.useMemo(()=>Array.from({length:6},(i,a)=>({x:e.x+Math.cos(Math.PI*2*a/6-Math.PI/2)*70,y:e.y+Math.sin(Math.PI*2*a/6-Math.PI/2)*70})),[e.x,e.y]);return n.jsx(Zt,{children:n.jsx(Qt,{children:n.jsxs(Jt,{viewBox:"0 0 300 300",children:[n.jsx("defs",{children:n.jsxs("filter",{id:"geoGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),n.jsx(Xt,{cx:e.x,cy:e.y,r:130}),n.jsx(qt,{cx:e.x,cy:e.y,r:100}),n.jsx(en,{cx:e.x,cy:e.y,r:70}),n.jsxs(tn,{children:[n.jsx(Z,{points:Q(e.x,e.y,110),$opacity:.15,$delay:0}),n.jsx(Z,{points:Q(e.x,e.y,85),$opacity:.25,$delay:.5}),n.jsx(Z,{points:Q(e.x,e.y,55),$opacity:.35,$delay:1})]}),r.map((i,a)=>n.jsx(sn,{x1:e.x,y1:e.y,x2:i.x,y2:i.y},`line-${a}`)),r.map((i,a)=>n.jsx(an,{cx:i.x,cy:i.y,r:4},`node-${a}`)),t.map((i,a)=>n.jsx(cn,{cx:i.x,cy:i.y,r:i.size,$opacity:i.opacity,$duration:i.duration,$delay:i.delay},`dot-${a}`)),n.jsxs(nn,{children:[n.jsx(rn,{cx:e.x,cy:e.y,r:35,filter:"url(#geoGlow)"}),n.jsx(on,{x:e.x,y:e.y+6,children:"KM"})]})]})})})},ln=u.lazy(()=>Ie(()=>import("./Desktop3DGlobe-C1WPGKrt.js"),__vite__mapDeps([0,1,2,3,4,5]))),dn=o.div`
  width: 100%;
  overflow-x: hidden;
`,mn=o.section`
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
`,un=o(h.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
  }
`,pn=o(h.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,hn=o(h.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: -0.02em;
`,fn=o(h.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`,gn=o(h.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,xn=o(h.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,yn=o.a`
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
`,J=o(h.button)`
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
`,vn=o(J)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,bn=o(h.div)`
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
`,wn=o.section`
  background: var(--card-bg);
  padding: 5rem 5%;
  border-bottom: 1px solid var(--border-color);
`,jn=o.div`
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
`,_n=o(h.div)`
  text-align: center;
  padding: 1.5rem;
`,Sn=o.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;

  span {
    color: var(--accent-amber);
  }
`,Mn=o.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`,kn=o(X)`
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
`,fe=o.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,An=o.div`
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
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
`,Kn=o.div`
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
`,En=o.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,In=o.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,Pn=o.div`
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
`,Vn=o(X)`
  background: var(--card-bg);
  padding: 7rem 5%;
`,zn=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Cn=o(h.div)`
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
`,Tn=o.div`
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
`,Rn=o.div`
  flex: 1;
`,Dn=o.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,Ln=o.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,$n=o(h.div)`
  text-align: center;
`,Gn=o(X)`
  background: var(--background-color);
  padding: 7rem 5%;
`,Fn=o.div`
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
`,On=o(h.div)`
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
`,Hn=o.div`
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
`,Bn=o.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Wn=o.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Nn=o.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,Un=o.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,Yn=o(h.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Zn=o.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);
`,Qn=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Jn=o(h.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Xn=o.div`
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
`,qn=o.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,er=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,tr=o(h.img).attrs({loading:"lazy",decoding:"async"})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }
`,nr=({value:e,suffix:t=""})=>{const r=u.useRef(null),i=z(r,{once:!0}),a=ve(0),s=bt(a,f=>Math.round(f)),[c,d]=u.useState(0);return u.useEffect(()=>{if(i){const f=Gt(a,e,{duration:2,ease:"easeOut"}),b=s.on("change",g=>{d(g)});return()=>{f.stop(),b()}}},[i,e,a,s]),n.jsxs(Sn,{ref:r,children:[c.toLocaleString(),n.jsx("span",{children:t})]})},rr=()=>{const{t:e}=ht(),t=u.useRef(null),r=Wt(1024),i=Nt(),a=!r&&!i,s=u.useRef(null),c=u.useRef(null),d=u.useRef(null),f=u.useRef(null),b=u.useRef(null),g=z(s,{once:!0,margin:"-50px"}),x=z(c,{once:!0,margin:"-50px"}),V=z(d,{once:!0,margin:"-50px"}),M=z(b,{once:!0,margin:"-50px"}),y=z(f,{once:!0,margin:"-50px"}),k=[{icon:n.jsx(ct,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:n.jsx(ce,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:n.jsx(lt,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:n.jsx(dt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],_=[{icon:n.jsx(ce,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:n.jsx(at,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:n.jsx(st,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],v=[{icon:n.jsx(mt,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:n.jsx(ut,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:n.jsx(pt,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],w=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:15,suffix:"+",labelKey:"stats_years_experience"},{value:99,suffix:"%",labelKey:"stats_customer_satisfaction"}],I=[{industry:e("partners_industry_automotive")||"자동차",icon:n.jsx(rt,{}),partners:[{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"Continental",logo:"/logos/continental_new.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png"}]},{industry:e("partners_industry_electronics")||"전자 / 디스플레이",icon:n.jsx(it,{}),partners:[{name:"LG Display",logo:"/logos/lg_display_new.png"},{name:"LG Electronics",logo:"/logos/lg_electronics_new.png"},{name:"Humax",logo:"/logos/humax_new.png"}]}],S=u.useRef(null),j=z(S,{once:!0,margin:"-50px"});return n.jsxs(dn,{children:[n.jsxs(mn,{ref:s,children:[n.jsxs(un,{initial:{opacity:0,y:30},animate:g?{opacity:1,y:0}:{},transition:{duration:.6},children:[n.jsx(pn,{initial:{opacity:0},animate:g?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),n.jsx(hn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),n.jsx(fn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),n.jsxs(gn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[n.jsx(F,{to:"/about",children:n.jsxs(J,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",n.jsx(ae,{})]})}),n.jsx(F,{to:"/contact",children:n.jsx(vn,{whileHover:{scale:1.02},whileTap:{scale:.98},children:e("nav_contact")})})]}),n.jsx(xn,{initial:{opacity:0},animate:g?{opacity:1}:{},transition:{delay:.7,duration:.5},children:n.jsxs(yn,{href:"mailto:cgpark@kmtechn.com",children:[n.jsx(ot,{})," cgpark@kmtechn.com"]})})]}),n.jsx(bn,{ref:t,initial:{opacity:0,x:30},animate:g?{opacity:1,x:0}:{},transition:{delay:.3,duration:.7},children:a?n.jsx(u.Suspense,{fallback:n.jsx(he,{}),children:n.jsx(ln,{})}):n.jsx(he,{})})]}),n.jsx(wn,{ref:c,children:n.jsx(jn,{children:w.map((l,m)=>n.jsxs(_n,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(nr,{value:l.value,suffix:l.suffix}),n.jsx(Mn,{children:e(l.labelKey)})]},m))})}),n.jsxs(kn,{ref:d,children:[n.jsxs(H,{initial:{opacity:0,y:20},animate:V?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:"Our Services"}),n.jsx(O,{children:e("home_services_title")}),n.jsx(fe,{children:e("home_services_3pl_desc")})]}),n.jsx(An,{children:_.map((l,m)=>n.jsx(F,{to:"/business",style:{textDecoration:"none",height:"100%"},children:n.jsxs(ke,{initial:{opacity:0,y:30},animate:V?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(Kn,{children:l.icon}),n.jsx(En,{children:e(l.titleKey)}),n.jsx(In,{children:e(l.descKey)}),n.jsxs(Pn,{children:[e("home_services_button")," ",n.jsx(se,{})]})]})},l.titleKey))})]}),n.jsxs(Gn,{ref:b,children:[n.jsxs(H,{initial:{opacity:0,y:20},animate:M?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:"How It Works"}),n.jsx(O,{children:e("process_home_title")}),n.jsx(fe,{children:e("process_home_desc")})]}),n.jsx(Fn,{children:k.map((l,m)=>n.jsxs(Pe.Fragment,{children:[n.jsxs(On,{initial:{opacity:0,y:20},animate:M?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[n.jsx(Hn,{children:l.icon}),n.jsxs(Un,{children:[n.jsxs(Bn,{children:["STEP ",m+1]}),n.jsx(Wn,{children:e(l.titleKey)}),n.jsx(Nn,{children:e(l.descKey)})]})]}),m<k.length-1&&n.jsx(Yn,{initial:{opacity:0},animate:M?{opacity:1}:{},transition:{delay:m*.15+.1,duration:.3},children:n.jsx(se,{})})]},l.titleKey))})]}),n.jsxs(Vn,{ref:f,children:[n.jsxs(H,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:"Why Choose Us"}),n.jsx(O,{children:e("home_strengths_title")})]}),n.jsx(zn,{children:v.map((l,m)=>n.jsxs(Cn,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(Tn,{children:l.icon}),n.jsxs(Rn,{children:[n.jsx(Dn,{children:e(l.titleKey)}),n.jsx(Ln,{children:e(l.descKey)})]})]},m))}),n.jsx($n,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:n.jsx(F,{to:"/about",children:n.jsxs(J,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",n.jsx(ae,{})]})})})]}),n.jsxs(Zn,{ref:S,children:[n.jsxs(H,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:"Trusted By"}),n.jsx(O,{children:e("core_customers_title")})]}),n.jsx(Qn,{children:I.map((l,m)=>n.jsxs(Jn,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[n.jsxs(Xn,{children:[l.icon,n.jsx(qn,{children:l.industry})]}),n.jsx(er,{children:l.partners.map((A,p)=>n.jsx(tr,{src:A.logo,alt:`${A.name} logo`,initial:{opacity:0},animate:j?{opacity:1}:{},transition:{delay:m*.15+p*.05,duration:.4}},A.name))})]},l.industry))})]})]})},mr=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"}));export{mr as H,dr as L};
//# sourceMappingURL=HomePage-teziLVif.js.map
