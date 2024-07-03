import { Container, Top } from "./styles"

import { HiPlus } from "react-icons/hi";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note";


export function Home() {
  return ( 
    <Container>
    <Header />

      <Top>
        <h2>Meus filmes</h2>
        <Button title="Adicionar" icon={HiPlus} />
      </Top>

      <main>
        <Note />
        <Note />
      </main>
    </ Container>
  )
}