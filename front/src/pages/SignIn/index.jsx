import { Container, Form, Background } from "./styles"
import { MdOutlineEmail, MdOutlineLock  } from "react-icons/md";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignIn() {

  const data = useAuth()
  console.log("Meu contexto", data)

  return (
    <Container>
      <Form>  
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Email" icon={MdOutlineEmail}/>
        <Input placeholder="Senha" icon={MdOutlineLock}/>

        <Button title="Entrar" />

        <Link to="/register" >Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}