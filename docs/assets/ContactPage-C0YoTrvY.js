import{j as r}from"./three-vendor-uCD6w5gt.js";import{b as i,R as I,e as Q}from"./react-vendor-VEkyeZpm.js";import{_ as q,$ as L,a0 as ee,z as d,J as G,a1 as te,W as ne,G as ae,a2 as F,E as P}from"./index-C5R8fBgL.js";import{u as U}from"./i18n-vendor-Dc1ZlYGt.js";const re=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_=q("circle-alert",re);const oe=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],se=q("circle-check-big",oe);function V(e,n){const t=i.useRef(n);i.useEffect(function(){n!==t.current&&e.attributionControl!=null&&(t.current!=null&&e.attributionControl.removeAttribution(t.current),n!=null&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}const ie=1;function ce(e){return Object.freeze({__version:ie,map:e})}function le(e,n){return Object.freeze({...e,...n})}const $=i.createContext(null);function Y(){const e=i.use($);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function ue(e){function n(t,a){const{instance:o,context:s}=e(t).current;i.useImperativeHandle(a,()=>o);const{children:c}=t;return c==null?null:I.createElement($,{value:s},c)}return i.forwardRef(n)}function de(e){function n(t,a){const[o,s]=i.useState(!1),{instance:c}=e(t,s).current;i.useImperativeHandle(a,()=>c),i.useEffect(function(){o&&c.update()},[c,o,t.children]);const l=c._contentNode;return l?Q.createPortal(t.children,l):null}return i.forwardRef(n)}function me(e){function n(t,a){const{instance:o}=e(t).current;return i.useImperativeHandle(a,()=>o),null}return i.forwardRef(n)}function J(e,n){const t=i.useRef(void 0);i.useEffect(function(){return n!=null&&e.instance.on(n),t.current=n,function(){t.current!=null&&e.instance.off(t.current),t.current=null}},[e,n])}function S(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function fe(e,n){return function(a,o){const s=Y(),c=e(S(a,s),s);return V(s.map,a.attribution),J(c.current,a.eventHandlers),n(c.current,s,a,o),c}}function M(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function T(e,n){return n==null?function(a,o){const s=i.useRef(void 0);return s.current||(s.current=e(a,o)),s}:function(a,o){const s=i.useRef(void 0);s.current||(s.current=e(a,o));const c=i.useRef(a),{instance:l}=s.current;return i.useEffect(function(){c.current!==a&&(n(l,a,c.current),c.current=a)},[l,a,n]),s}}function pe(e,n){i.useEffect(function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){n.layerContainer?.removeLayer(e.instance),n.map.removeLayer(e.instance)}},[n,e])}function K(e){return function(t){const a=Y(),o=e(S(t,a),a);return V(a.map,t.attribution),J(o.current,t.eventHandlers),pe(o.current,a),o}}function ge(e,n){const t=T(e,n),a=K(t);return ue(a)}function xe(e,n){const t=T(e),a=fe(t,n);return de(a)}function he(e,n){const t=T(e,n),a=K(t);return me(a)}function ve(e,n,t){const{opacity:a,zIndex:o}=n;a!=null&&a!==t.opacity&&e.setOpacity(a),o!=null&&o!==t.zIndex&&e.setZIndex(o)}function be({bounds:e,boundsOptions:n,center:t,children:a,className:o,id:s,placeholder:c,style:l,whenReady:p,zoom:m,...v},b){const[E]=i.useState({className:o,id:s,style:l}),[x,f]=i.useState(null),u=i.useRef(void 0);i.useImperativeHandle(b,()=>x?.map??null,[x]);const h=i.useCallback(j=>{if(j!==null&&!u.current){const y=new L.Map(j,v);u.current=y,t!=null&&m!=null?y.setView(t,m):e!=null&&y.fitBounds(e,n),p!=null&&y.whenReady(p),f(ce(y))}},[]);i.useEffect(()=>()=>{x?.map.remove()},[x]);const g=x?I.createElement($,{value:x},a):c??null;return I.createElement("div",{...E,ref:h},g)}const H=i.forwardRef(be),N=ge(function({position:n,...t},a){const o=new L.Marker(n,t);return M(o,le(a,{overlayContainer:o}))},function(n,t,a){t.position!==a.position&&n.setLatLng(t.position),t.icon!=null&&t.icon!==a.icon&&n.setIcon(t.icon),t.zIndexOffset!=null&&t.zIndexOffset!==a.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),t.opacity!=null&&t.opacity!==a.opacity&&n.setOpacity(t.opacity),n.dragging!=null&&t.draggable!==a.draggable&&(t.draggable===!0?n.dragging.enable():n.dragging.disable())}),A=xe(function(n,t){const a=new L.Popup(n,t.overlayContainer);return M(a,t)},function(n,t,{position:a},o){i.useEffect(function(){const{instance:c}=n;function l(m){m.popup===c&&(c.update(),o(!0))}function p(m){m.popup===c&&o(!1)}return t.map.on({popupopen:l,popupclose:p}),t.overlayContainer==null?(a!=null&&c.setLatLng(a),c.openOn(t.map)):t.overlayContainer.bindPopup(c),function(){t.map.off({popupopen:l,popupclose:p}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(c)}},[n,t,o,a])}),B=he(function({url:n,...t},a){const o=new L.TileLayer(n,S(t,a));return M(o,a)},function(n,t,a){ve(n,t,a);const{url:o}=t;o!=null&&o!==a.url&&n.setUrl(o)}),ye=d(G.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,w=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,z=d.label`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-color);
`,X=te`
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
`,D=d.input`
  ${X}
`,je=d.textarea`
  ${X}
  line-height: var(--line-height-relaxed);
  min-height: 150px;
  resize: vertical;
`,R=d.span`
  font-size: var(--font-sm);
  color: var(--error-color);
  display: flex;
  align-items: center;
  gap: var(--space-1);
`,_e=d.button`
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
`,Ce=d(G.div)`
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
`,Ee=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),we=e=>e.trim().length>=2,ze=e=>e.trim().length>=10,Re=()=>{const{t:e}=U(),[n,t]=i.useState({name:"",email:"",message:""}),[a,o]=i.useState({name:"",email:"",message:""}),[s,c]=i.useState({name:!1,email:!1,message:!1}),[l,p]=i.useState("idle"),m=(f,u)=>{switch(f){case"name":return we(u)?"":e("validation_name_required")||"Name must be at least 2 characters";case"email":return Ee(u)?"":e("validation_email_invalid")||"Please enter a valid email address";case"message":return ze(u)?"":e("validation_message_required")||"Message must be at least 10 characters";default:return""}},v=f=>{const{name:u,value:h}=f.target;t(g=>({...g,[u]:h})),s[u]&&o(g=>({...g,[u]:m(u,h)}))},b=f=>{const{name:u,value:h}=f.target;c(g=>({...g,[u]:!0})),o(g=>({...g,[u]:m(u,h)}))},E=()=>{const f={name:m("name",n.name),email:m("email",n.email),message:m("message",n.message)};return o(f),c({name:!0,email:!0,message:!0}),!Object.values(f).some(u=>u)},x=f=>{if(f.preventDefault(),!E())return;p("submitting");const u="cgpark@kmtechn.com",h=encodeURIComponent(`[KMTech 문의] ${n.name}님의 문의`),g=encodeURIComponent(`보낸 사람: ${n.name}
이메일: ${n.email}

문의 내용:
${n.message}`),j=`mailto:${u}?subject=${h}&body=${g}`;window.location.href=j,p("success"),t({name:"",email:"",message:""}),o({name:"",email:"",message:""}),c({name:!1,email:!1,message:!1}),setTimeout(()=>{p("idle")},3e3)};return r.jsx(ee,{mode:"wait",children:l==="success"||l==="error"?r.jsxs(Ce,{status:l,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[r.jsx(Le,{children:l==="success"?r.jsxs(r.Fragment,{children:[r.jsx(se,{size:28})," ",e("contact_form_success_title")]}):r.jsxs(r.Fragment,{children:[r.jsx(_,{size:28})," ",e("contact_form_error_title")||"Error"]})}),r.jsx("p",{children:l==="success"?e("contact_form_success_desc"):e("contact_form_error_desc")||"Failed to send message"})]},"status"):r.jsxs(ye,{onSubmit:x,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},noValidate:!0,children:[r.jsxs(w,{children:[r.jsx(z,{htmlFor:"contact-name",children:e("contact_form_name")}),r.jsx(D,{id:"contact-name",type:"text",name:"name",placeholder:e("contact_form_name"),value:n.name,onChange:v,onBlur:b,disabled:l==="submitting",$hasError:s.name&&a.name,"aria-invalid":s.name&&a.name?"true":"false","aria-describedby":a.name?"name-error":void 0}),s.name&&a.name&&r.jsxs(R,{id:"name-error",role:"alert",children:[r.jsx(_,{size:14})," ",a.name]})]}),r.jsxs(w,{children:[r.jsx(z,{htmlFor:"contact-email",children:e("contact_form_email")}),r.jsx(D,{id:"contact-email",type:"email",name:"email",placeholder:e("contact_form_email"),value:n.email,onChange:v,onBlur:b,disabled:l==="submitting",$hasError:s.email&&a.email,"aria-invalid":s.email&&a.email?"true":"false","aria-describedby":a.email?"email-error":void 0}),s.email&&a.email&&r.jsxs(R,{id:"email-error",role:"alert",children:[r.jsx(_,{size:14})," ",a.email]})]}),r.jsxs(w,{children:[r.jsx(z,{htmlFor:"contact-message",children:e("contact_form_message")}),r.jsx(je,{id:"contact-message",name:"message",placeholder:e("contact_form_message"),value:n.message,onChange:v,onBlur:b,disabled:l==="submitting",$hasError:s.message&&a.message,"aria-invalid":s.message&&a.message?"true":"false","aria-describedby":a.message?"message-error":void 0}),s.message&&a.message&&r.jsxs(R,{id:"message-error",role:"alert",children:[r.jsx(_,{size:14})," ",a.message]})]}),r.jsx(_e,{type:"submit",disabled:l==="submitting",children:e(l==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},Oe=d.div`
  color: var(--text-color);
`,W=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,O=d.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`,k=d.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`,C=d.div`
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
`,Z=d.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,ke=d.div`
  margin-top: 4rem;
`,Te=()=>{const{t:e}=U(),n=[37.377156,127.113823],t=[36.89699,127.146803];return r.jsx(Oe,{children:r.jsxs(ne,{children:[r.jsx(ae,{children:e("contact_title")}),r.jsxs(W,{children:[r.jsxs(O,{children:[r.jsx(k,{children:e("contact_form_title")}),r.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:e("contact_form_desc")}),r.jsx(Re,{})]}),r.jsx("div",{children:r.jsxs(O,{children:[r.jsx(k,{children:e("contact_office_title")}),r.jsxs(C,{children:[r.jsx(F,{size:20}),r.jsx("span",{children:e("contact_office_address")})]}),r.jsxs(C,{children:[r.jsx(P,{size:20}),r.jsx("span",{children:e("contact_office_email")})]}),r.jsx(Z,{children:r.jsxs(H,{center:n,zoom:15,scrollWheelZoom:!1,children:[r.jsx(B,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.jsx(N,{position:n,children:r.jsx(A,{children:e("contact_office_title")})})]})})]})})]}),r.jsx(ke,{children:r.jsxs(W,{children:[r.jsx(Z,{style:{marginTop:0,minHeight:"400px"},children:r.jsxs(H,{center:t,zoom:15,scrollWheelZoom:!1,children:[r.jsx(B,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.jsx(N,{position:t,children:r.jsx(A,{children:e("contact_warehouse_title")})})]})}),r.jsxs(O,{children:[r.jsx(k,{children:e("contact_warehouse_title")}),r.jsxs(C,{children:[r.jsx(F,{size:20}),r.jsx("span",{children:e("contact_warehouse_address")})]}),r.jsxs(C,{children:[r.jsx(P,{size:20}),r.jsx("span",{children:e("contact_warehouse_email")})]})]})]})})]})})};export{Te as default};
//# sourceMappingURL=ContactPage-C0YoTrvY.js.map
