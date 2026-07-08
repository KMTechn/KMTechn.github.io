import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Page from '../components/ui/Page';
import { customerPartners } from '../data/company';
import { FaArrowRight, FaCar, FaFilter, FaHandshake, FaIndustry, FaLayerGroup, FaTv } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: clamp(390px, 47vh, 500px);
  display: flex;
  align-items: center;
  padding: clamp(2.9rem, 4.6vw, 4rem) clamp(1rem, 5vw, 5%) clamp(1.55rem, 3vw, 2.25rem);
  background:
    radial-gradient(circle at 83% 18%, rgba(var(--accent-amber-rgb), 0.11), transparent 22rem),
    linear-gradient(180deg, #ffffff 0%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;

  @media (max-width: 820px) {
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.78fr) minmax(20rem, 1fr);
  gap: clamp(1.35rem, 4vw, 3rem);
  align-items: center;
  min-width: 0;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  color: var(--text-color);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
  word-break: keep-all;
`;

const HeroDescription = styled.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 1.5rem;

  @media (max-width: 820px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  max-width: 600px;
  min-width: 0;

  @media (max-width: 820px) {
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.45rem;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-height: 108px;
  min-width: 0;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.05);

  @media (max-width: 520px) {
    padding: 0.78rem 0.55rem;
    text-align: center;
  }
`;

const StatIcon = styled.div`
  color: var(--accent-amber);
  margin-bottom: 0.6rem;

  @media (max-width: 520px) {
    margin-bottom: 0.35rem;
  }
`;

const StatNumber = styled.div`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  word-break: keep-all;

  @media (max-width: 520px) {
    font-size: 0.72rem;
  }
`;

const LogoMosaic = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 620px;
  display: grid;
  gap: 0.8rem;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  min-width: 0;

  @media (max-width: 820px) {
    max-width: 640px;
    margin: 0 auto;
  }
`;

const MosaicImage = styled.div`
  position: relative;
  min-height: clamp(300px, 34vw, 410px);
  border-radius: 8px;
  overflow: hidden;
  background: #111;

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.08) 48%),
      linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.28) 100%);
    pointer-events: none;
  }
`;

const MosaicHeader = styled.div`
  display: none;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.2rem 0.25rem 0;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const MosaicTitle = styled.h2`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`;

const MosaicCount = styled.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
`;

const HeroScopeGrid = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const HeroScopeChip = styled.span`
  min-height: 30px;
  border: 1px solid rgba(var(--accent-amber-rgb), 0.34);
  border-radius: 8px;
  background: rgba(var(--accent-amber-rgb), 0.08);
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.55rem;
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.2;
`;

const MosaicLogoGrid = styled.div`
  display: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MosaicLogo = styled.div`
  min-height: clamp(54px, 5.5vw, 70px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: clamp(0.65rem, 1.6vw, 0.95rem);
  display: grid;
  place-items: center;
  min-width: 0;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);

  img {
    max-width: min(150px, 100%);
    max-height: 34px;
    object-fit: contain;
  }
`;

const PartnersSection = styled.section`
  padding: clamp(2rem, 3.6vw, 3rem) clamp(1rem, 5vw, 5%);
  background: linear-gradient(180deg, var(--background-color) 0%, #ffffff 100%);
`;

const SectionHeader = styled.div`
  width: min(100%, 720px);
  margin: 0 auto 1.55rem 0;
  text-align: left;
`;

const SectionLabel = styled.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

const SectionTitle = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const FilterBar = styled.div`
  width: min(100%, 760px);
  margin: 0 auto 1.55rem;
  display: none;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  min-height: 44px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => $active ? 'var(--accent-amber)' : 'var(--border-color)'};
  background: ${({ $active }) => $active ? 'rgba(var(--accent-amber-rgb), 0.12)' : 'var(--card-bg)'};
  color: var(--text-color);
  padding: 0.65rem 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
`;

const PartnersGrid = styled(motion.div)`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18.5rem), 1fr));
  gap: 0.85rem;
`;

