import React from 'react';
import { DashboardCardProps } from '../../types';
import { Card, Description, IconWrapper, Title } from './DashboardCardStyles';




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