import{u as Ae,j as r,H as me,a as Me,b as pe,S as Ve,c as ae,N as Ee,C as Te,V as Ke,d as Le,M as Re,e as W}from"./three-vendor-I5c4ovf2.js";import{b as h,L as O}from"./react-vendor-BvbQ_S-X.js";import{i as ke,a as Ie,u as he,m as Ce,M as De,b as ze,f as Pe,c as Ge,d as U,r as Fe,e as Oe,g as He,h as ge,j as Be,k as Ne,l as We,n as Ue,s as Ze,p as Ye,V as $e,o as Je,q as Xe,t as qe,S as Qe,H as et,v as H,w as tt,x as nt,y as rt,z as s,A as L,F as oe,B as Z,C as at,D as b,E as ot,G as it,I as st,J as ct,K as lt,L as ut,N as fe}from"./index-BHbUKxrh.js";import{u as dt}from"./i18n-vendor-Bdmv85-f.js";const mt=(e,t,n)=>{const a=t-e;return((n-e)%a+a)%a+e};function xe(e,t){return ke(e)?e[mt(0,e.length,t)]:e}class pt{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=n}attachTimeline(t){const n=this.animations.map(a=>a.attachTimeline(t));return()=>{n.forEach((a,o)=>{a&&a(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return ie(this.animations,"duration")}get iterationDuration(){return ie(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ie(e,t){let n=0;for(let a=0;a<e.length;a++){const o=e[a][t];o!==null&&o>n&&(n=o)}return n}class ht extends pt{then(t,n){return this.finished.finally(t).then(()=>{})}}function gt(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],o=e[1+n],c=e[2+n],i=e[3+n],l=Ie(o,c,i);return t?l(a):l}function ye(e){const t=he(()=>Ce(e)),{isStatic:n}=h.useContext(De);if(n){const[,a]=h.useState(e);h.useEffect(()=>t.on("change",a),[])}return t}function be(e,t){const n=ye(t()),a=()=>n.set(t());return a(),ze(()=>{const o=()=>Pe.preRender(a,!1,!0),c=e.map(i=>i.on("change",o));return()=>{c.forEach(i=>i()),Ge(a)}}),n}function ft(e){U.current=[],e();const t=be(U.current,e);return U.current=void 0,t}function xt(e,t,n,a){if(typeof e=="function")return ft(e);const o=typeof t=="function"?t:gt(t,n,a);return Array.isArray(e)?se(e,o):se([e],([c])=>o(c))}function se(e,t){const n=he(()=>[]);return be(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return t(n)})}function X(e){return typeof e=="object"&&!Array.isArray(e)}function ve(e,t,n,a){return typeof e=="string"&&X(t)?Fe(e,n,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function yt(e,t,n){return e*(t+1)}function ce(e,t,n,a){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:t.startsWith("<")?Math.max(0,n+parseFloat(t.slice(1))):a.get(t)??e}function bt(e,t,n){for(let a=0;a<e.length;a++){const o=e[a];o.at>t&&o.at<n&&(He(e,o),a--)}}function vt(e,t,n,a,o,c){bt(e,o,c);for(let i=0;i<t.length;i++)e.push({value:t[i],at:Oe(o,c,a[i]),easing:xe(n,i)})}function jt(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function St(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const wt="easeInOut";function _t(e,{defaultTransition:t={},...n}={},a,o){const c=t.duration||.3,i=new Map,l=new Map,m={},g=new Map;let f=0,p=0,T=0;for(let v=0;v<e.length;v++){const y=e[v];if(typeof y=="string"){g.set(y,p);continue}else if(!Array.isArray(y)){g.set(y.name,ce(p,y.at,f,g));continue}let[S,u,d={}]=y;d.at!==void 0&&(p=ce(p,d.at,f,g));let j=0;const K=(w,_,V,k=0,I=0)=>{const x=At(w),{delay:B=0,times:A=Be(x),type:N="keyframes",repeat:P,repeatType:Vn,repeatDelay:En=0,..._e}=_;let{ease:E=t.ease||"easeOut",duration:M}=_;const q=typeof B=="function"?B(k,I):B,Q=x.length,ee=Ue(N)?N:o?.[N||"keyframes"];if(Q<=2&&ee){let C=100;if(Q===2&&Et(x)){const D=x[1]-x[0];C=Math.abs(D)}const G={..._e};M!==void 0&&(G.duration=Ze(M));const F=Ne(G,C,ee);E=F.ease,M=F.duration}M??(M=c);const te=p+q;A.length===1&&A[0]===0&&(A[1]=1);const ne=A.length-x.length;if(ne>0&&We(A,ne),x.length===1&&x.unshift(null),P){M=yt(M,P);const C=[...x],G=[...A];E=Array.isArray(E)?[...E]:[E];const F=[...E];for(let D=0;D<P;D++){x.push(...C);for(let z=0;z<C.length;z++)A.push(G[z]+(D+1)),E.push(z===0?"linear":xe(F,z-1))}jt(A,P)}const re=te+M;vt(V,x,E,A,te,re),j=Math.max(q+M,j),T=Math.max(re,T)};if(ge(S)){const w=le(S,l);K(u,d,ue("default",w))}else{const w=ve(S,u,a,m),_=w.length;for(let V=0;V<_;V++){u=u,d=d;const k=w[V],I=le(k,l);for(const x in u)K(u[x],Mt(d,x),ue(x,I),V,_)}}f=p,p+=j}return l.forEach((v,y)=>{for(const S in v){const u=v[S];u.sort(St);const d=[],j=[],K=[];for(let _=0;_<u.length;_++){const{at:V,value:k,easing:I}=u[_];d.push(k),j.push(Ye(0,T,V)),K.push(I||"easeOut")}j[0]!==0&&(j.unshift(0),d.unshift(d[0]),K.unshift(wt)),j[j.length-1]!==1&&(j.push(1),d.push(null)),i.has(y)||i.set(y,{keyframes:{},transition:{}});const w=i.get(y);w.keyframes[S]=d,w.transition[S]={...t,duration:T,ease:K,times:j,...n}}}),i}function le(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function ue(e,t){return t[e]||(t[e]=[]),t[e]}function At(e){return Array.isArray(e)?e:[e]}function Mt(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Vt=e=>typeof e=="number",Et=e=>e.every(Vt);function Tt(e,t){return e in t}class Kt extends $e{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,n){if(Tt(n,t)){const a=t[n];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(t,n){delete n.output[t]}measureInstanceViewportBox(){return Je()}build(t,n){Object.assign(t.output,n)}renderInstance(t,{output:n}){Object.assign(t,n)}sortInstanceNodePosition(){return 0}}function Lt(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Xe(e)&&!qe(e)?new Qe(t):new et(t);n.mount(e),H.set(e,n)}function Rt(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new Kt(t);n.mount(e),H.set(e,n)}function kt(e,t){return ge(e)||typeof e=="number"||typeof e=="string"&&!X(t)}function je(e,t,n,a){const o=[];if(kt(e,t))o.push(tt(e,X(t)&&t.default||t,n&&(n.default||n)));else{const c=ve(e,t,a),i=c.length;for(let l=0;l<i;l++){const m=c[l],g=m instanceof Element?Lt:Rt;H.has(m)||g(m);const f=H.get(m),p={...n};"delay"in p&&typeof p.delay=="function"&&(p.delay=p.delay(l,i)),o.push(...nt(f,{...t,transition:p},{}))}}return o}function It(e,t,n){const a=[];return _t(e,t,n,{spring:rt}).forEach(({keyframes:c,transition:i},l)=>{a.push(...je(l,c,i))}),a}function Ct(e){return Array.isArray(e)&&e.some(Array.isArray)}function Dt(e){function t(n,a,o){let c=[],i;if(Ct(n))c=It(n,a,e);else{const{onComplete:m,...g}=o||{};typeof m=="function"&&(i=m),c=je(n,a,g,e)}const l=new ht(c);return i&&l.finished.then(i),l}return t}const zt=Dt(),Pt=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Gt=s.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,Ft=s.div`
  width: ${e=>e.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,Ot=s.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function Ht(){const{progress:e}=Ae();return r.jsx(me,{center:!0,children:r.jsxs(Pt,{children:[r.jsxs(Ot,{children:[Math.round(e),"% Loaded"]}),r.jsx(Gt,{children:r.jsx(Ft,{progress:e})})]})})}const R=3.08,Se=(e,t,n)=>{const a=(90-e)*(Math.PI/180),o=(t+180)*(Math.PI/180),c=-(n*Math.sin(a)*Math.cos(o)),i=n*Math.sin(a)*Math.sin(o),l=n*Math.cos(a);return new Ke(c,l,i)},de=[{name:"Seoul",lat:37.5665,lon:126.978},{name:"Berlin",lat:52.52,lon:13.405},{name:"Wuhu",lat:31.33,lon:118.38},{name:"Hong Kong",lat:22.3193,lon:114.1694}];function Bt({position:e,name:t}){const[n,a]=h.useState(!1),o=h.useRef();return pe((c,i)=>{o.current&&(n?o.current.scale.lerp({x:1.2,y:1.2,z:1.2},i*3):o.current.scale.x>1.01&&o.current.scale.lerp({x:1,y:1,z:1},i*5))}),r.jsxs("mesh",{position:e,ref:o,onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[r.jsx("sphereGeometry",{args:[.055,16,16]}),r.jsx("meshBasicMaterial",{color:"gold",toneMapped:!1}),r.jsx(me,{as:"div",distanceFactor:10,style:{transition:"opacity 0.2s",opacity:n?1:0,pointerEvents:"none",padding:"5px 10px",background:"rgba(0, 0, 0, 0.7)",color:"white",borderRadius:"5px",fontSize:"14px",whiteSpace:"nowrap",transform:"translate(-50%, -150%)"},children:t})]})}function Nt({points:e}){const t=h.useMemo(()=>e.map(n=>({...n,position:Se(n.lat,n.lon,R+.02)})),[e]);return r.jsx("group",{children:t.map(n=>r.jsx(Bt,{position:n.position,name:n.name},n.name))})}function Wt({points:e}){const t=h.useMemo(()=>{const n=[],a=R+.05,o=e.map(c=>Se(c.lat,c.lon,a));for(let c=0;c<o.length;c++){const i=o[c],l=o[(c+1)%o.length],g=1.05+i.distanceTo(l)/(R*2)*.25,f=i.clone().lerp(l,.5).normalize().multiplyScalar(R*g);n.push([i,f,l])}return n},[e]);return r.jsx("group",{children:t.map((n,a)=>r.jsx(Te,{points:n,color:"cyan",lineWidth:2,transparent:!0,opacity:.7},a))})}const Ut=e=>{const{ambientIntensity:t=1,directionalIntensity:n=12,metalness:a=.2,roughness:o=.5,emissiveIntensity:c=2.5,cloudsOpacity:i=.25}=e,[l,m,g]=Me(["/earth-day.jpg","/earth-night.jpg","/earth-clouds.jpg"]),f=h.useRef(),p=h.useRef();return pe(({clock:T},v)=>{f.current&&(f.current.rotation.y+=v*.05),p.current&&(p.current.rotation.y+=v*.06)}),r.jsxs(r.Fragment,{children:[r.jsx("ambientLight",{intensity:t}),r.jsx("directionalLight",{position:[10,10,5],intensity:n}),r.jsx(Ve,{radius:300,depth:50,count:2e3,factor:4,saturation:0,fade:!0,speed:.5}),r.jsxs("group",{ref:f,children:[r.jsx(ae,{args:[R,48,48],children:r.jsx("meshStandardMaterial",{map:l,metalness:a,roughness:o,emissiveMap:m,emissive:"#ffffff",emissiveIntensity:c})}),r.jsx(ae,{ref:p,args:[R+.05,24,24],castShadow:!1,receiveShadow:!1,children:r.jsx("meshStandardMaterial",{map:g,transparent:!0,opacity:i,blending:Ee})}),r.jsx(Nt,{points:de}),r.jsx(Wt,{points:de})]})]})},Zt=s.div`
  width: 100%;
  overflow-x: hidden;
`,Yt=s.section`
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
`,$t=s(b.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
  }
`,Jt=s(b.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,Xt=s(b.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: -0.02em;
`,qt=s(b.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`,Qt=s(b.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,J=s(b.button)`
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
`,en=s(J)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,tn=s(b.div)`
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
`,nn=s.section`
  background: var(--card-bg);
  padding: 5rem 5%;
  border-bottom: 1px solid var(--border-color);
`,rn=s.div`
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
`,an=s(b.div)`
  text-align: center;
  padding: 1.5rem;
`,on=s.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;

  span {
    color: var(--accent-amber);
  }
`,sn=s.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`,cn=s(fe)`
  background: var(--background-color);
  padding: 7rem 5%;
`,Y=s(b.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`,$=s.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,ln=s.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,un=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,we=s(b.div)`
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
`,dn=s.div`
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
`,mn=s.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,pn=s.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,hn=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${we}:hover & {
    gap: 0.75rem;
  }
`,gn=s(fe)`
  background: var(--card-bg);
  padding: 7rem 5%;
`,fn=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,xn=s(b.div)`
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
`,yn=s.div`
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
`,bn=s.div`
  flex: 1;
`,vn=s.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,jn=s.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,Sn=s(b.div)`
  text-align: center;
`,wn=s.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);
`,_n=s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`,An=s(b.img)`
  height: 40px;
  max-width: 120px;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
  will-change: transform;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`,Mn=({value:e,suffix:t=""})=>{const n=h.useRef(null),a=L(n,{once:!0}),o=ye(0),c=xt(o,m=>Math.round(m)),[i,l]=h.useState(0);return h.useEffect(()=>{if(a){const m=zt(o,e,{duration:2,ease:"easeOut"}),g=c.on("change",f=>{l(f)});return()=>{m.stop(),g()}}},[a,e,o,c]),r.jsxs(on,{ref:n,children:[i.toLocaleString(),r.jsx("span",{children:t})]})},kn=()=>{const{t:e}=dt(),t=h.useRef(null),n=h.useRef(null),a=h.useRef(null),o=h.useRef(null),c=h.useRef(null),i=L(n,{once:!0,margin:"-50px"}),l=L(a,{once:!0,margin:"-50px"}),m=L(o,{once:!0,margin:"-50px"}),g=L(c,{once:!0,margin:"-50px"}),f=[{icon:r.jsx(ot,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:r.jsx(it,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:r.jsx(st,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],p=[{icon:r.jsx(ct,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:r.jsx(lt,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:r.jsx(ut,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],T=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:15,suffix:"+",labelKey:"stats_years_experience"},{value:99,suffix:"%",labelKey:"stats_customer_satisfaction"}],v=[{name:"Continental",logo:"/logos/continental.jpeg"},{name:"Humax",logo:"/logos/humax.jpeg"},{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi mobility.jpeg"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"LG Display",logo:"/logos/LG_Display_logo_(english).png"},{name:"LG Electronics",logo:"/logos/LG electronics.png"}],y=h.useRef(null),S=L(y,{once:!0,margin:"-50px"});return r.jsxs(Zt,{children:[r.jsxs(Yt,{ref:n,children:[r.jsxs($t,{initial:{opacity:0,y:30},animate:i?{opacity:1,y:0}:{},transition:{duration:.6},children:[r.jsx(Jt,{initial:{opacity:0},animate:i?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),r.jsx(Xt,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),r.jsx(qt,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),r.jsxs(Qt,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[r.jsx(O,{to:"/about",children:r.jsxs(J,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",r.jsx(oe,{})]})}),r.jsx(O,{to:"/contact",children:r.jsx(en,{whileHover:{scale:1.02},whileTap:{scale:.98},children:e("nav_contact")})})]})]}),r.jsx(tn,{ref:t,initial:{opacity:0,x:30},animate:i?{opacity:1,x:0}:{},transition:{delay:.3,duration:.7},children:r.jsxs(Le,{camera:{position:[0,0,8],fov:50},dpr:[1,1.5],performance:{min:.5},children:[r.jsx(h.Suspense,{fallback:r.jsx(Ht,{}),children:r.jsx(Ut,{})}),r.jsx(Re,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:W.ROTATE,MIDDLE:W.DOLLY,RIGHT:W.PAN}})]})})]}),r.jsx(nn,{ref:a,children:r.jsx(rn,{children:T.map((u,d)=>r.jsxs(an,{initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{},transition:{delay:d*.1,duration:.5},children:[r.jsx(Mn,{value:u.value,suffix:u.suffix}),r.jsx(sn,{children:e(u.labelKey)})]},d))})}),r.jsxs(cn,{ref:o,children:[r.jsxs(Y,{initial:{opacity:0,y:20},animate:m?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx($,{children:"Our Services"}),r.jsx(Z,{children:e("home_services_title")}),r.jsx(ln,{children:e("home_services_3pl_desc")})]}),r.jsx(un,{children:f.map((u,d)=>r.jsx(O,{to:"/business",style:{textDecoration:"none"},children:r.jsxs(we,{initial:{opacity:0,y:30},animate:m?{opacity:1,y:0}:{},transition:{delay:d*.1,duration:.5},children:[r.jsx(dn,{children:u.icon}),r.jsx(mn,{children:e(u.titleKey)}),r.jsx(pn,{children:e(u.descKey)}),r.jsxs(hn,{children:[e("home_services_button")," ",r.jsx(at,{})]})]})},u.titleKey))})]}),r.jsxs(gn,{ref:c,children:[r.jsxs(Y,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx($,{children:"Why Choose Us"}),r.jsx(Z,{children:e("home_strengths_title")})]}),r.jsx(fn,{children:p.map((u,d)=>r.jsxs(xn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:d*.1,duration:.5},children:[r.jsx(yn,{children:u.icon}),r.jsxs(bn,{children:[r.jsx(vn,{children:e(u.titleKey)}),r.jsx(jn,{children:e(u.descKey)})]})]},d))}),r.jsx(Sn,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:r.jsx(O,{to:"/about",children:r.jsxs(J,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",r.jsx(oe,{})]})})})]}),r.jsxs(wn,{ref:y,children:[r.jsxs(Y,{initial:{opacity:0,y:20},animate:S?{opacity:1,y:0}:{},transition:{duration:.5},children:[r.jsx($,{children:"Trusted By"}),r.jsx(Z,{children:e("core_customers_title")})]}),r.jsx(_n,{children:v.map((u,d)=>r.jsx(An,{src:u.logo,alt:`${u.name} logo`,initial:{opacity:0,y:20},animate:S?{opacity:.7,y:0}:{},transition:{delay:d*.05,duration:.4}},u.name))})]})]})};export{kn as default};
//# sourceMappingURL=HomePage-B1BVCBas.js.map
