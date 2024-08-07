import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent": theme.COLORS.BACKGROUND_800 };
  color: ${({ theme }) => theme.COLORS.WHITE  };

  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : "none" };

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK };
  }

  > input {
    height: 56px;
    width: ;
    background: transparent;
    border: none;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE };
  }
`;
