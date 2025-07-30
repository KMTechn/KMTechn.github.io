import{b as X,e as J,a as c,R as y,l as g,u as A,j as o,d as u}from"./index-zoMDpwy1.js";import{m as D,g as K,S as Q,z as E,A as R,B as O}from"./index-D-_6vBeq.js";import{A as Y}from"./index-YThB1H5n.js";var $=X();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ne=J("circle-check-big",ee);function F(n,t){const e=c.useRef(t);c.useEffect(function(){t!==e.current&&n.attributionControl!=null&&(e.current!=null&&n.attributionControl.removeAttribution(e.current),t!=null&&n.attributionControl.addAttribution(t)),e.current=t},[n,t])}const te=1;function re(n){return Object.freeze({__version:te,map:n})}function oe(n,t){return Object.freeze({...n,...t})}const j=c.createContext(null);function N(){const n=c.use(j);if(n==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function ae(n){function t(e,r){const{instance:a,context:s}=n(e).current;c.useImperativeHandle(r,()=>a);const{children:i}=e;return i==null?null:y.createElement(j,{value:s},i)}return c.forwardRef(t)}function ce(n){function t(e,r){const[a,s]=c.useState(!1),{instance:i}=n(e,s).current;c.useImperativeHandle(r,()=>i),c.useEffect(function(){a&&i.update()},[i,a,e.children]);const l=i._contentNode;return l?$.createPortal(e.children,l):null}return c.forwardRef(t)}function ie(n){function t(e,r){const{instance:a}=n(e).current;return c.useImperativeHandle(r,()=>a),null}return c.forwardRef(t)}function B(n,t){const e=c.useRef(void 0);c.useEffect(function(){return t!=null&&n.instance.on(t),e.current=t,function(){e.current!=null&&n.instance.off(e.current),e.current=null}},[n,t])}function C(n,t){const e=n.pane??t.pane;return e?{...n,pane:e}:n}function se(n,t){return function(r,a){const s=N(),i=n(C(r,s),s);return F(s.map,r.attribution),B(i.current,r.eventHandlers),t(i.current,s,r,a),i}}function _(n,t,e){return Object.freeze({instance:n,context:t,container:e})}function L(n,t){return t==null?function(r,a){const s=c.useRef(void 0);return s.current||(s.current=n(r,a)),s}:function(r,a){const s=c.useRef(void 0);s.current||(s.current=n(r,a));const i=c.useRef(r),{instance:l}=s.current;return c.useEffect(function(){i.current!==r&&(t(l,r,i.current),i.current=r)},[l,r,t]),s}}function le(n,t){c.useEffect(function(){return(t.layerContainer??t.map).addLayer(n.instance),function(){t.layerContainer?.removeLayer(n.instance),t.map.removeLayer(n.instance)}},[t,n])}function q(n){return function(e){const r=N(),a=n(C(e,r),r);return F(r.map,e.attribution),B(a.current,e.eventHandlers),le(a.current,r),a}}function ue(n,t){const e=L(n,t),r=q(e);return ae(r)}function de(n,t){const e=L(n),r=se(e,t);return ce(r)}function fe(n,t){const e=L(n,t),r=q(e);return ie(r)}function me(n,t,e){const{opacity:r,zIndex:a}=t;r!=null&&r!==e.opacity&&n.setOpacity(r),a!=null&&a!==e.zIndex&&n.setZIndex(a)}function pe({bounds:n,boundsOptions:t,center:e,children:r,className:a,id:s,placeholder:i,style:l,whenReady:d,zoom:f,...h},Z){const[W]=c.useState({className:a,id:s,style:l}),[m,G]=c.useState(null),z=c.useRef(void 0);c.useImperativeHandle(Z,()=>m?.map??null,[m]);const V=c.useCallback(w=>{if(w!==null&&!z.current){const x=new g.Map(w,h);z.current=x,e!=null&&f!=null?x.setView(e,f):n!=null&&x.fitBounds(n,t),d!=null&&x.whenReady(d),G(re(x))}},[]);c.useEffect(()=>()=>{m?.map.remove()},[m]);const U=m?y.createElement(j,{value:m},r):i??null;return y.createElement("div",{...W,ref:V},U)}const I=c.forwardRef(pe),S=ue(function({position:t,...e},r){const a=new g.Marker(t,e);return _(a,oe(r,{overlayContainer:a}))},function(t,e,r){e.position!==r.position&&t.setLatLng(e.position),e.icon!=null&&e.icon!==r.icon&&t.setIcon(e.icon),e.zIndexOffset!=null&&e.zIndexOffset!==r.zIndexOffset&&t.setZIndexOffset(e.zIndexOffset),e.opacity!=null&&e.opacity!==r.opacity&&t.setOpacity(e.opacity),t.dragging!=null&&e.draggable!==r.draggable&&(e.draggable===!0?t.dragging.enable():t.dragging.disable())}),k=de(function(t,e){const r=new g.Popup(t,e.overlayContainer);return _(r,e)},function(t,e,{position:r},a){c.useEffect(function(){const{instance:i}=t;function l(f){f.popup===i&&(i.update(),a(!0))}function d(f){f.popup===i&&a(!1)}return e.map.on({popupopen:l,popupclose:d}),e.overlayContainer==null?(r!=null&&i.setLatLng(r),i.openOn(e.map)):e.overlayContainer.bindPopup(i),function(){e.map.off({popupopen:l,popupclose:d}),e.overlayContainer?.unbindPopup(),e.map.removeLayer(i)}},[t,e,a,r])}),T=fe(function({url:t,...e},r){const a=new g.TileLayer(t,C(e,r));return _(a,r)},function(t,e,r){me(t,e,r);const{url:a}=e;a!=null&&a!==r.url&&t.setUrl(a)}),xe=u(D.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
`,M=u.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent-amber);
  }
`,ge=u.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent-amber);
  }
`,he=u.button`
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent-amber);
  align-self: flex-start;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--accent-amber);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,be=u(D.div)`
  background-color: var(--card-bg);
  border: 1px solid var(--accent-green);
  color: var(--accent-green);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,ve=u.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ye=()=>{const{t:n}=A(),[t,e]=c.useState({name:"",email:"",message:""}),[r,a]=c.useState("idle"),s=l=>{const{name:d,value:f}=l.target;e(h=>({...h,[d]:f}))},i=l=>{l.preventDefault(),a("submitting"),console.log("Form Submitted:",t),setTimeout(()=>{a("success"),e({name:"",email:"",message:""}),setTimeout(()=>{a("idle")},3e3)},1500)};return o.jsx(Y,{mode:"wait",children:r==="success"?o.jsxs(be,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[o.jsxs(ve,{children:[o.jsx(ne,{size:28})," ",n("contact_form_success_title")]}),o.jsx("p",{children:n("contact_form_success_desc")})]},"success"):o.jsxs(xe,{onSubmit:i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:[o.jsx(M,{type:"text",name:"name",placeholder:n("contact_form_name"),value:t.name,onChange:s,required:!0,disabled:r==="submitting"}),o.jsx(M,{type:"email",name:"email",placeholder:n("contact_form_email"),value:t.email,onChange:s,required:!0,disabled:r==="submitting"}),o.jsx(ge,{name:"message",placeholder:n("contact_form_message"),value:t.message,onChange:s,required:!0,disabled:r==="submitting"}),o.jsx(he,{type:"submit",disabled:r==="submitting",children:n(r==="submitting"?"contact_form_submitting":"contact_form_submit")})]},"form")})},je=u.div`
  color: var(--text-color);
