import{u as N,j as e,i as p,v as w,q as a,p as Y,e as g,g as u,x,o as j,d as r,m as d,t as o,y as v,z as W,A as _,B as k,h as n,s as $,F as J,b as U,C as X,L as Z,w as b}from"./index-GDhbjks3.js";const ee=r.div`
  color: var(--text-color);
  overflow-x: hidden;
  background: var(--background-color);
`,re=r.section`
  padding: clamp(3.2rem, 5vw, 4.3rem) clamp(1rem, 4vw, 3rem) clamp(1.2rem, 2.4vw, 1.7rem);
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 43%, rgba(255, 255, 255, 0.55) 62%, rgba(255, 255, 255, 0.08) 100%),
    image-set(
      url('/images/kmtech-about-warehouse-hero-960.webp') 1x type('image/webp'),
      url('/images/kmtech-about-warehouse-hero-1440.webp') 2x type('image/webp'),
      url('/images/kmtech-about-warehouse-hero.png') 2x type('image/png')
    ) right top / min(68%, 930px) clamp(300px, 35vw, 430px) no-repeat,
    #fff;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-top: 5.25rem;
  }
`,ie=r.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  gap: clamp(1.05rem, 2vw, 1.55rem);
`,te=r.div`
  display: grid;
  grid-template-columns: minmax(22rem, 0.48fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 3vw, 2.25rem);
  align-items: center;
  min-height: clamp(250px, 31vw, 390px);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,se=r(d.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding-block: clamp(0.5rem, 2vw, 1rem);
`,ae=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent-amber);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`,ne=r.h1`
  color: var(--text-color);
  font-size: clamp(2.1rem, 3.75vw, 3.05rem);
  line-height: 1.08;
  margin-bottom: 1.15rem;
  letter-spacing: 0;
  word-break: keep-all;
  overflow-wrap: normal;
  max-width: 10.6em;

  @media (max-width: 520px) {
    font-size: clamp(2.2rem, 11vw, 3rem);
  }
`,oe=r.p`
  color: #394150;
  font-size: clamp(1rem, 1.25vw, 1.12rem);
  line-height: 1.62;
  max-width: 36rem;
  margin-bottom: 1.35rem;
  word-break: keep-all;
`,ce=r.div`
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.35rem;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,le=r.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 0.65rem;
  align-items: center;
  min-width: 0;
`,de=r.div`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.45);
  background: rgba(var(--accent-amber-rgb), 0.08);
`,me=r.strong`
  color: var(--text-color);
  display: block;
  font-size: 0.86rem;
  line-height: 1.3;
  word-break: keep-all;
`,pe=r.span`
  color: var(--text-secondary);
  display: block;
  font-size: 0.74rem;
  line-height: 1.35;
  margin-top: 0.1rem;
  word-break: keep-all;
`,ge=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,f=r(Z)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 48px;
  padding: 0.78rem 1.15rem;
  border-radius: 8px;
  background: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  color: #121212;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    color: #121212;
    background: #e6b800;
    transform: translateY(-2px);
  }
`,xe=r(f)`
  background: #fff;
  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    color: var(--text-color);
    background: #fff;
    border-color: rgba(var(--accent-amber-rgb), 0.6);
  }
`,he=r(d.div)`
  display: none;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: clamp(0.85rem, 1.6vw, 1.1rem);
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  min-width: 0;
  display: none;
  grid-template-columns: minmax(15rem, 0.74fr) minmax(0, 1fr);
  gap: 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`,be=r.div`
  min-width: 0;
  display: grid;
  gap: 0.9rem;
  padding-right: clamp(0.9rem, 2vw, 1.2rem);
  border-right: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-right: 0;
    border-right: 0;
  }
`,K=r.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.85rem;
  min-width: 0;
`,z=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
`,C=r.h2`
  color: var(--text-color);
  font-size: 1.02rem;
  line-height: 1.25;
  margin: 0;
`,F=r.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  white-space: nowrap;
`,ue=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`,ve=r.div`
  min-height: 82px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  padding: 0.85rem;
  display: grid;
  gap: 0.35rem;

  svg {
    color: var(--accent-amber);
    font-size: 1.2rem;
  }
