import{j as a}from"./three-vendor-I5c4ovf2.js";import{b as s,R as I,e as ee}from"./react-vendor-BvbQ_S-X.js";import{U as V,W as C,X as te,z as d,D as Y,Y as ne,N as re,B as ae,Z as P,_ as $,$ as H}from"./index-BHbUKxrh.js";import{u as G}from"./i18n-vendor-Bdmv85-f.js";const oe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_=V("circle-alert",oe);const se=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ie=V("circle-check-big",se);function U(e,n){const t=s.useRef(n);s.useEffect(function(){n!==t.current&&e.attributionControl!=null&&(t.current!=null&&e.attributionControl.removeAttribution(t.current),n!=null&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}const ce=1;function le(e){return Object.freeze({__version:ce,map:e})}function ue(e,n){return Object.freeze({...e,...n})}const S=s.createContext(null);function X(){const e=s.use(S);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function de(e){function n(t,r){const{instance:o,context:i}=e(t).current;s.useImperativeHandle(r,()=>o);const{children:c}=t;return c==null?null:I.createElement(S,{value:i},c)}return s.forwardRef(n)}function me(e){function n(t,r){const[o,i]=s.useState(!1),{instance:c}=e(t,i).current;s.useImperativeHandle(r,()=>c),s.useEffect(function(){o&&c.update()},[c,o,t.children]);const l=c._contentNode;return l?ee.createPortal(t.children,l):null}return s.forwardRef(n)}function fe(e){function n(t,r){const{instance:o}=e(t).current;return s.useImperativeHandle(r,()=>o),null}return s.forwardRef(n)}function J(e,n){const t=s.useRef(void 0);s.useEffect(function(){return n!=null&&e.instance.on(n),t.current=n,function(){t.current!=null&&e.instance.off(t.current),t.current=null}},[e,n])}function k(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function pe(e,n){return function(r,o){const i=X(),c=e(k(r,i),i);return U(i.map,r.attribution),J(c.current,r.eventHandlers),n(c.current,i,r,o),c}}function M(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function F(e,n){return n==null?function(r,o){const i=s.useRef(void 0);return i.current||(i.current=e(r,o)),i}:function(r,o){const i=s.useRef(void 0);i.current||(i.current=e(r,o));const c=s.useRef(r),{instance:l}=i.current;return s.useEffect(function(){c.current!==r&&(n(l,r,c.current),c.current=r)},[l,r,n]),i}}function xe(e,n){s.useEffect(function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){n.layerContainer?.removeLayer(e.instance),n.map.removeLayer(e.instance)}},[n,e])}function K(e){return function(t){const r=X(),o=e(k(t,r),r);return U(r.map,t.attribution),J(o.current,t.eventHandlers),xe(o.current,r),o}}function ge(e,n){const t=F(e,n),r=K(t);return de(r)}function he(e,n){const t=F(e),r=pe(t,n);return me(r)}function ve(e,n){const t=F(e,n),r=K(t);return fe(r)}function be(e,n,t){const{opacity:r,zIndex:o}=n;r!=null&&r!==t.opacity&&e.setOpacity(r),o!=null&&o!==t.zIndex&&e.setZIndex(o)}function ye({bounds:e,boundsOptions:n,center:t,children:r,className:o,id:i,placeholder:c,style:l,whenReady:p,zoom:m,...b},y){const[E]=s.useState({className:o,id:i,style:l}),[g,f]=s.useState(null),u=s.useRef(void 0);s.useImperativeHandle(y,()=>g?.map??null,[g]);const h=s.useCallback(T=>{if(T!==null&&!u.current){const j=new C.Map(T,b);u.current=j,t!=null&&m!=null?j.setView(t,m):e!=null&&j.fitBounds(e,n),p!=null&&j.whenReady(p),f(le(j))}},[]);s.useEffect(()=>()=>{g?.map.remove()},[g]);const x=g?I.createElement(S,{value:g},r):c??null;return I.createElement("div",{...E,ref:h},x)}const N=s.forwardRef(ye),B=ge(function({position:n,...t},r){const o=new C.Marker(n,t);return M(o,ue(r,{overlayContainer:o}))},function(n,t,r){t.position!==r.position&&n.setLatLng(t.position),t.icon!=null&&t.icon!==r.icon&&n.setIcon(t.icon),t.zIndexOffset!=null&&t.zIndexOffset!==r.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),t.opacity!=null&&t.opacity!==r.opacity&&n.setOpacity(t.opacity),n.dragging!=null&&t.draggable!==r.draggable&&(t.draggable===!0?n.dragging.enable():n.dragging.disable())}),A=he(function(n,t){const r=new C.Popup(n,t.overlayContainer);return M(r,t)},function(n,t,{position:r},o){s.useEffect(function(){const{instance:c}=n;function l(m){m.popup===c&&(c.update(),o(!0))}function p(m){m.popup===c&&o(!1)}return t.map.on({popupopen:l,popupclose:p}),t.overlayContainer==null?(r!=null&&c.setLatLng(r),c.openOn(t.map)):t.overlayContainer.bindPopup(c),function(){t.map.off({popupopen:l,popupclose:p}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(c)}},[n,t,o,r])}),D=ve(function({url:n,...t},r){const o=new C.TileLayer(n,k(t,r));return M(o,r)},function(n,t,r){be(n,t,r);const{url:o}=t;o!=null&&o!==r.url&&n.setUrl(o)}),je=d(Y.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,L=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,z=d.label`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-color);
`,Q=ne`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid ${({$hasError:e})=>e?"var(--error-color)":"var(--border-color)"};
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-base);
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: ${({$hasError:e})=>e?"var(--error-color)":"var(--accent-amber)"};
  }

  &:focus {
    outline: 2px solid ${({$hasError:e})=>e?"var(--error-color)":"var(--accent-amber)"};
    outline-offset: 2px;
    border-color: ${({$hasError:e})=>e?"var(--error-color)":"var(--accent-amber)"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Z=d.input`
  ${Q}
`,_e=d.textarea`
  ${Q}
  line-height: var(--line-height-relaxed);
  min-height: 150px;
  resize: vertical;
`,w=d.span`
  font-size: var(--font-sm);
  color: var(--error-color);
  display: flex;
  align-items: center;
  gap: var(--space-1);
`,Ce=d.button`
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
`,Ee=d(Y.div)`
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
`,Le=d.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ze=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),we=e=>e.trim().length>=2,Re=e=>e.trim().length>=10,Oe=()=>{const{t:e}=G(),[n,t]=s.useState({name:"",email:"",message:""}),[r,o]=s.useState({name:"",email:"",message:""}),[i,c]=s.useState({name:!1,email:!1,message:!1}),[l,p]=s.useState("idle");s.useEffect(()=>{},[]);const m=(f,u)=>{switch(f){case"name":return we(u)?"":e("validation_name_required")||"Name must be at least 2 characters";case"email":return ze(u)?"":e("validation_email_invalid")||"Please enter a valid email address";case"message":return Re(u)?"":e("validation_message_required")||"Message must be at least 10 characters";default:return""}},b=f=>{const{name:u,value:h}=f.target;t(x=>({...x,[u]:h})),i[u]&&o(x=>({...x,[u]:m(u,h)}))},y=f=>{const{name:u,value:h}=f.target;c(x=>({...x,[u]:!0})),o(x=>({...x,[u]:m(u,h)}))},E=()=>{const f={name:m("name",n.name),email:m("email",n.email),message:m("message",n.message)};return o(f),c({name:!0,email:!0,message:!0}),!Object.values(f).some(u=>u)},g=f=>{if(f.preventDefault(),!!E()){p("submitting");{console.error("EmailJS credentials not configured"),p("error"),setTimeout(()=>p("idle"),3e3);return}}};return a.jsx(te,{mode:"wait",children:l==="success"||l==="error"?a.jsxs(Ee,{status:l,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[a.jsx(Le,{children:l==="success"?a.jsxs(a.Fragment,{children:[a.jsx(ie,{size:28})," ",e("contact_form_success_title")]}):a.jsxs(a.Fragment,{children:[a.jsx(_,{size:28})," ",e("contact_form_error_title")||"Error"]})}),a.jsx("p",{children:l==="success"?e("contact_form_success_desc"):e("contact_form_error_desc")||"Failed to send message"})]},"status"):a.jsxs(je,{onSubmit:g,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},noValidate:!0,children:[a.jsxs(L,{children:[a.jsx(z,{htmlFor:"contact-name",children:e("contact_form_name")}),a.jsx(Z,{id:"contact-name",type:"text",name:"name",placeholder:e("contact_form_name"),value:n.name,onChange:b,onBlur:y,disabled:l==="submitting",$hasError:i.name&&r.name,"aria-invalid":i.name&&r.name?"true":"false","aria-describedby":r.name?"name-error":void 0}),i.name&&r.name&&a.jsxs(w,{id:"name-error",role:"alert",children:[a.jsx(_,{size:14})," ",r.name]})]}),a.jsxs(L,{children:[a.jsx(z,{htmlFor:"contact-email",children:e("contact_form_email")}),a.jsx(Z,{id:"contact-email",type:"email",name:"email",placeholder:e("contact_form_email"),value:n.email,onChange:b,onBlur:y,disabled:l==="submitting",$hasError:i.email&&r.email,"aria-invalid":i.email&&r.email?"true":"false","aria-describedby":r.email?"email-error":void 0}),i.email&&r.email&&a.jsxs(w,{id:"email-error",role:"alert",children:[a.jsx(_,{size:14})," ",r.email]})]}),a.jsxs(L,{children:[a.jsx(z,{htmlFor:"contact-message",children:e("contact_form_message")}),a.jsx(_e,{id:"contact-message",name:"message",placeholder:e("contact_form_message"),value:n.message,onChange:b,onBlur:y,disabled:l==="submitting",$hasError:i.message&&r.message,"aria-invalid":i.message&&r.message?"true":"false","aria-describedby":r.message?"message-error":void 0}),i.message&&r.message&&a.jsxs(w,{id:"message-error",role:"alert",children:[a.jsx(_,{size:14})," ",r.message]})]}),a.jsx(Ce,{type:"submit",disabled:l==="submitting",children:e(l==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},Ie=d.div`
  color: var(--text-color);
`,W=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,R=d.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`,O=d.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`,v=d.div`
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
`,q=d.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,Se=d.div`
  margin-top: 4rem;
`,Pe=()=>{const{t:e}=G(),n=[37.377156,127.113823],t=[36.89699,127.146803];return a.jsx(Ie,{children:a.jsxs(re,{children:[a.jsx(ae,{children:e("contact_title")}),a.jsxs(W,{children:[a.jsxs(R,{children:[a.jsx(O,{children:e("contact_form_title")}),a.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:e("contact_form_desc")}),a.jsx(Oe,{})]}),a.jsx("div",{children:a.jsxs(R,{children:[a.jsx(O,{children:e("contact_office_title")}),a.jsxs(v,{children:[a.jsx(P,{size:20}),a.jsx("span",{children:e("contact_office_address")})]}),a.jsxs(v,{children:[a.jsx($,{size:20}),a.jsx("span",{children:e("contact_office_phone")})]}),a.jsxs(v,{children:[a.jsx(H,{size:20}),a.jsx("span",{children:e("contact_office_email")})]}),a.jsx(q,{children:a.jsxs(N,{center:n,zoom:15,scrollWheelZoom:!1,children:[a.jsx(D,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.jsx(B,{position:n,children:a.jsx(A,{children:e("contact_office_title")})})]})})]})})]}),a.jsx(Se,{children:a.jsxs(W,{children:[a.jsx(q,{style:{marginTop:0,minHeight:"400px"},children:a.jsxs(N,{center:t,zoom:15,scrollWheelZoom:!1,children:[a.jsx(D,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.jsx(B,{position:t,children:a.jsx(A,{children:e("contact_warehouse_title")})})]})}),a.jsxs(R,{children:[a.jsx(O,{children:e("contact_warehouse_title")}),a.jsxs(v,{children:[a.jsx(P,{size:20}),a.jsx("span",{children:e("contact_warehouse_address")})]}),a.jsxs(v,{children:[a.jsx($,{size:20}),a.jsx("span",{children:e("contact_warehouse_phone")})]}),a.jsxs(v,{children:[a.jsx(H,{size:20}),a.jsx("span",{children:e("contact_warehouse_email")})]})]})]})})]})})};export{Pe as default};
//# sourceMappingURL=ContactPage-Crh-zzCU.js.map
