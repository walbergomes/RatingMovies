import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  height: 56px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  border: none;
  border-radius: 10px;
`