`,_e=r.strong`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  line-height: 1;
  overflow-wrap: anywhere;
  white-space: nowrap;
`,ye=r.span`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.35;
`,fe=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,we=r.div`
  min-height: 70px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.65rem;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 0.35rem;

  svg {
    color: var(--text-color);
    font-size: 1.35rem;
  }
`,je=r.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.25;
  word-break: keep-all;
`,ke=r.div`
  position: relative;
  min-height: clamp(18rem, 30vw, 23rem);
  border: 0;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  background: #111;

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    padding: 0;
    display: block;
    filter: none;
  }

  @media (max-width: 760px) {
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }
`,Ke=r.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: grid;
  gap: 0.35rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    display: none;
  }
`,S=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.3;
  word-break: keep-all;
  white-space: nowrap;

  &::before {
    content: '';
    width: 22px;
    height: 3px;
    border-radius: 8px;
    background: var(--accent-amber);
  }
`,ze=r(d.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.85rem, 1.7vw, 1.1rem);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Ce=r(d.article)`
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0;
  min-width: 0;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 0;
  align-items: start;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.65);
    box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  }

  & > div:last-child {
    min-width: 0;
    padding: 1rem 1rem 1rem 0.4rem;
  }
`,Fe=r.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #121212;
  background: rgba(var(--accent-amber-rgb), 0.2);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.4);

  margin: 1rem 0 0 1rem;

  svg {
    font-size: 1.05rem;
  }
`,Se=r.h3`
  font-size: 1.05rem;
  color: var(--text-color);
  margin: 0 0 0.55rem;
  line-height: 1.25;
`,Te=r.p`
  display: none;
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 0.85rem;
`,Ie=r.div`
  width: 100%;
  height: clamp(92px, 11vw, 124px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: var(--background-color);
  margin: 0.45rem 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Me=r.ul`
  list-style: none;
  display: none;
  gap: 0.4rem;
  margin: 0 0 0.9rem;
  padding: 0;

  li {
    display: flex;
    gap: 0.45rem;
    color: var(--text-color);
    font-size: 0.82rem;
    line-height: 1.45;
    min-width: 0;
  }

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
    margin-top: 0.17rem;
  }
`,Pe=r.div`
  display: grid;
  gap: 0;
  margin-top: 0.75rem;
  border-top: 1px solid var(--border-color);
`,Le=r.div`
  display: grid;
  grid-template-columns: 5.2rem minmax(0, 1fr);
  gap: 0.65rem;
  align-items: start;
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.45;
  min-width: 0;
  padding: 0.62rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
`,Ae=r.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.4;
`,He=r.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 16px 46px rgba(15, 23, 42, 0.12);
  overflow: hidden;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ee=r.div`
  width: min(100%, 1180px);
  margin: clamp(1.15rem, 2.4vw, 1.7rem) auto 0;
  display: grid;
  gap: 0.35rem;
  text-align: left;

  h2 {
    color: var(--text-color);
    font-size: clamp(1.35rem, 2.6vw, 1.8rem);
    line-height: 1.2;
    margin: 0;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.55;
    margin: 0;
  }
`,Re=r.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: center;
  padding: 1.05rem clamp(0.9rem, 2vw, 1.25rem);
  min-width: 0;
  border-right: 1px solid var(--border-color);
  border-bottom: 0;

  &:last-child {
    border-right: 0;
  }
`,Ge=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  background: rgba(var(--accent-amber-rgb), 0.12);

  svg {
    font-size: 1.35rem;
  }
`,Be=r.div`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 900;
  line-height: 1.05;
  overflow-wrap: anywhere;
  white-space: nowrap;
`,T=r.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.25rem;
`,Ve=r(b)`
  background: var(--card-bg);
`,y=r.div`
  width: min(100%, 760px);
  margin: 0 auto clamp(1.35rem, 3vw, 2rem);
  text-align: center;
`,c=r.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`,l=r.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.45rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: 0;
`,h=r.p`
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto;
`,De=r.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,qe=r(d.article)`
  position: relative;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.72rem;
  min-height: 112px;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-width: 0;
`,Oe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
`,Qe=r.span`
  color: var(--accent-amber);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Ne=r.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.1);
  color: var(--accent-amber);
  flex: 0 0 auto;
