import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Page, { Section, SectionTitle } from '../components/ui/Page';
import { facilityMetrics, operationHighlights } from '../data/company';
import {
  FaCheckCircle, FaBuilding, FaBalanceScale,
  FaBullseye, FaAward, FaBrain, FaShieldAlt,
  FaShippingFast, FaCogs, FaSearchPlus,
  FaSitemap, FaUsers, FaQuoteLeft
} from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';

const HeroSection = styled.section`
  position: relative;
  min-height: clamp(320px, 40vh, 420px);
  display: flex;
  align-items: center;
  background:
    linear-gradient(115deg, rgba(245, 245, 245, 0.98) 0%, rgba(245, 245, 245, 0.94) 38%, rgba(255, 255, 255, 0.42) 100%),
    radial-gradient(circle at 82% 18%, rgba(var(--accent-amber-rgb), 0.14), transparent 22rem),
    var(--background-color);
  padding: clamp(2.7rem, 4vw, 3.8rem) clamp(1rem, 5vw, 5%) clamp(0.9rem, 2vw, 1.35rem);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 34%;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
    pointer-events: none;
  }

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
    padding-top: clamp(5rem, 12vw, 6.5rem);
  }
`;

const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  max-width: var(--page-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.52fr) minmax(22rem, 0.9fr);
  gap: clamp(1.35rem, 4vw, 3.5rem);
  align-items: center;
  width: 100%;
  min-width: 0;
  overflow-x: clip;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 620px;
  min-width: 0;

  @media (max-width: 820px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const HeroLabel = styled(motion.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 800;
  line-height: 1.08;
  color: var(--text-color);
  margin-bottom: 1.2rem;
  letter-spacing: 0;
  word-break: keep-all;
  overflow-wrap: normal;
`;

const HeroDescription = styled(motion.p)`
  font-size: 0.98rem;
  line-height: 1.58;
  color: var(--text-secondary);
  overflow-wrap: anywhere;
  max-width: 560px;
`;

const HeroProofGrid = styled(motion.div)`
  margin-top: clamp(1rem, 2.2vw, 1.4rem);
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
  max-width: 620px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.45rem;
  }
`;

const HeroProofCard = styled.div`
  min-width: 0;
  min-height: 82px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.76);
  padding: 0.85rem;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.06);
`;

const HeroProofValue = styled.div`
  color: var(--text-color);
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 900;
  line-height: 1.12;
  overflow-wrap: anywhere;
`;

const HeroProofLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.42;
  margin-top: 0.45rem;

  @media (max-width: 640px) {
    font-size: 0.68rem;
    line-height: 1.34;
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  width: 100%;
  min-width: 0;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    width: 74%;
    height: 72%;
    right: -1.4rem;
    bottom: -1.4rem;
    border-radius: 8px;
    background: var(--accent-amber);
    opacity: 0.9;
    z-index: -1;
  }

  @media (max-width: 820px) {
    max-width: 820px;
    margin: 0 auto;

    &::before {
      right: -0.65rem;
      bottom: -0.65rem;
    }
  }
`;

const HeroImageFrame = styled.div`
  position: relative;
  border-radius: 8px;
  min-height: clamp(250px, 30vw, 360px);
  overflow: hidden;
  background: #111;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.22);

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.32) 0%, transparent 45%),
      linear-gradient(180deg, transparent 46%, rgba(0, 0, 0, 0.72) 100%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    min-height: 340px;
  }

  @media (max-width: 460px) {
    min-height: 0;
    background: #fff;

    img {
      height: 340px;
      min-height: 0;
    }

    &::after {
      inset: 0 0 auto;
      height: 340px;
      background:
        linear-gradient(90deg, rgba(0, 0, 0, 0.18) 0%, transparent 46%),
        linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.34) 100%);
    }
  }
`;

