import { useEffect, useState } from "react";
import { Container, Top, NewMovie } from "./styles"

import { HiPlus } from "react-icons/hi";

import { Header } from "../../components/Header"
import { Note } from "../../components/Note";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function Home() {
  const { searchedMovie } = useAuth()

  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${searchedMovie}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [searchedMovie])

  return ( 
    <Container>
    <Header />

      <Top>
        <h2>Meus filmes</h2>
        <NewMovie to="/new" >
          <HiPlus />
          Adicionar
        </NewMovie>
      </Top>

      <main>
        { 
          notes.map(note => (
          <Note 
            key={String(note.id)}
            data={note}
          />
        ))
        }
      </main>
    </ Container>
  )
}