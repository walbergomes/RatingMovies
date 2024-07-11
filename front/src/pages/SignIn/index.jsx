import { useState } from "react";
import { Container, Form, Background } from "./styles"
import { MdOutlineEmail, MdOutlineLock  } from "react-icons/md";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
 
  return (
    <Container>
      <Form>  
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder="Email" 
          type="text"
          icon={MdOutlineEmail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha" 
          icon={MdOutlineLock}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register" >Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}