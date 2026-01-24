import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes, FaCommentDots } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(255, 204, 0, 0);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1rem;
  }
`;

const MainButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #121212;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(255, 204, 0, 0.4);
  animation: ${pulse} 2s ease-in-out infinite;

  &:hover {
    animation: none;
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(255, 204, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 54px;
    height: 54px;
    font-size: 1.3rem;
  }
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }

  &:hover {
    border-color: var(--accent-amber);
    background: rgba(255, 204, 0, 0.1);
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: var(--accent-amber);
  border: none;
  border-radius: 50px;
  color: #121212;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    font-size: 1rem;
  }

  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(255, 204, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  right: 70px;
  bottom: 15px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: var(--text-color);
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: var(--card-bg);
  }
`;

const FloatingCTA = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Don't show on contact page
  const isContactPage = location.pathname === '/contact';

  // Show after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show tooltip after 3 seconds on first visit
  useEffect(() => {
    const hasSeenTooltip = sessionStorage.getItem('ctaTooltipSeen');
    if (!hasSeenTooltip && isVisible && !isContactPage) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        sessionStorage.setItem('ctaTooltipSeen', 'true');
        // Hide after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isContactPage]);

  if (isContactPage || !isVisible) return null;

  const actionButtons = [
    {
      icon: <FaEnvelope />,
      label: 'cgpark@kmtechn.com',
      href: 'mailto:cgpark@kmtechn.com',
      type: 'link',
    },
  ];

  return (
    <Container>
      <AnimatePresence>
        {isOpen && (
          <>
            <ContactLink
              to="/contact"
              as={motion(Link)}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              <FaCommentDots />
              {t('nav_contact') || '문의하기'}
            </ContactLink>
            {actionButtons.map((btn, index) => (
              <ActionButton
                key={btn.label}
                href={btn.href}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: 0.05 * (index + 2) }}
              >
                {btn.icon}
                {btn.label}
              </ActionButton>
            ))}
          </>
        )}
      </AnimatePresence>

      <div style={{ position: 'relative' }}>
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <Tooltip
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              {t('cta_tooltip') || '문의가 필요하신가요?'}
            </Tooltip>
          )}
        </AnimatePresence>

        <MainButton
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <FaTimes /> : <FaCommentDots />}
          </motion.span>
        </MainButton>
      </div>
    </Container>
  );
};

export default FloatingCTA;
