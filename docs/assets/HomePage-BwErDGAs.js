const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Desktop3DGlobe-CVwMN6lo.js","assets/three-vendor-uCD6w5gt.js","assets/react-vendor-VEkyeZpm.js","assets/index-BAqdXT41.js","assets/i18n-vendor-Dc1ZlYGt.js","assets/index-C8rNJvCK.css"])))=>i.map(i=>d[i]);
import{u as ke,j as n,H as Ae,_ as Ke}from"./three-vendor-uCD6w5gt.js";import{b as p,L as F,R as Me}from"./react-vendor-VEkyeZpm.js";import{i as Ee,a as Ve,u as ye,m as Le,M as Te,b as Ce,f as Ie,c as Re,d as U,r as Pe,e as De,g as Fe,h as be,j as Ge,k as Oe,l as He,n as Be,s as We,p as Ne,V as Ue,o as Ye,q as Ze,t as Qe,S as Xe,H as Je,v as B,w as qe,x as et,y as tt,z as o,A as X,B as L,F as nt,C as rt,D as se,E as it,G as ot,I as G,J as ce,K as h,L as le,N as at,O as st,P as ct,Q as lt,R as dt,T as mt,U as pt,W as ut,X as J}from"./index-BAqdXT41.js";import{u as ht}from"./i18n-vendor-Dc1ZlYGt.js";const gt=(e,t,r)=>{const i=t-e;return((r-e)%i+i)%i+e};function ve(e,t){return Ee(e)?e[gt(0,e.length,t)]:e}class ft{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=r}attachTimeline(t){const r=this.animations.map(i=>i.attachTimeline(t));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return de(this.animations,"duration")}get iterationDuration(){return de(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(r=>r[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function de(e,t){let r=0;for(let i=0;i<e.length;i++){const a=e[i][t];a!==null&&a>r&&(r=a)}return r}class xt extends ft{then(t,r){return this.finished.finally(t).then(()=>{})}}function yt(...e){const t=!Array.isArray(e[0]),r=t?0:-1,i=e[0+r],a=e[1+r],c=e[2+r],s=e[3+r],d=Ve(a,c,s);return t?d(i):d}function we(e){const t=ye(()=>Le(e)),{isStatic:r}=p.useContext(Te);if(r){const[,i]=p.useState(e);p.useEffect(()=>t.on("change",i),[])}return t}function je(e,t){const r=we(t()),i=()=>r.set(t());return i(),Ce(()=>{const a=()=>Ie.preRender(i,!1,!0),c=e.map(s=>s.on("change",a));return()=>{c.forEach(s=>s()),Re(i)}}),r}function bt(e){U.current=[],e();const t=je(U.current,e);return U.current=void 0,t}function vt(e,t,r,i){if(typeof e=="function")return bt(e);const a=typeof t=="function"?t:yt(t,r,i);return Array.isArray(e)?me(e,a):me([e],([c])=>a(c))}function me(e,t){const r=ye(()=>[]);return je(e,()=>{r.length=0;const i=e.length;for(let a=0;a<i;a++)r[a]=e[a].get();return t(r)})}function q(e){return typeof e=="object"&&!Array.isArray(e)}function _e(e,t,r,i){return typeof e=="string"&&q(t)?Pe(e,r,i):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function wt(e,t,r){return e*(t+1)}function pe(e,t,r,i){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?r:t.startsWith("<")?Math.max(0,r+parseFloat(t.slice(1))):i.get(t)??e}function jt(e,t,r){for(let i=0;i<e.length;i++){const a=e[i];a.at>t&&a.at<r&&(Fe(e,a),i--)}}function _t(e,t,r,i,a,c){jt(e,a,c);for(let s=0;s<t.length;s++)e.push({value:t[s],at:De(a,c,i[s]),easing:ve(r,s)})}function St(e,t){for(let r=0;r<e.length;r++)e[r]=e[r]/(t+1)}function $t(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const zt="easeInOut";function kt(e,{defaultTransition:t={},...r}={},i,a){const c=t.duration||.3,s=new Map,d=new Map,g={},v=new Map;let f=0,x=0,V=0;for(let $=0;$<e.length;$++){const y=e[$];if(typeof y=="string"){v.set(y,x);continue}else if(!Array.isArray(y)){v.set(y.name,pe(x,y.at,f,v));continue}let[z,_,b={}]=y;b.at!==void 0&&(x=pe(x,b.at,f,v));let w=0;const M=(S,j,l,m=0,k=0)=>{const u=At(S),{delay:W=0,times:A=Ge(u),type:N="keyframes",repeat:R,repeatType:Jn,repeatDelay:qn=0,...ze}=j;let{ease:E=t.ease||"easeOut",duration:K}=j;const te=typeof W=="function"?W(m,k):W,ne=u.length,re=Be(N)?N:a?.[N||"keyframes"];if(ne<=2&&re){let T=100;if(ne===2&&Et(u)){const C=u[1]-u[0];T=Math.abs(C)}const P={...ze};K!==void 0&&(P.duration=We(K));const D=Oe(P,T,re);E=D.ease,K=D.duration}K??(K=c);const ie=x+te;A.length===1&&A[0]===0&&(A[1]=1);const oe=A.length-u.length;if(oe>0&&He(A,oe),u.length===1&&u.unshift(null),R){K=wt(K,R);const T=[...u],P=[...A];E=Array.isArray(E)?[...E]:[E];const D=[...E];for(let C=0;C<R;C++){u.push(...T);for(let I=0;I<T.length;I++)A.push(P[I]+(C+1)),E.push(I===0?"linear":ve(D,I-1))}St(A,R)}const ae=ie+K;_t(l,u,E,A,ie,ae),w=Math.max(te+K,w),V=Math.max(ae,V)};if(be(z)){const S=ue(z,d);M(_,b,he("default",S))}else{const S=_e(z,_,i,g),j=S.length;for(let l=0;l<j;l++){_=_,b=b;const m=S[l],k=ue(m,d);for(const u in _)M(_[u],Kt(b,u),he(u,k),l,j)}}f=x,x+=w}return d.forEach(($,y)=>{for(const z in $){const _=$[z];_.sort($t);const b=[],w=[],M=[];for(let j=0;j<_.length;j++){const{at:l,value:m,easing:k}=_[j];b.push(m),w.push(Ne(0,V,l)),M.push(k||"easeOut")}w[0]!==0&&(w.unshift(0),b.unshift(b[0]),M.unshift(zt)),w[w.length-1]!==1&&(w.push(1),b.push(null)),s.has(y)||s.set(y,{keyframes:{},transition:{}});const S=s.get(y);S.keyframes[z]=b,S.transition[z]={...t,duration:V,ease:M,times:w,...r}}}),s}function ue(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function he(e,t){return t[e]||(t[e]=[]),t[e]}function At(e){return Array.isArray(e)?e:[e]}function Kt(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Mt=e=>typeof e=="number",Et=e=>e.every(Mt);function Vt(e,t){return e in t}class Lt extends Ue{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,r){if(Vt(r,t)){const i=t[r];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(t,r){delete r.output[t]}measureInstanceViewportBox(){return Ye()}build(t,r){Object.assign(t.output,r)}renderInstance(t,{output:r}){Object.assign(t,r)}sortInstanceNodePosition(){return 0}}function Tt(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Ze(e)&&!Qe(e)?new Xe(t):new Je(t);r.mount(e),B.set(e,r)}function Ct(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Lt(t);r.mount(e),B.set(e,r)}function It(e,t){return be(e)||typeof e=="number"||typeof e=="string"&&!q(t)}function Se(e,t,r,i){const a=[];if(It(e,t))a.push(qe(e,q(t)&&t.default||t,r&&(r.default||r)));else{const c=_e(e,t,i),s=c.length;for(let d=0;d<s;d++){const g=c[d],v=g instanceof Element?Tt:Ct;B.has(g)||v(g);const f=B.get(g),x={...r};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(d,s)),a.push(...et(f,{...t,transition:x},{}))}}return a}function Rt(e,t,r){const i=[];return kt(e,t,r,{spring:tt}).forEach(({keyframes:c,transition:s},d)=>{i.push(...Se(d,c,s))}),i}function Pt(e){return Array.isArray(e)&&e.some(Array.isArray)}function Dt(e){function t(r,i,a){let c=[],s;if(Pt(r))c=Rt(r,i,e);else{const{onComplete:g,...v}=a||{};typeof g=="function"&&(s=g),c=Se(r,i,v,e)}const d=new xt(c);return s&&d.finished.then(s),d}return t}const Ft=Dt(),Gt=o.div`
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
`;function ir(){const{progress:e}=ke();return n.jsx(Ae,{center:!0,children:n.jsxs(Gt,{children:[n.jsxs(Bt,{children:[Math.round(e),"% Loaded"]}),n.jsx(Ot,{children:n.jsx(Ht,{progress:e})})]})})}const Wt=(e=1024)=>{const[t,r]=p.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return p.useEffect(()=>{const i=()=>{const c=navigator.userAgent||navigator.vendor||window.opera;return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(c.toLowerCase())},a=()=>{const c=window.innerWidth<e,s=i();r(c||s)};if(a(),typeof ResizeObserver<"u"){const c=new ResizeObserver(a);return c.observe(document.documentElement),()=>c.disconnect()}else return window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[e]),t},Nt=()=>{const[e,t]=p.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return p.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=a=>{t(a.matches)};return r.addEventListener?(r.addEventListener("change",i),()=>r.removeEventListener("change",i)):(r.addListener(i),()=>r.removeListener(i))},[]),e},Ut=X`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,ee=X`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`,Yt=X`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Zt=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(30, 30, 50, 0.3) 0%, transparent 70%);
`,Qt=o.div`
  position: relative;
  width: 280px;
  height: 280px;
  animation: ${Yt} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,Xt=o.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 30%, #4a8db7 60%, #1a365d 100%);
  box-shadow:
    inset -30px -30px 60px rgba(0, 0, 0, 0.4),
    inset 20px 20px 40px rgba(100, 180, 255, 0.1),
    0 0 60px rgba(74, 141, 183, 0.3),
    0 0 100px rgba(74, 141, 183, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 30%;
    height: 20%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(10px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.2) 0%, transparent 50%);
  }
`,Y=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border: 1px solid rgba(255, 204, 0, ${e=>e.$opacity});
  border-radius: 50%;
  animation: ${Ut} ${e=>e.$duration}s linear infinite;

  @media (max-width: 768px) {
    width: ${e=>e.$size*.8}px;
    height: ${e=>e.$size*.8}px;
  }
`,Jt=o.div`
  position: absolute;
  width: ${e=>e.$size||8}px;
  height: ${e=>e.$size||8}px;
  background: var(--accent-amber);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-amber), 0 0 20px rgba(255, 204, 0, 0.5);
  animation: ${ee} 2s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,Z=o.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.6), transparent);
  transform-origin: left center;
  animation: ${ee} 3s ease-in-out infinite;
  animation-delay: ${e=>e.$delay||0}s;
`,qt=o.div`
  position: absolute;
  inset: -50px;
  overflow: hidden;
  pointer-events: none;
`,en=o.div`
  position: absolute;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  background: white;
  border-radius: 50%;
  opacity: ${e=>e.$opacity};
  animation: ${ee} ${e=>e.$duration}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  top: ${e=>e.$top}%;
  left: ${e=>e.$left}%;
`,tn=[{top:"25%",left:"35%",size:10,delay:0,label:"Seoul"},{top:"30%",left:"75%",size:8,delay:.5,label:"Berlin"},{top:"55%",left:"45%",size:8,delay:1,label:"Wuhu"},{top:"60%",left:"65%",size:8,delay:1.5,label:"Hong Kong"}],nn=Array.from({length:20},(e,t)=>({id:t,size:Math.random()*2+1,opacity:Math.random()*.5+.2,duration:Math.random()*3+2,delay:Math.random()*2,top:Math.random()*100,left:Math.random()*100})),ge=()=>n.jsxs(Zt,{children:[n.jsx(qt,{children:nn.map(e=>n.jsx(en,{$size:e.size,$opacity:e.opacity,$duration:e.duration,$delay:e.delay,$top:e.top,$left:e.left},e.id))}),n.jsx(Y,{$size:320,$opacity:.2,$duration:30}),n.jsx(Y,{$size:380,$opacity:.15,$duration:45}),n.jsx(Y,{$size:440,$opacity:.1,$duration:60}),n.jsxs(Qt,{children:[n.jsx(Xt,{}),tn.map((e,t)=>n.jsx(Jt,{$size:e.size,$delay:e.delay,style:{top:e.top,left:e.left},title:e.label},t)),n.jsx(Z,{$delay:.3,style:{top:"28%",left:"40%",width:"35%",transform:"rotate(5deg)"}}),n.jsx(Z,{$delay:.8,style:{top:"45%",left:"40%",width:"25%",transform:"rotate(45deg)"}}),n.jsx(Z,{$delay:1.2,style:{top:"58%",left:"50%",width:"15%",transform:"rotate(-15deg)"}})]})]}),rn=p.lazy(()=>Ke(()=>import("./Desktop3DGlobe-CVwMN6lo.js"),__vite__mapDeps([0,1,2,3,4,5]))),on=o.div`
  width: 100%;
  overflow-x: hidden;
`,an=o.section`
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
`,sn=o(h.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
  }
`,cn=o(h.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,ln=o(h.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: -0.02em;
`,dn=o(h.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`,mn=o(h.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,pn=o(h.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,fe=o.a`
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
`,Q=o(h.button)`
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
`,un=o(Q)`
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
`,gn=o.section`
  background: var(--card-bg);
  padding: 5rem 5%;
  border-bottom: 1px solid var(--border-color);
`,fn=o.div`
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
`,vn=o(J)`
  background: var(--background-color);
  padding: 7rem 5%;
`,O=o(h.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`,H=o.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,xe=o.p`
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
`,$e=o(h.div)`
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
`,$n=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${$e}:hover & {
    gap: 0.75rem;
  }
`,zn=o(J)`
  background: var(--card-bg);
  padding: 7rem 5%;
`,kn=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,An=o(h.div)`
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
`,Kn=o.div`
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
`,Mn=o.div`
  flex: 1;
`,En=o.h4`
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
`,Tn=o(J)`
  background: var(--background-color);
  padding: 7rem 5%;
`,Cn=o.div`
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
`,In=o(h.div)`
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
`,Rn=o.div`
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
`,Pn=o.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Dn=o.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Fn=o.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,Gn=o.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,On=o(h.div)`
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
`,Wn=o(h.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Nn=o.div`
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
`,Un=o.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Yn=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Zn=o(h.img).attrs({loading:"lazy",decoding:"async"})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }
`,Qn=({value:e,suffix:t=""})=>{const r=p.useRef(null),i=L(r,{once:!0}),a=we(0),c=vt(a,g=>Math.round(g)),[s,d]=p.useState(0);return p.useEffect(()=>{if(i){const g=Ft(a,e,{duration:2,ease:"easeOut"}),v=c.on("change",f=>{d(f)});return()=>{g.stop(),v()}}},[i,e,a,c]),n.jsxs(yn,{ref:r,children:[s.toLocaleString(),n.jsx("span",{children:t})]})},Xn=()=>{const{t:e}=ht(),t=p.useRef(null),r=Wt(1024),i=Nt(),a=!r&&!i,c=p.useRef(null),s=p.useRef(null),d=p.useRef(null),g=p.useRef(null),v=p.useRef(null),f=L(c,{once:!0,margin:"-50px"}),x=L(s,{once:!0,margin:"-50px"}),V=L(d,{once:!0,margin:"-50px"}),$=L(v,{once:!0,margin:"-50px"}),y=L(g,{once:!0,margin:"-50px"}),z=[{icon:n.jsx(ct,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:n.jsx(le,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:n.jsx(lt,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:n.jsx(dt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],_=[{icon:n.jsx(le,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:n.jsx(at,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:n.jsx(st,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],b=[{icon:n.jsx(mt,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:n.jsx(pt,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:n.jsx(ut,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],w=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:15,suffix:"+",labelKey:"stats_years_experience"},{value:99,suffix:"%",labelKey:"stats_customer_satisfaction"}],M=[{industry:e("partners_industry_automotive")||"자동차",icon:n.jsx(nt,{}),partners:[{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"Continental",logo:"/logos/continental_new.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png"}]},{industry:e("partners_industry_electronics")||"전자 / 디스플레이",icon:n.jsx(rt,{}),partners:[{name:"LG Display",logo:"/logos/lg_display_new.png"},{name:"LG Electronics",logo:"/logos/lg_electronics_new.png"},{name:"Humax",logo:"/logos/humax_new.png"}]}],S=p.useRef(null),j=L(S,{once:!0,margin:"-50px"});return n.jsxs(on,{children:[n.jsxs(an,{ref:c,children:[n.jsxs(sn,{initial:{opacity:0,y:30},animate:f?{opacity:1,y:0}:{},transition:{duration:.6},children:[n.jsx(cn,{initial:{opacity:0},animate:f?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),n.jsx(ln,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),n.jsx(dn,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),n.jsxs(mn,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[n.jsx(F,{to:"/about",children:n.jsxs(Q,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",n.jsx(se,{})]})}),n.jsx(F,{to:"/contact",children:n.jsx(un,{whileHover:{scale:1.02},whileTap:{scale:.98},children:e("nav_contact")})})]}),n.jsxs(pn,{initial:{opacity:0},animate:f?{opacity:1}:{},transition:{delay:.7,duration:.5},children:[n.jsxs(fe,{href:"tel:010-3340-6877",children:[n.jsx(it,{})," 010-3340-6877"]}),n.jsxs(fe,{href:"mailto:cgpark@kmtechn.com",children:[n.jsx(ot,{})," cgpark@kmtechn.com"]})]})]}),n.jsx(hn,{ref:t,initial:{opacity:0,x:30},animate:f?{opacity:1,x:0}:{},transition:{delay:.3,duration:.7},children:a?n.jsx(p.Suspense,{fallback:n.jsx(ge,{}),children:n.jsx(rn,{})}):n.jsx(ge,{})})]}),n.jsx(gn,{ref:s,children:n.jsx(fn,{children:w.map((l,m)=>n.jsxs(xn,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(Qn,{value:l.value,suffix:l.suffix}),n.jsx(bn,{children:e(l.labelKey)})]},m))})}),n.jsxs(vn,{ref:d,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:V?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(H,{children:"Our Services"}),n.jsx(G,{children:e("home_services_title")}),n.jsx(xe,{children:e("home_services_3pl_desc")})]}),n.jsx(wn,{children:_.map((l,m)=>n.jsx(F,{to:"/business",style:{textDecoration:"none"},children:n.jsxs($e,{initial:{opacity:0,y:30},animate:V?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(jn,{children:l.icon}),n.jsx(_n,{children:e(l.titleKey)}),n.jsx(Sn,{children:e(l.descKey)}),n.jsxs($n,{children:[e("home_services_button")," ",n.jsx(ce,{})]})]})},l.titleKey))})]}),n.jsxs(Tn,{ref:v,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:$?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(H,{children:"How It Works"}),n.jsx(G,{children:e("process_home_title")}),n.jsx(xe,{children:e("process_home_desc")})]}),n.jsx(Cn,{children:z.map((l,m)=>n.jsxs(Me.Fragment,{children:[n.jsxs(In,{initial:{opacity:0,y:20},animate:$?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[n.jsx(Rn,{children:l.icon}),n.jsxs(Gn,{children:[n.jsxs(Pn,{children:["STEP ",m+1]}),n.jsx(Dn,{children:e(l.titleKey)}),n.jsx(Fn,{children:e(l.descKey)})]})]}),m<z.length-1&&n.jsx(On,{initial:{opacity:0},animate:$?{opacity:1}:{},transition:{delay:m*.15+.1,duration:.3},children:n.jsx(ce,{})})]},l.titleKey))})]}),n.jsxs(zn,{ref:g,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(H,{children:"Why Choose Us"}),n.jsx(G,{children:e("home_strengths_title")})]}),n.jsx(kn,{children:b.map((l,m)=>n.jsxs(An,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(Kn,{children:l.icon}),n.jsxs(Mn,{children:[n.jsx(En,{children:e(l.titleKey)}),n.jsx(Vn,{children:e(l.descKey)})]})]},m))}),n.jsx(Ln,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:n.jsx(F,{to:"/about",children:n.jsxs(Q,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",n.jsx(se,{})]})})})]}),n.jsxs(Hn,{ref:S,children:[n.jsxs(O,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(H,{children:"Trusted By"}),n.jsx(G,{children:e("core_customers_title")})]}),n.jsx(Bn,{children:M.map((l,m)=>n.jsxs(Wn,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[n.jsxs(Nn,{children:[l.icon,n.jsx(Un,{children:l.industry})]}),n.jsx(Yn,{children:l.partners.map((k,u)=>n.jsx(Zn,{src:k.logo,alt:`${k.name} logo`,initial:{opacity:0},animate:j?{opacity:1}:{},transition:{delay:m*.15+u*.05,duration:.4}},k.name))})]},l.industry))})]})]})},or=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"}));export{or as H,ir as L};
//# sourceMappingURL=HomePage-BwErDGAs.js.map
