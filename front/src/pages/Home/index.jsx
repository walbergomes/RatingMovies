import { Container, Top } from "./styles"

import { HiPlus } from "react-icons/hi";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"



export function Home() {
  return ( 
    <>
    <Header />

    <Container>
      <Top>
        <h2>Meus filmes</h2>
        <Button title="Adicionar" icon={HiPlus} />
      </Top>
    </Container>
    </>
  )
}