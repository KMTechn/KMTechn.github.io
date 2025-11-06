import{j as o}from"./three-vendor-I5c4ovf2.js";import{b as c,R as y,e as J}from"./react-vendor-BvbQ_S-X.js";import{o as A,p as h,d as u,m as F,h as U,S as X,q as z,r as R,s as O}from"./index-DfVEVYYD.js";import{u as D}from"./i18n-vendor-Bdmv85-f.js";import{A as K}from"./index-D3X0vPer.js";const Q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ee=A("circle-alert",Q);const ne=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],te=A("circle-check-big",ne);function N(e,t){const n=c.useRef(t);c.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const re=1;function oe(e){return Object.freeze({__version:re,map:e})}function ae(e,t){return Object.freeze({...e,...t})}const j=c.createContext(null);function q(){const e=c.use(j);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function ce(e){function t(n,r){const{instance:a,context:s}=e(n).current;c.useImperativeHandle(r,()=>a);const{children:i}=n;return i==null?null:y.createElement(j,{value:s},i)}return c.forwardRef(t)}function ie(e){function t(n,r){const[a,s]=c.useState(!1),{instance:i}=e(n,s).current;c.useImperativeHandle(r,()=>i),c.useEffect(function(){a&&i.update()},[i,a,n.children]);const l=i._contentNode;return l?J.createPortal(n.children,l):null}return c.forwardRef(t)}function se(e){function t(n,r){const{instance:a}=e(n).current;return c.useImperativeHandle(r,()=>a),null}return c.forwardRef(t)}function B(e,t){const n=c.useRef(void 0);c.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function _(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function le(e,t){return function(r,a){const s=q(),i=e(_(r,s),s);return N(s.map,r.attribution),B(i.current,r.eventHandlers),t(i.current,s,r,a),i}}function C(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function L(e,t){return t==null?function(r,a){const s=c.useRef(void 0);return s.current||(s.current=e(r,a)),s}:function(r,a){const s=c.useRef(void 0);s.current||(s.current=e(r,a));const i=c.useRef(r),{instance:l}=s.current;return c.useEffect(function(){i.current!==r&&(t(l,r,i.current),i.current=r)},[l,r,t]),s}}function ue(e,t){c.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Z(e){return function(n){const r=q(),a=e(_(n,r),r);return N(r.map,n.attribution),B(a.current,n.eventHandlers),ue(a.current,r),a}}function de(e,t){const n=L(e,t),r=Z(n);return ce(r)}function fe(e,t){const n=L(e),r=le(n,t);return ie(r)}function me(e,t){const n=L(e,t),r=Z(n);return se(r)}function pe(e,t,n){const{opacity:r,zIndex:a}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),a!=null&&a!==n.zIndex&&e.setZIndex(a)}function xe({bounds:e,boundsOptions:t,center:n,children:r,className:a,id:s,placeholder:i,style:l,whenReady:d,zoom:f,...b},W){const[$]=c.useState({className:a,id:s,style:l}),[m,G]=c.useState(null),w=c.useRef(void 0);c.useImperativeHandle(W,()=>m?.map??null,[m]);const V=c.useCallback(E=>{if(E!==null&&!w.current){const x=new h.Map(E,b);w.current=x,n!=null&&f!=null?x.setView(n,f):e!=null&&x.fitBounds(e,t),d!=null&&x.whenReady(d),G(oe(x))}},[]);c.useEffect(()=>()=>{m?.map.remove()},[m]);const Y=m?y.createElement(j,{value:m},r):i??null;return y.createElement("div",{...$,ref:V},Y)}const k=c.forwardRef(xe),I=de(function({position:t,...n},r){const a=new h.Marker(t,n);return C(a,ae(r,{overlayContainer:a}))},function(t,n,r){n.position!==r.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==r.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==r.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==r.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==r.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),S=fe(function(t,n){const r=new h.Popup(t,n.overlayContainer);return C(r,n)},function(t,n,{position:r},a){c.useEffect(function(){const{instance:i}=t;function l(f){f.popup===i&&(i.update(),a(!0))}function d(f){f.popup===i&&a(!1)}return n.map.on({popupopen:l,popupclose:d}),n.overlayContainer==null?(r!=null&&i.setLatLng(r),i.openOn(n.map)):n.overlayContainer.bindPopup(i),function(){n.map.off({popupopen:l,popupclose:d}),n.overlayContainer?.unbindPopup(),n.map.removeLayer(i)}},[t,n,a,r])}),M=me(function({url:t,...n},r){const a=new h.TileLayer(t,_(n,r));return C(a,r)},function(t,n,r){pe(t,n,r);const{url:a}=n;a!=null&&a!==r.url&&t.setUrl(a)}),he=u(F.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`,T=u.input`
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
`,be=u.textarea`
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
`,ge=u.button`
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
`,ve=u(F.div)`
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
`,ye=u.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,je=()=>{const{t:e}=D(),[t,n]=c.useState({name:"",email:"",message:""}),[r,a]=c.useState("idle");c.useEffect(()=>{},[]);const s=l=>{const{name:d,value:f}=l.target;n(b=>({...b,[d]:f}))},i=l=>{l.preventDefault(),a("submitting");{console.error("EmailJS credentials not configured"),a("error"),setTimeout(()=>a("idle"),3e3);return}};return o.jsx(K,{mode:"wait",children:r==="success"||r==="error"?o.jsxs(ve,{status:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[o.jsx(ye,{children:r==="success"?o.jsxs(o.Fragment,{children:[o.jsx(te,{size:28})," ",e("contact_form_success_title")]}):o.jsxs(o.Fragment,{children:[o.jsx(ee,{size:28})," ",e("contact_form_error_title")||"Error"]})}),o.jsx("p",{children:r==="success"?e("contact_form_success_desc"):e("contact_form_error_desc")||"Failed to send message"})]},"status"):o.jsxs(he,{onSubmit:i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:[o.jsx(T,{type:"text",name:"name",placeholder:e("contact_form_name"),value:t.name,onChange:s,required:!0,disabled:r==="submitting"}),o.jsx(T,{type:"email",name:"email",placeholder:e("contact_form_email"),value:t.email,onChange:s,required:!0,disabled:r==="submitting"}),o.jsx(be,{name:"message",placeholder:e("contact_form_message"),value:t.message,onChange:s,required:!0,disabled:r==="submitting"}),o.jsx(ge,{type:"submit",disabled:r==="submitting",children:e(r==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},_e=u.div`
  color: var(--text-color);
`,P=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,g=u.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`,v=u.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`,p=u.div`
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
`,H=u.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`,Ce=u.div`
  margin-top: 4rem;
`,Oe=()=>{const{t:e}=D(),t=[37.377156,127.113823],n=[36.89699,127.146803];return o.jsx(_e,{children:o.jsxs(U,{children:[o.jsx(X,{children:e("contact_title")}),o.jsxs(P,{children:[o.jsxs(g,{children:[o.jsx(v,{children:e("contact_form_title")}),o.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:e("contact_form_desc")}),o.jsx(je,{})]}),o.jsx("div",{children:o.jsxs(g,{children:[o.jsx(v,{children:e("contact_office_title")}),o.jsxs(p,{children:[o.jsx(z,{size:20}),o.jsx("span",{children:e("contact_office_address")})]}),o.jsxs(p,{children:[o.jsx(R,{size:20}),o.jsx("span",{children:e("contact_office_phone")})]}),o.jsxs(p,{children:[o.jsx(O,{size:20}),o.jsx("span",{children:e("contact_office_email")})]}),o.jsx(H,{children:o.jsxs(k,{center:t,zoom:15,scrollWheelZoom:!1,children:[o.jsx(M,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.jsx(I,{position:t,children:o.jsx(S,{children:e("contact_office_title")})})]})})]})})]}),o.jsx(Ce,{children:o.jsxs(P,{children:[o.jsx(H,{style:{marginTop:0,minHeight:"400px"},children:o.jsxs(k,{center:n,zoom:15,scrollWheelZoom:!1,children:[o.jsx(M,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.jsx(I,{position:n,children:o.jsx(S,{children:e("contact_warehouse_title")})})]})}),o.jsxs(g,{children:[o.jsx(v,{children:e("contact_warehouse_title")}),o.jsxs(p,{children:[o.jsx(z,{size:20}),o.jsx("span",{children:e("contact_warehouse_address")})]}),o.jsxs(p,{children:[o.jsx(R,{size:20}),o.jsx("span",{children:e("contact_warehouse_phone")})]}),o.jsxs(p,{children:[o.jsx(O,{size:20}),o.jsx("span",{children:e("contact_warehouse_email")})]})]})]})})]})})};export{Oe as default};
//# sourceMappingURL=ContactPage-Bzb4eDei.js.map
