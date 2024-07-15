import { useState } from "react";
import { Container, Search, Profile, Avatar, LogOutButton  } from "./styles"

import { Input } from "../Input"
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api";


export function Header() {
  const [search, setSearch] = useState("")
  const { signOut, user, searchNote } = useAuth()

  const  avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  searchNote(search)

  return (
    <Container>
      <p>RatingMovies</p>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Profile>
        <div>
          <p>{user.name}</p>
          <LogOutButton onClick={signOut}>sair</LogOutButton>
        </div>
        <Avatar to="/profile" >
          <img 
            src={avatarUrl} 
            alt="foto do usuario" />
        </Avatar>
      </Profile>
      
    </Container>
  )
}