import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/ui/Page';
import { FaBoxes, FaClock, FaEnvelope, FaHeadset, FaMapMarkerAlt, FaPhoneAlt, FaRoute, FaShieldAlt, FaTruckLoading } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ContactForm from '../components/ui/ContactForm';

const defaultLeafletIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultLeafletIcon;

const PageContainer = styled.div`
  color: var(--text-color);
  overflow-x: hidden;
  background: var(--background-color);
`;

const HeroSection = styled.section`
  position: relative;
  min-height: clamp(360px, 44vh, 430px);
  display: flex;
  align-items: center;
  padding: clamp(3.6rem, 5.6vw, 4.8rem) clamp(1rem, 5vw, 5%) clamp(4.2rem, 6vw, 5.4rem);
  background:
    linear-gradient(90deg, rgba(8, 10, 12, 0.9) 0%, rgba(8, 10, 12, 0.74) 42%, rgba(8, 10, 12, 0.28) 100%),
    url('/images/kmtech-contact-warehouse-hero.png') center / cover no-repeat;
  background:
    linear-gradient(90deg, rgba(8, 10, 12, 0.9) 0%, rgba(8, 10, 12, 0.74) 42%, rgba(8, 10, 12, 0.28) 100%),
    image-set(
      url('/images/kmtech-contact-warehouse-hero-960.webp') 1x type('image/webp'),
      url('/images/kmtech-contact-warehouse-hero-1440.webp') 2x type('image/webp'),
      url('/images/kmtech-contact-warehouse-hero.png') 2x type('image/png')
    ) center / cover no-repeat;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 38%;
    background: linear-gradient(180deg, transparent 0%, rgba(245, 245, 245, 0.96) 100%);
    pointer-events: none;
  }

  @media (max-width: 820px) {
    min-height: auto;
    background-position: 58% center;
  }

  @media (min-width: 821px) {
    min-height: clamp(360px, 38vh, 430px);
    padding-top: clamp(3.2rem, 4.5vw, 4.4rem);
    padding-bottom: clamp(4.2rem, 5.6vw, 5.4rem);
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 1240px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
  min-width: 0;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
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
  color: #fff;
  font-size: clamp(1.9rem, 3.6vw, 2.75rem);
  line-height: 1.08;
  margin-bottom: 1rem;
  letter-spacing: 0;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.42);
  word-break: keep-all;
`;

const HeroDescription = styled.p`
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.65;
  margin: 0;
  max-width: 620px;

  @media (max-width: 820px) {
    margin: 0 auto;
  }
`;

const ContactRail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
  min-width: 0;
  width: min(100%, 1120px);
  transform: translateY(clamp(3.2rem, 4.8vw, 4.4rem));

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    transform: none;
  }
`;

const RailItem = styled.a`
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.58rem 0.75rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 8px;
  text-decoration: none;
  color: #111;
  min-width: 0;

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
  }

  span {
    min-width: 0;
    word-break: keep-all;
    overflow-wrap: normal;
    line-height: 1.35;
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

const QuickActionGrid = styled.nav`
  width: min(100%, 1180px);
  margin: 0 auto clamp(0.8rem, 2vw, 1.2rem);
  display: none;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const QuickAction = styled.a`
  min-height: 46px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--card-bg);
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.62rem 0.82rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  min-width: 0;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--text-color);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    transform: translateY(-2px);
  }

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
  }

  span {
    min-width: 0;
    overflow-wrap: anywhere;
    font-size: 0.9rem;
    font-weight: 800;
    line-height: 1.25;
  }
`;

const ContactMainSection = styled(Section)`
  position: relative;
  z-index: 2;
  margin-top: clamp(-1rem, -1.5vw, -0.5rem);
  padding-top: 0;
  background: transparent;
`;

const ContentLayout = styled.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(20rem, 0.98fr);
  gap: clamp(1.25rem, 4vw, 2rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled(motion.article)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(0.9rem, 2.4vw, 1.25rem);
  min-width: 0;
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.08);
`;

