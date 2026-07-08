const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C3npmYqO.js","assets/index-BpJY7icS.css"])))=>i.map(i=>d[i]);
import{r as n,j as e,d as r,u as re,a as h,c as te,F as T,b as ie,e as K,f as D,g as G,S as c,L as R,H as E,R as ae,o as oe,m as o,_ as ne,h as se,i as b,k as ce,l as z,n as B,p as O,q as de,s as A,t as $,v as le,w as I}from"./index-C3npmYqO.js";const me=(i=1024)=>{const[g,s]=n.useState(()=>typeof window>"u"?!1:window.innerWidth<i);return n.useEffect(()=>{const d=()=>{const l=navigator.userAgent||navigator.vendor||window.opera;return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(l.toLowerCase())},m=()=>{const l=window.innerWidth<i,x=d();s(l||x)};if(m(),typeof ResizeObserver<"u"){const l=new ResizeObserver(m);return l.observe(document.documentElement),()=>l.disconnect()}else return window.addEventListener("resize",m,{passive:!0}),()=>window.removeEventListener("resize",m)},[i]),g},pe=()=>{const[i,g]=n.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return n.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)"),d=m=>{g(m.matches)};return s.addEventListener?(s.addEventListener("change",d),()=>s.removeEventListener("change",d)):(s.addListener(d),()=>s.removeListener(d))},[]),i},he=r.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`,ge=r.picture`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  display: grid;
  place-items: center;
`,xe=r.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 24px 42px rgba(15, 23, 42, 0.14));
`,q=()=>e.jsx(he,{"aria-hidden":"true",children:e.jsxs(ge,{children:[e.jsx("source",{type:"image/webp",srcSet:"/images/kmtech-globe-logistics-alpha-640.webp 640w, /images/kmtech-globe-logistics-alpha-960.webp 960w",sizes:"(max-width: 600px) 232px, (max-width: 1120px) 380px, 460px"}),e.jsx(xe,{src:"/images/kmtech-globe-logistics-alpha.png",alt:"",loading:"eager",decoding:"async"})]})}),be=n.lazy(()=>ne(()=>import("./Desktop3DGlobe-txiGBYFV.js"),__vite__mapDeps([0,1]))),we=r.div`
  width: 100%;
  overflow-x: hidden;
`,ue=r.section`
  min-height: auto;
  padding: clamp(2.35rem, 4.8vw, 4.25rem) clamp(1rem, 4vw, 2.5rem) clamp(1.2rem, 2.2vw, 1.65rem);
  background:
    radial-gradient(circle at 82% 18%, rgba(var(--accent-amber-rgb), 0.12), transparent 25rem),
    linear-gradient(180deg, #f8f9fb 0%, var(--background-color) 100%);
  position: relative;
  overflow: clip;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  }

  @media (max-width: 820px) {
    min-height: auto;
    padding: 3.25rem 5% 3rem;
  }

  @media (max-width: 600px) {
    padding: 3.35rem 1.25rem 2.25rem;
  }
`,ye=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.46fr) minmax(0, 0.54fr);
  align-items: start;
  gap: 0;
  position: relative;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
  }
`,ve=r(o.div)`
  grid-column: 1 / 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 4;
  min-width: 0;
  width: 100%;
  max-width: 34rem;
  padding-top: clamp(3rem, 5vw, 4.6rem);
  padding-left: clamp(0rem, 1.4vw, 1.15rem);

  @media (max-width: 820px) {
    grid-column: 1;
    grid-row: auto;
    align-items: center;
    order: 1;
    max-width: 46rem;
    margin: 0 auto;
    padding-top: 0;
    padding-left: 0;
  }
