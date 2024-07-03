import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  
  margin-bottom: 50px;

  /* display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: 
  "header"
  "new"
  "main"; */

  > main {
    padding: 0 123px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    /* overflow-y: scroll;
    grid-area: main; */
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  /* grid-area: new; */

  padding: 50px 123px 0;


 > h2 {
  white-space: nowrap;
  color: ${({ theme }) => theme.COLORS.WHITE};
 }

 > button {
  width: 207px;
 }
`