const HeroMetricRail = styled.div`
  position: absolute;
  left: clamp(0.85rem, 2vw, 1.25rem);
  right: clamp(0.85rem, 2vw, 1.25rem);
  bottom: clamp(0.85rem, 2vw, 1.25rem);
  z-index: 2;
  display: none;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 460px) {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem;
    padding: 0.65rem;
    background: #fff;
  }
`;

const HeroMetricCard = styled.div`
  min-width: 0;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  padding: 0.82rem;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);

  @media (max-width: 460px) {
    border-color: var(--border-color);
    background: #fff;
    padding: 0.72rem;
    box-shadow: none;
  }
`;

const HeroMetricValue = styled.div`
  color: #111;
  font-size: clamp(1rem, 2vw, 1.45rem);
  font-weight: 900;
  line-height: 1.1;
  overflow-wrap: anywhere;
  white-space: nowrap;
`;

const HeroMetricLabel = styled.div`
  color: #565656;
  font-size: 0.75rem;
  line-height: 1.32;
  margin-top: 0.4rem;
`;

const TrustSection = styled(Section)`
  background: var(--background-color);
  padding: clamp(1rem, 2vw, 1.35rem) clamp(1rem, 5vw, 5%) clamp(1.35rem, 2.4vw, 1.8rem);
`;

const TrustGrid = styled.div`
  width: min(100%, 1240px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const TrustIntro = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(0.95rem, 2.4vw, 1.25rem);
  display: none;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(1rem, 2.2vw, 1.35rem);
  align-items: start;
  min-width: 0;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.04);

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const TrustLogo = styled.div`
  width: clamp(56px, 5vw, 72px);
  height: clamp(56px, 5vw, 72px);
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  padding: 0.85rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TrustTitle = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.25rem, 2.2vw, 1.65rem);
  line-height: 1.25;
  margin-bottom: 0.65rem;
  max-width: 17ch;

  @media (max-width: 820px) {
    max-width: 28ch;
  }
`;

const TrustText = styled.p`
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.95rem;
  margin: 0;
`;

const TrustMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  align-items: start;
  min-width: 0;
  border-radius: 8px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 204, 0, 0.07), transparent 38%),
    linear-gradient(180deg, #1c1c1c, #101010);
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

const TrustMetric = styled.div`
  background: transparent;
  border: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 0;
  padding: clamp(1rem, 2.2vw, 1.35rem);
  min-width: 0;
  min-height: clamp(118px, 10vw, 142px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: none;

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 520px) {
    min-height: auto;
    padding: 0.9rem;
  }
`;

const TrustMetricValue = styled.div`
  color: #fff;
  font-size: clamp(1.2rem, 2.4vw, 1.7rem);
  font-weight: 900;
  line-height: 1.1;
  overflow-wrap: anywhere;
  white-space: nowrap;
`;

const TrustMetricLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.4rem;
`;

const TrustMetricName = styled(TrustMetricLabel)`
  color: rgba(255, 255, 255, 0.86);
  font-weight: 700;
  margin-top: 0.65rem;
`;

const TrustMetricDetail = styled(TrustMetricLabel)`
  color: rgba(255, 255, 255, 0.62);
  max-width: 15ch;

  @media (max-width: 520px) {
    max-width: none;
  }
`;

const TrustHighlightGrid = styled.div`
  grid-column: 1 / -1;
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.65rem, 1.5vw, 0.85rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const TrustHighlight = styled.div`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-radius: 8px;
  padding: 0.72rem 0.85rem;
  min-width: 0;
`;

const TrustHighlightValue = styled.div`
  color: var(--text-color);
  font-weight: 800;
  line-height: 1.2;
  word-break: keep-all;
