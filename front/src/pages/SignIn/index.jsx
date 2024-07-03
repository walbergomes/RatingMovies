import { Container, Form, Background } from "./styles"

import { MdOutlineEmail, MdOutlineLock  } from "react-icons/md";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>  
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Email" icon={MdOutlineEmail}/>
        <Input placeholder="Senha" icon={MdOutlineLock}/>

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}