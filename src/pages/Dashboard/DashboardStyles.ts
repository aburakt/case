import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;