`;

const BasisRow = styled.div`
  width: min(100%, 1240px);
  margin: clamp(1.3rem, 2.6vw, 1.9rem) auto 0;
  display: grid;
  grid-template-columns: minmax(15rem, 0.45fr) minmax(0, 1fr);
  gap: clamp(1rem, 2.4vw, 1.5rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const BasisIntro = styled.div`
  h2 {
    color: var(--text-color);
    font-size: clamp(1.35rem, 2.3vw, 1.75rem);
    margin-bottom: 0.65rem;
    line-height: 1.25;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0;
  }
`;

const BasisItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const BasisItem = styled.div`
  padding: 1rem;
  border-right: 1px solid var(--border-color);
  min-width: 0;

  &:last-child {
    border-right: 0;
  }

  svg {
    color: var(--text-color);
    margin-bottom: 0.55rem;
  }

  strong {
    display: block;
    color: var(--text-color);
    font-size: 0.9rem;
    line-height: 1.35;
    margin-bottom: 0.35rem;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.78rem;
    line-height: 1.45;
  }
`;

// Philosophy Section
const PhilosophySection = styled(Section)`
  background:
    linear-gradient(90deg, rgba(17, 17, 17, 0.96) 0%, rgba(17, 17, 17, 0.9) 44%, rgba(17, 17, 17, 0.48) 100%),
    url('/images/kmtech-contact-warehouse-hero-1440.webp') center / cover no-repeat;
  padding: clamp(1.65rem, 3vw, 2.55rem) 5%;
  color: #fff;
`;

const PhilosophyGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PhilosophyContent = styled(motion.div)``;

const PhilosophyLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const PhilosophyTitle = styled.h2`
  font-size: clamp(1.55rem, 3vw, 2rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

const PhilosophyText = styled.p`
  font-size: 0.98rem;
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.72);
`;

const QuoteBlock = styled.div`
  position: relative;
  padding: 1.3rem 0 1.3rem 1.5rem;
  margin-top: 1.3rem;
  border-left: 3px solid var(--accent-amber);

  svg {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.5rem;
    color: var(--accent-amber);
    opacity: 0.3;
  }
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: #fff;
  line-height: 1.7;
`;

const PrinciplesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const PrincipleCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.05rem 1.15rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 204, 0, 0.22);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
`;

const PrincipleIcon = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 8px;
  flex-shrink: 0;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`;

const PrincipleText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

// Core Values Section
const ValuesSection = styled(Section)`
  background: var(--background-color);
  padding: clamp(1.45rem, 2.8vw, 2.15rem) 5%;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto clamp(2rem, 4vw, 3rem);
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;

`;

const ValueCard = styled(motion.div)`
  text-align: left;
  padding: 0;
  background: #fff;
  border: 0;
  border-bottom: 1px solid var(--border-color);
  border-radius: 0;
  display: grid;
  grid-template-columns: 58px minmax(8rem, 0.9fr) minmax(0, 1.3fr) minmax(0, 1.45fr);
  align-items: stretch;
  min-width: 0;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--border-color);
    transform: none;
    box-shadow: none;
  }

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 720px) {
    grid-template-columns: 52px minmax(0, 1fr);
  }
`;

const ValueIcon = styled.div`
  width: 100%;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb), 0.12);
  border-radius: 0;
  margin: 0;
  border-right: 1px solid var(--border-color);

  svg {
    font-size: 1rem;
    color: #121212;
  }

  @media (max-width: 720px) {
    grid-row: span 3;
  }
`;

const ValueTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--text-color);
  line-height: 1.4;
  padding: 1rem;
  border-right: 1px solid var(--border-color);

  @media (max-width: 720px) {
    border-right: 0;
    padding: 0.85rem 0.9rem 0.25rem;
  }
`;

const ValueText = styled.p`
  color: var(--text-secondary);
  font-size: 0.84rem;
  line-height: 1.6;
  padding: 1rem;
  border-right: 1px solid var(--border-color);
  margin: 0;

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 720px) {
    border-right: 0;
    padding: 0.25rem 0.9rem 0.85rem;
  }
`;

// Strengths Section
const StrengthsSection = styled(Section)`
  background: var(--card-bg);
  padding: clamp(1.35rem, 2.5vw, 2rem) 5%;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.9rem, 2vw, 1.25rem);
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const StrengthCard = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.5);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px) translateZ(0);
  }
`;

const StrengthImageWrapper = styled.div`
  position: relative;
  height: clamp(132px, 14vw, 160px);
  overflow: hidden;
`;

const StrengthImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.3s ease;

  ${StrengthCard}:hover & {
    transform: scale(1.05) translateZ(0);
  }
`;

const StrengthNumber = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
`;

const StrengthContent = styled.div`
  padding: 1rem;
`;

const StrengthTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }
`;

const StrengthDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

// Organization Section - Modern Minimal Design
const OrgSection = styled(Section)`
  background: var(--background-color);
  padding: clamp(1.15rem, 2.2vw, 1.7rem) 5% clamp(1.45rem, 2.5vw, 2rem);

  ${SectionHeader} {
    margin-bottom: clamp(1.1rem, 2vw, 1.55rem);
  }
`;

const OrgContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const OrgChart = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CEOCard = styled(motion.div)`
  display: inline-block;
  padding: 12px 20px;
  background: var(--card-bg);
  border: 1px solid var(--accent-amber);
  border-radius: 8px;
  position: relative;
  margin-bottom: 1.8rem;
  line-height: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 1.8rem;
    background: var(--border-color);
  }
`;

const CEORole = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-color);
  line-height: 1;
`;

const OrgLine = styled.div`
  width: 80%;
  height: 1px;
  background: var(--border-color);
  position: relative;
  margin-bottom: 1.55rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DepartmentsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7.5rem), 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
  width: 100%;
`;

const DepartmentCard = styled(motion.div)`
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -1.55rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 1.55rem;
    background: var(--border-color);
  }
`;

const DeptIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0 auto 1rem;
  transition: all 0.2s ease;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }

  ${DepartmentCard}:hover & {
    border-color: var(--accent-amber);
    background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.05);
  }
`;

const DeptTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.4;
`;

// Icon mapping for organization
const iconMap = {
  'FaCogs': <FaCogs />,
  'FaSearchPlus': <FaSearchPlus />,
  'FaSitemap': <FaSitemap />,
  'FaShippingFast': <FaShippingFast />,
  'FaUsers': <FaUsers />,
};

// Animation variants - optimized for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