`,fe=r(o.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.1rem;
`,_e=r(o.h1)`
  font-size: clamp(2.35rem, 3.7vw, 3.5rem);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 1rem;
  max-width: 100%;
  width: 100%;
  color: var(--text-color);
  letter-spacing: 0;
  word-break: keep-all;
  overflow-wrap: anywhere;
  text-wrap: balance;
  white-space: normal;

  @media (max-width: 600px) {
    font-size: clamp(2.1rem, 10vw, 2.75rem);
    margin-bottom: 1rem;
    white-space: normal;
  }
`,je=r(o.p)`
  font-size: 1.02rem;
  color: var(--text-secondary);
  max-width: 31rem;
  width: 100%;
  margin-bottom: 1.45rem;
  line-height: 1.72;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,ke=r(o.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  @media (min-width: 821px) {
    display: none;
  }

  @media (max-width: 820px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,Ke=r(o.div)`
  display: none;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 820px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,ze=r.a`
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
`,P=r(o(R))`
  padding: 0.78rem 1.25rem;
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
  justify-content: center;
  border: 1px solid transparent;
  min-height: 44px;
  min-width: 0;
  text-decoration: none;

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

  @media (max-width: 600px) {
    flex: 1 1 100%;
    width: 100%;
  }
`,Se=r(P)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,Pe=r(o.div)`
  grid-column: 1 / -1;
  grid-row: 1;
  height: clamp(27rem, 38vw, 34rem);
  width: 100%;
  position: relative;
  isolation: isolate;
  overflow: clip;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  cursor: grab;

  &::before {
    content: '';
    position: absolute;
    inset: 1.1rem;
    z-index: 1;
    border-radius: 10px;
    background-image:
      linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(circle at 56% 44%, black, transparent 68%);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
      linear-gradient(
        90deg,
        rgba(248, 249, 251, 0.98) 0%,
        rgba(248, 249, 251, 0.92) 28%,
        rgba(248, 249, 251, 0.48) 47%,
        rgba(248, 249, 251, 0.04) 66%,
        rgba(248, 249, 251, 0) 100%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.82) 0%,
        rgba(255, 255, 255, 0.05) 34%,
        rgba(248, 249, 251, 0.18) 74%,
        rgba(248, 249, 251, 0.72) 100%
      );
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 820px) {
    grid-column: 1;
    grid-row: auto;
    order: 2;
    height: clamp(27rem, 64vw, 34rem);
    max-width: 760px;
    margin: 0 auto;

    &::after {
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 30%),
        linear-gradient(90deg, rgba(248, 249, 251, 0.9) 0%, rgba(248, 249, 251, 0.12) 48%, rgba(248, 249, 251, 0) 100%);
    }
  }

  @media (max-width: 600px) {
    height: 20rem;
    max-width: none;
    border-radius: 10px;
    margin-top: 0.25rem;
  }
`,Re=r.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  opacity: 0.9;
  filter: saturate(0.94) contrast(0.98) brightness(1.03);
  z-index: 0;

  @media (max-width: 600px) {
    object-position: 46% center;
  }
`,Ie=r.div`
  position: absolute;
  right: clamp(-1rem, -1.2vw, -0.2rem);
  bottom: clamp(3.8rem, 5.5vw, 5.6rem);
  width: clamp(18.5rem, 29vw, 27rem);
  height: clamp(18.5rem, 29vw, 27rem);
  display: grid;
  place-items: center;
  z-index: 3;
  pointer-events: none;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 600px) {
    right: -0.55rem;
    bottom: 5.7rem;
    width: 12.75rem;
    height: 12.75rem;
  }
`,Fe=r.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  display: none;
  gap: 0.5rem;
  width: min(30%, 13rem);

  @media (max-width: 720px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: none;
  }
`,Le=r.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  align-items: center;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
  padding: 0.7rem 0.8rem;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
`,Me=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  line-height: 1.25;
`,Ce=r.strong`
  color: #111827;
  font-size: 0.95rem;
  line-height: 1;
  white-space: nowrap;
`,Ve=r.div`
  position: absolute;
  left: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  bottom: clamp(1rem, 2vw, 1.35rem);
  z-index: 4;
  display: none;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  padding: clamp(0.62rem, 1.2vw, 0.85rem);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
`,He=r.div`
  color: #253046;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
  text-align: left;
`,Te=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,De=r.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  color: #253046;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.25;
  min-width: 0;

  svg {
    color: var(--accent-amber);
    font-size: 1.35rem;
  }
