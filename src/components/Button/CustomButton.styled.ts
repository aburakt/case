import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
