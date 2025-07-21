import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShippingFast, FaClipboardCheck, FaWarehouse, FaPlane, FaShip, FaTruck } from 'react-icons/fa';
import { PageContainer, Title } from '../components/ui/Page';

const ServiceSection = styled.section`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  &:nth-child(odd) {
    grid-template-columns: 2fr 1fr;
    direction: rtl;
  }

  & > * {
    direction: ltr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    direction: ltr !important;
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 8rem;
  color: var(--accent-amber);
  opacity: 0.5;
  
  @media (max-width: 768px) {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;

const ServiceDetails = styled.div``;

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const SubServiceList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SubServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--titanium-light);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  font-size: 0.9rem;
`;

const services = [
  {
    icon: <FaShippingFast />,
    title: 'Logistics',
    description: 'We provide integrated logistics services to streamline your supply chain. Our global network and advanced technology ensure efficient, reliable, and transparent transportation of your goods across land, sea, and air.',
    subServices: [
      { icon: <FaPlane />, name: 'Air Freight' },
      { icon: <FaShip />, name: 'Ocean Freight' },
      { icon: <FaTruck />, name: 'Land Transport' },
      { name: 'Customs Brokerage' },
    ]
  },
  {
    icon: <FaClipboardCheck />,
    title: 'Inspection',
    description: 'Our rigorous inspection services ensure your products meet the highest quality and regulatory standards. We act as your trusted partner in quality assurance, minimizing risks and protecting your brand reputation.',
    subServices: [
      { name: 'Quality Control' },
      { name: 'Compliance Audits' },
      { name: 'Pre-shipment Inspection' },
      { name: 'Supplier Verification' },
    ]
  },
  {
    icon: <FaWarehouse />,
    title: 'Storage',
    description: 'Leverage our secure, modern warehousing facilities for your storage needs. We offer flexible solutions with advanced inventory management systems, climate control, and 24/7 security to safeguard your assets.',
    subServices: [
      { name: 'Inventory Management' },
      { name: 'Order Fulfillment' },
      { name: 'Cross-Docking' },
      { name: 'Climate-Controlled Storage' },
    ]
  }
];

const ServicesPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Our Comprehensive Solutions</Title>
      {services.map((service, index) => (
        <ServiceSection key={index}>
          <ServiceContent>
            <IconWrapper
              initial={{ opacity: 0, x: (index % 2 === 0) ? -50 : 50 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </IconWrapper>
            <ServiceDetails>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <SubServiceList>
                {service.subServices.map((sub, i) => (
                  <SubServiceItem key={i}>
                    {sub.icon} {sub.name}
                  </SubServiceItem>
                ))}
              </SubServiceList>
            </ServiceDetails>
          </ServiceContent>
        </ServiceSection>
      ))}
    </PageContainer>
  );
};

export default ServicesPage;