`,Ye=r.h3`
  font-size: 0.88rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`,We=r.p`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.45;
  margin: 0;
`,$e=r(b)`
  background: var(--background-color);
`,Je=r.div`
  width: min(100%, 1120px);
  margin: 0 auto clamp(1rem, 2.5vw, 1.6rem);
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ue=r.article`
  min-height: 112px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.95rem;
  display: grid;
  gap: 0.45rem;

  svg {
    color: var(--text-color);
    font-size: 1rem;
  }

  strong {
    color: var(--text-color);
    font-size: 0.86rem;
    line-height: 1.35;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.74rem;
    line-height: 1.42;
  }
`,Xe=r.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-radius: 8px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(14, 14, 14, 0.88), rgba(14, 14, 14, 0.72)),
    url('/images/kmtech-about-warehouse-hero-1440.webp') center / cover no-repeat;
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ze=r.div`
  min-height: 104px;
  padding: 1rem;
  display: grid;
  align-content: center;
  gap: 0.3rem;
  border-right: 1px solid rgba(255, 255, 255, 0.16);

  strong {
    color: #fff;
    font-size: clamp(1rem, 2vw, 1.45rem);
    line-height: 1;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.78rem;
    line-height: 1.3;
  }
`,er=r(b)`
  background: var(--background-color);
`,rr=r.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,ir=r.article`
  min-height: 126px;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  align-content: start;
  gap: 0.55rem;
  min-width: 0;

  svg {
    color: var(--text-color);
    font-size: 1.15rem;
  }

  strong {
    color: var(--text-color);
    font-size: 0.95rem;
    line-height: 1.35;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.78rem;
    line-height: 1.5;
  }
`,tr=r.div`
  width: min(100%, 1120px);
  margin: clamp(1.2rem, 3vw, 1.8rem) auto 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.8rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,sr=r.article`
  display: grid;
  gap: 0.65rem;
  min-width: 0;
