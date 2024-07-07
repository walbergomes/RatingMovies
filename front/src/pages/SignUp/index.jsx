import { Container, Form, Background, BackButton } from "./styles";

import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlinePersonOutline,
  MdOutlineArrowBack,
} from "react-icons/md";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RatingMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={MdOutlinePersonOutline} />
        <Input placeholder="Email" type="email" icon={MdOutlineEmail} />
        <Input placeholder="Senha" type="password" icon={MdOutlineLock} />

        <Button title="Cadastrar" />

        <BackButton to="/">
          <MdOutlineArrowBack />
          Voltar para o login
        </BackButton>
      </Form>

      <Background />
    </Container>
  );
}
