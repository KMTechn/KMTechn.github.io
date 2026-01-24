import{j as r}from"./three-vendor-ZYLi6JSD.js";import{b as i,R as I,e as ee}from"./react-vendor-VEkyeZpm.js";import{$ as G,a0 as L,a1 as ne,z as d,J as U,a2 as te,W as ae,G as re,a3 as T,D as P,E as H}from"./index-C8SLKlGW.js";import{u as V}from"./i18n-vendor-BLj2OrmQ.js";const oe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],C=G("circle-alert",oe);const se=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ie=G("circle-check-big",se);function Y(e,t){const n=i.useRef(t);i.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const ce=1;function le(e){return Object.freeze({__version:ce,map:e})}function ue(e,t){return Object.freeze({...e,...t})}const $=i.createContext(null);function J(){const e=i.use($);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function de(e){function t(n,a){const{instance:o,context:s}=e(n).current;i.useImperativeHandle(a,()=>o);const{children:c}=n;return c==null?null:I.createElement($,{value:s},c)}return i.forwardRef(t)}function me(e){function t(n,a){const[o,s]=i.useState(!1),{instance:c}=e(n,s).current;i.useImperativeHandle(a,()=>c),i.useEffect(function(){o&&c.update()},[c,o,n.children]);const l=c._contentNode;return l?ee.createPortal(n.children,l):null}return i.forwardRef(t)}function fe(e){function t(n,a){const{instance:o}=e(n).current;return i.useImperativeHandle(a,()=>o),null}return i.forwardRef(t)}function K(e,t){const n=i.useRef(void 0);i.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function S(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function pe(e,t){return function(a,o){const s=J(),c=e(S(a,s),s);return Y(s.map,a.attribution),K(c.current,a.eventHandlers),t(c.current,s,a,o),c}}function M(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function F(e,t){return t==null?function(a,o){const s=i.useRef(void 0);return s.current||(s.current=e(a,o)),s}:function(a,o){const s=i.useRef(void 0);s.current||(s.current=e(a,o));const c=i.useRef(a),{instance:l}=s.current;return i.useEffect(function(){c.current!==a&&(t(l,a,c.current),c.current=a)},[l,a,t]),s}}function xe(e,t){i.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function X(e){return function(n){const a=J(),o=e(S(n,a),a);return Y(a.map,n.attribution),K(o.current,n.eventHandlers),xe(o.current,a),o}}function ge(e,t){const n=F(e,t),a=X(n);return de(a)}function he(e,t){const n=F(e),a=pe(n,t);return me(a)}function ve(e,t){const n=F(e,t),a=X(n);return fe(a)}function be(e,t,n){const{opacity:a,zIndex:o}=t;a!=null&&a!==n.opacity&&e.setOpacity(a),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function ye({bounds:e,boundsOptions:t,center:n,children:a,className:o,id:s,placeholder:c,style:l,whenReady:p,zoom:m,...b},y){const[E]=i.useState({className:o,id:s,style:l}),[g,f]=i.useState(null),u=i.useRef(void 0);i.useImperativeHandle(y,()=>g?.map??null,[g]);const h=i.useCallback(_=>{if(_!==null&&!u.current){const j=new L.Map(_,b);u.current=j,n!=null&&m!=null?j.setView(n,m):e!=null&&j.fitBounds(e,t),p!=null&&j.whenReady(p),f(le(j))}},[]);i.useEffect(()=>()=>{g?.map.remove()},[g]);const x=g?I.createElement($,{value:g},a):c??null;return I.createElement("div",{...E,ref:h},x)}const N=i.forwardRef(ye),A=ge(function({position:t,...n},a){const o=new L.Marker(t,n);return M(o,ue(a,{overlayContainer:o}))},function(t,n,a){n.position!==a.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==a.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==a.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==a.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==a.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),B=he(function(t,n){const a=new L.Popup(t,n.overlayContainer);return M(a,n)},function(t,n,{position:a},o){i.useEffect(function(){const{instance:c}=t;function l(m){m.popup===c&&(c.update(),o(!0))}function p(m){m.popup===c&&o(!1)}return n.map.on({popupopen:l,popupclose:p}),n.overlayContainer==null?(a!=null&&c.setLatLng(a),c.openOn(n.map)):n.overlayContainer.bindPopup(c),function(){n.map.off({popupopen:l,popupclose:p}),n.overlayContainer?.unbindPopup(),n.map.removeLayer(c)}},[t,n,o,a])}),D=ve(function({url:t,...n},a){const o=new L.TileLayer(t,S(n,a));return M(o,a)},function(t,n,a){be(t,n,a);const{url:o}=n;o!=null&&o!==a.url&&t.setUrl(o)}),je=d(U.form)`
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
`,Q=te`
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
`,W=d.input`
  ${Q}
`,_e=d.textarea`
  ${Q}
  line-height: var(--line-height-relaxed);
  min-height: 150px;
  resize: vertical;
`,R=d.span`
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
`,Le=d(U.div)`
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
`,Ee=d.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,we=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),ze=e=>e.trim().length>=2,Re=e=>e.trim().length>=10,Oe=()=>{const{t:e}=V(),[t,n]=i.useState({name:"",email:"",message:""}),[a,o]=i.useState({name:"",email:"",message:""}),[s,c]=i.useState({name:!1,email:!1,message:!1}),[l,p]=i.useState("idle"),m=(f,u)=>{switch(f){case"name":return ze(u)?"":e("validation_name_required")||"Name must be at least 2 characters";case"email":return we(u)?"":e("validation_email_invalid")||"Please enter a valid email address";case"message":return Re(u)?"":e("validation_message_required")||"Message must be at least 10 characters";default:return""}},b=f=>{const{name:u,value:h}=f.target;n(x=>({...x,[u]:h})),s[u]&&o(x=>({...x,[u]:m(u,h)}))},y=f=>{const{name:u,value:h}=f.target;c(x=>({...x,[u]:!0})),o(x=>({...x,[u]:m(u,h)}))},E=()=>{const f={name:m("name",t.name),email:m("email",t.email),message:m("message",t.message)};return o(f),c({name:!0,email:!0,message:!0}),!Object.values(f).some(u=>u)},g=f=>{if(f.preventDefault(),!E())return;p("submitting");const u="cgpark@kmtechn.com",h=encodeURIComponent(`[KMTech 문의] ${t.name}님의 문의`),x=encodeURIComponent(`보낸 사람: ${t.name}
이메일: ${t.email}

문의 내용:
${t.message}`),_=`mailto:${u}?subject=${h}&body=${x}`;window.location.href=_,p("success"),n({name:"",email:"",message:""}),o({name:"",email:"",message:""}),c({name:!1,email:!1,message:!1}),setTimeout(()=>{p("idle")},3e3)};return r.jsx(ne,{mode:"wait",children:l==="success"||l==="error"?r.jsxs(Le,{status:l,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[r.jsx(Ee,{children:l==="success"?r.jsxs(r.Fragment,{children:[r.jsx(ie,{size:28})," ",e("contact_form_success_title")]}):r.jsxs(r.Fragment,{children:[r.jsx(C,{size:28})," ",e("contact_form_error_title")||"Error"]})}),r.jsx("p",{children:l==="success"?e("contact_form_success_desc"):e("contact_form_error_desc")||"Failed to send message"})]},"status"):r.jsxs(je,{onSubmit:g,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},noValidate:!0,children:[r.jsxs(w,{children:[r.jsx(z,{htmlFor:"contact-name",children:e("contact_form_name")}),r.jsx(W,{id:"contact-name",type:"text",name:"name",placeholder:e("contact_form_name"),value:t.name,onChange:b,onBlur:y,disabled:l==="submitting",$hasError:s.name&&a.name,"aria-invalid":s.name&&a.name?"true":"false","aria-describedby":a.name?"name-error":void 0}),s.name&&a.name&&r.jsxs(R,{id:"name-error",role:"alert",children:[r.jsx(C,{size:14})," ",a.name]})]}),r.jsxs(w,{children:[r.jsx(z,{htmlFor:"contact-email",children:e("contact_form_email")}),r.jsx(W,{id:"contact-email",type:"email",name:"email",placeholder:e("contact_form_email"),value:t.email,onChange:b,onBlur:y,disabled:l==="submitting",$hasError:s.email&&a.email,"aria-invalid":s.email&&a.email?"true":"false","aria-describedby":a.email?"email-error":void 0}),s.email&&a.email&&r.jsxs(R,{id:"email-error",role:"alert",children:[r.jsx(C,{size:14})," ",a.email]})]}),r.jsxs(w,{children:[r.jsx(z,{htmlFor:"contact-message",children:e("contact_form_message")}),r.jsx(_e,{id:"contact-message",name:"message",placeholder:e("contact_form_message"),value:t.message,onChange:b,onBlur:y,disabled:l==="submitting",$hasError:s.message&&a.message,"aria-invalid":s.message&&a.message?"true":"false","aria-describedby":a.message?"message-error":void 0}),s.message&&a.message&&r.jsxs(R,{id:"message-error",role:"alert",children:[r.jsx(C,{size:14})," ",a.message]})]}),r.jsx(Ce,{type:"submit",disabled:l==="submitting",children:e(l==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},ke=d.div`
  color: var(--text-color);
`,Z=d.div`
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
`,Ie=d.div`
  margin-top: 4rem;
`,Te=()=>{const{t:e}=V(),t=[37.377156,127.113823],n=[36.89699,127.146803];return r.jsx(ke,{children:r.jsxs(ae,{children:[r.jsx(re,{children:e("contact_title")}),r.jsxs(Z,{children:[r.jsxs(O,{children:[r.jsx(k,{children:e("contact_form_title")}),r.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:e("contact_form_desc")}),r.jsx(Oe,{})]}),r.jsx("div",{children:r.jsxs(O,{children:[r.jsx(k,{children:e("contact_office_title")}),r.jsxs(v,{children:[r.jsx(T,{size:20}),r.jsx("span",{children:e("contact_office_address")})]}),r.jsxs(v,{children:[r.jsx(P,{size:20}),r.jsx("span",{children:e("contact_office_phone")})]}),r.jsxs(v,{children:[r.jsx(H,{size:20}),r.jsx("span",{children:e("contact_office_email")})]}),r.jsx(q,{children:r.jsxs(N,{center:t,zoom:15,scrollWheelZoom:!1,children:[r.jsx(D,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.jsx(A,{position:t,children:r.jsx(B,{children:e("contact_office_title")})})]})})]})})]}),r.jsx(Ie,{children:r.jsxs(Z,{children:[r.jsx(q,{style:{marginTop:0,minHeight:"400px"},children:r.jsxs(N,{center:n,zoom:15,scrollWheelZoom:!1,children:[r.jsx(D,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.jsx(A,{position:n,children:r.jsx(B,{children:e("contact_warehouse_title")})})]})}),r.jsxs(O,{children:[r.jsx(k,{children:e("contact_warehouse_title")}),r.jsxs(v,{children:[r.jsx(T,{size:20}),r.jsx("span",{children:e("contact_warehouse_address")})]}),r.jsxs(v,{children:[r.jsx(P,{size:20}),r.jsx("span",{children:e("contact_warehouse_phone")})]}),r.jsxs(v,{children:[r.jsx(H,{size:20}),r.jsx("span",{children:e("contact_warehouse_email")})]})]})]})})]})})};export{Te as default};
//# sourceMappingURL=ContactPage-BaB3mY7H.js.map