`,Ge=r(o.div)`
  grid-column: 1 / -1;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  width: 100%;
  max-width: none;
  margin-top: clamp(-4.6rem, -5.2vw, -3.1rem);
  position: relative;
  z-index: 5;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 22px 58px rgba(15, 23, 42, 0.1);
  overflow: hidden;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 0.75rem;
  }

  @media (max-width: 820px) {
    grid-row: auto;
    order: 3;
    margin-top: clamp(-1.25rem, -2.2vw, -0.65rem);
  }
`,Ee=r.div`
  border-right: 1px solid var(--border-color);
  background: transparent;
  padding: 1rem 1.25rem;
  min-width: 0;
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 0.8rem;
  align-items: center;

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 600px) {
    border-right: 0;
    border-bottom: 1px solid var(--border-color);
  }
`,Be=r.span`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);

  svg {
    font-size: 1rem;
  }
`,Oe=r.div`
  color: var(--text-color);
  font-size: 1.22rem;
  font-weight: 900;
  line-height: 1.1;
  white-space: nowrap;
`,Ae=r.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  overflow-wrap: anywhere;
`,$e=r.section`
  background: var(--card-bg);
  padding: clamp(1.65rem, 3vw, 2.45rem) 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 2.35rem 1.25rem;
  }
`,qe=r.div`
  width: min(100%, 1240px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(20rem, 0.82fr);
  gap: clamp(1rem, 2.6vw, 1.65rem);
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`,We=r(o.div)`
  grid-column: 1 / -1;
  text-align: left;
  min-width: 0;
  max-width: 720px;

  ${c} {
    font-size: clamp(1.65rem, 3vw, 2.25rem);
  }

  @media (max-width: 820px) {
    text-align: left;
    max-width: 680px;
    margin: 0;
  }
`,Ne=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: var(--background-color);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Ye=r(o.div)`
  min-height: clamp(18rem, 27vw, 24rem);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: #111;
  box-shadow: 0 18px 46px rgba(15, 23, 42, 0.1);

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`,Ze=r(o.div)`
  text-align: left;
  padding: 1rem 1.15rem;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--border-color);
  border-radius: 0;
  min-width: 0;

  &:last-of-type {
    border-bottom: 0;
  }
`,Qe=r.div`
  font-size: clamp(1.45rem, 2.8vw, 2.25rem);
  font-weight: 800;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.55rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`,W=r.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.35;
  overflow-wrap: anywhere;
`,Ue=r.p`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.5;
  margin-top: 0.65rem;
`,Xe=r.div`
  grid-column: 1 / -1;
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  margin-top: 0.25rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Je=r(o.div)`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  border-radius: 8px;
  background: rgba(var(--accent-amber-rgb), 0.08);
  padding: 1rem;
  min-width: 0;
`,er=r.strong`
  display: block;
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.2;
  margin-bottom: 0.45rem;
`,rr=r(I)`
  background: var(--background-color);
  padding: clamp(1.65rem, 3vw, 2.45rem) 5%;

  @media (max-width: 600px) {
    padding: 2.4rem 1.25rem;
  }
`,tr=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.3rem, 2.8vw, 2rem);
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`,ir=r(o.div)`
  text-align: left;
  min-width: 0;
  max-width: 740px;

  ${c} {
    font-size: clamp(1.7rem, 3vw, 2.35rem);
    text-align: left;
    margin-bottom: 0.65rem;
  }

  @media (max-width: 1100px) {
    text-align: left;
    max-width: 100%;
    margin: 0;

    ${c} {
      margin-bottom: 0.75rem;
    }
  }