const PanelTitle = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.25rem, 2.6vw, 1.65rem);
  line-height: 1.25;
  margin-bottom: 0.75rem;
`;

const PanelText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`;

const LocationStack = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const InquiryPanel = styled(Panel)`
  display: grid;
  gap: 1rem;
`;

const InquiryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const InquiryType = styled.a`
  min-height: 116px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  color: var(--text-color);
  text-decoration: none;
  padding: 1rem;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 0.55rem;

  &:hover {
    color: var(--text-color);
    border-color: rgba(var(--accent-amber-rgb), 0.65);
  }

  svg {
    color: var(--text-color);
    font-size: 1.75rem;
  }

  strong {
    font-size: 0.96rem;
    line-height: 1.3;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.78rem;
    line-height: 1.35;
  }
`;

const InquiryNotice = styled.div`
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(var(--accent-amber-rgb), 0.16), rgba(var(--accent-amber-rgb), 0.05));
  border: 1px solid rgba(var(--accent-amber-rgb), 0.26);
  padding: 1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.9rem;
`;

const LocationsSection = styled.section`
  width: min(100%, 1180px);
  margin: clamp(1.8rem, 3.4vw, 2.8rem) auto 0;
`;

const LocationCard = styled(Panel)`
  display: grid;
  gap: 1rem;
`;

const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--border-color);
`;

const LocationTitle = styled.h3`
  color: var(--text-color);
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.3;
`;

const LocationTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 32px;
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  background: rgba(var(--accent-amber-rgb), 0.1);
  color: var(--text-color);
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
`;

const LocationRole = styled.p`
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: -0.35rem 0 0;
`;

const InfoRows = styled.div`
  display: grid;
  gap: 0.8rem;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.55;
  min-width: 0;

  svg {
    color: var(--accent-amber);
    margin-top: 0.22rem;
    flex: 0 0 auto;
  }

  a,
  span {
    min-width: 0;
    overflow-wrap: anywhere;
    color: inherit;
  }
`;

const LocationActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const LocationAction = styled.a`
  min-height: 40px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--background-color);
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.6rem 0.75rem;
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 800;

  &:hover {
    color: var(--text-color);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
  }
`;