const IndustryReferenceGroup = styled.section`
  width: min(100%, 1180px);
  margin: 0 auto clamp(1.15rem, 3vw, 2rem);

  &:last-child {
    margin-bottom: 0;
  }
`;

const IndustryGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const IndustryGroupTitle = styled.h3`
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 1.08rem;
  line-height: 1.35;
  margin: 0;

  svg {
    color: var(--accent-amber);
  }
`;

const IndustryGroupCount = styled.span`
  color: var(--text-secondary);
  font-size: 0.84rem;
`;

const PartnerCard = styled(motion.article)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
  display: grid;
  gap: 0.75rem;
  min-height: 292px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  }
`;

const PartnerLogoBox = styled.div`
  min-height: 128px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 0.8rem;
  display: grid;
  place-items: center;

  img {
    max-width: min(180px, 100%);
    max-height: 64px;
    object-fit: contain;
  }
`;

const PartnerMeta = styled.div`
  display: grid;
  gap: 0.65rem;
`;

const PartnerName = styled.h3`
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0;
`;

const PartnerIndustry = styled.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
`;

const PartnerPeriod = styled.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.45;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-color);

  strong {
    color: var(--text-color);
    font-weight: 700;
    margin-right: 0.45rem;
  }
`;

const CTASection = styled.section`
  padding: clamp(1.8rem, 3.2vw, 2.5rem) clamp(1rem, 5vw, 5%);
  background: #fff;
  border-top: 1px solid var(--border-color);
`;

const CTAContent = styled.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  min-height: clamp(230px, 24vw, 300px);
  border-radius: 8px;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 2.6rem);
  display: grid;
  align-content: center;
  justify-items: start;
  text-align: left;
  background:
    linear-gradient(90deg, rgba(17, 17, 17, 0.94) 0%, rgba(17, 17, 17, 0.78) 44%, rgba(17, 17, 17, 0.18) 100%),
    image-set(
      url('/images/kmtech-partners-consultation-v2-960.webp') 1x type('image/webp'),
      url('/images/kmtech-partners-consultation-v2-1440.webp') 2x type('image/webp'),
      url('/images/kmtech-partners-consultation-v2.png') 2x type('image/png')
    ) center / cover no-repeat;
  box-shadow: 0 22px 58px rgba(15, 23, 42, 0.16);

  @media (max-width: 620px) {
    min-height: auto;
    background-position: 58% center;
  }
`;

const CTATitle = styled.h2`
  color: #fff;
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
  max-width: 16em;
`;

const CTADescription = styled.p`
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 34rem;
`;

