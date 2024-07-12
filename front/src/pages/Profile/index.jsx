import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";

import { MdOutlineEmail, MdOutlineLock, MdOutlinePersonOutline, MdOutlineArrowBack, MdOutlineCameraAlt   } from "react-icons/md";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const  avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    } 
    
    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

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
              src={avatar} 
              alt="foto do usuário" 
            />

            <label htmlFor="avatar">
              <MdOutlineCameraAlt />
              <input 
                type="file"
                id="avatar"
                onChange={handleChangeAvatar}  
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

          <Button title="Salvar" onClick={handleUpdate} />
        </Form>
    </Container>
  );
}
