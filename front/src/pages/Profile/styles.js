import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

    display: flex;
    align-items: center;
    padding: 0 124px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  svg {
    font-size: 24px;
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 20px;
  }

  > button {
    margin-top: 30px;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -130px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 7px;
    bottom: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background: none;
  border: none;
  color: ${({ theme })  => theme.COLORS.PINK};

  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
  
  > svg {
    font-size: 20px;
  }
`