const CTAButton = styled(Link)`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  padding: 0.85rem 1.2rem;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: #121212;
    background: #e6b800;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const PartnersPage = () => {
  const { t } = useTranslation();
  const [activeIndustry, setActiveIndustry] = useState('all');
  const industries = ['all', ...new Set(customerPartners.map((partner) => partner.industryKey))];

  const filteredPartners = useMemo(() => {
    if (activeIndustry === 'all') return customerPartners;
    return customerPartners.filter((partner) => partner.industryKey === activeIndustry);
  }, [activeIndustry]);

  const scopeKeys = useMemo(() => (
    [...new Set(customerPartners.flatMap((partner) => partner.scopes))]
  ), []);

  const groupedPartners = useMemo(() => {
    return Object.entries(
      filteredPartners.reduce((groups, partner) => {
        groups[partner.industryKey] = groups[partner.industryKey] || [];
        groups[partner.industryKey].push(partner);
        return groups;
      }, {})
    ).map(([industryKey, partners]) => ({ industryKey, partners }));
  }, [filteredPartners]);

  const stats = [
    { icon: <FaHandshake />, value: `${customerPartners.length}+`, label: t('partners_stat_partners') },
    { icon: <FaIndustry />, value: '2', label: t('partners_stat_industries') },
    { icon: <FaLayerGroup />, value: `${scopeKeys.length}`, label: t('partners_stat_service_scope') },
  ];

  const filterIcon = (key) => {
    if (key === 'partners_industry_automotive') return <FaCar />;
    if (key === 'partners_industry_electronics') return <FaTv />;
    return <FaFilter />;
  };
  const partnerPeriods = {
    'Hyundai Motor': '2019.03 - 현재',
    Kia: '2020.07 - 현재',
    Continental: '2021.11 - 현재',
    'Kanavi Mobility': '2021.08 - 현재',
    'LG Display': '2018.06 - 현재',
    'LG Electronics': '2019.01 - 현재',
    Humax: '2022.04 - 현재',
  };

  return (
    <Page>
      <HeroSection>
        <HeroContent>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Eyebrow>{t('partners_section_label')}</Eyebrow>
            <HeroTitle>산업별 고객 레퍼런스</HeroTitle>
            <HeroDescription>{t('partners_hero_desc')}</HeroDescription>
            <StatsContainer initial="hidden" animate="visible" variants={containerVariants}>
              {stats.map((stat) => (
                <StatCard key={stat.label}>
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.value}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsContainer>
          </motion.div>

          <LogoMosaic initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.45 }}>
            <MosaicImage>
              <img
                src="/images/kmtech-about-warehouse-hero.png"
                srcSet="/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w"
                sizes="(max-width: 820px) 100vw, 42vw"
                alt=""
                loading="eager"
                decoding="async"
              />
            </MosaicImage>
            <MosaicHeader>
              <MosaicTitle>{t('partners_matrix_title')}</MosaicTitle>
              <MosaicCount>{customerPartners.length} {t('partners_stat_partners')}</MosaicCount>
            </MosaicHeader>
            <HeroScopeGrid>
              {scopeKeys.map((scope) => (
                <HeroScopeChip key={scope}>{t(scope)}</HeroScopeChip>
              ))}
            </HeroScopeGrid>
            <MosaicLogoGrid>
              {customerPartners.map((partner) => (
                <MosaicLogo key={partner.name}>
                  <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" decoding="async" />
                </MosaicLogo>
              ))}
            </MosaicLogoGrid>
          </LogoMosaic>
        </HeroContent>
      </HeroSection>

      <PartnersSection>
        <SectionHeader>
          <SectionLabel>{t('partners_catalog_label')}</SectionLabel>
          <SectionTitle>산업별 고객사</SectionTitle>
        </SectionHeader>

        <FilterBar aria-label={t('partners_filter_label')}>
          {industries.map((industry) => (
            <FilterButton
              key={industry}
              type="button"
              $active={activeIndustry === industry}
              aria-pressed={activeIndustry === industry}
              onClick={() => setActiveIndustry(industry)}
            >
              {filterIcon(industry)}
              {industry === 'all' ? t('partners_filter_all') : t(industry)}
            </FilterButton>
          ))}
        </FilterBar>

        {groupedPartners.map((group) => (
          <IndustryReferenceGroup key={group.industryKey}>
            <IndustryGroupHeader>
              <IndustryGroupTitle>
                {filterIcon(group.industryKey)}
                {t(group.industryKey)}
              </IndustryGroupTitle>
              <IndustryGroupCount>{group.partners.length} {t('partners_stat_partners')}</IndustryGroupCount>
            </IndustryGroupHeader>
            <PartnersGrid variants={containerVariants} initial="hidden" animate="visible">
              {group.partners.map((partner) => (
                <PartnerCard key={partner.name} variants={itemVariants}>
                  <PartnerLogoBox>
                    <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" decoding="async" />
                  </PartnerLogoBox>
                  <PartnerMeta>
                    <PartnerName>{partner.name}</PartnerName>
                    <PartnerIndustry>{t(partner.industryKey)}</PartnerIndustry>
                    <PartnerPeriod><strong>파트너십 기간</strong>{partnerPeriods[partner.name]}</PartnerPeriod>
                  </PartnerMeta>
                </PartnerCard>
              ))}
            </PartnersGrid>
          </IndustryReferenceGroup>
        ))}
      </PartnersSection>

      <CTASection>
        <CTAContent>
          <CTATitle>{t('partners_cta_title')}</CTATitle>
          <CTADescription>{t('partners_cta_desc')}</CTADescription>
          <CTAButton to="/contact">
            {t('partners_cta_button')} <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </Page>
  );
};

export default PartnersPage;
