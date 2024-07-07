import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  margin: 40px 0;
  padding: 12px;

  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;

`