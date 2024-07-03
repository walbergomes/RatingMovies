import styled from "styled-components";

export const Container = styled.span`
  padding: 5px 16px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};

  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.COLOR_TEXT_TAG};

  border-radius: 8px;
`