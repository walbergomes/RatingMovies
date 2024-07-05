import { Container, Form, Avatar } from "./styles";

import { MdOutlineEmail, MdOutlineLock, MdOutlinePersonOutline, MdOutlineArrowBack, MdOutlineCameraAlt   } from "react-icons/md";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <MdOutlineArrowBack />
          Voltar
        </a>
      </header>

      <Form>
          <Avatar>
            <img 
              src="https://github.com/walbergomes.png" 
              alt="foto do usuário" 
            />

            <label htmlFor="avatar">
              <MdOutlineCameraAlt />
              <input 
                type="file" 
                id="avatar"  
              />
            </label>
          </Avatar>
          <Input 
            placeholder="Nome"
            type="text"
            icon={MdOutlinePersonOutline}
          />

          <Input 
            placeholder="Email"
            type="email"
            icon={MdOutlineEmail}
          />

          <Input 
            placeholder="Senha atual"
            type="password"
            icon={MdOutlineLock}
          />

          <Input 
            placeholder="Nova senha"
            type="password"
            icon={MdOutlineLock}
          />

          <Button title="Salvar" />
        </Form>
    </Container>
  );
}
