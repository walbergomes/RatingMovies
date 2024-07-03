import { Container, Form, Background, BackButton } from "./styles"

import { MdOutlineEmail, MdOutlineLock, MdOutlinePersonOutline, MdOutlineArrowBack  } from "react-icons/md";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>  
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nmme" icon={MdOutlinePersonOutline}/>
        <Input placeholder="Email" icon={MdOutlineEmail}/>
        <Input placeholder="Senha" icon={MdOutlineLock}/>

        <Button title="Cadastrar" />

        <BackButton>
          <MdOutlineArrowBack />
          Voltar para o login
        </BackButton>
      </Form>

      <Background />
    </Container>
  )
}