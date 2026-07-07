import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Page from '../components/ui/Page';
import { customerPartners } from '../data/company';
import { FaArrowRight, FaCar, FaCheckCircle, FaFilter, FaHandshake, FaIndustry, FaLayerGroup, FaTv } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: clamp(500px, 62vh, 640px);
  display: flex;
  align-items: center;
  padding: clamp(5.75rem, 8vw, 7rem) clamp(1rem, 5vw, 5%) clamp(2.25rem, 4vw, 3.5rem);
  background:
    radial-gradient(circle at 83% 18%, rgba(var(--accent-amber-rgb), 0.11), transparent 22rem),
    linear-gradient(180deg, #ffffff 0%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;

  @media (max-width: 920px) {
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  width: min(100%, 1360px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(20rem, 1fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  min-width: 0;

  @media (max-width: 920px) {
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
  font-size: clamp(2.2rem, 5vw, 3.35rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0;
`;

const HeroDescription = styled.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 1.5rem;

  @media (max-width: 920px) {
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

  @media (max-width: 920px) {
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
  padding: 1rem 1.05rem;
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
  padding: clamp(0.75rem, 2vw, 1rem);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86)),
    radial-gradient(circle at 14% 18%, rgba(var(--accent-amber-rgb), 0.13), transparent 16rem);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.12);
  min-width: 0;

  @media (max-width: 920px) {
    max-width: 640px;
    margin: 0 auto;
  }
`;

const MosaicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.35rem 0.25rem 0.2rem;

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
  display: flex;
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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MosaicLogo = styled.div`
  min-height: clamp(72px, 7vw, 92px);
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
    max-height: 42px;
    object-fit: contain;
  }
`;

const PartnersSection = styled.section`
  padding: clamp(4rem, 7vw, 6rem) clamp(1rem, 5vw, 5%);
  background: linear-gradient(180deg, var(--background-color) 0%, #ffffff 100%);
`;

const SectionHeader = styled.div`
  width: min(100%, 720px);
  margin: 0 auto 2rem;
  text-align: center;
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

const SectionDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`;

const FilterBar = styled.div`
  width: min(100%, 760px);
  margin: 0 auto 2rem;
  display: flex;
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
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
`;

const IndustryReferenceGroup = styled.section`
  width: min(100%, 1180px);
  margin: 0 auto clamp(1.5rem, 4vw, 2.5rem);

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
  gap: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  }
`;

const PartnerLogoBox = styled.div`
  min-height: 116px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 1rem;
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
  gap: 0.5rem;
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

const ScopeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const ScopeChip = styled.span`
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--background-color);
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.2;
  padding: 0.35rem 0.55rem;
`;

const CTASection = styled.section`
  padding: clamp(3.5rem, 6vw, 5rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
  text-align: center;
`;

const MatrixSection = styled.section`
  padding: clamp(4rem, 7vw, 6rem) clamp(1rem, 5vw, 5%);
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
`;

const MatrixWrap = styled.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
`;

const MatrixTable = styled.table`
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
`;

const MatrixTh = styled.th`
  text-align: left;
  color: var(--text-color);
  font-size: 0.78rem;
  line-height: 1.35;
  padding: 0.85rem;
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
`;

const MatrixTd = styled.td`
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.45;
  padding: 0.85rem;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
`;

const ScopeCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  color: ${({ $active }) => $active ? '#121212' : 'transparent'};
  background: ${({ $active }) => $active ? 'var(--accent-amber)' : 'var(--background-color)'};
  border: 1px solid ${({ $active }) => $active ? 'var(--accent-amber)' : 'var(--border-color)'};
`;

const CTAContent = styled.div`
  width: min(100%, 620px);
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.25;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
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

  return (
    <Page>
      <HeroSection>
        <HeroContent>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Eyebrow>{t('partners_section_label')}</Eyebrow>
            <HeroTitle>{t('core_customers_title')}</HeroTitle>
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
              {customerPartners.slice(0, 6).map((partner) => (
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
          <SectionTitle>{t('partners_reference_title')}</SectionTitle>
          <SectionDescription>{t('partners_reference_desc')}</SectionDescription>
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
                    <ScopeList>
                      {partner.scopes.map((scope) => (
                        <ScopeChip key={scope}>{t(scope)}</ScopeChip>
                      ))}
                    </ScopeList>
                  </PartnerMeta>
                </PartnerCard>
              ))}
            </PartnersGrid>
          </IndustryReferenceGroup>
        ))}
      </PartnersSection>

      <MatrixSection>
        <SectionHeader>
          <SectionLabel>{t('partners_matrix_label')}</SectionLabel>
          <SectionTitle>{t('partners_matrix_title')}</SectionTitle>
          <SectionDescription>{t('partners_matrix_desc')}</SectionDescription>
        </SectionHeader>
        <MatrixWrap>
          <MatrixTable>
            <thead>
              <tr>
                <MatrixTh>{t('partners_stat_partners')}</MatrixTh>
                <MatrixTh>{t('partners_stat_industries')}</MatrixTh>
                {scopeKeys.map((scope) => (
                  <MatrixTh key={scope}>{t(scope)}</MatrixTh>
                ))}
              </tr>
            </thead>
            <tbody>
              {customerPartners.map((partner) => (
                <tr key={partner.name}>
                  <MatrixTd><strong>{partner.name}</strong></MatrixTd>
                  <MatrixTd>{t(partner.industryKey)}</MatrixTd>
                  {scopeKeys.map((scope) => (
                    <MatrixTd key={scope}>
                      <ScopeCheck $active={partner.scopes.includes(scope)} aria-label={partner.scopes.includes(scope) ? t(scope) : ''}>
                        <FaCheckCircle />
                      </ScopeCheck>
                    </MatrixTd>
                  ))}
                </tr>
              ))}
            </tbody>
          </MatrixTable>
        </MatrixWrap>
      </MatrixSection>

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
