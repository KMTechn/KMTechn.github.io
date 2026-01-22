import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  font-size: var(--font-sm);
  color: var(--text-secondary);

  @media (max-width: 600px) {
    font-size: var(--font-xs);
    gap: 0.25rem;
  }
`;

const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BreadcrumbLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-amber);
  }
`;

const BreadcrumbCurrent = styled.span`
  color: var(--text-color);
  font-weight: 500;
`;

const Separator = styled(ChevronRight)`
  width: 16px;
  height: 16px;
  color: var(--border-color);
  flex-shrink: 0;
`;

const ROUTE_NAMES = {
  '/': 'Home',
  '/about': 'nav_about',
  '/business': 'nav_business',
  '/partners': 'nav_partners',
  '/contact': 'nav_contact',
};

const Breadcrumb = ({ customItems }) => {
  const location = useLocation();
  const { t } = useTranslation();

  // Build breadcrumb items from current path
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbItems = () => {
    if (customItems) return customItems;

    const items = [{ path: '/', label: 'Home', isHome: true }];

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const routeKey = ROUTE_NAMES[currentPath];
      if (routeKey) {
        items.push({
          path: currentPath,
          label: routeKey === 'Home' ? 'Home' : t(routeKey),
        });
      }
    });

    return items;
  };

  const items = getBreadcrumbItems();

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <BreadcrumbContainer aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem as="li" key={item.path}>
              {index > 0 && <Separator aria-hidden="true" />}
              {isLast ? (
                <BreadcrumbCurrent aria-current="page">
                  {item.label}
                </BreadcrumbCurrent>
              ) : (
                <BreadcrumbLink to={item.path}>
                  {item.isHome && <Home size={14} />}
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </ol>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