const MapWrapper = styled.div`
  height: clamp(220px, 28vw, 300px);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

const ContactPage = () => {
  const { t } = useTranslation();
  const headOfficePos = [37.377156, 127.113823];
  const warehousePos = [36.896990, 127.146803];

  const locations = [
    {
      key: 'office',
      title: t('contact_office_title'),
      address: t('contact_office_address'),
      email: t('contact_office_email'),
      phone: t('contact_office_phone'),
      pos: headOfficePos,
      tag: t('contact_office_tag'),
      role: t('contact_office_role'),
    },
    {
      key: 'warehouse',
      title: t('contact_warehouse_title'),
      address: t('contact_warehouse_address'),
      email: t('contact_warehouse_email'),
      phone: t('contact_warehouse_phone'),
      pos: warehousePos,
      tag: t('contact_warehouse_tag'),
      role: t('contact_warehouse_role'),
    },
  ];

  const inquiryTypes = [
    { icon: <FaBoxes />, title: t('contact_inquiry_type_3pl'), text: '견적·계약 문의' },
    { icon: <FaTruckLoading />, title: t('contact_inquiry_type_partner'), text: '입고·검수 기준' },
    { icon: <FaShieldAlt />, title: t('contact_inquiry_type_quality'), text: '품질·보안 문의' },
    { icon: <FaHeadset />, title: t('contact_inquiry_type_general'), text: '기타 일반 문의' },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroInner>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Eyebrow>{t('contact_hero_label')}</Eyebrow>
            <HeroTitle>3PL 상담과 방문 위치 안내</HeroTitle>
            <HeroDescription>{t('contact_form_desc')}</HeroDescription>
          </motion.div>
          <ContactRail>
            <RailItem href={`tel:${t('contact_office_phone')}`}>
              <FaPhoneAlt />
              <span>{t('contact_office_phone')}</span>
            </RailItem>
            <RailItem href={`mailto:${t('contact_office_email')}`}>
              <FaEnvelope />
              <span>{t('contact_office_email')}</span>
            </RailItem>
            <RailItem href="#contact-form">
              <FaHeadset />
              <span>{t('contact_quick_form')}</span>
            </RailItem>
            <RailItem as="div">
              <FaClock />
              <span>평일 09:00 - 18:00</span>
            </RailItem>
          </ContactRail>
        </HeroInner>
      </HeroSection>

      <ContactMainSection>
        <QuickActionGrid aria-label={t('contact_section_title')}>
          <QuickAction href={`mailto:${t('contact_office_email')}`}>
            <FaEnvelope />
            <span>{t('contact_quick_email')}</span>
          </QuickAction>
          <QuickAction href={`tel:${t('contact_office_phone')}`}>
            <FaPhoneAlt />
            <span>{t('contact_quick_phone')}</span>
          </QuickAction>
          <QuickAction href="#contact-form">
            <FaClock />
            <span>{t('contact_quick_form')}</span>
          </QuickAction>
          <QuickAction href="#locations">
            <FaRoute />
            <span>{t('contact_quick_locations')}</span>
          </QuickAction>
        </QuickActionGrid>
        <SectionTitle>{t('contact_section_title')}</SectionTitle>
        <ContentLayout>
          <Panel id="contact-form" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <PanelTitle>{t('contact_form_title')}</PanelTitle>
            <PanelText>{t('contact_form_panel_desc')}</PanelText>
            <ContactForm />
          </Panel>

          <InquiryPanel initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.4 }}>
            <PanelTitle>{t('contact_inquiry_type_label')}</PanelTitle>
            <InquiryGrid>
              {inquiryTypes.map((item) => (
                <InquiryType href="#contact-form" key={item.title}>
                  {item.icon}
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </InquiryType>
              ))}
            </InquiryGrid>
            <InquiryNotice>
              빠른 답변을 위해 물량, 제품군, 검수·포장 요구사항을 함께 남겨주세요.
            </InquiryNotice>
          </InquiryPanel>
        </ContentLayout>

        <LocationsSection id="locations">
          <PanelTitle>{t('contact_quick_locations')}</PanelTitle>
          <PanelText>방문 목적에 맞는 위치를 선택하시면 상세 정보를 확인할 수 있습니다.</PanelText>
          <LocationStack>
            {locations.map((location, index) => (
              <LocationCard
                key={location.key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <LocationHeader>
                  <LocationTitle>{location.title}</LocationTitle>
                  <LocationTag><FaRoute /> {location.tag}</LocationTag>
                </LocationHeader>
                <LocationRole>{location.role}</LocationRole>
                <InfoRows>
                  <InfoRow>
                    <FaMapMarkerAlt />
                    <span>{location.address}</span>
                  </InfoRow>
                  <InfoRow>
                    <FaEnvelope />
                    <a href={`mailto:${location.email}`}>{location.email}</a>
                  </InfoRow>
                  <InfoRow>
                    <FaPhoneAlt />
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </InfoRow>
                </InfoRows>
                <LocationActions>
                  <LocationAction href={`tel:${location.phone}`}>
                    <FaPhoneAlt /> {t('contact_quick_phone')}
                  </LocationAction>
                  <LocationAction href={`https://www.google.com/maps/search/?api=1&query=${location.pos[0]},${location.pos[1]}`} target="_blank" rel="noreferrer">
                    <FaMapMarkerAlt /> {t('contact_open_map')}
                  </LocationAction>
                </LocationActions>
                <MapWrapper>
                  <MapContainer center={location.pos} zoom={15} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={location.pos}><Popup>{location.title}</Popup></Marker>
                  </MapContainer>
                </MapWrapper>
              </LocationCard>
            ))}
          </LocationStack>
        </LocationsSection>
      </ContactMainSection>
    </PageContainer>
  );
};

export default ContactPage;
