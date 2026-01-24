import{u as Ve,j as n,H as xe,a as Te,b as ye,S as Ee,c as oe,N as Ie,C as Re,V as Pe,d as Ce,M as ze,e as Y}from"./three-vendor-ZYLi6JSD.js";import{b as p,L as O,R as Le}from"./react-vendor-VEkyeZpm.js";import{i as Fe,a as De,u as be,m as Ge,M as Oe,b as He,f as Be,c as We,d as $,r as Ne,e as Ue,g as Ze,h as ve,j as Ye,k as $e,l as Je,n as Qe,s as Xe,p as qe,V as et,o as tt,q as nt,t as rt,S as at,H as ot,v as N,w as it,x as st,y as ct,z as i,A as E,F as lt,B as dt,C as ie,D as mt,E as ut,G as H,I as se,J as x,K as ce,L as pt,N as ht,O as gt,P as ft,Q as xt,R as yt,T as bt,U as vt,W as Q}from"./index-C8SLKlGW.js";import{u as jt}from"./i18n-vendor-BLj2OrmQ.js";const wt=(e,t,r)=>{const a=t-e;return((r-e)%a+a)%a+e};function je(e,t){return Fe(e)?e[wt(0,e.length,t)]:e}class _t{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=r}attachTimeline(t){const r=this.animations.map(a=>a.attachTimeline(t));return()=>{r.forEach((a,o)=>{a&&a(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return le(this.animations,"duration")}get iterationDuration(){return le(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(r=>r[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function le(e,t){let r=0;for(let a=0;a<e.length;a++){const o=e[a][t];o!==null&&o>r&&(r=o)}return r}class St extends _t{then(t,r){return this.finished.finally(t).then(()=>{})}}function At(...e){const t=!Array.isArray(e[0]),r=t?0:-1,a=e[0+r],o=e[1+r],c=e[2+r],s=e[3+r],l=De(o,c,s);return t?l(a):l}function we(e){const t=be(()=>Ge(e)),{isStatic:r}=p.useContext(Oe);if(r){const[,a]=p.useState(e);p.useEffect(()=>t.on("change",a),[])}return t}function _e(e,t){const r=we(t()),a=()=>r.set(t());return a(),He(()=>{const o=()=>Be.preRender(a,!1,!0),c=e.map(s=>s.on("change",o));return()=>{c.forEach(s=>s()),We(a)}}),r}function kt(e){$.current=[],e();const t=_e($.current,e);return $.current=void 0,t}function Mt(e,t,r,a){if(typeof e=="function")return kt(e);const o=typeof t=="function"?t:At(t,r,a);return Array.isArray(e)?de(e,o):de([e],([c])=>o(c))}function de(e,t){const r=be(()=>[]);return _e(e,()=>{r.length=0;const a=e.length;for(let o=0;o<a;o++)r[o]=e[o].get();return t(r)})}function X(e){return typeof e=="object"&&!Array.isArray(e)}function Se(e,t,r,a){return typeof e=="string"&&X(t)?Ne(e,r,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function Kt(e,t,r){return e*(t+1)}function me(e,t,r,a){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?r:t.startsWith("<")?Math.max(0,r+parseFloat(t.slice(1))):a.get(t)??e}function Vt(e,t,r){for(let a=0;a<e.length;a++){const o=e[a];o.at>t&&o.at<r&&(Ze(e,o),a--)}}function Tt(e,t,r,a,o,c){Vt(e,o,c);for(let s=0;s<t.length;s++)e.push({value:t[s],at:Ue(o,c,a[s]),easing:je(r,s)})}function Et(e,t){for(let r=0;r<e.length;r++)e[r]=e[r]/(t+1)}function It(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Rt="easeInOut";function Pt(e,{defaultTransition:t={},...r}={},a,o){const c=t.duration||.3,s=new Map,l=new Map,h={},g=new Map;let f=0,u=0,V=0;for(let S=0;S<e.length;S++){const w=e[S];if(typeof w=="string"){g.set(w,u);continue}else if(!Array.isArray(w)){g.set(w.name,me(u,w.at,f,g));continue}let[k,_,y={}]=w;y.at!==void 0&&(u=me(u,y.at,f,g));let b=0;const d=(m,j,A,R=0,P=0)=>{const v=Ct(m),{delay:U=0,times:M=Ye(v),type:Z="keyframes",repeat:F,repeatType:Jn,repeatDelay:Qn=0,...Ke}=j;let{ease:T=t.ease||"easeOut",duration:K}=j;const q=typeof U=="function"?U(R,P):U,ee=v.length,te=Qe(Z)?Z:o?.[Z||"keyframes"];if(ee<=2&&te){let C=100;if(ee===2&&Ft(v)){const z=v[1]-v[0];C=Math.abs(z)}const D={...Ke};K!==void 0&&(D.duration=Xe(K));const G=$e(D,C,te);T=G.ease,K=G.duration}K??(K=c);const ne=u+q;M.length===1&&M[0]===0&&(M[1]=1);const re=M.length-v.length;if(re>0&&Je(M,re),v.length===1&&v.unshift(null),F){K=Kt(K,F);const C=[...v],D=[...M];T=Array.isArray(T)?[...T]:[T];const G=[...T];for(let z=0;z<F;z++){v.push(...C);for(let L=0;L<C.length;L++)M.push(D[L]+(z+1)),T.push(L===0?"linear":je(G,L-1))}Et(M,F)}const ae=ne+K;Tt(A,v,T,M,ne,ae),b=Math.max(q+K,b),V=Math.max(ae,V)};if(ve(k)){const m=ue(k,l);d(_,y,pe("default",m))}else{const m=Se(k,_,a,h),j=m.length;for(let A=0;A<j;A++){_=_,y=y;const R=m[A],P=ue(R,l);for(const v in _)d(_[v],zt(y,v),pe(v,P),A,j)}}f=u,u+=b}return l.forEach((S,w)=>{for(const k in S){const _=S[k];_.sort(It);const y=[],b=[],d=[];for(let j=0;j<_.length;j++){const{at:A,value:R,easing:P}=_[j];y.push(R),b.push(qe(0,V,A)),d.push(P||"easeOut")}b[0]!==0&&(b.unshift(0),y.unshift(y[0]),d.unshift(Rt)),b[b.length-1]!==1&&(b.push(1),y.push(null)),s.has(w)||s.set(w,{keyframes:{},transition:{}});const m=s.get(w);m.keyframes[k]=y,m.transition[k]={...t,duration:V,ease:d,times:b,...r}}}),s}function ue(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function pe(e,t){return t[e]||(t[e]=[]),t[e]}function Ct(e){return Array.isArray(e)?e:[e]}function zt(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Lt=e=>typeof e=="number",Ft=e=>e.every(Lt);function Dt(e,t){return e in t}class Gt extends et{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,r){if(Dt(r,t)){const a=t[r];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(t,r){delete r.output[t]}measureInstanceViewportBox(){return tt()}build(t,r){Object.assign(t.output,r)}renderInstance(t,{output:r}){Object.assign(t,r)}sortInstanceNodePosition(){return 0}}function Ot(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=nt(e)&&!rt(e)?new at(t):new ot(t);r.mount(e),N.set(e,r)}function Ht(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Gt(t);r.mount(e),N.set(e,r)}function Bt(e,t){return ve(e)||typeof e=="number"||typeof e=="string"&&!X(t)}function Ae(e,t,r,a){const o=[];if(Bt(e,t))o.push(it(e,X(t)&&t.default||t,r&&(r.default||r)));else{const c=Se(e,t,a),s=c.length;for(let l=0;l<s;l++){const h=c[l],g=h instanceof Element?Ot:Ht;N.has(h)||g(h);const f=N.get(h),u={...r};"delay"in u&&typeof u.delay=="function"&&(u.delay=u.delay(l,s)),o.push(...st(f,{...t,transition:u},{}))}}return o}function Wt(e,t,r){const a=[];return Pt(e,t,r,{spring:ct}).forEach(({keyframes:c,transition:s},l)=>{a.push(...Ae(l,c,s))}),a}function Nt(e){return Array.isArray(e)&&e.some(Array.isArray)}function Ut(e){function t(r,a,o){let c=[],s;if(Nt(r))c=Wt(r,a,e);else{const{onComplete:h,...g}=o||{};typeof h=="function"&&(s=h),c=Ae(r,a,g,e)}const l=new St(c);return s&&l.finished.then(s),l}return t}const Zt=Ut(),Yt=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,$t=i.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`,Jt=i.div`
  width: ${e=>e.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`,Qt=i.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;function Xt(){const{progress:e}=Ve();return n.jsx(xe,{center:!0,children:n.jsxs(Yt,{children:[n.jsxs(Qt,{children:[Math.round(e),"% Loaded"]}),n.jsx($t,{children:n.jsx(Jt,{progress:e})})]})})}const I=3.08,ke=(e,t,r)=>{const a=(90-e)*(Math.PI/180),o=(t+180)*(Math.PI/180),c=-(r*Math.sin(a)*Math.cos(o)),s=r*Math.sin(a)*Math.sin(o),l=r*Math.cos(a);return new Pe(c,l,s)},he=[{name:"Seoul",lat:37.5665,lon:126.978},{name:"Berlin",lat:52.52,lon:13.405},{name:"Wuhu",lat:31.33,lon:118.38},{name:"Hong Kong",lat:22.3193,lon:114.1694}];function qt({position:e,name:t}){const[r,a]=p.useState(!1),o=p.useRef();return ye((c,s)=>{o.current&&(r?o.current.scale.lerp({x:1.2,y:1.2,z:1.2},s*3):o.current.scale.x>1.01&&o.current.scale.lerp({x:1,y:1,z:1},s*5))}),n.jsxs("mesh",{position:e,ref:o,onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[n.jsx("sphereGeometry",{args:[.055,16,16]}),n.jsx("meshBasicMaterial",{color:"gold",toneMapped:!1}),n.jsx(xe,{as:"div",distanceFactor:10,style:{transition:"opacity 0.2s",opacity:r?1:0,pointerEvents:"none",padding:"5px 10px",background:"rgba(0, 0, 0, 0.7)",color:"white",borderRadius:"5px",fontSize:"14px",whiteSpace:"nowrap",transform:"translate(-50%, -150%)"},children:t})]})}function en({points:e}){const t=p.useMemo(()=>e.map(r=>({...r,position:ke(r.lat,r.lon,I+.02)})),[e]);return n.jsx("group",{children:t.map(r=>n.jsx(qt,{position:r.position,name:r.name},r.name))})}function tn({points:e}){const t=p.useMemo(()=>{const r=[],a=I+.05,o=e.map(c=>ke(c.lat,c.lon,a));for(let c=0;c<o.length;c++){const s=o[c],l=o[(c+1)%o.length],g=1.05+s.distanceTo(l)/(I*2)*.25,f=s.clone().lerp(l,.5).normalize().multiplyScalar(I*g);r.push([s,f,l])}return r},[e]);return n.jsx("group",{children:t.map((r,a)=>n.jsx(Re,{points:r,color:"cyan",lineWidth:2,transparent:!0,opacity:.7},a))})}const nn=e=>{const{ambientIntensity:t=1,directionalIntensity:r=12,metalness:a=.2,roughness:o=.5,emissiveIntensity:c=2.5,cloudsOpacity:s=.25}=e,[l,h,g]=Te(["/earth-day.jpg","/earth-night.jpg","/earth-clouds.jpg"]),f=p.useRef(),u=p.useRef();return ye(({clock:V},S)=>{f.current&&(f.current.rotation.y+=S*.05),u.current&&(u.current.rotation.y+=S*.06)}),n.jsxs(n.Fragment,{children:[n.jsx("ambientLight",{intensity:t}),n.jsx("directionalLight",{position:[10,10,5],intensity:r}),n.jsx(Ee,{radius:300,depth:50,count:2e3,factor:4,saturation:0,fade:!0,speed:.5}),n.jsxs("group",{ref:f,children:[n.jsx(oe,{args:[I,48,48],children:n.jsx("meshStandardMaterial",{map:l,metalness:a,roughness:o,emissiveMap:h,emissive:"#ffffff",emissiveIntensity:c})}),n.jsx(oe,{ref:u,args:[I+.05,24,24],castShadow:!1,receiveShadow:!1,children:n.jsx("meshStandardMaterial",{map:g,transparent:!0,opacity:s,blending:Ie})}),n.jsx(en,{points:he}),n.jsx(tn,{points:he})]})]})},rn=i.div`
  width: 100%;
  overflow-x: hidden;
`,an=i.section`
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
`,on=i(x.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
  }
`,sn=i(x.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,cn=i(x.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: -0.02em;
`,ln=i(x.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`,dn=i(x.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,mn=i(x.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,ge=i.a`
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
`,J=i(x.button)`
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
`,un=i(J)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,pn=i(x.div)`
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
`,hn=i.section`
  background: var(--card-bg);
  padding: 5rem 5%;
  border-bottom: 1px solid var(--border-color);
`,gn=i.div`
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
`,fn=i(x.div)`
  text-align: center;
  padding: 1.5rem;
`,xn=i.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;

  span {
    color: var(--accent-amber);
  }
`,yn=i.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`,bn=i(Q)`
  background: var(--background-color);
  padding: 7rem 5%;
`,B=i(x.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`,W=i.span`
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
`,vn=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Me=i(x.div)`
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
`,jn=i.div`
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
`,wn=i.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`,_n=i.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,Sn=i.div`
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
`,An=i(Q)`
  background: var(--card-bg);
  padding: 7rem 5%;
`,kn=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Mn=i(x.div)`
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
`,Kn=i.div`
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
`,Vn=i.div`
  flex: 1;
`,Tn=i.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,En=i.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,In=i(x.div)`
  text-align: center;
`,Rn=i(Q)`
  background: var(--background-color);
  padding: 7rem 5%;
`,Pn=i.div`
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
`,Cn=i(x.div)`
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
`,zn=i.div`
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
`,Ln=i.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Fn=i.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Dn=i.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,Gn=i.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,On=i(x.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Hn=i.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);
`,Bn=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Wn=i(x.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Nn=i.div`
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
`,Un=i.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Zn=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Yn=i(x.img)`
  height: 36px;
  max-width: 100px;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
  will-change: transform;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`,$n=({value:e,suffix:t=""})=>{const r=p.useRef(null),a=E(r,{once:!0}),o=we(0),c=Mt(o,h=>Math.round(h)),[s,l]=p.useState(0);return p.useEffect(()=>{if(a){const h=Zt(o,e,{duration:2,ease:"easeOut"}),g=c.on("change",f=>{l(f)});return()=>{h.stop(),g()}}},[a,e,o,c]),n.jsxs(xn,{ref:r,children:[s.toLocaleString(),n.jsx("span",{children:t})]})},nr=()=>{const{t:e}=jt(),t=p.useRef(null),r=p.useRef(null),a=p.useRef(null),o=p.useRef(null),c=p.useRef(null),s=p.useRef(null),l=E(r,{once:!0,margin:"-50px"}),h=E(a,{once:!0,margin:"-50px"}),g=E(o,{once:!0,margin:"-50px"}),f=E(s,{once:!0,margin:"-50px"}),u=E(c,{once:!0,margin:"-50px"}),V=[{icon:n.jsx(gt,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:n.jsx(ce,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:n.jsx(ft,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:n.jsx(xt,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],S=[{icon:n.jsx(ce,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc"},{icon:n.jsx(pt,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc"},{icon:n.jsx(ht,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc"}],w=[{icon:n.jsx(yt,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:n.jsx(bt,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:n.jsx(vt,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],k=[{value:2140,suffix:"㎡",labelKey:"stats_warehouse_space"},{value:3e3,suffix:"+",labelKey:"stats_pallet_capacity"},{value:15,suffix:"+",labelKey:"stats_years_experience"},{value:99,suffix:"%",labelKey:"stats_customer_satisfaction"}],_=[{industry:e("partners_industry_automotive")||"자동차",icon:n.jsx(lt,{}),partners:[{name:"Hyundai",logo:"/logos/Hyundai_Motor_Company_logo.svg.png"},{name:"Kia",logo:"/logos/KIA_logo3.svg.png"},{name:"Continental",logo:"/logos/continental_new.png"},{name:"Kanavi Mobility",logo:"/logos/kanavi_new.png"}]},{industry:e("partners_industry_electronics")||"전자 / 디스플레이",icon:n.jsx(dt,{}),partners:[{name:"LG Display",logo:"/logos/lg_new.png"},{name:"LG Electronics",logo:"/logos/lg_new.png"},{name:"Humax",logo:"/logos/humax_new.png"}]}],y=p.useRef(null),b=E(y,{once:!0,margin:"-50px"});return n.jsxs(rn,{children:[n.jsxs(an,{ref:r,children:[n.jsxs(on,{initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{},transition:{duration:.6},children:[n.jsx(sn,{initial:{opacity:0},animate:l?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),n.jsx(cn,{initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:e("hero_title")}),n.jsx(ln,{initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:e("hero_subtitle")}),n.jsxs(dn,{initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[n.jsx(O,{to:"/about",children:n.jsxs(J,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",n.jsx(ie,{})]})}),n.jsx(O,{to:"/contact",children:n.jsx(un,{whileHover:{scale:1.02},whileTap:{scale:.98},children:e("nav_contact")})})]}),n.jsxs(mn,{initial:{opacity:0},animate:l?{opacity:1}:{},transition:{delay:.7,duration:.5},children:[n.jsxs(ge,{href:"tel:010-3340-6877",children:[n.jsx(mt,{})," 010-3340-6877"]}),n.jsxs(ge,{href:"mailto:cgpark@kmtechn.com",children:[n.jsx(ut,{})," cgpark@kmtechn.com"]})]})]}),n.jsx(pn,{ref:t,initial:{opacity:0,x:30},animate:l?{opacity:1,x:0}:{},transition:{delay:.3,duration:.7},children:n.jsxs(Ce,{camera:{position:[0,0,8],fov:50},dpr:[1,1.5],performance:{min:.5},children:[n.jsx(p.Suspense,{fallback:n.jsx(Xt,{}),children:n.jsx(nn,{})}),n.jsx(ze,{enableZoom:!1,enablePan:!1,autoRotate:!0,autoRotateSpeed:.4,enableDamping:!0,dampingFactor:.05,mouseButtons:{LEFT:Y.ROTATE,MIDDLE:Y.DOLLY,RIGHT:Y.PAN}})]})})]}),n.jsx(hn,{ref:a,children:n.jsx(gn,{children:k.map((d,m)=>n.jsxs(fn,{initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx($n,{value:d.value,suffix:d.suffix}),n.jsx(yn,{children:e(d.labelKey)})]},m))})}),n.jsxs(bn,{ref:o,children:[n.jsxs(B,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(W,{children:"Our Services"}),n.jsx(H,{children:e("home_services_title")}),n.jsx(fe,{children:e("home_services_3pl_desc")})]}),n.jsx(vn,{children:S.map((d,m)=>n.jsx(O,{to:"/business",style:{textDecoration:"none"},children:n.jsxs(Me,{initial:{opacity:0,y:30},animate:g?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(jn,{children:d.icon}),n.jsx(wn,{children:e(d.titleKey)}),n.jsx(_n,{children:e(d.descKey)}),n.jsxs(Sn,{children:[e("home_services_button")," ",n.jsx(se,{})]})]})},d.titleKey))})]}),n.jsxs(Rn,{ref:s,children:[n.jsxs(B,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(W,{children:"How It Works"}),n.jsx(H,{children:e("process_home_title")}),n.jsx(fe,{children:e("process_home_desc")})]}),n.jsx(Pn,{children:V.map((d,m)=>n.jsxs(Le.Fragment,{children:[n.jsxs(Cn,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[n.jsx(zn,{children:d.icon}),n.jsxs(Gn,{children:[n.jsxs(Ln,{children:["STEP ",m+1]}),n.jsx(Fn,{children:e(d.titleKey)}),n.jsx(Dn,{children:e(d.descKey)})]})]}),m<V.length-1&&n.jsx(On,{initial:{opacity:0},animate:f?{opacity:1}:{},transition:{delay:m*.15+.1,duration:.3},children:n.jsx(se,{})})]},d.titleKey))})]}),n.jsxs(An,{ref:c,children:[n.jsxs(B,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(W,{children:"Why Choose Us"}),n.jsx(H,{children:e("home_strengths_title")})]}),n.jsx(kn,{children:w.map((d,m)=>n.jsxs(Mn,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{delay:m*.1,duration:.5},children:[n.jsx(Kn,{children:d.icon}),n.jsxs(Vn,{children:[n.jsx(Tn,{children:e(d.titleKey)}),n.jsx(En,{children:e(d.descKey)})]})]},m))}),n.jsx(In,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:n.jsx(O,{to:"/about",children:n.jsxs(J,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("hero_button")," ",n.jsx(ie,{})]})})})]}),n.jsxs(Hn,{ref:y,children:[n.jsxs(B,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{duration:.5},children:[n.jsx(W,{children:"Trusted By"}),n.jsx(H,{children:e("core_customers_title")})]}),n.jsx(Bn,{children:_.map((d,m)=>n.jsxs(Wn,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{delay:m*.15,duration:.5},children:[n.jsxs(Nn,{children:[d.icon,n.jsx(Un,{children:d.industry})]}),n.jsx(Zn,{children:d.partners.map((j,A)=>n.jsx(Yn,{src:j.logo,alt:`${j.name} logo`,initial:{opacity:0},animate:b?{opacity:.7}:{},transition:{delay:m*.15+A*.05,duration:.4}},j.name))})]},d.industry))})]})]})};export{nr as default};
//# sourceMappingURL=HomePage-DMaOd24z.js.map
