import { Container, Search, Profile, Avatar, LogOutButton  } from "./styles"

import { Input } from "../Input"

import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <p>RatingMovies</p>

      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Profile>
        <div>
          <p>Walber Gomes</p>
          <LogOutButton onClick={signOut}>sair</LogOutButton>
        </div>
        <Avatar to="/profile" >
          <img 
            src="https://github.com/walbergomes.png" 
            alt="foto do usuario" />
        </Avatar>
      </Profile>
      
    </Container>
  )
}