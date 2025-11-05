import{r as g,j as t}from"./three-bundle-DMG25_7Q.js";import{d as n}from"./index-2vCZ8Hnw.js";import{g as A,S as O,y,z as _,A as w}from"./index-S6VmQXuv.js";import{u as R}from"./i18n-DaXBaqKC.js";import{A as N,m as H}from"./animation-BcFAGHWn.js";import{C as W,b as J}from"./icons-DtnRUAqg.js";import{M as k,T as P,a as T,P as S}from"./map-B8zYJnfq.js";class b{constructor(r=0,s="Network Error"){this.status=r,this.text=s}}const Y=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Y()},j=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Z=(e,r="https://api.emailjs.com")=>{if(!e)return;const s=j(e);i.publicKey=s.publicKey,i.blockHeadless=s.blockHeadless,i.storageProvider=s.storageProvider,i.blockList=s.blockList,i.limitRate=s.limitRate,i.origin=s.origin||r},E=async(e,r,s={})=>{const o=await fetch(i.origin+e,{method:"POST",headers:s,body:r}),a=await o.text(),c=new b(o.status,a);if(o.ok)return c;throw c},K=(e,r,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},$=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},M=e=>e.webdriver||!e.languages||e.languages.length===0,I=()=>new b(451,"Unavailable For Headless Browser"),G=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},U=e=>!e.list?.length||!e.watchVariable,Q=(e,r)=>e instanceof FormData?e.get(r):e[r],V=(e,r)=>{if(U(e))return!1;G(e.list,e.watchVariable);const s=Q(r,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},B=()=>new b(403,"Forbidden"),X=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},ee=async(e,r,s)=>{const o=Number(await s.get(e)||0);return r-Date.now()+o},q=async(e,r,s)=>{if(!r.throttle||!s)return!1;X(r.throttle,r.id);const o=r.id||e;return await ee(o,r.throttle,s)>0?!0:(await s.set(o,Date.now().toString()),!1)},D=()=>new b(429,"Too Many Requests"),te=async(e,r,s,o)=>{const a=j(o),c=a.publicKey||i.publicKey,f=a.blockHeadless||i.blockHeadless,l=a.storageProvider||i.storageProvider,m={...i.blockList,...a.blockList},u={...i.limitRate,...a.limitRate};return f&&M(navigator)?Promise.reject(I()):(K(c,e,r),$(s),s&&V(m,s)?Promise.reject(B()):await q(location.pathname,u,l)?Promise.reject(D()):E("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:e,template_id:r,template_params:s}),{"Content-type":"application/json"}))},re=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},se=e=>typeof e=="string"?document.querySelector(e):e,oe=async(e,r,s,o)=>{const a=j(o),c=a.publicKey||i.publicKey,f=a.blockHeadless||i.blockHeadless,l=i.storageProvider||a.storageProvider,m={...i.blockList,...a.blockList},u={...i.limitRate,...a.limitRate};if(f&&M(navigator))return Promise.reject(I());const d=se(s);K(c,e,r),re(d);const p=new FormData(d);return V(m,p)?Promise.reject(B()):await q(location.pathname,u,l)?Promise.reject(D()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",r),p.append("user_id",c),E("/api/v1.0/email/send-form",p))},z={init:Z,send:te,sendForm:oe,EmailJSResponseStatus:b},ae=n(H.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,L=n.input`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-base);
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: var(--accent-amber);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
    border-color: var(--accent-amber);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ie=n.textarea`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-base);
  line-height: var(--line-height-relaxed);
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: var(--accent-amber);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
    border-color: var(--accent-amber);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ne=n.button`
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  background-color: var(--accent-amber);
  color: #121212;
  font-size: var(--font-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent-amber);
  align-self: flex-start;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--accent-amber);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ce=n(H.div)`
  background-color: var(--card-bg);
  border: 1px solid ${e=>e.status==="success"?"#10b981":"#ef4444"};
  color: ${e=>e.status==="success"?"#10b981":"#ef4444"};
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
`,le=n.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,de=()=>{const{t:e}=R(),[r,s]=g.useState({name:"",email:"",message:""}),[o,a]=g.useState("idle");g.useEffect(()=>{z.init("여기에_Public_Key_붙여넣기")},[]);const c=l=>{const{name:m,value:u}=l.target;s(d=>({...d,[m]:u}))},f=l=>{l.preventDefault(),a("submitting"),z.send("여기에_Service_ID_붙여넣기","여기에_Template_ID_붙여넣기",{from_name:r.name,from_email:r.email,message:r.message}).then(()=>{a("success"),s({name:"",email:"",message:""}),setTimeout(()=>{a("idle")},3e3)}).catch(d=>{console.error("Failed to send email:",d),a("error"),setTimeout(()=>a("idle"),3e3)})};return t.jsx(N,{mode:"wait",children:o==="success"||o==="error"?t.jsxs(ce,{status:o,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[t.jsx(le,{children:o==="success"?t.jsxs(t.Fragment,{children:[t.jsx(W,{size:28})," ",e("contact_form_success_title")]}):t.jsxs(t.Fragment,{children:[t.jsx(J,{size:28})," ",e("contact_form_error_title")||"Error"]})}),t.jsx("p",{children:o==="success"?e("contact_form_success_desc"):e("contact_form_error_desc")||"Failed to send message"})]},"status"):t.jsxs(ae,{onSubmit:f,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:[t.jsx(L,{type:"text",name:"name",placeholder:e("contact_form_name"),value:r.name,onChange:c,required:!0,disabled:o==="submitting"}),t.jsx(L,{type:"email",name:"email",placeholder:e("contact_form_email"),value:r.email,onChange:c,required:!0,disabled:o==="submitting"}),t.jsx(ie,{name:"message",placeholder:e("contact_form_message"),value:r.message,onChange:c,required:!0,disabled:o==="submitting"}),t.jsx(ne,{type:"submit",disabled:o==="submitting",children:e(o==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},me=n.div`
  color: var(--text-color);
