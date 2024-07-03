import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  

  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin: 0 134px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    margin: 48px 0;
  }

  > button {
    margin: 16px 0 42px;
  }
`

export const BackButton = styled.div`
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > svg {
      font-size: 25px;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`