`,S=r(o.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto clamp(2rem, 4vw, 3rem);

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
`,w=r.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,v=r.p`
  font-size: 0.95rem;
  line-height: 1.62;
  color: var(--text-secondary);
`,ar=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.2vw, 1rem);
  min-width: 0;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,N=r(o.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1rem, 1.65vw, 1.25rem);
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 168px;
  min-width: 0;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

`,or=r.span`
  width: fit-content;
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  background: rgba(var(--accent-amber-rgb), 0.08);
  color: var(--text-color);
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 0.35rem 0.55rem;
  margin-bottom: 0.7rem;
  display: none;
`,nr=r.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 0.65rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`,sr=r.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.65rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,cr=r.p`
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,dr=r.p`
  color: var(--text-color);
  font-size: 0.74rem;
  line-height: 1.38;
  margin-bottom: 0.8rem;
  padding-top: 0.7rem;
  border-top: 1px solid var(--border-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  strong {
    color: var(--accent-amber);
    font-size: 0.74rem;
    margin-right: 0.35rem;
  }

  display: none;
`,lr=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${N}:hover & {
    gap: 0.75rem;
  }
`,mr=r(I)`
  background:
    linear-gradient(90deg, rgba(16, 16, 16, 0.95), rgba(16, 16, 16, 0.84)),
    url('/images/kmtech-about-warehouse-hero-1440.webp') center / cover no-repeat;
  padding: clamp(1.75rem, 3.2vw, 2.6rem) 5%;
  color: #fff;

  ${c} {
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 2.4rem 1.25rem;
  }
`,pr=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  max-width: 1200px;
  margin: 0 auto 2rem;
  border: 1px solid rgba(255, 204, 0, 0.22);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.36);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,hr=r(o.div)`
  background: transparent;
  border: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0;
  padding: clamp(1.25rem, 2.5vw, 1.65rem);
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  min-width: 0;
  will-change: transform;
  transform: translateZ(0);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 900px) {
    &:nth-child(2n) {
      border-right: 0;
    }
  }

  @media (max-width: 520px) {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    &:last-child {
      border-bottom: 0;
    }
  }
`,gr=r.div`
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
`,xr=r.div`
  flex: 1;
  min-width: 0;
`,br=r.h4`
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.5rem;
`,wr=r.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
`,ur=r(o.div)`
  text-align: center;
`,yr=r(I)`
  background: var(--background-color);
  padding: clamp(1.6rem, 3vw, 2.35rem) 5%;

  @media (max-width: 600px) {
    padding: 2.35rem 1.25rem;
  }
`,vr=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  max-width: 1120px;
  margin: 0 auto;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,fr=r(o.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 0;
  max-width: 150px;

  @media (max-width: 768px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
    text-align: left;
    gap: 1rem;
    padding: 1rem 0;
  }
`,_r=r.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff8db;
  border: 1px solid var(--accent-amber);
  border-radius: 50%;
  margin-bottom: 0.75rem;
  flex-shrink: 0;

  svg {
    font-size: 1.15rem;
    color: #121212;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    margin-bottom: 0;
  }
`,jr=r.span`
  font-size: 0.66rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,kr=r.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,Kr=r.p`
  font-size: 0.76rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,zr=r.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,Sr=r(o.div)`
  color: #c8cdd5;
  font-size: 1.1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,Pr=r.section`
  background: var(--background-color);
  padding: clamp(1.65rem, 3vw, 2.55rem) 5%;
  border-top: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 2.35rem 1.25rem;
  }
`,Rr=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin: 0 auto;
`,Ir=r(o.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.35rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,Fr=r.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`,Lr=r.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Mr=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Cr=r.div`
  width: min(100%, 1000px);
  margin: clamp(1.25rem, 3vw, 2rem) auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,Vr=r(R)`
  min-height: 132px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--card-bg);
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: start;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: inherit;
    transform: translateY(-3px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 12px 34px rgba(15, 23, 42, 0.08);
  }
