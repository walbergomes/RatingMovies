import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";

import { MdOutlineEmail, MdOutlineLock, MdOutlinePersonOutline, MdOutlineArrowBack, MdOutlineCameraAlt   } from "react-icons/md";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"

export function Profile() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  return (
    <Container>
      <header>
        <Link to="/">
          <MdOutlineArrowBack />
          Voltar
        </Link>
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
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input 
            placeholder="Email"
            type="email"
            icon={MdOutlineEmail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            placeholder="Senha atual"
            type="password"
            icon={MdOutlineLock}
            onChange={e => setPasswordOld(e.target.value)}
          />

          <Input 
            placeholder="Nova senha"
            type="password"
            icon={MdOutlineLock}
            onChange={e => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" />
        </Form>
    </Container>
  );
}