`,ar=r.div`
  height: clamp(92px, 10vw, 124px);
  border-radius: 8px;
  overflow: hidden;
  background: var(--background-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,nr=r.strong`
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.35;
`,or=r.span`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.45;
`,cr=r(b)`
  background:
    radial-gradient(circle at 80% 0%, rgba(var(--accent-amber-rgb), 0.12), transparent 24rem),
    var(--card-bg);
  border-top: 1px solid var(--border-color);
`,lr=r.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 2rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,dr=r.div`
  ${l} {
    margin-bottom: 0.85rem;
  }
`,mr=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,pr=r.article`
  min-height: 132px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.8rem;
  align-items: start;
`,gr=r.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  background: rgba(var(--accent-amber-rgb), 0.11);
`,xr=r.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.35;
  margin: 0 0 0.45rem;
`,hr=r.p`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
`,br=r.div`
  grid-column: 2;
  border: 1px solid rgba(var(--accent-amber-rgb), 0.36);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(var(--accent-amber-rgb), 0.16), rgba(var(--accent-amber-rgb), 0.04));
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 820px) {
    grid-column: auto;
    align-items: stretch;
    flex-direction: column;
  }
`,ur=r.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.55;

  strong {
    display: block;
    color: var(--text-color);
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`,vr={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06}}},I={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.35,ease:"easeOut"}}},yr=()=>{const{t}=N(),m=i=>{const s=t(i,{returnObjects:!0});return Array.isArray(s)?s:[s]},M=[{icon:e.jsx(o,{}),titleKey:"business_feature_accuracy_title",descKey:"business_feature_accuracy_desc"},{icon:e.jsx(v,{}),titleKey:"business_feature_trace_title",descKey:"business_feature_trace_desc"},{icon:e.jsx(W,{}),titleKey:"business_feature_flexible_title",descKey:"business_feature_flexible_desc"}],P=[{icon:e.jsx(p,{}),image:"/images/kmtech-about-warehouse-hero-960.webp",title:t("tpl_warehouse_title"),descKey:"business_warehouse_summary",items:m("tpl_warehouse_items").slice(0,3),facts:["business_warehouse_target","business_warehouse_operation","business_warehouse_output"]},{icon:e.jsx(w,{}),image:"/images/kmtech-business-inspection-v2-960.webp",title:t("tpl_inspection_title"),descKey:"business_inspection_summary",items:m("tpl_inspection_items").slice(0,3),facts:["business_inspection_target","business_inspection_operation","business_inspection_output"]},{icon:e.jsx(a,{}),image:"/images/kmtech-business-packaging-v2-960.webp",title:t("tpl_packaging_title"),descKey:"business_packaging_summary",items:m("tpl_packaging_items").slice(0,3),facts:["business_packaging_target","business_packaging_operation","business_packaging_output"]},{icon:e.jsx(Y,{}),image:"/images/kmtech-business-outbound-v2-960.webp",title:t("business_delivery_title"),descKey:"business_delivery_summary",items:m("business_delivery_items").slice(0,3),facts:["business_delivery_target","business_delivery_operation","business_delivery_output"]}],L=[{icon:e.jsx(n,{}),labelKey:"process_step_1_title"},{icon:e.jsx(w,{}),labelKey:"process_step_5_title"},{icon:e.jsx(p,{}),labelKey:"process_step_3_title"},{icon:e.jsx(a,{}),labelKey:"process_step_7_title"}],A=[{icon:e.jsx(p,{}),titleKey:"process_step_1_title",descKey:"process_step_1_desc"},{icon:e.jsx(n,{}),titleKey:"process_step_2_title",descKey:"process_step_2_desc"},{icon:e.jsx(a,{}),titleKey:"process_step_3_title",descKey:"process_step_3_desc"},{icon:e.jsx($,{}),titleKey:"process_step_4_title",descKey:"process_step_4_desc"},{icon:e.jsx(x,{}),titleKey:"process_step_5_title",descKey:"process_step_5_desc"},{icon:e.jsx(v,{}),titleKey:"process_step_6_title",descKey:"process_step_6_desc"},{icon:e.jsx(a,{}),titleKey:"process_step_7_title",descKey:"process_step_7_desc"},{icon:e.jsx(g,{}),titleKey:"process_step_8_title",descKey:"process_step_8_desc"}],H=[e.jsx(_,{}),e.jsx(k,{}),e.jsx(n,{}),e.jsx(o,{})],E=u,R=[e.jsx(_,{}),e.jsx(k,{}),e.jsx(n,{}),e.jsx(o,{})],G=[{icon:e.jsx(p,{}),title:"3,000 Class 클린 보관 환경",text:"전자·부품 검수와 보관 작업 대응"},{icon:e.jsx(v,{}),title:"ERP QR 기반 입출고 관리",text:"실시간 재고/위치/이력 데이터 연동"},{icon:e.jsx(n,{}),title:"40ft 컨테이너 2대 동시 하역",text:"대량 입고와 리드타임 단축"},{icon:e.jsx(o,{}),title:"16채널 CCTV 24시간 보안",text:"상시 녹화 및 출입 통제"},{icon:e.jsx(a,{}),title:"50 Pallet 동시 재포장 대응",text:"대량 해체·소분·라벨링 가능"},{icon:e.jsx(x,{}),title:"표준 운영 리포트",text:"검수·출고 결과를 기준화"}],B=[...u,j[0],j[2]],V=["business_module_target","business_module_operation","business_module_output"],D=[{icon:e.jsx(a,{}),titleKey:"business_consult_check_volume_title",descKey:"business_consult_check_volume_desc"},{icon:e.jsx(_,{}),titleKey:"business_consult_check_product_title",descKey:"business_consult_check_product_desc"},{icon:e.jsx(x,{}),titleKey:"business_consult_check_quality_title",descKey:"business_consult_check_quality_desc"},{icon:e.jsx(n,{}),titleKey:"business_consult_check_delivery_title",descKey:"business_consult_check_delivery_desc"}],q=[{icon:e.jsx(J,{}),title:"자동차·부품",text:"부품, A/S부품, 모듈성 제품 보관 및 납품 관리"},{icon:e.jsx(U,{}),title:"전자·전기",text:"디스플레이, 보드, 전장품 입고와 검수 표준 관리"},{icon:e.jsx(X,{}),title:"기계·설비",text:"부품, 공구, 자재 프로젝트성 출고 관리"},{icon:e.jsx(a,{}),title:"소비재·유통",text:"소분, 합포장, 재포장과 단기 물량 대응"},{icon:e.jsx(o,{}),title:"의료·헬스케어",text:"오염 방지와 추적성 중심 보관 기준"}],O=[{image:"/images/kmtech-about-warehouse-hero-960.webp",title:"3,000+ Class 보관",text:"랙 기반 대량 보관과 위치 관리"},{image:"/images/kmtech-business-inspection-v2-960.webp",title:"검수·입고 기록",text:"태블릿 기반 확인과 작업 이력 축적"},{image:"/images/kmtech-business-control-desk-v2-960.webp",title:"ERP QR 관제",text:"재고와 작업 흐름을 데이터로 관리"},{image:"/images/kmtech-business-packaging-v2-960.webp",title:"포장·재작업",text:"소분, 라벨링, 합포장 작업 대응"},{image:"/images/kmtech-business-outbound-v2-960.webp",title:"출고 준비",text:"상차와 배송 준비 흐름 지원"}];return e.jsxs(ee,{children:[e.jsx(re,{children:e.jsxs(ie,{children:[e.jsxs(te,{children:[e.jsxs(se,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45},children:[e.jsx(ae,{children:t("business_hero_label")}),e.jsx(ne,{children:t("business_title")}),e.jsx(oe,{children:"보관, 검수, 재포장, 출고·배송까지 고객의 물류 프로세스 전반을 최적화합니다."}),e.jsx(ce,{children:M.map(i=>e.jsxs(le,{children:[e.jsx(de,{children:i.icon}),e.jsxs("div",{children:[e.jsx(me,{children:t(i.titleKey)}),e.jsx(pe,{children:t(i.descKey)})]})]},i.titleKey))}),e.jsxs(ge,{children:[e.jsxs(f,{to:"/contact",children:[t("business_consult_cta")," ",e.jsx(g,{})]}),e.jsxs(xe,{to:"/partners",children:[t("business_partner_cta")," ",e.jsx(g,{})]})]})]}),e.jsxs(he,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:.15,duration:.45},children:[e.jsxs(be,{children:[e.jsxs(K,{children:[e.jsxs(z,{children:[e.jsx(C,{children:t("business_facility_snapshot")}),e.jsx(F,{children:t("business_actual_data_label")})]}),e.jsx(ue,{children:u.slice(0,4).map((i,s)=>e.jsxs(ve,{children:[H[s],e.jsx(_e,{children:i.value}),e.jsx(ye,{children:t(i.labelKey)})]},i.labelKey))})]}),e.jsxs(K,{children:[e.jsxs(z,{children:[e.jsx(C,{children:t("business_flow_label")}),e.jsx(F,{children:t("tpl_work_process_title")})]}),e.jsx(fe,{children:L.map(i=>e.jsxs(we,{children:[i.icon,e.jsx(je,{children:t(i.labelKey)})]},i.labelKey))})]})]}),e.jsxs(ke,{children:[e.jsx("img",{src:"/images/kmtech-about-warehouse-hero.png",srcSet:"/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w",sizes:"(max-width: 760px) 100vw, 46vw",alt:"",loading:"eager",decoding:"async",fetchPriority:"high"}),e.jsxs(Ke,{children:[e.jsx(S,{children:t("business_facility_snapshot")}),e.jsx(S,{children:t("business_actual_data_label")})]})]})]})]}),e.jsx(He,{children:E.map((i,s)=>e.jsxs(Re,{children:[e.jsx(Ge,{children:R[s]}),e.jsxs("div",{children:[e.jsx(Be,{children:i.value}),e.jsx(T,{children:t(i.labelKey)}),e.jsx(T,{children:t(i.detailKey)})]})]},i.labelKey))}),e.jsxs(Ee,{children:[e.jsx(c,{children:t("business_services_label")}),e.jsx("h2",{children:"처리 업무 모듈"}),e.jsx("p",{children:"고객사의 물류 업무에 맞춰 필요한 운영만 선택하여 조합할 수 있습니다."})]}),e.jsx(ze,{variants:vr,initial:"hidden",animate:"visible",children:P.map(i=>e.jsxs(Ce,{variants:I,children:[e.jsx(Fe,{children:i.icon}),e.jsxs("div",{children:[e.jsx(Se,{children:i.title}),e.jsx(Te,{children:t(i.descKey)}),e.jsx(Ie,{children:e.jsx("img",{src:i.image,alt:"",loading:"lazy",decoding:"async"})}),e.jsx(Me,{children:i.items.map(s=>e.jsxs("li",{children:[e.jsx(x,{})," ",e.jsx("span",{children:s})]},s))}),e.jsx(Pe,{children:i.facts.map((s,Q)=>e.jsxs(Le,{children:[e.jsx(Ae,{children:t(V[Q])}),e.jsx("span",{children:t(s)})]},s))})]})]},i.title))})]})}),e.jsxs(Ve,{children:[e.jsxs(y,{children:[e.jsx(c,{children:t("business_flow_label")}),e.jsx(l,{children:t("tpl_work_process_title")}),e.jsx(h,{children:t("business_flow_desc")})]}),e.jsx(De,{children:A.map((i,s)=>e.jsxs(qe,{variants:I,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:[e.jsxs(Oe,{children:[e.jsx(Qe,{children:t("process_step_label",{number:s+1})}),e.jsx(Ne,{children:i.icon})]}),e.jsx(Ye,{children:t(i.titleKey)}),e.jsx(We,{children:t(i.descKey)})]},i.titleKey))})]}),e.jsxs($e,{children:[e.jsxs(y,{children:[e.jsx(c,{children:"운영 증명"}),e.jsx(l,{children:"시설 역량의 의미"}),e.jsx(h,{children:"KMTech 직산 물류센터의 실제 운영 기준입니다."})]}),e.jsx(Je,{children:G.map(i=>e.jsxs(Ue,{children:[i.icon,e.jsx("strong",{children:i.title}),e.jsx("span",{children:i.text})]},i.title))}),e.jsx(Xe,{children:B.map(i=>e.jsxs(Ze,{children:[e.jsx("strong",{children:i.value}),e.jsx("span",{children:t(i.labelKey)})]},i.labelKey))})]}),e.jsxs(er,{children:[e.jsxs(y,{children:[e.jsx(c,{children:"주요 고객사"}),e.jsx(l,{children:"고객 산업 적합성"}),e.jsx(h,{children:"다양한 제조·유통 산업의 3PL 운영 경험이 있습니다."})]}),e.jsx(rr,{children:q.map(i=>e.jsxs(ir,{children:[i.icon,e.jsx("strong",{children:i.title}),e.jsx("span",{children:i.text})]},i.title))}),e.jsx(tr,{children:O.map(i=>e.jsxs(sr,{children:[e.jsx(ar,{children:e.jsx("img",{src:i.image,alt:"",loading:"lazy",decoding:"async"})}),e.jsx(nr,{children:i.title}),e.jsx(or,{children:i.text})]},i.title))})]}),e.jsx(cr,{children:e.jsxs(lr,{children:[e.jsxs(dr,{children:[e.jsx(c,{children:t("business_consult_ready_label")}),e.jsx(l,{children:t("business_consult_ready_title")}),e.jsx(h,{children:t("business_consult_ready_desc")})]}),e.jsx(mr,{children:D.map(i=>e.jsxs(pr,{children:[e.jsx(gr,{children:i.icon}),e.jsxs("div",{children:[e.jsx(xr,{children:t(i.titleKey)}),e.jsx(hr,{children:t(i.descKey)})]})]},i.titleKey))}),e.jsxs(br,{children:[e.jsxs(ur,{children:[e.jsx("strong",{children:t("business_consult_cta")}),"물량, 제품군, 검수·포장 기준을 알려주시면 맞춤형 운영안을 제안드립니다."]}),e.jsxs(f,{to:"/contact",children:[t("nav_contact")," ",e.jsx(g,{})]})]})]})})]})};export{yr as default};