`,Hr=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.12);
  color: var(--accent-amber);
`,Tr=r.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.3;
  margin: 0 0 0.45rem;
`,Dr=r.p`
  color: var(--text-secondary);
  font-size: 0.84rem;
  line-height: 1.55;
  margin: 0 0 0.8rem;
`,Gr=r.span`
  color: var(--accent-amber);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 800;
`,Er=r(o.img).attrs({loading:"lazy",decoding:"async"})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease, background 0.2s ease;
  will-change: transform;
  border-radius: 6px;

  ${i=>i.$needsBg&&`
    background: white;
    padding: 8px 12px;
  `}

  &:hover {
    transform: scale(1.05);
  }
`,Or=()=>{const{t:i}=re(),g=n.useRef(null),s=me(1024),d=pe(),l=typeof window<"u"&&window.innerWidth>=1024&&!s&&!d,x=n.useRef(null),F=n.useRef(null),L=n.useRef(null),M=n.useRef(null),C=n.useRef(null),p=h(x,{once:!0,margin:"-50px"}),u=h(F,{once:!0,margin:"-50px"}),V=h(L,{once:!0,margin:"-50px"}),f=h(C,{once:!0,margin:"-50px"}),_=h(M,{once:!0,margin:"-50px"}),j=[{icon:e.jsx(se,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:e.jsx(b,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:e.jsx(ce,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:e.jsx(z,{}),titleKey:"metric_qr_system",descKey:"metric_qr_detail"},{icon:e.jsx(B,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"},{icon:e.jsx(O,{}),titleKey:"business_delivery_title",descKey:"business_delivery_summary"}],Y=[{icon:e.jsx(b,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc",proofKey:"metric_capacity_detail"},{icon:e.jsx(le,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc",proofKey:"metric_clean_booth_detail"},{icon:e.jsx(A,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc",proofKey:"metric_rework_detail"},{icon:e.jsx(O,{}),titleKey:"business_delivery_title",descKey:"business_delivery_summary",proofKey:"metric_qr_detail"},{icon:e.jsx(z,{}),titleKey:"home_service_visibility_title",descKey:"home_service_visibility_desc",proofKey:"metric_qr_detail"}],Z=[{icon:e.jsx(b,{}),value:"2,140㎡",titleKey:"stats_warehouse_space",descKey:"metric_space_detail"},{icon:e.jsx(z,{}),value:"ERP QR",titleKey:"metric_qr_system",descKey:"metric_qr_detail"},{icon:e.jsx(B,{}),value:"50 Pallet",titleKey:"metric_rework_capacity",descKey:"metric_rework_detail"},{icon:e.jsx($,{}),value:"16CH",titleKey:"metric_cctv",descKey:"metric_cctv_detail"}],Q=[{icon:e.jsx(b,{}),value:"2,140㎡",labelKey:"hero_proof_facility"},{icon:e.jsx(de,{}),value:"3,000+",labelKey:"hero_proof_capacity"},{icon:e.jsx(A,{}),value:"40ft x2",labelKey:"metric_container_dock"},{icon:e.jsx($,{}),value:"16CH",labelKey:"metric_cctv"}],U=G.slice(0,3),X=Object.entries(te.reduce((t,a)=>(t[a.industryKey]=t[a.industryKey]||[],t[a.industryKey].push(a),t),{})).map(([t,a])=>({industry:i(t),icon:t==="partners_industry_automotive"?e.jsx(T,{}):e.jsx(ie,{}),partners:a})),H=n.useRef(null),k=h(H,{once:!0,margin:"-50px"}),J=[{to:"/business",icon:e.jsx(b,{}),titleKey:"home_route_business_title",descKey:"home_route_business_desc"},{to:"/partners",icon:e.jsx(T,{}),titleKey:"home_route_partners_title",descKey:"home_route_partners_desc"},{to:"/contact",icon:e.jsx(D,{}),titleKey:"home_route_contact_title",descKey:"home_route_contact_desc"}];return e.jsxs(we,{children:[e.jsx(ue,{ref:x,children:e.jsxs(ye,{children:[e.jsxs(ve,{initial:{opacity:0,y:30},animate:p?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx(fe,{initial:{opacity:0},animate:p?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),e.jsx(_e,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:i("hero_title")}),e.jsx(je,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:i("hero_subtitle")}),e.jsxs(ke,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[e.jsxs(P,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i("hero_primary_cta")," ",e.jsx(K,{})]}),e.jsx(Se,{to:"/business",whileHover:{scale:1.02},whileTap:{scale:.98},children:i("hero_secondary_cta")})]}),e.jsx(Ke,{initial:{opacity:0},animate:p?{opacity:1}:{},transition:{delay:.7,duration:.5},children:e.jsxs(ze,{href:"mailto:cgpark@kmtechn.com",children:[e.jsx(D,{})," cgpark@kmtechn.com"]})})]}),e.jsxs(Pe,{ref:g,initial:{opacity:0,y:18},animate:p?{opacity:1,y:0}:{},transition:{delay:.3,duration:.7},children:[e.jsx(Re,{src:"/images/kmtech-home-network-backdrop.png",srcSet:"/images/kmtech-home-network-backdrop-960.webp 960w, /images/kmtech-home-network-backdrop-1440.webp 1440w, /images/kmtech-home-network-backdrop.png 1672w",sizes:"(max-width: 820px) 100vw, 58vw",alt:"",loading:"eager",decoding:"async"}),e.jsx(Fe,{children:U.map(t=>e.jsxs(Le,{children:[e.jsx(Me,{children:i(t.labelKey)}),e.jsx(Ce,{children:t.value})]},t.labelKey))}),e.jsx(Ie,{children:l?e.jsx(n.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(be,{})}):e.jsx(q,{})}),e.jsxs(Ve,{children:[e.jsx(He,{children:i("hero_visual_flow_label")}),e.jsx(Te,{children:j.map(t=>e.jsxs(De,{children:[t.icon,e.jsx("span",{children:i(t.titleKey)})]},t.titleKey))})]})]}),e.jsx(Ge,{"aria-label":i("hero_proof_label"),initial:{opacity:1,y:0},animate:{opacity:1,y:0},children:Q.map(t=>e.jsxs(Ee,{children:[e.jsx(Be,{children:t.icon}),e.jsxs("div",{children:[e.jsx(Oe,{children:t.value}),e.jsx(Ae,{children:i(t.labelKey)})]})]},t.labelKey))})]})}),e.jsx(rr,{ref:L,children:e.jsxs(tr,{children:[e.jsxs(ir,{initial:{opacity:0,y:20},animate:V?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(w,{children:i("home_problem_label")}),e.jsx(c,{children:i("home_problem_title")}),e.jsx(v,{children:i("home_problem_desc")})]}),e.jsx(ar,{children:Y.map((t,a)=>e.jsx(R,{to:"/business",style:{textDecoration:"none",height:"100%"},children:e.jsxs(N,{initial:{opacity:0,y:30},animate:V?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.5},children:[e.jsx(or,{children:i("home_section_services_label")}),e.jsx(nr,{children:t.icon}),e.jsx(sr,{children:i(t.titleKey)}),e.jsx(cr,{children:i(t.descKey)}),e.jsxs(dr,{children:[e.jsx("strong",{children:i("home_problem_proof_label")}),i(t.proofKey)]}),e.jsxs(lr,{children:[i("home_services_button")," ",e.jsx(E,{})]})]})},t.titleKey))})]})}),e.jsxs(yr,{ref:C,children:[e.jsxs(S,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(w,{children:i("home_section_process_label")}),e.jsx(c,{children:i("process_home_title")}),e.jsx(v,{children:i("process_home_desc")})]}),e.jsx(vr,{children:j.map((t,a)=>e.jsxs(ae.Fragment,{children:[e.jsxs(fr,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.45},children:[e.jsx(_r,{children:t.icon}),e.jsxs(zr,{children:[e.jsx(jr,{children:i("process_step_label",{number:a+1})}),e.jsx(kr,{children:i(t.titleKey)}),e.jsx(Kr,{children:i(t.descKey)})]})]}),a<j.length-1&&e.jsx(Sr,{initial:{opacity:0},animate:f?{opacity:1}:{},transition:{delay:a*.1+.08,duration:.3},children:e.jsx(E,{})})]},t.titleKey))})]}),e.jsx($e,{ref:F,children:e.jsxs(qe,{children:[e.jsxs(We,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(w,{children:i("home_facility_label")}),e.jsx(c,{children:i("home_facility_title")}),e.jsx(v,{children:i("home_facility_desc")})]}),e.jsx(Ye,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{delay:.08,duration:.5},children:e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 1080px) 100vw, 38vw",alt:"KMTech 직산 물류센터 내부",loading:"eager",decoding:"async"})}),e.jsxs(Ne,{children:[G.map((t,a)=>e.jsxs(Ze,{initial:{opacity:0,y:20},animate:u?{opacity:1,y:0}:{},transition:{delay:a*.08,duration:.5},children:[e.jsx(Qe,{children:t.value}),e.jsx(W,{children:i(t.labelKey)}),e.jsx(Ue,{children:i(t.detailKey)})]},t.labelKey)),e.jsx(Xe,{children:oe.map((t,a)=>e.jsxs(Je,{initial:{opacity:0,y:16},animate:u?{opacity:1,y:0}:{},transition:{delay:.25+a*.08,duration:.45},children:[e.jsx(er,{children:t.value}),e.jsx(W,{children:i(t.detailKey)})]},t.labelKey))})]})]})}),e.jsxs(mr,{ref:M,children:[e.jsxs(S,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(w,{children:i("home_outcome_label")}),e.jsx(c,{children:i("home_strengths_title")})]}),e.jsx(pr,{children:Z.map((t,a)=>e.jsxs(hr,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.5},children:[e.jsx(gr,{children:t.icon}),e.jsxs(xr,{children:[e.jsx(br,{children:t.value}),e.jsx(wr,{children:i(t.descKey)})]})]},a))}),e.jsx(ur,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:e.jsxs(P,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i("home_strengths_cta")," ",e.jsx(K,{})]})})]}),e.jsxs(Pr,{ref:H,children:[e.jsxs(S,{initial:{opacity:0,y:20},animate:k?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(w,{children:i("home_section_partners_label")}),e.jsx(c,{children:i("core_customers_title")}),e.jsx(v,{children:i("home_partner_desc")})]}),e.jsx(Rr,{children:X.map((t,a)=>e.jsxs(Ir,{initial:{opacity:0,y:20},animate:k?{opacity:1,y:0}:{},transition:{delay:a*.15,duration:.5},children:[e.jsxs(Fr,{children:[t.icon,e.jsx(Lr,{children:t.industry})]}),e.jsx(Mr,{children:t.partners.map((y,ee)=>e.jsx(Er,{src:y.logo,alt:`${y.name} logo`,$needsBg:y.needsBg,initial:{opacity:0},animate:k?{opacity:1}:{},transition:{delay:a*.15+ee*.05,duration:.4}},y.name))})]},t.industry))}),e.jsx(Cr,{children:J.map(t=>e.jsxs(Vr,{to:t.to,children:[e.jsx(Hr,{children:t.icon}),e.jsxs("div",{children:[e.jsx(Tr,{children:i(t.titleKey)}),e.jsx(Dr,{children:i(t.descKey)}),e.jsxs(Gr,{children:[i("home_route_cta")," ",e.jsx(K,{})]})]})]},t.titleKey))})]})]})};export{Or as default};
