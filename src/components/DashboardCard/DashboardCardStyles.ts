import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
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

export const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
