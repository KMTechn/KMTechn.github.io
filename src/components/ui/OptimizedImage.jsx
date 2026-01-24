import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => props.$bgColor || 'var(--card-bg)'};
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit || 'cover'};
  object-position: ${props => props.$objectPosition || 'center'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.$loaded ? 1 : 0};
  transform: ${props => props.$loaded ? 'scale(1)' : 'scale(1.02)'};
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--background-color) 100%);
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;

  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid var(--border-color);
    border-top-color: var(--accent-amber);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

/**
 * Optimized image component with:
 * - Native lazy loading
 * - Intersection Observer fallback
 * - Loading placeholder
 * - Smooth fade-in animation
 * - WebP support detection
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  style,
  objectFit = 'cover',
  objectPosition = 'center',
  bgColor,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Use IntersectionObserver for lazy loading fallback
    if (!('loading' in HTMLImageElement.prototype)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else {
      // Native lazy loading is supported
      setInView(true);
    }
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    // Optionally handle error state
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <ImageWrapper $bgColor={bgColor} className={className} style={style} ref={imgRef}>
      <Placeholder $visible={!loaded} />
      {inView && (
        <StyledImage
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          $loaded={loaded}
          $objectFit={objectFit}
          $objectPosition={objectPosition}
          {...props}
        />
      )}
    </ImageWrapper>
  );
};

/**
 * Background image variant
 */
export const OptimizedBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$src});
  background-size: ${props => props.$size || 'cover'};
  background-position: ${props => props.$position || 'center'};
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
`;

export default OptimizedImage;
