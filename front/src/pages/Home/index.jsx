import { Container, Top, NewMovie } from "./styles"

import { HiPlus } from "react-icons/hi";

import { Header } from "../../components/Header"
import { Note } from "../../components/Note";


export function Home() {
  return ( 
    <Container>
    <Header />

      <Top>
        <h2>Meus filmes</h2>
        <NewMovie to="/new" >
          <HiPlus />
          Adicionar
        </NewMovie>
      </Top>

      <main>
        <Note />
        <Note />
      </main>
    </ Container>
  )
}