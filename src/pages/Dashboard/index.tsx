import { DashboardCard } from '@/components/DashboardCard';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import { CardsGrid, Container, Header, Subtitle, Title } from './DashboardStyles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <Subtitle>Manage users and posts</Subtitle>
      </Header>
      <CardsGrid>
        <DashboardCard
          to="/users"
          icon={<PeopleIcon fontSize="inherit" />}
          title="Users"
          description="View and manage users"
        />
        <DashboardCard
          to="/posts"
          icon={<ArticleIcon fontSize="inherit" />}
          title="Posts"
          description="View and manage posts"
        />
      </CardsGrid>
    </Container>
  );
}; 