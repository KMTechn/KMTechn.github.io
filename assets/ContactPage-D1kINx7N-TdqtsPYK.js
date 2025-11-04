import{d as z,B as e,P as p,b as h,a as u,c as f,T as a,X as d,q as H,Z as S}from"./index-CXD94TNx.js";import{a as C,m as T,y as b,k as g,B as v,H as E,z as w}from"./index-BOUopA-f-B1LkvIfe.js";import"./three-bundle-BXl3LOEh.js";const F=a(w.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,j=a.input`
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
`,W=a.textarea`
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
`,Y=a.button`
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
`,Z=a(w.div)`
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
`,D=a.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,P=()=>{const{t:r}=z(),[o,i]=d.useState({name:"",email:"",message:""}),[s,n]=d.useState("idle");d.useEffect(()=>{},[]);const c=l=>{const{name:q,value:B}=l.target;i($=>({...$,[q]:B}))},k=l=>{l.preventDefault(),n("submitting");{console.error("EmailJS credentials not configured"),n("error"),setTimeout(()=>n("idle"),3e3);return}};return e.jsx(E,{mode:"wait",children:s==="success"||s==="error"?e.jsxs(Z,{status:s,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[e.jsx(D,{children:s==="success"?e.jsxs(e.Fragment,{children:[e.jsx(H,{size:28})," ",r("contact_form_success_title")]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{size:28})," ",r("contact_form_error_title")||"Error"]})}),e.jsx("p",{children:s==="success"?r("contact_form_success_desc"):r("contact_form_error_desc")||"Failed to send message"})]},"status"):e.jsxs(F,{onSubmit:k,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:[e.jsx(j,{type:"text",name:"name",placeholder:r("contact_form_name"),value:o.name,onChange:c,required:!0,disabled:s==="submitting"}),e.jsx(j,{type:"email",name:"email",placeholder:r("contact_form_email"),value:o.email,onChange:c,required:!0,disabled:s==="submitting"}),e.jsx(W,{name:"message",placeholder:r("contact_form_message"),value:o.message,onChange:c,required:!0,disabled:s==="submitting"}),e.jsx(Y,{type:"submit",disabled:s==="submitting",children:r(s==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},X=a.div`
  color: var(--text-color);
`,_=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,m=a.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`,x=a.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`,t=a.div`
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
`,y=a.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,I=a.div`
  margin-top: 4rem;
`,R=()=>{const{t:r}=z(),o=[37.377156,127.113823],i=[36.89699,127.146803];return e.jsx(X,{children:e.jsxs(C,{children:[e.jsx(T,{children:r("contact_title")}),e.jsxs(_,{children:[e.jsxs(m,{children:[e.jsx(x,{children:r("contact_form_title")}),e.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:r("contact_form_desc")}),e.jsx(P,{})]}),e.jsx("div",{children:e.jsxs(m,{children:[e.jsx(x,{children:r("contact_office_title")}),e.jsxs(t,{children:[e.jsx(b,{size:20}),e.jsx("span",{children:r("contact_office_address")})]}),e.jsxs(t,{children:[e.jsx(g,{size:20}),e.jsx("span",{children:r("contact_office_phone")})]}),e.jsxs(t,{children:[e.jsx(v,{size:20}),e.jsx("span",{children:r("contact_office_email")})]}),e.jsx(y,{children:e.jsxs(p,{center:o,zoom:15,scrollWheelZoom:!1,children:[e.jsx(h,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(u,{position:o,children:e.jsx(f,{children:r("contact_office_title")})})]})})]})})]}),e.jsx(I,{children:e.jsxs(_,{children:[e.jsx(y,{style:{marginTop:0,minHeight:"400px"},children:e.jsxs(p,{center:i,zoom:15,scrollWheelZoom:!1,children:[e.jsx(h,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(u,{position:i,children:e.jsx(f,{children:r("contact_warehouse_title")})})]})}),e.jsxs(m,{children:[e.jsx(x,{children:r("contact_warehouse_title")}),e.jsxs(t,{children:[e.jsx(b,{size:20}),e.jsx("span",{children:r("contact_warehouse_address")})]}),e.jsxs(t,{children:[e.jsx(g,{size:20}),e.jsx("span",{children:r("contact_warehouse_phone")})]}),e.jsxs(t,{children:[e.jsx(v,{size:20}),e.jsx("span",{children:r("contact_warehouse_email")})]})]})]})})]})})};export{R as default};
