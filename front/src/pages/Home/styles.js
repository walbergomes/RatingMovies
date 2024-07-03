import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 123px;
`

export const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

 > h2 {
  white-space: nowrap;
  color: ${({ theme }) => theme.COLORS.WHITE};
 }

 > button {
  width: 207px;
 }
`