import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Background, BackButton } from "./styles";

import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlinePersonOutline,
  MdOutlineArrowBack,
} from "react-icons/md";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if(error.response) {
          return alert(error.response.data.message)
        } else {
          return alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={MdOutlinePersonOutline}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          icon={MdOutlineEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={MdOutlineLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <BackButton to="/">
          <MdOutlineArrowBack />
          Voltar para o login
        </BackButton>
      </Form>

      <Background />
    </Container>
  );
}
