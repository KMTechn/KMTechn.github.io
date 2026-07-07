import{j as e,d as r,u as N,r as s,a as d,c as Y,F as I,b as Z,e as u,f as V,g as C,S as c,L as _,H,o as q,R as X,m as o,h as J,i as w,k as Q,l as U,n as ee,p as re,q as T,s as te,t as ie,v as j}from"./index-9--Ztt39.js";const ae=r.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`,oe=r.picture`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`,ne=r.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 24px 42px rgba(15, 23, 42, 0.14));
`,se=()=>e.jsx(ae,{"aria-hidden":"true",children:e.jsxs(oe,{children:[e.jsx("source",{type:"image/webp",srcSet:"/images/kmtech-globe-logistics-alpha-640.webp 640w, /images/kmtech-globe-logistics-alpha-960.webp 960w",sizes:"(max-width: 600px) 232px, (max-width: 1120px) 380px, 460px"}),e.jsx(ne,{src:"/images/kmtech-globe-logistics-alpha.png",alt:"",loading:"eager",decoding:"async"})]})}),ce=r.div`
  width: 100%;
  overflow-x: hidden;
`,de=r.section`
  min-height: auto;
  padding: clamp(2.6rem, 5vh, 3.6rem) clamp(1rem, 4vw, 4.5rem) clamp(0.8rem, 2vh, 1.25rem);
  background:
    radial-gradient(circle at 77% 18%, rgba(var(--accent-amber-rgb), 0.13), transparent 23rem),
    linear-gradient(180deg, #f8f9fb 0%, var(--background-color) 100%);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  }

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 3.25rem 5% 3rem;
  }

  @media (max-width: 600px) {
    padding: 3.35rem 1.25rem 2.25rem;
  }
`,le=r.div`
  width: min(100%, 1560px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(22rem, 0.62fr) minmax(32rem, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
  }
`,me=r(o.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  min-width: 0;
  width: 100%;

  @media (max-width: 1120px) {
    align-items: center;
    order: 1;
  }
`,pe=r(o.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`,he=r(o.h1)`
  font-size: clamp(2.7rem, 4.1vw, 3.65rem);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 1.5rem;
  max-width: 650px;
  width: 100%;
  color: var(--text-color);
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: clamp(2.1rem, 10vw, 2.75rem);
    margin-bottom: 1rem;
  }
`,xe=r(o.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  width: 100%;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,ge=r(o.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1120px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,be=r(o.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
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
`,f=r(o(_))`
  padding: 1rem 2rem;
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
  min-height: 48px;
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
`,ue=r(f)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`,we=r(o.div)`
  height: clamp(28rem, 38vw, 34rem);
  width: 100%;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(238, 242, 247, 0.92)),
    radial-gradient(circle at 64% 44%, rgba(var(--accent-amber-rgb), 0.16), transparent 16rem);
  box-shadow: 0 26px 70px rgba(15, 23, 42, 0.14);
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

  @media (max-width: 1120px) {
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
`,ve=r.img`
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
`,fe=r.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  left: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  text-align: left;
`,_e=r.div`
  color: #253046;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`,je=r.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.35;
  font-weight: 600;
`,ke=r.div`
  position: absolute;
  right: clamp(0.6rem, 2.2vw, 1.4rem);
  bottom: clamp(4.1rem, 6vw, 5.4rem);
  width: clamp(15rem, 28vw, 25rem);
  height: clamp(15rem, 28vw, 25rem);
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
`,Ke=r.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  display: grid;
  gap: 0.5rem;
  width: min(30%, 13rem);

  @media (max-width: 720px) {
    display: none;
  }
`,ze=r.div`
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
`,Se=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  line-height: 1.25;
`,Pe=r.strong`
  color: #111827;
  font-size: 0.95rem;
  line-height: 1;
  white-space: nowrap;
`,Re=r.div`
  position: absolute;
  left: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  bottom: clamp(1rem, 2vw, 1.35rem);
  z-index: 4;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  padding: clamp(0.75rem, 1.5vw, 1rem);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
`,Fe=r.div`
  color: #253046;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
  text-align: left;
`,Ie=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ve=r.div`
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
`,Ce=r(o.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7.5rem), 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 620px;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`,He=r.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(var(--card-bg-rgb, 255, 255, 255), 0.64);
  padding: 0.85rem;
  min-width: 0;
`,Te=r.div`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
`,Ge=r.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  overflow-wrap: anywhere;
`,Le=r.section`
  background: var(--card-bg);
  padding: clamp(3.5rem, 6vw, 5.5rem) 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 3rem 1.25rem;
  }
`,Be=r.div`
  width: min(100%, 1240px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 2.5rem);
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`,Me=r(o.div)`
  text-align: left;
  min-width: 0;

  ${c} {
    font-size: clamp(1.65rem, 3vw, 2.25rem);
  }

  @media (max-width: 920px) {
    text-align: center;
    max-width: 680px;
    margin: 0 auto;
  }
`,De=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,$e=r(o.div)`
  text-align: left;
  padding: 1.15rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  min-width: 0;
`,Oe=r.div`
  font-size: clamp(1.45rem, 2.8vw, 2.25rem);
  font-weight: 800;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.55rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`,G=r.div`
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
`,We=r.div`
  grid-column: 1 / -1;
  display: grid;
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
`,Ne=r.strong`
  display: block;
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.2;
  margin-bottom: 0.45rem;
`,Ye=r(j)`
  background: var(--background-color);
  padding: clamp(2.4rem, 4vw, 3.5rem) 5% 5.5rem;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,Ze=r.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.34fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,qe=r(o.div)`
  text-align: left;
  min-width: 0;

  ${c} {
    font-size: clamp(1.7rem, 3vw, 2.4rem);
  }

  @media (max-width: 980px) {
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
  }
`,v=r(o.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
`,l=r.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`,p=r.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,Xe=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.85rem, 1.4vw, 1.1rem);
  min-width: 0;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,L=r(o.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.15rem, 2vw, 1.4rem);
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

`,Je=r.span`
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
  margin-bottom: 0.85rem;
`,Qe=r.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`,Ue=r.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,er=r.p`
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.9rem;
  flex-grow: 1;
`,rr=r.p`
  color: var(--text-color);
  font-size: 0.8rem;
  line-height: 1.45;
  margin-bottom: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-color);

  strong {
    color: var(--accent-amber);
    font-size: 0.74rem;
    margin-right: 0.35rem;
  }
`,tr=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${L}:hover & {
    gap: 0.75rem;
  }
`,ir=r(j)`
  background: var(--card-bg);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,ar=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1200px;
  margin: 0 auto 3rem;
`,or=r(o.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  min-width: 0;
  will-change: transform;
  transform: translateZ(0);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
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
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`,dr=r.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,lr=r(o.div)`
  text-align: center;
`,mr=r(j)`
  background: var(--background-color);
  padding: 7rem 5%;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`,pr=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;

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
  min-width: 140px;
  max-width: 200px;

  @media (max-width: 768px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
    text-align: left;
    gap: 1rem;
    padding: 1rem 0;
  }
`,xr=r.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 1rem;
  flex-shrink: 0;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    margin-bottom: 0;
  }
`,gr=r.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,br=r.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`,yr=r.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`,ur=r.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`,wr=r(o.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`,vr=r.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 4rem 1.25rem;
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
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`,jr=r.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
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
`,zr=r.div`
  width: min(100%, 1000px);
  margin: clamp(1.25rem, 3vw, 2rem) auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,Sr=r(_)`
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
`,Vr=r(o.img).attrs({loading:"lazy",decoding:"async"})`
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
`,Hr=()=>{const{t:i}=N(),B=s.useRef(null),k=s.useRef(null),K=s.useRef(null),z=s.useRef(null),S=s.useRef(null),P=s.useRef(null),n=d(k,{once:!0,margin:"-50px"}),h=d(K,{once:!0,margin:"-50px"}),R=d(z,{once:!0,margin:"-50px"}),x=d(P,{once:!0,margin:"-50px"}),g=d(S,{once:!0,margin:"-50px"}),b=[{icon:e.jsx(J,{}),titleKey:"process_home_step1_title",descKey:"process_home_step1_desc"},{icon:e.jsx(w,{}),titleKey:"process_home_step2_title",descKey:"process_home_step2_desc"},{icon:e.jsx(Q,{}),titleKey:"process_home_step3_title",descKey:"process_home_step3_desc"},{icon:e.jsx(U,{}),titleKey:"process_home_step4_title",descKey:"process_home_step4_desc"}],M=[{icon:e.jsx(w,{}),titleKey:"home_service_warehouse_title",descKey:"home_service_warehouse_desc",proofKey:"metric_capacity_detail"},{icon:e.jsx(ee,{}),titleKey:"home_service_inspection_title",descKey:"home_service_inspection_desc",proofKey:"metric_clean_booth_detail"},{icon:e.jsx(re,{}),titleKey:"home_service_packaging_title",descKey:"home_service_packaging_desc",proofKey:"metric_rework_detail"},{icon:e.jsx(T,{}),titleKey:"business_delivery_title",descKey:"business_delivery_summary",proofKey:"metric_qr_detail"}],D=[{icon:e.jsx(te,{}),titleKey:"strong_point_2_title",descKey:"strong_point_2_desc"},{icon:e.jsx(T,{}),titleKey:"strong_point_5_title",descKey:"strong_point_5_desc"},{icon:e.jsx(ie,{}),titleKey:"strong_point_6_title",descKey:"strong_point_6_desc"}],$=[{value:"2,140㎡",labelKey:"hero_proof_facility"},{value:"3,000+",labelKey:"hero_proof_capacity"},{value:"40ft x2",labelKey:"metric_container_dock"},{value:"16CH",labelKey:"metric_cctv"}],O=C.slice(0,3),A=Object.entries(Y.reduce((t,a)=>(t[a.industryKey]=t[a.industryKey]||[],t[a.industryKey].push(a),t),{})).map(([t,a])=>({industry:i(t),icon:t==="partners_industry_automotive"?e.jsx(I,{}):e.jsx(Z,{}),partners:a})),F=s.useRef(null),y=d(F,{once:!0,margin:"-50px"}),W=[{to:"/business",icon:e.jsx(w,{}),titleKey:"home_route_business_title",descKey:"home_route_business_desc"},{to:"/partners",icon:e.jsx(I,{}),titleKey:"home_route_partners_title",descKey:"home_route_partners_desc"},{to:"/contact",icon:e.jsx(V,{}),titleKey:"home_route_contact_title",descKey:"home_route_contact_desc"}];return e.jsxs(ce,{children:[e.jsx(de,{ref:k,children:e.jsxs(le,{children:[e.jsxs(me,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx(pe,{initial:{opacity:0},animate:n?{opacity:1}:{},transition:{delay:.2},children:"Global 3PL Solutions"}),e.jsx(he,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{delay:.3,duration:.6},children:i("hero_title")}),e.jsx(xe,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{delay:.4,duration:.6},children:i("hero_subtitle")}),e.jsxs(ge,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{delay:.5,duration:.6},children:[e.jsxs(f,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i("hero_primary_cta")," ",e.jsx(u,{})]}),e.jsx(ue,{to:"/business",whileHover:{scale:1.02},whileTap:{scale:.98},children:i("hero_secondary_cta")})]}),e.jsx(Ce,{"aria-label":i("hero_proof_label"),initial:{opacity:0,y:16},animate:n?{opacity:1,y:0}:{},transition:{delay:.6,duration:.5},children:$.map(t=>e.jsxs(He,{children:[e.jsx(Te,{children:t.value}),e.jsx(Ge,{children:i(t.labelKey)})]},t.labelKey))}),e.jsx(be,{initial:{opacity:0},animate:n?{opacity:1}:{},transition:{delay:.7,duration:.5},children:e.jsxs(ye,{href:"mailto:cgpark@kmtechn.com",children:[e.jsx(V,{})," cgpark@kmtechn.com"]})})]}),e.jsxs(we,{ref:B,initial:{opacity:0,y:18},animate:n?{opacity:1,y:0}:{},transition:{delay:.3,duration:.7},children:[e.jsx(ve,{src:"/images/kmtech-home-network-backdrop.png",srcSet:"/images/kmtech-home-network-backdrop-960.webp 960w, /images/kmtech-home-network-backdrop-1440.webp 1440w, /images/kmtech-home-network-backdrop.png 1672w",sizes:"(max-width: 1120px) 100vw, 58vw",alt:"",loading:"eager",decoding:"async"}),e.jsxs(fe,{children:[e.jsx(_e,{children:i("hero_visual_label")}),e.jsx(je,{children:i("hero_visual_network")})]}),e.jsx(Ke,{children:O.map(t=>e.jsxs(ze,{children:[e.jsx(Se,{children:i(t.labelKey)}),e.jsx(Pe,{children:t.value})]},t.labelKey))}),e.jsx(ke,{children:e.jsx(se,{})}),e.jsxs(Re,{children:[e.jsx(Fe,{children:i("hero_visual_flow_label")}),e.jsx(Ie,{children:b.map(t=>e.jsxs(Ve,{children:[t.icon,e.jsx("span",{children:i(t.titleKey)})]},t.titleKey))})]})]})]})}),e.jsx(Ye,{ref:z,children:e.jsxs(Ze,{children:[e.jsxs(qe,{initial:{opacity:0,y:20},animate:R?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(l,{children:i("home_problem_label")}),e.jsx(c,{children:i("home_problem_title")}),e.jsx(p,{children:i("home_problem_desc")})]}),e.jsx(Xe,{children:M.map((t,a)=>e.jsx(_,{to:"/business",style:{textDecoration:"none",height:"100%"},children:e.jsxs(L,{initial:{opacity:0,y:30},animate:R?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.5},children:[e.jsx(Je,{children:i("home_section_services_label")}),e.jsx(Qe,{children:t.icon}),e.jsx(Ue,{children:i(t.titleKey)}),e.jsx(er,{children:i(t.descKey)}),e.jsxs(rr,{children:[e.jsx("strong",{children:i("home_problem_proof_label")}),i(t.proofKey)]}),e.jsxs(tr,{children:[i("home_services_button")," ",e.jsx(H,{})]})]})},t.titleKey))})]})}),e.jsx(Le,{ref:K,children:e.jsxs(Be,{children:[e.jsxs(Me,{initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(l,{children:i("home_facility_label")}),e.jsx(c,{children:i("home_facility_title")}),e.jsx(p,{children:i("home_facility_desc")})]}),e.jsxs(De,{children:[C.map((t,a)=>e.jsxs($e,{initial:{opacity:0,y:20},animate:h?{opacity:1,y:0}:{},transition:{delay:a*.08,duration:.5},children:[e.jsx(Oe,{children:t.value}),e.jsx(G,{children:i(t.labelKey)}),e.jsx(Ae,{children:i(t.detailKey)})]},t.labelKey)),e.jsx(We,{children:q.map((t,a)=>e.jsxs(Ee,{initial:{opacity:0,y:16},animate:h?{opacity:1,y:0}:{},transition:{delay:.25+a*.08,duration:.45},children:[e.jsx(Ne,{children:t.value}),e.jsx(G,{children:i(t.detailKey)})]},t.labelKey))})]})]})}),e.jsxs(mr,{ref:P,children:[e.jsxs(v,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(l,{children:i("home_section_process_label")}),e.jsx(c,{children:i("process_home_title")}),e.jsx(p,{children:i("process_home_desc")})]}),e.jsx(pr,{children:b.map((t,a)=>e.jsxs(X.Fragment,{children:[e.jsxs(hr,{initial:{opacity:0,y:20},animate:x?{opacity:1,y:0}:{},transition:{delay:a*.15,duration:.5},children:[e.jsx(xr,{children:t.icon}),e.jsxs(ur,{children:[e.jsx(gr,{children:i("process_step_label",{number:a+1})}),e.jsx(br,{children:i(t.titleKey)}),e.jsx(yr,{children:i(t.descKey)})]})]}),a<b.length-1&&e.jsx(wr,{initial:{opacity:0},animate:x?{opacity:1}:{},transition:{delay:a*.15+.1,duration:.3},children:e.jsx(H,{})})]},t.titleKey))})]}),e.jsxs(ir,{ref:S,children:[e.jsxs(v,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(l,{children:i("home_outcome_label")}),e.jsx(c,{children:i("home_strengths_title")})]}),e.jsx(ar,{children:D.map((t,a)=>e.jsxs(or,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:a*.1,duration:.5},children:[e.jsx(nr,{children:t.icon}),e.jsxs(sr,{children:[e.jsx(cr,{children:i(t.titleKey)}),e.jsx(dr,{children:i(t.descKey)})]})]},a))}),e.jsx(lr,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{delay:.4,duration:.5},children:e.jsxs(f,{to:"/contact",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i("home_strengths_cta")," ",e.jsx(u,{})]})})]}),e.jsxs(vr,{ref:F,children:[e.jsxs(v,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{duration:.5},children:[e.jsx(l,{children:i("home_section_partners_label")}),e.jsx(c,{children:i("core_customers_title")}),e.jsx(p,{children:i("home_partner_desc")})]}),e.jsx(fr,{children:A.map((t,a)=>e.jsxs(_r,{initial:{opacity:0,y:20},animate:y?{opacity:1,y:0}:{},transition:{delay:a*.15,duration:.5},children:[e.jsxs(jr,{children:[t.icon,e.jsx(kr,{children:t.industry})]}),e.jsx(Kr,{children:t.partners.map((m,E)=>e.jsx(Vr,{src:m.logo,alt:`${m.name} logo`,$needsBg:m.needsBg,initial:{opacity:0},animate:y?{opacity:1}:{},transition:{delay:a*.15+E*.05,duration:.4}},m.name))})]},t.industry))}),e.jsx(zr,{children:W.map(t=>e.jsxs(Sr,{to:t.to,children:[e.jsx(Pr,{children:t.icon}),e.jsxs("div",{children:[e.jsx(Rr,{children:i(t.titleKey)}),e.jsx(Fr,{children:i(t.descKey)}),e.jsxs(Ir,{children:[i("home_route_cta")," ",e.jsx(u,{})]})]})]},t.titleKey))})]})]})};export{Hr as default};
