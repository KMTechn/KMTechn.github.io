import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const sizeStyles = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: var(--font-sm);
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: var(--font-base);
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: var(--font-lg);
  `,
};

const variantStyles = {
  primary: css`
    background-color: var(--accent-amber);
    color: #121212;
    border: 2px solid var(--accent-amber);

    &:hover:not(:disabled) {
      background-color: transparent;
      color: var(--accent-amber);
    }
  `,
  secondary: css`
    background-color: transparent;
    color: var(--accent-amber);
    border: 2px solid var(--accent-amber);

    &:hover:not(:disabled) {
      background-color: var(--accent-amber);
      color: #121212;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: var(--text-color);
    border: 2px solid var(--border-color);

    &:hover:not(:disabled) {
      background-color: var(--card-bg);
      border-color: var(--accent-amber);
      color: var(--accent-amber);
    }
  `,
};

const StyledButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  white-space: nowrap;

  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      as={as}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
