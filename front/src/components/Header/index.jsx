import { Container, Search, Profile  } from "./styles"

import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <p>RatingMovies</p>

      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Profile>
        <div>
          <p>Walber Gomes</p>
          <span>sair</span>
        </div>
        <img 
          src="https://github.com/walbergomes.png" 
          alt="foto do usuario" />
      </Profile>
      
    </Container>
  )
}