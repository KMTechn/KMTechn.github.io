import{r as d,j as e}from"./three-bundle-BZQHYXQX.js";import{d as t}from"./index-DgT-koti.js";import{g as T,S as P,t as x,u,v as h}from"./index-DM6CndqC.js";import{u as z}from"./i18n-D7fTTtVJ.js";import{A as M,m as w}from"./animation-TgGDt1_j.js";import{C as E,b as A}from"./icons-B3oAhK0a.js";import{M as f,T as g,a as b,P as v}from"./map-CcgMgzDQ.js";const q=t(w.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,j=t.input`
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
`,B=t.textarea`
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
`,D=t.button`
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
`,I=t(w.div)`
  background-color: var(--card-bg);
  border: 1px solid ${r=>r.status==="success"?"#10b981":"#ef4444"};
  color: ${r=>r.status==="success"?"#10b981":"#ef4444"};
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
`,W=t.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,H=()=>{const{t:r}=z(),[a,i]=d.useState({name:"",email:"",message:""}),[o,n]=d.useState("idle");d.useEffect(()=>{},[]);const c=l=>{const{name:S,value:k}=l.target;i(F=>({...F,[S]:k}))},C=l=>{l.preventDefault(),n("submitting");{console.error("EmailJS credentials not configured"),n("error"),setTimeout(()=>n("idle"),3e3);return}};return e.jsx(M,{mode:"wait",children:o==="success"||o==="error"?e.jsxs(I,{status:o,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[e.jsx(W,{children:o==="success"?e.jsxs(e.Fragment,{children:[e.jsx(E,{size:28})," ",r("contact_form_success_title")]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{size:28})," ",r("contact_form_error_title")||"Error"]})}),e.jsx("p",{children:o==="success"?r("contact_form_success_desc"):r("contact_form_error_desc")||"Failed to send message"})]},"status"):e.jsxs(q,{onSubmit:C,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:[e.jsx(j,{type:"text",name:"name",placeholder:r("contact_form_name"),value:a.name,onChange:c,required:!0,disabled:o==="submitting"}),e.jsx(j,{type:"email",name:"email",placeholder:r("contact_form_email"),value:a.email,onChange:c,required:!0,disabled:o==="submitting"}),e.jsx(B,{name:"message",placeholder:r("contact_form_message"),value:a.message,onChange:c,required:!0,disabled:o==="submitting"}),e.jsx(D,{type:"submit",disabled:o==="submitting",children:r(o==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},R=t.div`
  color: var(--text-color);
`,_=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,m=t.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`,p=t.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`,s=t.div`
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
`,y=t.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,Y=t.div`
  margin-top: 4rem;
`,N=()=>{const{t:r}=z(),a=[37.377156,127.113823],i=[36.89699,127.146803];return e.jsx(R,{children:e.jsxs(T,{children:[e.jsx(P,{children:r("contact_title")}),e.jsxs(_,{children:[e.jsxs(m,{children:[e.jsx(p,{children:r("contact_form_title")}),e.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:r("contact_form_desc")}),e.jsx(H,{})]}),e.jsx("div",{children:e.jsxs(m,{children:[e.jsx(p,{children:r("contact_office_title")}),e.jsxs(s,{children:[e.jsx(x,{size:20}),e.jsx("span",{children:r("contact_office_address")})]}),e.jsxs(s,{children:[e.jsx(u,{size:20}),e.jsx("span",{children:r("contact_office_phone")})]}),e.jsxs(s,{children:[e.jsx(h,{size:20}),e.jsx("span",{children:r("contact_office_email")})]}),e.jsx(y,{children:e.jsxs(f,{center:a,zoom:15,scrollWheelZoom:!1,children:[e.jsx(g,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(b,{position:a,children:e.jsx(v,{children:r("contact_office_title")})})]})})]})})]}),e.jsx(Y,{children:e.jsxs(_,{children:[e.jsx(y,{style:{marginTop:0,minHeight:"400px"},children:e.jsxs(f,{center:i,zoom:15,scrollWheelZoom:!1,children:[e.jsx(g,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(b,{position:i,children:e.jsx(v,{children:r("contact_warehouse_title")})})]})}),e.jsxs(m,{children:[e.jsx(p,{children:r("contact_warehouse_title")}),e.jsxs(s,{children:[e.jsx(x,{size:20}),e.jsx("span",{children:r("contact_warehouse_address")})]}),e.jsxs(s,{children:[e.jsx(u,{size:20}),e.jsx("span",{children:r("contact_warehouse_phone")})]}),e.jsxs(s,{children:[e.jsx(h,{size:20}),e.jsx("span",{children:r("contact_warehouse_email")})]})]})]})})]})})};export{N as default};
