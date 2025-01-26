import { DashboardCard } from '@/components/DashboardCard';
import { useDataContext } from '@/context/useDataContext';
import { useFetchPosts } from '@/hooks/usePostsApi';
import { useFetchUsers } from '@/hooks/useUserApi';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import { CardsGrid, Container, Header, Subtitle, Title } from './DashboardStyles';

const Dashboard: React.FC = () => {
  const { setUsers, setPosts } = useDataContext();
  const { data: fetchedUsers } = useFetchUsers();
  const { data: fetchedPosts } = useFetchPosts();

  React.useEffect(() => {
    if (fetchedUsers && fetchedPosts) {
      setUsers(fetchedUsers);
      console.log('Users Context güncellendi:', fetchedUsers);
      setPosts(fetchedPosts);
      console.log('Posts Context güncellendi:', fetchedPosts);
    }
  }, [fetchedUsers, setUsers, fetchedPosts, setPosts]);

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

export default Dashboard;