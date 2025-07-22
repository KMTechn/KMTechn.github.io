import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: var(--footer-bg);
  color: var(--text-secondary);
  padding: 2rem 5%;
  border-top: 1px solid var(--border-color);
  text-align: center;
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <p>{t('footer_copyright')}</p>
    </FooterContainer>
  );
};

export default Footer;