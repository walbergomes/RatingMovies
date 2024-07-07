import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  border-radius: 16px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 30px;
  }
`
export const Stars = styled.div`
  display: flex;
  gap: 6px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 15px;
    margin: 8px 0 15px;
  }
`