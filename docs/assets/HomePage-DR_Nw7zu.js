import{i as je,a as _e,u as pe,m as Se,r as v,M as ke,b as Ke,f as Ve,c as ze,d as W,e as Ae,g as Ie,h as Te,j as he,k as Ee,l as Ce,n as Fe,o as Pe,s as Me,p as Re,V as De,q as Le,t as Ge,v as He,S as Be,H as Oe,w as B,x as Ne,y as We,z as $e,A as r,B as n,C as Ze,D as C,E as Ye,F as Ue,G as Xe,I as re,J as Je,K as Qe,L as R,N as ue,O as ie,R as qe,P as p,Q as et,T as ne,U as tt,W as rt,X as it,Y as nt,Z as ae,_ as at,$ as ot,a0 as Y}from"./index-B3zR7FmB.js";const st=(e,t,i)=>{const a=t-e;return((i-e)%a+a)%a+e};function ge(e,t){return je(e)?e[st(0,e.length,t)]:e}class ct{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,i){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=i}attachTimeline(t){const i=this.animations.map(a=>a.attachTimeline(t));return()=>{i.forEach((a,s)=>{a&&a(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return oe(this.animations,"duration")}get iterationDuration(){return oe(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(i=>i[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function oe(e,t){let i=0;for(let a=0;a<e.length;a++){const s=e[a][t];s!==null&&s>i&&(i=s)}return i}class lt extends ct{then(t,i){return this.finished.finally(t).then(()=>{})}}function dt(...e){const t=!Array.isArray(e[0]),i=t?0:-1,a=e[0+i],s=e[1+i],m=e[2+i],l=e[3+i],d=_e(s,m,l);return t?d(a):d}function xe(e){const t=pe(()=>Se(e)),{isStatic:i}=v.useContext(ke);if(i){const[,a]=v.useState(e);v.useEffect(()=>t.on("change",a),[])}return t}function fe(e,t){const i=xe(t()),a=()=>i.set(t());return a(),Ke(()=>{const s=()=>Ve.preRender(a,!1,!0),m=e.map(l=>l.on("change",s));return()=>{m.forEach(l=>l()),ze(a)}}),i}function mt(e){W.current=[],e();const t=fe(W.current,e);return W.current=void 0,t}function pt(e,t,i,a){if(typeof e=="function")return mt(e);const s=typeof t=="function"?t:dt(t,i,a);return Array.isArray(e)?se(e,s):se([e],([m])=>s(m))}function se(e,t){const i=pe(()=>[]);return fe(e,()=>{i.length=0;const a=e.length;for(let s=0;s<a;s++)i[s]=e[s].get();return t(i)})}function U(e){return typeof e=="object"&&!Array.isArray(e)}function ye(e,t,i,a){return typeof e=="string"&&U(t)?Ae(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function ht(e,t,i){return e*(t+1)}function ce(e,t,i,a){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?i:t.startsWith("<")?Math.max(0,i+parseFloat(t.slice(1))):a.get(t)??e}function ut(e,t,i){for(let a=0;a<e.length;a++){const s=e[a];s.at>t&&s.at<i&&(Te(e,s),a--)}}function gt(e,t,i,a,s,m){ut(e,s,m);for(let l=0;l<t.length;l++)e.push({value:t[l],at:Ie(s,m,a[l]),easing:ge(i,l)})}function xt(e,t){for(let i=0;i<e.length;i++)e[i]=e[i]/(t+1)}function ft(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const yt="easeInOut";function bt(e,{defaultTransition:t={},...i}={},a,s){const m=t.duration||.3,l=new Map,d=new Map,u={},f=new Map;let _=0,h=0,A=0;for(let I=0;I<e.length;I++){const w=e[I];if(typeof w=="string"){f.set(w,h);continue}else if(!Array.isArray(w)){f.set(w.name,ce(h,w.at,_,f));continue}let[k,j,x={}]=w;x.at!==void 0&&(h=ce(h,x.at,_,f));let y=0;const K=(b,o,c,S=0,E=0)=>{const g=vt(b),{delay:O=0,times:V=Ee(g),type:N="keyframes",repeat:D,repeatType:Xr,repeatDelay:Jr=0,...we}=o;let{ease:T=t.ease||"easeOut",duration:z}=o;const X=typeof O=="function"?O(S,E):O,J=g.length,Q=Pe(N)?N:s?.[N||"keyframes"];if(J<=2&&Q){let F=100;if(J===2&&_t(g)){const P=g[1]-g[0];F=Math.abs(P)}const L={...we};z!==void 0&&(L.duration=Me(z));const G=Ce(L,F,Q);T=G.ease,z=G.duration}z??(z=m);const q=h+X;V.length===1&&V[0]===0&&(V[1]=1);const ee=V.length-g.length;if(ee>0&&Fe(V,ee),g.length===1&&g.unshift(null),D){z=ht(z,D);const F=[...g],L=[...V];T=Array.isArray(T)?[...T]:[T];const G=[...T];for(let P=0;P<D;P++){g.push(...F);for(let M=0;M<F.length;M++)V.push(L[M]+(P+1)),T.push(M===0?"linear":ge(G,M-1))}xt(V,D)}const te=q+z;gt(c,g,T,V,q,te),y=Math.max(X+z,y),A=Math.max(te,A)};if(he(k)){const b=le(k,d);K(j,x,de("default",b))}else{const b=ye(k,j,a,u),o=b.length;for(let c=0;c<o;c++){j=j,x=x;const S=b[c],E=le(S,d);for(const g in j)K(j[g],wt(x,g),de(g,E),c,o)}}_=h,h+=y}return d.forEach((I,w)=>{for(const k in I){const j=I[k];j.sort(ft);const x=[],y=[],K=[];for(let o=0;o<j.length;o++){const{at:c,value:S,easing:E}=j[o];x.push(S),y.push(Re(0,A,c)),K.push(E||"easeOut")}y[0]!==0&&(y.unshift(0),x.unshift(x[0]),K.unshift(yt)),y[y.length-1]!==1&&(y.push(1),x.push(null)),l.has(w)||l.set(w,{keyframes:{},transition:{}});const b=l.get(w);b.keyframes[k]=x,b.transition[k]={...t,duration:A,ease:K,times:y,...i}}}),l}function le(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function de(e,t){return t[e]||(t[e]=[]),t[e]}function vt(e){return Array.isArray(e)?e:[e]}function wt(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const jt=e=>typeof e=="number",_t=e=>e.every(jt);function St(e,t){return e in t}class kt extends De{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,i){if(St(i,t)){const a=t[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(t,i){delete i.output[t]}measureInstanceViewportBox(){return Le()}build(t,i){Object.assign(t.output,i)}renderInstance(t,{output:i}){Object.assign(t,i)}sortInstanceNodePosition(){return 0}}function Kt(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Ge(e)&&!He(e)?new Be(t):new Oe(t);i.mount(e),B.set(e,i)}function Vt(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new kt(t);i.mount(e),B.set(e,i)}function zt(e,t){return he(e)||typeof e=="number"||typeof e=="string"&&!U(t)}function be(e,t,i,a){const s=[];if(zt(e,t))s.push(Ne(e,U(t)&&t.default||t,i&&(i.default||i)));else{const m=ye(e,t,a),l=m.length;for(let d=0;d<l;d++){const u=m[d],f=u instanceof Element?Kt:Vt;B.has(u)||f(u);const _=B.get(u),h={...i};"delay"in h&&typeof h.delay=="function"&&(h.delay=h.delay(d,l)),s.push(...We(_,{...t,transition:h},{}))}}return s}function At(e,t,i){const a=[];return bt(e,t,i,{spring:$e}).forEach(({keyframes:m,transition:l},d)=>{a.push(...be(d,m,l))}),a}function It(e){return Array.isArray(e)&&e.some(Array.isArray)}function Tt(e){function t(i,a,s){let m=[],l;if(It(i))m=At(i,a,e);else{const{onComplete:u,...f}=s||{};typeof u=="function"&&(l=u),m=be(i,a,f,e)}const d=new lt(m);return l&&d.finished.then(l),d}return t}const Et=Tt(),Ct=n.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`,Ft=n.picture`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`,Pt=n.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 24px 42px rgba(15, 23, 42, 0.14));
`,Mt=()=>r.jsx(Ct,{"aria-hidden":"true",children:r.jsxs(Ft,{children:[r.jsx("source",{type:"image/webp",srcSet:"/images/kmtech-globe-logistics-alpha-640.webp 640w, /images/kmtech-globe-logistics-alpha-960.webp 960w",sizes:"(max-width: 600px) 232px, (max-width: 1120px) 380px, 460px"}),r.jsx(Pt,{src:"/images/kmtech-globe-logistics-alpha.png",alt:"",loading:"eager",decoding:"async",fetchPriority:"high"})]})}),Rt=n.div`
  width: 100%;
  overflow-x: hidden;
`,Dt=n.section`
  min-height: auto;
  padding: clamp(2.6rem, 5vh, 3.6rem) clamp(1rem, 4vw, 4.5rem) clamp(0.8rem, 2vh, 1.25rem);
  background:
    radial-gradient(circle at 77% 18%, rgba(var(--accent-amber-rgb), 0.13), transparent 23rem),
    linear-gradient(180deg, #f8f9fb 0%, var(--background-color) 100%);
  position: relative;
  overflow: hidden;

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
    min-height: auto;
    padding: 3.25rem 5% 3rem;
  }

  @media (max-width: 600px) {
    padding: 3.35rem 1.25rem 2.25rem;
  }
`,Lt=n.div`
  width: min(100%, 1560px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(22rem, 0.62fr) minmax(32rem, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
  }
`,Gt=n(p.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  min-width: 0;
  width: 100%;

  @media (max-width: 1120px) {
    align-items: center;
    order: 1;
  }
`,Ht=n(p.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,Bt=n(p.h1)`
  font-size: clamp(2.7rem, 4.1vw, 3.65rem);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 1.5rem;
  max-width: 650px;
  width: 100%;
  color: var(--text-color);
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: clamp(2.1rem, 10vw, 2.75rem);
    margin-bottom: 1rem;
  }
`,Ot=n(p.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  width: 100%;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,Nt=n(p.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1120px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,Wt=n(p.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,$t=n.a`
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
`,Z=n(p(ue))`
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
`,Zt=n(Z)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,Yt=n(p.div)`
  height: clamp(28rem, 38vw, 34rem);
  width: 100%;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(238, 242, 247, 0.92)),
    radial-gradient(circle at 64% 44%, rgba(var(--accent-amber-rgb), 0.16), transparent 16rem);
  box-shadow: 0 26px 70px rgba(15, 23, 42, 0.14);
  cursor: grab;

  &::before {
    content: '';
    position: absolute;
    inset: 1.1rem;
    z-index: -1;
    border-radius: 10px;
    background-image:
      linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(circle at 56% 44%, black, transparent 68%);
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 1120px) {
    order: 2;
    height: clamp(27rem, 64vw, 34rem);
    max-width: 760px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    height: 20rem;
    max-width: none;
    border-radius: 10px;
    margin-top: 0.25rem;
  }
`,Ut=n.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.9;
  filter: saturate(0.94) contrast(0.98) brightness(1.03);
  z-index: 0;

  @media (max-width: 600px) {
    object-position: 46% center;
  }
`,Xt=n.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  left: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  text-align: left;
`,Jt=n.div`
  color: #253046;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`,Qt=n.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.35;
  font-weight: 600;
`,qt=n.div`
  position: absolute;
  right: clamp(0.6rem, 2.2vw, 1.4rem);
  bottom: clamp(4.1rem, 6vw, 5.4rem);
  width: clamp(15rem, 28vw, 25rem);
  height: clamp(15rem, 28vw, 25rem);
  display: grid;
  place-items: center;
  z-index: 2;
  pointer-events: none;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 600px) {
    right: -0.55rem;
    bottom: 5.7rem;
    width: 12.75rem;
    height: 12.75rem;
  }
`,er=n.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  display: grid;
  gap: 0.5rem;
  width: min(30%, 13rem);

  @media (max-width: 720px) {
    display: none;
  }
`,tr=n.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  align-items: center;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
  padding: 0.7rem 0.8rem;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
`,rr=n.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  line-height: 1.25;
`,ir=n.strong`
  color: #111827;
  font-size: 0.95rem;
  line-height: 1;
  white-space: nowrap;
`,nr=n.div`
  position: absolute;
  left: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  bottom: clamp(1rem, 2vw, 1.35rem);
  z-index: 4;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  padding: clamp(0.75rem, 1.5vw, 1rem);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
`,ar=n.div`
  color: #253046;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
  text-align: left;
`,or=n.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,sr=n.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  color: #253046;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.25;
  min-width: 0;

  svg {
    color: var(--accent-amber);
    font-size: 1.35rem;
  }
`,cr=n(p.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7.5rem), 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 620px;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`,lr=n.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(var(--card-bg-rgb, 255, 255, 255), 0.64);
  padding: 0.85rem;
  min-width: 0;
`,dr=n.div`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
`,mr=n.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  overflow-wrap: anywhere;
`,pr=n.section`
  background: var(--card-bg);
  padding: 4.5rem 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 3rem 1.25rem;
  }
`,hr=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8.75rem), 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  max-width: 1200px;
  margin: 0 auto;
`,ur=n(p.div)`
  text-align: center;
  padding: 1.35rem 1rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
`,gr=n.div`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`,xr=n.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.35;
  overflow-wrap: anywhere;
`,fr=n(Y)`
  background: var(--background-color);
  padding: clamp(2.4rem, 4vw, 3.5rem) 5% 5.5rem;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,yr=n.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.34fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,br=n(p.div)`
  text-align: left;
  min-width: 0;

  ${R} {
    font-size: clamp(1.7rem, 3vw, 2.4rem);
  }

  @media (max-width: 980px) {
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
  }
`,$=n(p.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
`,H=n.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,me=n.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,vr=n.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.85rem, 1.4vw, 1.1rem);
  min-width: 0;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,ve=n(p.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.15rem, 2vw, 1.4rem);
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

`,wr=n.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`,jr=n.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,_r=n.p`
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  flex-grow: 1;
`,Sr=n.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${ve}:hover & {
    gap: 0.75rem;
  }
`,kr=n(Y)`
  background: var(--card-bg);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,Kr=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1200px;
  margin: 0 auto 3rem;
`,Vr=n(p.div)`
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
`,zr=n.div`
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
`,Ar=n.div`
  flex: 1;
  min-width: 0;
`,Ir=n.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,Tr=n.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,Er=n(p.div)`
  text-align: center;
`,Cr=n(Y)`
  background: var(--background-color);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,Fr=n.div`
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
`,Pr=n(p.div)`
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
`,Mr=n.div`
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
`,Rr=n.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Dr=n.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Lr=n.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,Gr=n.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,Hr=n(p.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Br=n.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 4rem 1.25rem;
  }
`,Or=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin: 0 auto;
`,Nr=n(p.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Wr=n.div`
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
`,$r=n.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Zr=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Yr=n(p.img).attrs({loading:"lazy",decoding:"async"})`
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
`,Ur=({value:e,suffix:t=""})=>{const i=v.useRef(null),a=C(i,{once:!0}),s=xe(0),m=pt(s,u=>Math.round(u)),[l,d]=v.useState(0);return v.useEffect(()=>{if(a){const u=Et(s,e,{duration:2,ease:"easeOut"}),f=m.on("change",_=>{d(_)});return()=>{u.stop(),f()}}},[a,e,s,m]),r.jsxs(gr,{ref:i,children:[l.toLocaleString(),r.jsx("span",{children:t})]})},qr=()=>{const{t:e}=Ze(),t=v.useRef(null),i=v.useRef(null),a=v.useRef(null),s=v.useRef(null),m=v.useRef(null),l=v.useRef(null),d=C(i,{once:!0,margin:"-50px"}),u=C(a,{once:!0,margin:"-50px"}),f=C(s,{once:!0,margin:"-50px"}),_=C(l,{once:!0,margin:"-50px"}),h=C(m,{once:!0,margin:"-50px"}),A=[{icon:r.jsx(et,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:r.jsx(ne,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:r.jsx(tt,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:r.jsx(rt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],I=[{icon:r.jsx(ne,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:r.jsx(it,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:r.jsx(nt,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"},{icon:r.jsx(ae,{}),titleKey:"business_delivery_title",descKey:"business_delivery_summary"}],w=[{icon:r.jsx(at,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:r.jsx(ae,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:r.jsx(ot,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],k=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:40,suffix:"ft x2",labelKey:"metric_container_dock"},{value:16,suffix:"CH",labelKey:"metric_cctv"}],j=[{value:"2,140㎡",labelKey:"hero_proof_facility"},{value:"3,000+",labelKey:"hero_proof_capacity"},{value:"40ft x2",labelKey:"metric_container_dock"},{value:"16CH",labelKey:"metric_cctv"}],x=Qe.slice(0,3),y=Object.entries(Ye.reduce((o,c)=>(o[c.industryKey]=o[c.industryKey]||[],o[c.industryKey].push(c),o),{})).map(([o,c])=>({industry:e(o),icon:o==="partners_industry_automotive"?r.jsx(Ue,{}):r.jsx(Xe,{}),partners:c})),K=v.useRef(null),b=C(K,{once:!0,margin:"-50px"});return r.jsxs(Rt,{children:[r.jsx(Dt,{ref:i,children:r.jsxs(Lt,{children:[r.jsxs(Gt,{initial:{opacity:0,y:30},animate:d?{opacity:1,y:0}:{},transition:{duration:.6},children:[r.jsx(Ht,{initial:{opacity:0},animate:d?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),r.jsx(Bt,{initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),r.jsx(Ot,{initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),r.jsxs(Nt,{initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[r.jsxs(Z,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_primary_cta")," ",r.jsx(re,{})]}),r.jsx(Zt,{to:"/business",whileHover:{scale:1.02},whileTap:{scale:.98},children:e("hero_secondary_cta")})]}),r.jsx(cr,{"aria-label":e("hero_proof_label"),initial:{opacity:0,y:16},animate:d?{opacity:1,y:0}:{},transition:{delay:.6,duration:.5},children:j.map(o=>r.jsxs(lr,{children:[r.jsx(dr,{children:o.value}),r.jsx(mr,{children:e(o.labelKey)})]},o.labelKey))}),r.jsx(Wt,{initial:{opacity:0},animate:d?{opacity:1}:{},transition:{delay:.7,duration:.5},children:r.jsxs($t,{href:"mailto:cgpark@kmtechn.com",children:[r.jsx(Je,{})," cgpark@kmtechn.com"]})})]}),r.jsxs(Yt,{ref:t,initial:{opacity:0,y:18},animate:d?{opacity:1,y:0}:{},transition:{delay:.3,duration:.7},children:[r.jsx(Ut,{src:"/images/kmtech-home-network-backdrop.png",srcSet:"/images/kmtech-home-network-backdrop-960.webp 960w, /images/kmtech-home-network-backdrop-1440.webp 1440w, /images/kmtech-home-network-backdrop.png 1672w",sizes:"(max-width: 1120px) 100vw, 58vw",alt:"",loading:"eager",decoding:"async",fetchPriority:"high"}),r.jsxs(Xt,{children:[r.jsx(Jt,{children:e("hero_visual_label")}),r.jsx(Qt,{children:e("hero_visual_network")})]}),r.jsx(er,{children:x.map(o=>r.jsxs(tr,{children:[r.jsx(rr,{children:e(o.labelKey)}),r.jsx(ir,{children:o.value})]},o.labelKey))}),r.jsx(qt,{children:r.jsx(Mt,{})}),r.jsxs(nr,{children:[r.jsx(ar,{children:e("hero_visual_flow_label")}),r.jsx(or,{children:A.map(o=>r.jsxs(sr,{children:[o.icon,r.jsx("span",{children:e(o.titleKey)})]},o.titleKey))})]})]})]})}),r.jsx(fr,{ref:s,children:r.jsxs(yr,{children:[r.jsxs(br,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx(H,{children:e("home_section_services_label")}),r.jsx(R,{children:e("home_services_title")}),r.jsx(me,{children:e("home_services_3pl_desc")})]}),r.jsx(vr,{children:I.map((o,c)=>r.jsx(ue,{to:"/business",style:{textDecoration:"none",height:"100%"},children:r.jsxs(ve,{initial:{opacity:0,y:30},animate:f?{opacity:1,y:0}:{},transition:{delay:c*.1,duration:.5},children:[r.jsx(wr,{children:o.icon}),r.jsx(jr,{children:e(o.titleKey)}),r.jsx(_r,{children:e(o.descKey)}),r.jsxs(Sr,{children:[e("home_services_button")," ",r.jsx(ie,{})]})]})},o.titleKey))})]})}),r.jsx(pr,{ref:a,children:r.jsx(hr,{children:k.map((o,c)=>r.jsxs(ur,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{delay:c*.1,duration:.5},children:[r.jsx(Ur,{value:o.value,suffix:o.suffix}),r.jsx(xr,{children:e(o.labelKey)})]},c))})}),r.jsxs(Cr,{ref:l,children:[r.jsxs($,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx(H,{children:e("home_section_process_label")}),r.jsx(R,{children:e("process_home_title")}),r.jsx(me,{children:e("process_home_desc")})]}),r.jsx(Fr,{children:A.map((o,c)=>r.jsxs(qe.Fragment,{children:[r.jsxs(Pr,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{delay:c*.15,duration:.5},children:[r.jsx(Mr,{children:o.icon}),r.jsxs(Gr,{children:[r.jsx(Rr,{children:e("process_step_label",{number:c+1})}),r.jsx(Dr,{children:e(o.titleKey)}),r.jsx(Lr,{children:e(o.descKey)})]})]}),c<A.length-1&&r.jsx(Hr,{initial:{opacity:0},animate:_?{opacity:1}:{},transition:{delay:c*.15+.1,duration:.3},children:r.jsx(ie,{})})]},o.titleKey))})]}),r.jsxs(kr,{ref:m,children:[r.jsxs($,{initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx(H,{children:e("home_section_strengths_label")}),r.jsx(R,{children:e("home_strengths_title")})]}),r.jsx(Kr,{children:w.map((o,c)=>r.jsxs(Vr,{initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{},transition:{delay:c*.1,duration:.5},children:[r.jsx(zr,{children:o.icon}),r.jsxs(Ar,{children:[r.jsx(Ir,{children:e(o.titleKey)}),r.jsx(Tr,{children:e(o.descKey)})]})]},c))}),r.jsx(Er,{initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:r.jsxs(Z,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("home_strengths_cta")," ",r.jsx(re,{})]})})]}),r.jsxs(Br,{ref:K,children:[r.jsxs($,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx(H,{children:e("home_section_partners_label")}),r.jsx(R,{children:e("core_customers_title")})]}),r.jsx(Or,{children:y.map((o,c)=>r.jsxs(Nr,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{delay:c*.15,duration:.5},children:[r.jsxs(Wr,{children:[o.icon,r.jsx($r,{children:o.industry})]}),r.jsx(Zr,{children:o.partners.map((S,E)=>r.jsx(Yr,{src:S.logo,alt:`${S.name} logo`,$needsBg:S.needsBg,initial:{opacity:0},animate:b?{opacity:1}:{},transition:{delay:c*.15+E*.05,duration:.4}},S.name))})]},o.industry))})]})]})};export{qr as default};
