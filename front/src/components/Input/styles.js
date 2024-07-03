import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  align-items: center;
  border-radius: 10px;

  margin-top: 8px;

  > input {
    background: transparent;
    border: none;

    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  > svg {
    margin-left: 17px;
  }
`