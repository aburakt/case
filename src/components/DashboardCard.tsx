import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const Description = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

interface DashboardCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  to,
  icon,
  title,
  description,
}) => {
  return (
    <Card to={to}>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}; 