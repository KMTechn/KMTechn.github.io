const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-2hkfDLkQ.js","assets/index-DJ6NuTt_.css"])))=>i.map(i=>d[i]);
import{i as Ke,a as Ie,u as ge,m as Ve,r as u,M as Ee,b as ze,f as Pe,c as Ce,d as Y,e as De,g as $e,h as Re,j as xe,k as Te,l as Le,n as Ge,o as Fe,s as He,p as Oe,V as Be,q as Ne,t as We,v as Ye,S as Ze,H as Ue,w as N,x as Qe,y as Xe,z as Je,A as n,B as a,C as T,D as qe,E as P,F as et,G as tt,I as ae,J as nt,K as H,L as fe,N as oe,R as rt,O as h,_ as it,P as se,Q as at,T as ot,U as st,W as ct,X as lt,Y as dt,Z as mt,$ as pt,a0 as X}from"./index-2hkfDLkQ.js";const ut=(e,t,r)=>{const i=t-e;return((r-e)%i+i)%i+e};function ye(e,t){return Ke(e)?e[ut(0,e.length,t)]:e}class ht{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=r}attachTimeline(t){const r=this.animations.map(i=>i.attachTimeline(t));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return ce(this.animations,"duration")}get iterationDuration(){return ce(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(r=>r[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ce(e,t){let r=0;for(let i=0;i<e.length;i++){const o=e[i][t];o!==null&&o>r&&(r=o)}return r}class gt extends ht{then(t,r){return this.finished.finally(t).then(()=>{})}}function xt(...e){const t=!Array.isArray(e[0]),r=t?0:-1,i=e[0+r],o=e[1+r],s=e[2+r],c=e[3+r],p=Ie(o,s,c);return t?p(i):p}function be(e){const t=ge(()=>Ve(e)),{isStatic:r}=u.useContext(Ee);if(r){const[,i]=u.useState(e);u.useEffect(()=>t.on("change",i),[])}return t}function ve(e,t){const r=be(t()),i=()=>r.set(t());return i(),ze(()=>{const o=()=>Pe.preRender(i,!1,!0),s=e.map(c=>c.on("change",o));return()=>{s.forEach(c=>c()),Ce(i)}}),r}function ft(e){Y.current=[],e();const t=ve(Y.current,e);return Y.current=void 0,t}function yt(e,t,r,i){if(typeof e=="function")return ft(e);const o=typeof t=="function"?t:xt(t,r,i);return Array.isArray(e)?le(e,o):le([e],([s])=>o(s))}function le(e,t){const r=ge(()=>[]);return ve(e,()=>{r.length=0;const i=e.length;for(let o=0;o<i;o++)r[o]=e[o].get();return t(r)})}function J(e){return typeof e=="object"&&!Array.isArray(e)}function we(e,t,r,i){return typeof e=="string"&&J(t)?De(e,r,i):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function bt(e,t,r){return e*(t+1)}function de(e,t,r,i){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?r:t.startsWith("<")?Math.max(0,r+parseFloat(t.slice(1))):i.get(t)??e}function vt(e,t,r){for(let i=0;i<e.length;i++){const o=e[i];o.at>t&&o.at<r&&(Re(e,o),i--)}}function wt(e,t,r,i,o,s){vt(e,o,s);for(let c=0;c<t.length;c++)e.push({value:t[c],at:$e(o,s,i[c]),easing:ye(r,c)})}function _t(e,t){for(let r=0;r<e.length;r++)e[r]=e[r]/(t+1)}function jt(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const St="easeInOut";function kt(e,{defaultTransition:t={},...r}={},i,o){const s=t.duration||.3,c=new Map,p=new Map,g={},y=new Map;let M=0,m=0,C=0;for(let A=0;A<e.length;A++){const x=e[A];if(typeof x=="string"){y.set(x,m);continue}else if(!Array.isArray(x)){y.set(x.name,de(m,x.at,M,y));continue}let[w,b,f={}]=x;f.at!==void 0&&(m=de(m,f.at,M,y));let v=0;const V=(_,j,S,K=0,l=0)=>{const d=Mt(_),{delay:E=0,times:k=Te(d),type:W="keyframes",repeat:L,repeatType:tr,repeatDelay:nr=0,...Ae}=j;let{ease:z=t.ease||"easeOut",duration:I}=j;const q=typeof E=="function"?E(K,l):E,ee=d.length,te=Fe(W)?W:o?.[W||"keyframes"];if(ee<=2&&te){let D=100;if(ee===2&&It(d)){const $=d[1]-d[0];D=Math.abs($)}const G={...Ae};I!==void 0&&(G.duration=He(I));const F=Le(G,D,te);z=F.ease,I=F.duration}I??(I=s);const ne=m+q;k.length===1&&k[0]===0&&(k[1]=1);const re=k.length-d.length;if(re>0&&Ge(k,re),d.length===1&&d.unshift(null),L){I=bt(I,L);const D=[...d],G=[...k];z=Array.isArray(z)?[...z]:[z];const F=[...z];for(let $=0;$<L;$++){d.push(...D);for(let R=0;R<D.length;R++)k.push(G[R]+($+1)),z.push(R===0?"linear":ye(F,R-1))}_t(k,L)}const ie=ne+I;wt(S,d,z,k,ne,ie),v=Math.max(q+I,v),C=Math.max(ie,C)};if(xe(w)){const _=me(w,p);V(b,f,pe("default",_))}else{const _=we(w,b,i,g),j=_.length;for(let S=0;S<j;S++){b=b,f=f;const K=_[S],l=me(K,p);for(const d in b)V(b[d],At(f,d),pe(d,l),S,j)}}M=m,m+=v}return p.forEach((A,x)=>{for(const w in A){const b=A[w];b.sort(jt);const f=[],v=[],V=[];for(let j=0;j<b.length;j++){const{at:S,value:K,easing:l}=b[j];f.push(K),v.push(Oe(0,C,S)),V.push(l||"easeOut")}v[0]!==0&&(v.unshift(0),f.unshift(f[0]),V.unshift(St)),v[v.length-1]!==1&&(v.push(1),f.push(null)),c.has(x)||c.set(x,{keyframes:{},transition:{}});const _=c.get(x);_.keyframes[w]=f,_.transition[w]={...t,duration:C,ease:V,times:v,...r}}}),c}function me(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function pe(e,t){return t[e]||(t[e]=[]),t[e]}function Mt(e){return Array.isArray(e)?e:[e]}function At(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Kt=e=>typeof e=="number",It=e=>e.every(Kt);function Vt(e,t){return e in t}class Et extends Be{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,r){if(Vt(r,t)){const i=t[r];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(t,r){delete r.output[t]}measureInstanceViewportBox(){return Ne()}build(t,r){Object.assign(t.output,r)}renderInstance(t,{output:r}){Object.assign(t,r)}sortInstanceNodePosition(){return 0}}function zt(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=We(e)&&!Ye(e)?new Ze(t):new Ue(t);r.mount(e),N.set(e,r)}function Pt(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Et(t);r.mount(e),N.set(e,r)}function Ct(e,t){return xe(e)||typeof e=="number"||typeof e=="string"&&!J(t)}function _e(e,t,r,i){const o=[];if(Ct(e,t))o.push(Qe(e,J(t)&&t.default||t,r&&(r.default||r)));else{const s=we(e,t,i),c=s.length;for(let p=0;p<c;p++){const g=s[p],y=g instanceof Element?zt:Pt;N.has(g)||y(g);const M=N.get(g),m={...r};"delay"in m&&typeof m.delay=="function"&&(m.delay=m.delay(p,c)),o.push(...Xe(M,{...t,transition:m},{}))}}return o}function Dt(e,t,r){const i=[];return kt(e,t,r,{spring:Je}).forEach(({keyframes:s,transition:c},p)=>{i.push(..._e(p,s,c))}),i}function $t(e){return Array.isArray(e)&&e.some(Array.isArray)}function Rt(e){function t(r,i,o){let s=[],c;if($t(r))s=Dt(r,i,e);else{const{onComplete:g,...y}=o||{};typeof g=="function"&&(c=g),s=_e(r,i,y,e)}const p=new gt(s);return c&&p.finished.then(c),p}return t}const Tt=Rt(),Lt=(e=1024)=>{const[t,r]=u.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return u.useEffect(()=>{const i=()=>{const s=navigator.userAgent||navigator.vendor||window.opera;return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(s.toLowerCase())},o=()=>{const s=window.innerWidth<e,c=i();r(s||c)};if(o(),typeof ResizeObserver<"u"){const s=new ResizeObserver(o);return s.observe(document.documentElement),()=>s.disconnect()}else return window.addEventListener("resize",o,{passive:!0}),()=>window.removeEventListener("resize",o)},[e]),t},Gt=()=>{const[e,t]=u.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return u.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=o=>{t(o.matches)};return r.addEventListener?(r.addEventListener("change",i),()=>r.removeEventListener("change",i)):(r.addListener(i),()=>r.removeListener(i))},[]),e},je=T`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Se=T`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`,ke=T`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`,Ft=T`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,Ht=T`
  0%, 100% { filter: drop-shadow(0 0 5px var(--accent-amber)); }
  50% { filter: drop-shadow(0 0 15px var(--accent-amber)); }
`,Ot=a.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 280px;
  }
`,Bt=a.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`,Nt=a.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`,Wt=a.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: 0.2;
  transform-origin: center;
  animation: ${je} 30s linear infinite;
`,Yt=a.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  stroke-dasharray: 10 5;
  opacity: 0.3;
  transform-origin: center;
  animation: ${Se} 20s linear infinite;
`,Zt=a.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 2;
  opacity: 0.4;
  transform-origin: center;
  animation: ${je} 15s linear infinite;
`,Ut=a.g`
  transform-origin: center;
  animation: ${Se} 25s linear infinite;
`,Z=a.polygon`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: ${e=>e.$opacity||.3};
  animation: ${ke} 3s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,Qt=a.g`
  animation: ${Ft} 4s ease-in-out infinite;
`,Xt=a.circle`
  fill: var(--accent-amber);
  animation: ${Ht} 2s ease-in-out infinite;
`,Jt=a.text`
  fill: #121212;
  font-size: 16px;
  font-weight: 700;
  text-anchor: middle;
`,qt=a.circle`
  fill: var(--accent-amber);
  opacity: 0.8;
`,en=a.line`
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: 0.3;
`,tn=a.circle`
  fill: var(--accent-amber);
  opacity: ${e=>e.$opacity||.5};
  animation: ${ke} ${e=>e.$duration||2}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,U=(e,t,r)=>{const i=[];for(let o=0;o<6;o++){const s=Math.PI/3*o-Math.PI/2;i.push(`${e+r*Math.cos(s)},${t+r*Math.sin(s)}`)}return i.join(" ")},ue=()=>{const e={x:150,y:150},t=u.useMemo(()=>Array.from({length:12},(i,o)=>({x:e.x+Math.cos(Math.PI*2*o/12)*110,y:e.y+Math.sin(Math.PI*2*o/12)*110,size:2+o%3,opacity:.3+o%4*.1,duration:2+o%3,delay:o%4*.5})),[e.x,e.y]),r=u.useMemo(()=>Array.from({length:6},(i,o)=>({x:e.x+Math.cos(Math.PI*2*o/6-Math.PI/2)*70,y:e.y+Math.sin(Math.PI*2*o/6-Math.PI/2)*70})),[e.x,e.y]);return n.jsx(Ot,{"aria-hidden":"true",children:n.jsx(Bt,{children:n.jsxs(Nt,{viewBox:"0 0 300 300",children:[n.jsx("defs",{children:n.jsxs("filter",{id:"geoGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),n.jsx(Wt,{cx:e.x,cy:e.y,r:130}),n.jsx(Yt,{cx:e.x,cy:e.y,r:100}),n.jsx(Zt,{cx:e.x,cy:e.y,r:70}),n.jsxs(Ut,{children:[n.jsx(Z,{points:U(e.x,e.y,110),$opacity:.15,$delay:0}),n.jsx(Z,{points:U(e.x,e.y,85),$opacity:.25,$delay:.5}),n.jsx(Z,{points:U(e.x,e.y,55),$opacity:.35,$delay:1})]}),r.map((i,o)=>n.jsx(en,{x1:e.x,y1:e.y,x2:i.x,y2:i.y},`line-${o}`)),r.map((i,o)=>n.jsx(qt,{cx:i.x,cy:i.y,r:4},`node-${o}`)),t.map((i,o)=>n.jsx(tn,{cx:i.x,cy:i.y,r:i.size,$opacity:i.opacity,$duration:i.duration,$delay:i.delay},`dot-${o}`)),n.jsxs(Qt,{children:[n.jsx(Xt,{cx:e.x,cy:e.y,r:35,filter:"url(#geoGlow)"}),n.jsx(Jt,{x:e.x,y:e.y+6,children:"KM"})]})]})})})},nn=u.lazy(()=>it(()=>import("./Desktop3DGlobe-Cu8ARNhz.js"),__vite__mapDeps([0,1]))),rn=a.div`
  width: 100%;
  overflow-x: hidden;
`,an=a.section`
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
`,on=a(h.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 1;
  }
`,sn=a(h.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,cn=a(h.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: 0;

  @media (max-width: 600px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
`,ln=a(h.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,dn=a(h.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,mn=a(h.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,pn=a.a`
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
`,Q=a(h(fe))`
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
`,un=a(Q)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,hn=a(h.div)`
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
`,gn=a(h.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 620px;
  margin-top: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,xn=a.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(var(--card-bg-rgb, 255, 255, 255), 0.64);
  padding: 0.85rem;
`,fn=a.div`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
`,yn=a.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
`,bn=a.section`
  background: var(--card-bg);
  padding: 4.5rem 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 3rem 1.25rem;
  }
`,vn=a.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,wn=a(h.div)`
  text-align: center;
  padding: 1.35rem 1rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
`,_n=a.div`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;

  span {
    color: var(--accent-amber);
  }
`,jn=a.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`,Sn=a(X)`
  background: var(--background-color);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,O=a(h.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
`,B=a.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,he=a.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,kn=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Me=a(h.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
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

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`,Mn=a.div`
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
`,An=a.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,Kn=a.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,In=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${Me}:hover & {
    gap: 0.75rem;
  }
`,Vn=a(X)`
  background: var(--card-bg);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,En=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,zn=a(h.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
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
`,Pn=a.div`
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
`,Cn=a.div`
  flex: 1;
`,Dn=a.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,$n=a.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,Rn=a(h.div)`
  text-align: center;
`,Tn=a(X)`
  background: var(--background-color);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,Ln=a.div`
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
`,Gn=a(h.div)`
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
`,Fn=a.div`
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
`,Hn=a.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,On=a.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Bn=a.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,Nn=a.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,Wn=a(h.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Yn=a.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 4rem 1.25rem;
  }
`,Zn=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Un=a(h.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Qn=a.div`
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
`,Xn=a.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Jn=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,qn=a(h.img).attrs({loading:"lazy",decoding:"async"})`
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
`,er=({value:e,suffix:t=""})=>{const r=u.useRef(null),i=P(r,{once:!0}),o=be(0),s=yt(o,g=>Math.round(g)),[c,p]=u.useState(0);return u.useEffect(()=>{if(i){const g=Tt(o,e,{duration:2,ease:"easeOut"}),y=s.on("change",M=>{p(M)});return()=>{g.stop(),y()}}},[i,e,o,s]),n.jsxs(_n,{ref:r,children:[c.toLocaleString(),n.jsx("span",{children:t})]})},ir=()=>{const{t:e}=qe(),t=u.useRef(null),r=Lt(1024),i=Gt(),s=typeof window<"u"&&window.innerWidth>=1024&&!r&&!i,c=u.useRef(null),p=u.useRef(null),g=u.useRef(null),y=u.useRef(null),M=u.useRef(null),m=P(c,{once:!0,margin:"-50px"}),C=P(p,{once:!0,margin:"-50px"}),A=P(g,{once:!0,margin:"-50px"}),x=P(M,{once:!0,margin:"-50px"}),w=P(y,{once:!0,margin:"-50px"}),b=[{icon:n.jsx(st,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:n.jsx(se,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:n.jsx(ct,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:n.jsx(lt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],f=[{icon:n.jsx(se,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:n.jsx(at,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:n.jsx(ot,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],v=[{icon:n.jsx(dt,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:n.jsx(mt,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:n.jsx(pt,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],V=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:15,suffix:"+",labelKey:"stats_years_experience"},{value:99,suffix:"%",labelKey:"stats_customer_satisfaction"}],_=[{value:"2,140㎡",labelKey:"hero_proof_facility"},{value:"3,000+",labelKey:"hero_proof_capacity"},{value:"15+",labelKey:"hero_proof_experience"},{value:"99%",labelKey:"hero_proof_retention"}],j=[{industry:e("partners_industry_automotive")||"자동차",icon:n.jsx(et,{}),partners:[{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"Continental",logo:"/logos/continental_new.png",needsBg:!0},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png"}]},{industry:e("partners_industry_electronics")||"전자 / 디스플레이",icon:n.jsx(tt,{}),partners:[{name:"LG Display",logo:"/logos/lg_display_new.png"},{name:"LG Electronics",logo:"/logos/lg_electronics_new.png"},{name:"Humax",logo:"/logos/humax_new.png",needsBg:!0}]}],S=u.useRef(null),K=P(S,{once:!0,margin:"-50px"});return n.jsxs(rn,{children:[n.jsxs(an,{ref:c,children:[n.jsxs(on,{initial:{opacity:0,y:30},animate:m?{opacity:1,y:0}:{},transition:{duration:.6},children:[n.jsx(sn,{initial:{opacity:0},animate:m?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),n.jsx(cn,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),n.jsx(ln,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),n.jsxs(dn,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[n.jsxs(Q,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_primary_cta")," ",n.jsx(ae,{})]}),n.jsx(un,{to:"/business",whileHover:{scale:1.02},whileTap:{scale:.98},children:e("hero_secondary_cta")})]}),n.jsx(gn,{"aria-label":e("hero_proof_label"),initial:{opacity:0,y:16},animate:m?{opacity:1,y:0}:{},transition:{delay:.6,duration:.5},children:_.map(l=>n.jsxs(xn,{children:[n.jsx(fn,{children:l.value}),n.jsx(yn,{children:e(l.labelKey)})]},l.labelKey))}),n.jsx(mn,{initial:{opacity:0},animate:m?{opacity:1}:{},transition:{delay:.7,duration:.5},children:n.jsxs(pn,{href:"mailto:cgpark@kmtechn.com",children:[n.jsx(nt,{})," cgpark@kmtechn.com"]})})]}),n.jsx(hn,{ref:t,initial:{opacity:0,x:30},animate:m?{opacity:1,x:0}:{},transition:{delay:.3,duration:.7},children:s?n.jsx(u.Suspense,{fallback:n.jsx(ue,{}),children:n.jsx(nn,{})}):n.jsx(ue,{})})]}),n.jsx(bn,{ref:p,children:n.jsx(vn,{children:V.map((l,d)=>n.jsxs(wn,{initial:{opacity:0,y:20},animate:C?{opacity:1,y:0}:{},transition:{delay:d*.1,duration:.5},children:[n.jsx(er,{value:l.value,suffix:l.suffix}),n.jsx(jn,{children:e(l.labelKey)})]},d))})}),n.jsxs(Sn,{ref:g,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:A?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:e("home_section_services_label")}),n.jsx(H,{children:e("home_services_title")}),n.jsx(he,{children:e("home_services_3pl_desc")})]}),n.jsx(kn,{children:f.map((l,d)=>n.jsx(fe,{to:"/business",style:{textDecoration:"none",height:"100%"},children:n.jsxs(Me,{initial:{opacity:0,y:30},animate:A?{opacity:1,y:0}:{},transition:{delay:d*.1,duration:.5},children:[n.jsx(Mn,{children:l.icon}),n.jsx(An,{children:e(l.titleKey)}),n.jsx(Kn,{children:e(l.descKey)}),n.jsxs(In,{children:[e("home_services_button")," ",n.jsx(oe,{})]})]})},l.titleKey))})]}),n.jsxs(Tn,{ref:M,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:e("home_section_process_label")}),n.jsx(H,{children:e("process_home_title")}),n.jsx(he,{children:e("process_home_desc")})]}),n.jsx(Ln,{children:b.map((l,d)=>n.jsxs(rt.Fragment,{children:[n.jsxs(Gn,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{delay:d*.15,duration:.5},children:[n.jsx(Fn,{children:l.icon}),n.jsxs(Nn,{children:[n.jsx(Hn,{children:e("process_step_label",{number:d+1})}),n.jsx(On,{children:e(l.titleKey)}),n.jsx(Bn,{children:e(l.descKey)})]})]}),d<b.length-1&&n.jsx(Wn,{initial:{opacity:0},animate:x?{opacity:1}:{},transition:{delay:d*.15+.1,duration:.3},children:n.jsx(oe,{})})]},l.titleKey))})]}),n.jsxs(Vn,{ref:y,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:e("home_section_strengths_label")}),n.jsx(H,{children:e("home_strengths_title")})]}),n.jsx(En,{children:v.map((l,d)=>n.jsxs(zn,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{},transition:{delay:d*.1,duration:.5},children:[n.jsx(Pn,{children:l.icon}),n.jsxs(Cn,{children:[n.jsx(Dn,{children:e(l.titleKey)}),n.jsx($n,{children:e(l.descKey)})]})]},d))}),n.jsx(Rn,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:n.jsxs(Q,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("home_strengths_cta")," ",n.jsx(ae,{})]})})]}),n.jsxs(Yn,{ref:S,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:K?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(B,{children:e("home_section_partners_label")}),n.jsx(H,{children:e("core_customers_title")})]}),n.jsx(Zn,{children:j.map((l,d)=>n.jsxs(Un,{initial:{opacity:0,y:20},animate:K?{opacity:1,y:0}:{},transition:{delay:d*.15,duration:.5},children:[n.jsxs(Qn,{children:[l.icon,n.jsx(Xn,{children:l.industry})]}),n.jsx(Jn,{children:l.partners.map((E,k)=>n.jsx(qn,{src:E.logo,alt:`${E.name} logo`,$needsBg:E.needsBg,initial:{opacity:0},animate:K?{opacity:1}:{},transition:{delay:d*.15+k*.05,duration:.4}},E.name))})]},l.industry))})]})]})};export{ir as default};
