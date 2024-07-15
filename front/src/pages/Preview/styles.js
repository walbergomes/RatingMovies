import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

  > main {
    margin: 40px 123px 156px;

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: ;

  color: ${({ theme }) => theme.COLORS.PINK};
  
  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`

export const Informations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 24px 0;

  > span {
    color: ${({ theme }) => theme.COLORS.PINK};

    &:hover {
      cursor: pointer;
      filter: brightness(0.7);
    }
  }
`

export const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;

  > h2 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE };
  }
`

export const Stars = styled.div`
  display: flex;
  gap: 3px;

  color: ${({ theme }) => theme.COLORS.PINK };
`

export const CreatedBy = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const By = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 30px;
    border-radius: 50%;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE };
  }
`

export const TimeOfCreation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK };
  }

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE };
  }
`

export const Tags = styled.div`
  display: flex;
  margin: 40px 0;
`

