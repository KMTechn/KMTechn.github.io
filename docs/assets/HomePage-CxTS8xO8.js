import{j as e,d as r,u as Q,r as c,a as d,c as X,F as C,b as J,e as u,f as H,g as T,S as n,L as j,H as V,R as U,o as ee,m as o,h as re,i as l,k as te,l as v,n as G,p as L,q as ie,s as B,t as M,v as ae,w as k}from"./index-wkIMDWQJ.js";const oe=r.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`,ne=r.picture`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`,se=r.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 24px 42px rgba(15, 23, 42, 0.14));
`,ce=()=>e.jsx(oe,{"aria-hidden":"true",children:e.jsxs(ne,{children:[e.jsx("source",{type:"image/webp",srcSet:"/images/kmtech-globe-logistics-alpha-640.webp 640w, /images/kmtech-globe-logistics-alpha-960.webp 960w",sizes:"(max-width: 600px) 232px, (max-width: 1120px) 380px, 460px"}),e.jsx(se,{src:"/images/kmtech-globe-logistics-alpha.png",alt:"",loading:"eager",decoding:"async"})]})}),de=r.div`
  width: 100%;
  overflow-x: hidden;
`,le=r.section`
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
`,me=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(24rem, 0.68fr) minmax(32rem, 0.95fr);
  align-items: start;
  gap: clamp(0.4rem, 1.4vw, 1rem);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
  }
`,pe=r(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  min-width: 0;
  width: 100%;
  padding-top: clamp(1.1rem, 3vw, 2.5rem);

  @media (max-width: 820px) {
    align-items: center;
    order: 1;
    padding-top: 0;
  }
`,he=r(o.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.1rem;
`,xe=r(o.h1)`
  font-size: clamp(2.45rem, 3.75vw, 3.55rem);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 1rem;
  max-width: 670px;
  width: 100%;
  color: var(--text-color);
  letter-spacing: 0;
  word-break: keep-all;
  overflow-wrap: normal;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: clamp(2.1rem, 10vw, 2.75rem);
    margin-bottom: 1rem;
    white-space: normal;
  }
`,ge=r(o.p)`
  font-size: 1.02rem;
  color: var(--text-secondary);
  max-width: 500px;
  width: 100%;
  margin-bottom: 1.45rem;
  line-height: 1.72;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,be=r(o.div)`
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
`,we=r(o.div)`
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
`,ye=r.a`
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
`,_=r(o(j))`
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
`,ue=r(_)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,ve=r(o.div)`
  height: clamp(24rem, 35vw, 32rem);
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
    z-index: -1;
    border-radius: 10px;
    background-image:
      linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(circle at 56% 44%, black, transparent 68%);
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 820px) {
    order: 2;
    height: clamp(27rem, 64vw, 34rem);
    max-width: 760px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    height: 20rem;
    max-width: none;
    border-radius: 10px;
    margin-top: 0.25rem;
  }
`,fe=r.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.9;
  filter: saturate(0.94) contrast(0.98) brightness(1.03);
  z-index: 0;

  @media (max-width: 600px) {
    object-position: 46% center;
  }
`,_e=r.div`
  position: absolute;
  right: clamp(-2.4rem, -2.4vw, -0.5rem);
  bottom: clamp(2.5rem, 4.6vw, 4.5rem);
  width: clamp(19rem, 31vw, 28rem);
  height: clamp(19rem, 31vw, 28rem);
  display: grid;
  place-items: center;
  z-index: 2;
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
`,je=r.div`
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
`,ke=r.div`
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
`,Ke=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  line-height: 1.25;
`,Se=r.strong`
  color: #111827;
  font-size: 0.95rem;
  line-height: 1;
  white-space: nowrap;
`,ze=r.div`
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
`,Pe=r.div`
  color: #253046;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
  text-align: left;
`,Re=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Fe=r.div`
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
`,Ie=r(o.div)`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  width: 100%;
  max-width: none;
  margin-top: clamp(-1.75rem, -2.3vw, -1rem);
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
    order: 3;
  }
`,Ce=r.div`
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
`,He=r.span`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);

  svg {
    font-size: 1rem;
  }
`,Te=r.div`
  color: var(--text-color);
  font-size: 1.22rem;
  font-weight: 900;
  line-height: 1.1;
  white-space: nowrap;
`,Ve=r.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  overflow-wrap: anywhere;
`,Ge=r.section`
  background: var(--card-bg);
  padding: clamp(1.65rem, 3vw, 2.45rem) 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 2.35rem 1.25rem;
  }
