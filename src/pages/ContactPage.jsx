import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '../components/ui/Page';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ContactForm from '../components/ui/ContactForm';

const PageContainer = styled.div`
  color: var(--text-color);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoContainer = styled.div`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
`;

const InfoRow = styled.div`
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
`;

const MapWrapper = styled.div`
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

const ContactSection = styled.div`
  margin-top: 4rem;
`;

const ContactPage = () => {
  const { t } = useTranslation();
  const headOfficePos = [37.377156, 127.113823];
  const warehousePos = [36.896990, 127.146803];

  return (
    <PageContainer>
      <Section>
        <SectionTitle>{t('contact_title')}</SectionTitle>
        
        <ContentGrid>
          <ContactInfoContainer>
            <CardTitle>{t('contact_form_title')}</CardTitle>
            <p style={{marginBottom: '1.5rem', lineHeight: '1.6'}}>{t('contact_form_desc')}</p>
            <ContactForm />
          </ContactInfoContainer>

          <div>
            <ContactInfoContainer>
              <CardTitle>{t('contact_office_title')}</CardTitle>
              <InfoRow>
                <FaMapMarkerAlt size={20} />
                <span>{t('contact_office_address')}</span>
              </InfoRow>
              <InfoRow>
                <FaPhone size={20} />
                <span>{t('contact_office_phone')}</span>
              </InfoRow>
              <InfoRow>
                <FaEnvelope size={20} />
                <span>{t('contact_office_email')}</span>
              </InfoRow>
              <MapWrapper>
                <MapContainer center={headOfficePos} zoom={15} scrollWheelZoom={false}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={headOfficePos}><Popup>{t('contact_office_title')}</Popup></Marker>
                </MapContainer>
              </MapWrapper>
            </ContactInfoContainer>
          </div>
        </ContentGrid>

        <ContactSection>
          <ContentGrid>
            <MapWrapper style={{marginTop: 0, minHeight: '400px'}}>
              <MapContainer center={warehousePos} zoom={15} scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={warehousePos}><Popup>{t('contact_warehouse_title')}</Popup></Marker>
              </MapContainer>
            </MapWrapper>
            <ContactInfoContainer>
              <CardTitle>{t('contact_warehouse_title')}</CardTitle>
              <InfoRow>
                <FaMapMarkerAlt size={20} />
                <span>{t('contact_warehouse_address')}</span>
              </InfoRow>
              <InfoRow>
                <FaPhone size={20} />
                <span>{t('contact_warehouse_phone')}</span>
              </InfoRow>
              <InfoRow>
                <FaEnvelope size={20} />
                <span>{t('contact_warehouse_email')}</span>
              </InfoRow>
            </ContactInfoContainer>
          </ContentGrid>
        </ContactSection>

      </Section>
    </PageContainer>
  );
};

export default ContactPage;