`,C=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,x=n.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`,v=n.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`,h=n.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    margin-top: 5px;
    color: var(--accent-amber);
  }
`,F=n.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,ue=n.div`
  margin-top: 4rem;
`,je=()=>{const{t:e}=R(),r=[37.377156,127.113823],s=[36.89699,127.146803];return t.jsx(me,{children:t.jsxs(A,{children:[t.jsx(O,{children:e("contact_title")}),t.jsxs(C,{children:[t.jsxs(x,{children:[t.jsx(v,{children:e("contact_form_title")}),t.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:e("contact_form_desc")}),t.jsx(de,{})]}),t.jsx("div",{children:t.jsxs(x,{children:[t.jsx(v,{children:e("contact_office_title")}),t.jsxs(h,{children:[t.jsx(y,{size:20}),t.jsx("span",{children:e("contact_office_address")})]}),t.jsxs(h,{children:[t.jsx(_,{size:20}),t.jsx("span",{children:e("contact_office_phone")})]}),t.jsxs(h,{children:[t.jsx(w,{size:20}),t.jsx("span",{children:e("contact_office_email")})]}),t.jsx(F,{children:t.jsxs(k,{center:r,zoom:15,scrollWheelZoom:!1,children:[t.jsx(P,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(T,{position:r,children:t.jsx(S,{children:e("contact_office_title")})})]})})]})})]}),t.jsx(ue,{children:t.jsxs(C,{children:[t.jsx(F,{style:{marginTop:0,minHeight:"400px"},children:t.jsxs(k,{center:s,zoom:15,scrollWheelZoom:!1,children:[t.jsx(P,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(T,{position:s,children:t.jsx(S,{children:e("contact_warehouse_title")})})]})}),t.jsxs(x,{children:[t.jsx(v,{children:e("contact_warehouse_title")}),t.jsxs(h,{children:[t.jsx(y,{size:20}),t.jsx("span",{children:e("contact_warehouse_address")})]}),t.jsxs(h,{children:[t.jsx(_,{size:20}),t.jsx("span",{children:e("contact_warehouse_phone")})]}),t.jsxs(h,{children:[t.jsx(w,{size:20}),t.jsx("span",{children:e("contact_warehouse_email")})]})]})]})})]})})};export{je as default};