`,P=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,b=u.div`
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
`,we=()=>{const{t:n}=A(),t=[37.377156,127.113823],e=[36.89699,127.146803];return o.jsx(je,{children:o.jsxs(K,{children:[o.jsx(Q,{children:n("contact_title")}),o.jsxs(P,{children:[o.jsxs(b,{children:[o.jsx(v,{children:n("contact_form_title")}),o.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:n("contact_form_desc")}),o.jsx(ye,{})]}),o.jsx("div",{children:o.jsxs(b,{children:[o.jsx(v,{children:n("contact_office_title")}),o.jsxs(p,{children:[o.jsx(E,{size:20}),o.jsx("span",{children:n("contact_office_address")})]}),o.jsxs(p,{children:[o.jsx(R,{size:20}),o.jsx("span",{children:n("contact_office_phone")})]}),o.jsxs(p,{children:[o.jsx(O,{size:20}),o.jsx("span",{children:n("contact_office_email")})]}),o.jsx(H,{children:o.jsxs(I,{center:t,zoom:15,scrollWheelZoom:!1,children:[o.jsx(T,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.jsx(S,{position:t,children:o.jsx(k,{children:n("contact_office_title")})})]})})]})})]}),o.jsx(Ce,{children:o.jsxs(P,{children:[o.jsx(H,{style:{marginTop:0,minHeight:"400px"},children:o.jsxs(I,{center:e,zoom:15,scrollWheelZoom:!1,children:[o.jsx(T,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.jsx(S,{position:e,children:o.jsx(k,{children:n("contact_warehouse_title")})})]})}),o.jsxs(b,{children:[o.jsx(v,{children:n("contact_warehouse_title")}),o.jsxs(p,{children:[o.jsx(E,{size:20}),o.jsx("span",{children:n("contact_warehouse_address")})]}),o.jsxs(p,{children:[o.jsx(R,{size:20}),o.jsx("span",{children:n("contact_warehouse_phone")})]}),o.jsxs(p,{children:[o.jsx(O,{size:20}),o.jsx("span",{children:n("contact_warehouse_email")})]})]})]})})]})})};export{we as default};