`,Le=r.div`
  width: min(100%, 1240px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(20rem, 0.82fr);
  gap: clamp(1rem, 2.6vw, 1.65rem);
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`,Be=r(o.div)`
  grid-column: 1 / -1;
  text-align: left;
  min-width: 0;
  max-width: 720px;

  ${n} {
    font-size: clamp(1.65rem, 3vw, 2.25rem);
  }

  @media (max-width: 820px) {
    text-align: left;
    max-width: 680px;
    margin: 0;
  }
`,Me=r.div`
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
`,$e=r(o.div)`
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
`,qe=r(o.div)`
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
`,De=r.div`
  font-size: clamp(1.45rem, 2.8vw, 2.25rem);
  font-weight: 800;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.55rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`,$=r.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.35;
  overflow-wrap: anywhere;
`,Ae=r.p`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.5;
  margin-top: 0.65rem;
`,Oe=r.div`
  grid-column: 1 / -1;
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  margin-top: 0.25rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Ee=r(o.div)`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  border-radius: 8px;
  background: rgba(var(--accent-amber-rgb), 0.08);
  padding: 1rem;
  min-width: 0;
`,We=r.strong`
  display: block;
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.2;
  margin-bottom: 0.45rem;
`,Ne=r(k)`
  background: var(--background-color);
  padding: clamp(1.65rem, 3vw, 2.45rem) 5%;

  @media (max-width: 600px) {
    padding: 2.4rem 1.25rem;
  }
`,Ye=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.3rem, 2.8vw, 2rem);
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`,Ze=r(o.div)`
  text-align: left;
  min-width: 0;
  max-width: 740px;

  ${n} {
    font-size: clamp(1.7rem, 3vw, 2.35rem);
    text-align: left;
    margin-bottom: 0.65rem;
  }

  @media (max-width: 1100px) {
    text-align: left;
    max-width: 100%;
    margin: 0;

    ${n} {
      margin-bottom: 0.75rem;
    }
  }
`,f=r(o.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto clamp(2rem, 4vw, 3rem);

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
`,m=r.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,x=r.p`
  font-size: 0.95rem;
  line-height: 1.62;
  color: var(--text-secondary);
`,Qe=r.div`
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
`,q=r(o.div)`
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

`,Xe=r.span`
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
`,Je=r.div`
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
`,Ue=r.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.65rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,er=r.p`
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,rr=r.p`
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
`,tr=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${q}:hover & {
    gap: 0.75rem;
  }
`,ir=r(k)`
  background:
    linear-gradient(90deg, rgba(16, 16, 16, 0.95), rgba(16, 16, 16, 0.84)),
    url('/images/kmtech-about-warehouse-hero-1440.webp') center / cover no-repeat;
  padding: clamp(1.75rem, 3.2vw, 2.6rem) 5%;
  color: #fff;

  ${n} {
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 2.4rem 1.25rem;
  }
`,ar=r.div`
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
`,or=r(o.div)`
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
`,nr=r.div`
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
`,sr=r.div`
  flex: 1;
  min-width: 0;
`,cr=r.h4`
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.5rem;
`,dr=r.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
`,lr=r(o.div)`
  text-align: center;
`,mr=r(k)`
  background: var(--background-color);
  padding: clamp(1.6rem, 3vw, 2.35rem) 5%;

  @media (max-width: 600px) {
    padding: 2.35rem 1.25rem;
  }
`,pr=r.div`
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
`,hr=r(o.div)`
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
`,xr=r.div`
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
`,gr=r.span`
  font-size: 0.66rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,br=r.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,wr=r.p`
  font-size: 0.76rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,yr=r.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,ur=r(o.div)`
  color: #c8cdd5;
  font-size: 1.1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,vr=r.section`
  background: var(--background-color);
  padding: clamp(1.65rem, 3vw, 2.55rem) 5%;
  border-top: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 2.35rem 1.25rem;
  }
`,fr=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin: 0 auto;
`,_r=r(o.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.35rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,jr=r.div`
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
`,kr=r.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`,Kr=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`,Sr=r.div`
  width: min(100%, 1000px);
  margin: clamp(1.25rem, 3vw, 2rem) auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,zr=r(j)`
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
`,Pr=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.12);
  color: var(--accent-amber);
`,Rr=r.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.3;
  margin: 0 0 0.45rem;
`,Fr=r.p`
  color: var(--text-secondary);
  font-size: 0.84rem;
  line-height: 1.55;
  margin: 0 0 0.8rem;
`,Ir=r.span`
  color: var(--accent-amber);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 800;
`,Cr=r(o.img).attrs({loading:"lazy",decoding:"async"})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease, background 0.2s ease;
  will-change: transform;
  border-radius: 6px;

  /* White background for logos that need it in dark mode */
  ${i=>i.$needsBg&&`
    html[data-theme="dark"] & {
      background: white;
      padding: 8px 12px;
    }
  `}

  &:hover {
    transform: scale(1.05);
  }
`,Tr=()=>{const{t:i}=Q(),D=c.useRef(null),K=c.useRef(null),S=c.useRef(null),z=c.useRef(null),P=c.useRef(null),R=c.useRef(null),s=d(K,{once:!0,margin:"-50px"}),p=d(S,{once:!0,margin:"-50px"}),F=d(z,{once:!0,margin:"-50px"}),g=d(R,{once:!0,margin:"-50px"}),b=d(P,{once:!0,margin:"-50px"}),w=[{icon:e.jsx(re,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:e.jsx(l,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:e.jsx(te,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:e.jsx(v,{}),titleKey:"metric_qr_system",descKey:"metric_qr_detail"},{icon:e.jsx(G,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"},{icon:e.jsx(L,{}),titleKey:"business_delivery_title",descKey:"business_delivery_summary"}],A=[{icon:e.jsx(l,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc",proofKey:"metric_capacity_detail"},{icon:e.jsx(ae,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc",proofKey:"metric_clean_booth_detail"},{icon:e.jsx(B,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc",proofKey:"metric_rework_detail"},{icon:e.jsx(L,{}),titleKey:"business_delivery_title",descKey:"business_delivery_summary",proofKey:"metric_qr_detail"},{icon:e.jsx(v,{}),titleKey:"home_service_visibility_title",descKey:"home_service_visibility_desc",proofKey:"metric_qr_detail"}],O=[{icon:e.jsx(l,{}),value:"2,140㎡",titleKey:"stats_warehouse_space",descKey:"metric_space_detail"},{icon:e.jsx(v,{}),value:"ERP QR",titleKey:"metric_qr_system",descKey:"metric_qr_detail"},{icon:e.jsx(G,{}),value:"50 Pallet",titleKey:"metric_rework_capacity",descKey:"metric_rework_detail"},{icon:e.jsx(M,{}),value:"16CH",titleKey:"metric_cctv",descKey:"metric_cctv_detail"}],E=[{icon:e.jsx(l,{}),value:"2,140㎡",labelKey:"hero_proof_facility"},{icon:e.jsx(ie,{}),value:"3,000+",labelKey:"hero_proof_capacity"},{icon:e.jsx(B,{}),value:"40ft x2",labelKey:"metric_container_dock"},{icon:e.jsx(M,{}),value:"16CH",labelKey:"metric_cctv"}],W=T.slice(0,3),N=Object.entries(X.reduce((t,a)=>(t[a.industryKey]=t[a.industryKey]||[],t[a.industryKey].push(a),t),{})).map(([t,a])=>({industry:i(t),icon:t==="partners_industry_automotive"?e.jsx(C,{}):e.jsx(J,{}),partners:a})),I=c.useRef(null),y=d(I,{once:!0,margin:"-50px"}),Y=[{to:"/business",icon:e.jsx(l,{}),titleKey:"home_route_business_title",descKey:"home_route_business_desc"},{to:"/partners",icon:e.jsx(C,{}),titleKey:"home_route_partners_title",descKey:"home_route_partners_desc"},{to:"/contact",icon:e.jsx(H,{}),titleKey:"home_route_contact_title",descKey:"home_route_contact_desc"}];return e.jsxs(de,{children:[e.jsx(le,{ref:K,children:e.jsxs(me,{children:[e.jsxs(pe,{initial:{opacity:0,y:30},animate:s?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx(he,{initial:{opacity:0},animate:s?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),e.jsx(xe,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:i("hero_title")}),e.jsx(ge,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:i("hero_subtitle")}),e.jsxs(be,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[e.jsxs(_,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i("hero_primary_cta")," ",e.jsx(u,{})]}),e.jsx(ue,{to:"/business",whileHover:{scale:1.02},whileTap:{scale:.98},children:i("hero_secondary_cta")})]}),e.jsx(we,{initial:{opacity:0},animate:s?{opacity:1}:{},transition:{delay:.7,duration:.5},children:e.jsxs(ye,{href:"mailto:cgpark@kmtechn.com",children:[e.jsx(H,{})," cgpark@kmtechn.com"]})})]}),e.jsxs(ve,{ref:D,initial:{opacity:0,y:18},animate:s?{opacity:1,y:0}:{},transition:{delay:.3,duration:.7},children:[e.jsx(fe,{src:"/images/kmtech-home-network-backdrop.png",srcSet:"/images/kmtech-home-network-backdrop-960.webp 960w, /images/kmtech-home-network-backdrop-1440.webp 1440w, /images/kmtech-home-network-backdrop.png 1672w",sizes:"(max-width: 820px) 100vw, 58vw",alt:"",loading:"eager",decoding:"async"}),e.jsx(je,{children:W.map(t=>e.jsxs(ke,{children:[e.jsx(Ke,{children:i(t.labelKey)}),e.jsx(Se,{children:t.value})]},t.labelKey))}),e.jsx(_e,{children:e.jsx(ce,{})}),e.jsxs(ze,{children:[e.jsx(Pe,{children:i("hero_visual_flow_label")}),e.jsx(Re,{children:w.map(t=>e.jsxs(Fe,{children:[t.icon,e.jsx("span",{children:i(t.titleKey)})]},t.titleKey))})]})]}),e.jsx(Ie,{"aria-label":i("hero_proof_label"),initial:{opacity:1,y:0},animate:{opacity:1,y:0},children:E.map(t=>e.jsxs(Ce,{children:[e.jsx(He,{children:t.icon}),e.jsxs("div",{children:[e.jsx(Te,{children:t.value}),e.jsx(Ve,{children:i(t.labelKey)})]})]},t.labelKey))})]})}),e.jsx(Ne,{ref:z,children:e.jsxs(Ye,{children:[e.jsxs(Ze,{initial:{opacity:0,y:20},animate:F?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(m,{children:i("home_problem_label")}),e.jsx(n,{children:i("home_problem_title")}),e.jsx(x,{children:i("home_problem_desc")})]}),e.jsx(Qe,{children:A.map((t,a)=>e.jsx(j,{to:"/business",style:{textDecoration:"none",height:"100%"},children:e.jsxs(q,{initial:{opacity:0,y:30},animate:F?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.5},children:[e.jsx(Xe,{children:i("home_section_services_label")}),e.jsx(Je,{children:t.icon}),e.jsx(Ue,{children:i(t.titleKey)}),e.jsx(er,{children:i(t.descKey)}),e.jsxs(rr,{children:[e.jsx("strong",{children:i("home_problem_proof_label")}),i(t.proofKey)]}),e.jsxs(tr,{children:[i("home_services_button")," ",e.jsx(V,{})]})]})},t.titleKey))})]})}),e.jsxs(mr,{ref:R,children:[e.jsxs(f,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(m,{children:i("home_section_process_label")}),e.jsx(n,{children:i("process_home_title")}),e.jsx(x,{children:i("process_home_desc")})]}),e.jsx(pr,{children:w.map((t,a)=>e.jsxs(U.Fragment,{children:[e.jsxs(hr,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.45},children:[e.jsx(xr,{children:t.icon}),e.jsxs(yr,{children:[e.jsx(gr,{children:i("process_step_label",{number:a+1})}),e.jsx(br,{children:i(t.titleKey)}),e.jsx(wr,{children:i(t.descKey)})]})]}),a<w.length-1&&e.jsx(ur,{initial:{opacity:0},animate:g?{opacity:1}:{},transition:{delay:a*.1+.08,duration:.3},children:e.jsx(V,{})})]},t.titleKey))})]}),e.jsx(Ge,{ref:S,children:e.jsxs(Le,{children:[e.jsxs(Be,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(m,{children:i("home_facility_label")}),e.jsx(n,{children:i("home_facility_title")}),e.jsx(x,{children:i("home_facility_desc")})]}),e.jsx($e,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{delay:.08,duration:.5},children:e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 1080px) 100vw, 38vw",alt:"KMTech 직산 물류센터 내부",loading:"eager",decoding:"async"})}),e.jsxs(Me,{children:[T.map((t,a)=>e.jsxs(qe,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{delay:a*.08,duration:.5},children:[e.jsx(De,{children:t.value}),e.jsx($,{children:i(t.labelKey)}),e.jsx(Ae,{children:i(t.detailKey)})]},t.labelKey)),e.jsx(Oe,{children:ee.map((t,a)=>e.jsxs(Ee,{initial:{opacity:0,y:16},animate:p?{opacity:1,y:0}:{},transition:{delay:.25+a*.08,duration:.45},children:[e.jsx(We,{children:t.value}),e.jsx($,{children:i(t.detailKey)})]},t.labelKey))})]})]})}),e.jsxs(ir,{ref:P,children:[e.jsxs(f,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(m,{children:i("home_outcome_label")}),e.jsx(n,{children:i("home_strengths_title")})]}),e.jsx(ar,{children:O.map((t,a)=>e.jsxs(or,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.5},children:[e.jsx(nr,{children:t.icon}),e.jsxs(sr,{children:[e.jsx(cr,{children:t.value}),e.jsx(dr,{children:i(t.descKey)})]})]},a))}),e.jsx(lr,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:e.jsxs(_,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i("home_strengths_cta")," ",e.jsx(u,{})]})})]}),e.jsxs(vr,{ref:I,children:[e.jsxs(f,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(m,{children:i("home_section_partners_label")}),e.jsx(n,{children:i("core_customers_title")}),e.jsx(x,{children:i("home_partner_desc")})]}),e.jsx(fr,{children:N.map((t,a)=>e.jsxs(_r,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:a*.15,duration:.5},children:[e.jsxs(jr,{children:[t.icon,e.jsx(kr,{children:t.industry})]}),e.jsx(Kr,{children:t.partners.map((h,Z)=>e.jsx(Cr,{src:h.logo,alt:`${h.name} logo`,$needsBg:h.needsBg,initial:{opacity:0},animate:y?{opacity:1}:{},transition:{delay:a*.15+Z*.05,duration:.4}},h.name))})]},t.industry))}),e.jsx(Sr,{children:Y.map(t=>e.jsxs(zr,{to:t.to,children:[e.jsx(Pr,{children:t.icon}),e.jsxs("div",{children:[e.jsx(Rr,{children:i(t.titleKey)}),e.jsx(Fr,{children:i(t.descKey)}),e.jsxs(Ir,{children:[i("home_route_cta")," ",e.jsx(u,{})]})]})]},t.titleKey))})]})]})};export{Tr as default};
