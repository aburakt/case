import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import styled from 'styled-components';
import { DashboardCard } from '../components/DashboardCard/DashboardCard';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Yönetim Paneli</Title>
        <Subtitle>Kullanıcıları ve gönderileri yönetin</Subtitle>
      </Header>
      <CardsGrid>
        <DashboardCard
          to="/users"
          icon={<PeopleIcon fontSize="inherit" />}
          title="Kullanıcılar"
          description="Kullanıcıları görüntüle ve yönet"
        />
        <DashboardCard
          to="/posts"
          icon={<ArticleIcon fontSize="inherit" />}
          title="Gönderiler"
          description="Gönderileri görüntüle ve yönet"
        />
      </CardsGrid>
    </Container>
  );
}; 