import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 42px 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_BOTTOM_LINE};

  > p {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  gap: 9px;

  &:hover {
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;

export const Avatar = styled(Link)`
  > img {
    width: 64px;
    border-radius: 50%;
  }
`;

export const LogOutButton = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  &:hover {
    filter: brightness(0.6);
  }
`;