const AboutUsPage = () => {
  const { t } = useTranslation();
  const [orgStructure, setOrgStructure] = useState(null);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const valuesRef = useRef(null);
  const strengthsRef = useRef(null);
  const orgRef = useRef(null);

  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-50px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-50px" });
  const strengthsInView = useInView(strengthsRef, { once: true, margin: "-50px" });
  const orgInView = useInView(orgRef, { once: true, margin: "-50px" });

  useEffect(() => {
    fetch('/org-structure.json')
      .then(res => res.json())
      .then(data => setOrgStructure(data))
      .catch(err => console.error('Failed to load org structure:', err));
  }, []);

  const principles = [
    { icon: <FaBullseye />, titleKey: 'principle_customer_centered' },
    { icon: <FaCheckCircle />, titleKey: 'principle_customer_satisfaction' },
    { icon: <FaBalanceScale />, titleKey: 'principle_confidentiality' },
  ];

  const coreValues = [
    { icon: <FaCheckCircle />, title: '정확', meaning: '정확한 프로세스와 데이터로 신뢰를 만듭니다.', action: '정확한 입출고 및 검수 수행, 데이터 실시간 기록 및 확인' },
    { icon: <FaShippingFast />, title: '신속', meaning: '고객의 납기와 현장 변화에 민첩하게 대응합니다.', action: '우선순위 기반 작업 배치, 이상 발생 즉시 보고 및 조치' },
    { icon: <FaShieldAlt />, title: '안전', meaning: '안전한 작업 환경을 최우선으로 합니다.', action: '표준 안전 절차 준수, 위험 요소 사전 점검 및 개선' },
    { icon: <FaUsers />, title: '협력', meaning: '함께 더 나은 성과를 만듭니다.', action: '부서 간 협업으로 고객·협력사와 긴밀한 소통' },
  ];

  const strongPoints = [
    { icon: <FaAward />, img: '/images/kmtech-about-warehouse-hero-960.webp', titleKey: 'strong_point_1_title', descKey: 'strong_point_1_desc' },
    { icon: <FaBrain />, img: '/images/kmtech-home-network-backdrop-960.webp', titleKey: 'strong_point_2_title', descKey: 'strong_point_2_desc' },
    { icon: <FaShippingFast />, img: '/images/kmtech-contact-warehouse-hero-960.webp', titleKey: 'strong_point_5_title', descKey: 'strong_point_5_desc' },
  ];
  const proofPoints = strongPoints.slice(0, 3);
  const basisItems = [
    { icon: <FaSearchPlus />, title: '표준 운영 프로세스', text: '입고부터 출고까지 표준 절차 기반 운영' },
    { icon: <FaCogs />, title: 'WMS 기반 실시간 관리', text: '재고·위치·작업 현황을 실시간으로 가시화' },
    { icon: <FaCheckCircle />, title: '품질과 안전 준수', text: '안전한 작업 환경과 품질 표준 준수' },
    { icon: <FaBrain />, title: '지속적 개선', text: '데이터 분석과 개선 활동으로 운영 품질 향상' },
  ];

  const organization = orgStructure || { ceo: { titleKey: 'org_ceo', nameKey: 'org_ceo_name' }, departments: [] };

  return (
    <Page>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroGrid>
          <HeroContent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroLabel
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('about_trust_label')}
            </HeroLabel>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('nav_about')}
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('about_trust_title')}
            </HeroDescription>
            <HeroProofGrid
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.55 }}
            >
              {operationHighlights.map((item) => (
                <HeroProofCard key={item.labelKey}>
                  <HeroProofValue>{item.value}</HeroProofValue>
                  <HeroProofLabel>{t(item.detailKey)}</HeroProofLabel>
                </HeroProofCard>
              ))}
            </HeroProofGrid>
          </HeroContent>

          <HeroVisual
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <HeroImageFrame>
              <img
                src="/images/kmtech-about-warehouse-hero.png"
                srcSet="/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w"
                sizes="(max-width: 820px) 100vw, 52vw"
                alt="KMTech warehouse operations"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <HeroMetricRail>
                {facilityMetrics.map((metric) => (
                  <HeroMetricCard key={metric.labelKey}>
                    <HeroMetricValue>{metric.value}</HeroMetricValue>
                    <HeroMetricLabel>{t(metric.labelKey)}</HeroMetricLabel>
                  </HeroMetricCard>
                ))}
              </HeroMetricRail>
            </HeroImageFrame>
          </HeroVisual>
        </HeroGrid>
      </HeroSection>

      <TrustSection>
        <TrustGrid>
          <TrustIntro>
            <TrustLogo>
              <img src="/logo.png" alt="KMTech" />
            </TrustLogo>
            <div>
              <SectionLabel>{t('about_trust_label')}</SectionLabel>
              <TrustTitle>{t('about_trust_title')}</TrustTitle>
              <TrustText>{t('about_trust_desc')}</TrustText>
            </div>
          </TrustIntro>

          <TrustMetrics>
            {facilityMetrics.map((metric) => (
              <TrustMetric key={metric.labelKey}>
                <TrustMetricValue>{metric.value}</TrustMetricValue>
                <TrustMetricName>{t(metric.labelKey)}</TrustMetricName>
                <TrustMetricDetail>{t(metric.detailKey)}</TrustMetricDetail>
              </TrustMetric>
            ))}
          </TrustMetrics>

          <TrustHighlightGrid>
            {operationHighlights.map((item) => (
              <TrustHighlight key={item.labelKey}>
                <TrustHighlightValue>{item.value}</TrustHighlightValue>
                <TrustMetricLabel>{t(item.detailKey)}</TrustMetricLabel>
              </TrustHighlight>
            ))}
          </TrustHighlightGrid>
        </TrustGrid>
        <BasisRow>
          <BasisIntro>
            <h2>운영 기반</h2>
            <p>표준화된 운영 시스템과 데이터 기반 관리로 정확하고 일관된 물류를 제공합니다.</p>
          </BasisIntro>
          <BasisItems>
            {basisItems.map((item) => (
              <BasisItem key={item.title}>
                {item.icon}
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </BasisItem>
            ))}
          </BasisItems>
        </BasisRow>
      </TrustSection>

      {/* Philosophy Section */}
      <PhilosophySection ref={philosophyRef}>
        <PhilosophyGrid>
          <PhilosophyContent
            initial={{ opacity: 0, y: 18 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <PhilosophyLabel>{t('about_philosophy_label')}</PhilosophyLabel>
            <PhilosophyTitle>{t('about_ideology_title')}</PhilosophyTitle>
            <PhilosophyText>{t('about_ideology_desc')}</PhilosophyText>
            <QuoteBlock>
              <FaQuoteLeft />
              <QuoteText>
                {t('about_trust_statement')}
              </QuoteText>
            </QuoteBlock>
          </PhilosophyContent>

          <PrinciplesGrid
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            {principles.map((principle) => (
              <PrincipleCard key={principle.titleKey} variants={itemVariants}>
                <PrincipleIcon>{principle.icon}</PrincipleIcon>
                <PrincipleText>{t(principle.titleKey)}</PrincipleText>
                <HiOutlineChevronRight style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
              </PrincipleCard>
            ))}
          </PrinciplesGrid>
        </PhilosophyGrid>
      </PhilosophySection>

      {/* Core Values Section */}
      <ValuesSection ref={valuesRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{t('about_values_label')}</SectionLabel>
          <SectionTitle>{t('about_pillars_title')}</SectionTitle>
          <SectionDescription>{t('about_values_desc')}</SectionDescription>
        </SectionHeader>

        <ValuesGrid>
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueText>{value.meaning}</ValueText>
              <ValueText>{value.action}</ValueText>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      {/* Strengths Section */}
      <StrengthsSection ref={strengthsRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{t('about_strengths_label')}</SectionLabel>
          <SectionTitle>{t('about_strong_points_title')}</SectionTitle>
          <SectionDescription>{t('about_strengths_desc')}</SectionDescription>
        </SectionHeader>

        <StrengthsGrid>
          {proofPoints.map((item, index) => (
            <StrengthCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <StrengthImageWrapper>
                <StrengthImage style={{ backgroundImage: `url(${item.img})` }} />
                <StrengthNumber>0{index + 1}</StrengthNumber>
              </StrengthImageWrapper>
              <StrengthContent>
                <StrengthTitle>
                  {item.icon}
                  {t(item.titleKey)}
                </StrengthTitle>
                <StrengthDescription>{t(item.descKey)}</StrengthDescription>
              </StrengthContent>
            </StrengthCard>
          ))}
        </StrengthsGrid>
      </StrengthsSection>

      {/* Organization Section */}
      <OrgSection ref={orgRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={orgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{t('about_org_label')}</SectionLabel>
          <SectionTitle>{t('about_org_title')}</SectionTitle>
          <SectionDescription>{t('about_org_desc')}</SectionDescription>
        </SectionHeader>

        <OrgContainer>
          <OrgChart>
            <CEOCard
              initial={{ opacity: 0, y: 20 }}
              animate={orgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CEORole>{t(organization.ceo.titleKey)}</CEORole>
            </CEOCard>

            <OrgLine />

            <DepartmentsGrid
              variants={containerVariants}
              initial="hidden"
              animate={orgInView ? "visible" : "hidden"}
            >
              {organization?.departments?.map((dept) => (
                <DepartmentCard key={dept.titleKey} variants={itemVariants}>
                  <DeptIconWrapper>{iconMap[dept.iconName]}</DeptIconWrapper>
                  <DeptTitle>{t(dept.titleKey)}</DeptTitle>
                </DepartmentCard>
              ))}
            </DepartmentsGrid>
          </OrgChart>
        </OrgContainer>
      </OrgSection>
    </Page>
  );
};

export default AboutUsPage;
