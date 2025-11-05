import{d as D,B as t,P as _,b as y,a as w,c as k,T as n,X as g,q as O,Z}from"./index-0D1_OiQj.js";import{a as M,m as N,y as z,k as P,B as T,H as X,z as F}from"./index-S6VmQXuv-BDhuIUpk.js";class b{constructor(r=0,a="Network Error"){this.status=r,this.text=a}}const Y=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Y()},j=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},A=(e,r="https://api.emailjs.com")=>{if(!e)return;const a=j(e);i.publicKey=a.publicKey,i.blockHeadless=a.blockHeadless,i.storageProvider=a.storageProvider,i.blockList=a.blockList,i.limitRate=a.limitRate,i.origin=a.origin||r},R=async(e,r,a={})=>{const s=await fetch(i.origin+e,{method:"POST",headers:a,body:r}),o=await s.text(),c=new b(s.status,o);if(s.ok)return c;throw c},B=(e,r,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},J=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},I=e=>e.webdriver||!e.languages||e.languages.length===0,K=()=>new b(451,"Unavailable For Headless Browser"),U=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},W=e=>!e.list?.length||!e.watchVariable,G=(e,r)=>e instanceof FormData?e.get(r):e[r],V=(e,r)=>{if(W(e))return!1;U(e.list,e.watchVariable);const a=G(r,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},$=()=>new b(403,"Forbidden"),Q=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},ee=async(e,r,a)=>{const s=Number(await a.get(e)||0);return r-Date.now()+s},C=async(e,r,a)=>{if(!r.throttle||!a)return!1;Q(r.throttle,r.id);const s=r.id||e;return await ee(s,r.throttle,a)>0?!0:(await a.set(s,Date.now().toString()),!1)},E=()=>new b(429,"Too Many Requests"),te=async(e,r,a,s)=>{const o=j(s),c=o.publicKey||i.publicKey,h=o.blockHeadless||i.blockHeadless,l=o.storageProvider||i.storageProvider,d={...i.blockList,...o.blockList},u={...i.limitRate,...o.limitRate};return h&&I(navigator)?Promise.reject(K()):(B(c,e,r),J(a),a&&V(d,a)?Promise.reject($()):await C(location.pathname,u,l)?Promise.reject(E()):R("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:e,template_id:r,template_params:a}),{"Content-type":"application/json"}))},re=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ae=e=>typeof e=="string"?document.querySelector(e):e,se=async(e,r,a,s)=>{const o=j(s),c=o.publicKey||i.publicKey,h=o.blockHeadless||i.blockHeadless,l=i.storageProvider||o.storageProvider,d={...i.blockList,...o.blockList},u={...i.limitRate,...o.limitRate};if(h&&I(navigator))return Promise.reject(K());const f=ae(a);B(c,e,r),re(f);const m=new FormData(f);return V(d,m)?Promise.reject($()):await C(location.pathname,u,l)?Promise.reject(E()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",r),m.append("user_id",c),R("/api/v1.0/email/send-form",m))},S={init:A,send:te,sendForm:se,EmailJSResponseStatus:b},oe=n(F.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,H=n.input`
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
`,ce=n(F.div)`
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
`,de=()=>{const{t:e}=D(),[r,a]=g.useState({name:"",email:"",message:""}),[s,o]=g.useState("idle");g.useEffect(()=>{S.init("여기에_Public_Key_붙여넣기")},[]);const c=l=>{const{name:d,value:u}=l.target;a(f=>({...f,[d]:u}))},h=l=>{l.preventDefault(),o("submitting"),S.send("여기에_Service_ID_붙여넣기","여기에_Template_ID_붙여넣기",{from_name:r.name,from_email:r.email,message:r.message}).then(()=>{o("success"),a({name:"",email:"",message:""}),setTimeout(()=>{o("idle")},3e3)}).catch(d=>{console.error("Failed to send email:",d),o("error"),setTimeout(()=>o("idle"),3e3)})};return t.jsx(X,{mode:"wait",children:s==="success"||s==="error"?t.jsxs(ce,{status:s,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[t.jsx(le,{children:s==="success"?t.jsxs(t.Fragment,{children:[t.jsx(O,{size:28})," ",e("contact_form_success_title")]}):t.jsxs(t.Fragment,{children:[t.jsx(Z,{size:28})," ",e("contact_form_error_title")||"Error"]})}),t.jsx("p",{children:s==="success"?e("contact_form_success_desc"):e("contact_form_error_desc")||"Failed to send message"})]},"status"):t.jsxs(oe,{onSubmit:h,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:[t.jsx(H,{type:"text",name:"name",placeholder:e("contact_form_name"),value:r.name,onChange:c,required:!0,disabled:s==="submitting"}),t.jsx(H,{type:"email",name:"email",placeholder:e("contact_form_email"),value:r.email,onChange:c,required:!0,disabled:s==="submitting"}),t.jsx(ie,{name:"message",placeholder:e("contact_form_message"),value:r.message,onChange:c,required:!0,disabled:s==="submitting"}),t.jsx(ne,{type:"submit",disabled:s==="submitting",children:e(s==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},me=n.div`
  color: var(--text-color);
`,L=n.div`
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
`,p=n.div`
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
`,q=n.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,pe=n.div`
  margin-top: 4rem;
`,be=()=>{const{t:e}=D(),r=[37.377156,127.113823],a=[36.89699,127.146803];return t.jsx(me,{children:t.jsxs(M,{children:[t.jsx(N,{children:e("contact_title")}),t.jsxs(L,{children:[t.jsxs(x,{children:[t.jsx(v,{children:e("contact_form_title")}),t.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:e("contact_form_desc")}),t.jsx(de,{})]}),t.jsx("div",{children:t.jsxs(x,{children:[t.jsx(v,{children:e("contact_office_title")}),t.jsxs(p,{children:[t.jsx(z,{size:20}),t.jsx("span",{children:e("contact_office_address")})]}),t.jsxs(p,{children:[t.jsx(P,{size:20}),t.jsx("span",{children:e("contact_office_phone")})]}),t.jsxs(p,{children:[t.jsx(T,{size:20}),t.jsx("span",{children:e("contact_office_email")})]}),t.jsx(q,{children:t.jsxs(_,{center:r,zoom:15,scrollWheelZoom:!1,children:[t.jsx(y,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(w,{position:r,children:t.jsx(k,{children:e("contact_office_title")})})]})})]})})]}),t.jsx(pe,{children:t.jsxs(L,{children:[t.jsx(q,{style:{marginTop:0,minHeight:"400px"},children:t.jsxs(_,{center:a,zoom:15,scrollWheelZoom:!1,children:[t.jsx(y,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(w,{position:a,children:t.jsx(k,{children:e("contact_warehouse_title")})})]})}),t.jsxs(x,{children:[t.jsx(v,{children:e("contact_warehouse_title")}),t.jsxs(p,{children:[t.jsx(z,{size:20}),t.jsx("span",{children:e("contact_warehouse_address")})]}),t.jsxs(p,{children:[t.jsx(P,{size:20}),t.jsx("span",{children:e("contact_warehouse_phone")})]}),t.jsxs(p,{children:[t.jsx(T,{size:20}),t.jsx("span",{children:e("contact_warehouse_email")})]})]})]})})]})})};export{be as default};
