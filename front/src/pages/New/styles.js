import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {
    max-width: 1130px;
    margin: 40px auto;

    header {
      display: flex;
      flex-direction: column;
      gap: 24px;

      h2 {
        color: ${({ theme })  => theme.COLORS.WHITE};
        font-size: 36px;
        margin-bottom: 40px;
      }
    }
  }
`

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme })  => theme.COLORS.PINK};

  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
  
  > svg {
    font-size: 20px;
  }
`

export const Form = styled.form`
  > section {

    h3 {
      color: ${({ theme })  => theme.COLORS.GRAY_100};
      font-size: 20px;
      margin-bottom: 24px;
    }
  }

  > button {
    margin-top: 76px;

    &:hover {
      filter: brightness(0.7);
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`

export const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  width: 100%;
  background-color: #0D0C0F;
  padding: 16px;

  border-radius: 8px;
`