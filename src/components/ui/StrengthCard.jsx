import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background: ${({ $variant }) =>
    $variant === 'filled' ? 'var(--card-bg)' : 'var(--background-color)'};
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ $variant }) =>
    $variant === 'filled' &&
    css`
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      &:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      }
    `}
`;

const ImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: ${({ $compact }) => ($compact ? '2rem' : '2rem')};
  display: flex;
  flex-direction: column;
  align-items: ${({ $centered }) => ($centered ? 'center' : 'flex-start')};
  text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  font-size: ${({ $size }) => ($size === 'lg' ? '3rem' : '2.5rem')};
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: ${({ $size }) => ($size === 'lg' ? '1.6rem' : '1.5rem')};
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-color);
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const StrengthCard = ({
  icon,
  image,
  title,
  description,
  variant = 'default',
  centered = false,
  iconSize = 'md',
  ...props
}) => {
  return (
    <CardWrapper
      $variant={variant}
      whileHover={{ y: -10 }}
      {...props}
    >
      {image && (
        <ImageContainer>
          <CardImage
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={title}
          />
        </ImageContainer>
      )}
      <CardContent $centered={centered || !image}>
        {icon && <IconWrapper $size={iconSize}>{icon}</IconWrapper>}
        <Title $size={image ? 'lg' : 'md'}>{title}</Title>
        {description && <Description>{description}</Description>}
      </CardContent>
    </CardWrapper>
  );
};

export default StrengthCard;
