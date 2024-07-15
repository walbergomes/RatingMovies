import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Top, NewMovie } from "./styles"

import { HiPlus } from "react-icons/hi";

import { Header } from "../../components/Header"
import { Note } from "../../components/Note";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function Home() {
  const { searchedMovie } = useAuth()

  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${searchedMovie}`)
      setNotes(response.data)
      // console.log(response)
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
            onClick={() => handlePreview(note.id)}
          />
        ))
        }
        {/* {console.log(notes)} */}
      </main>
    </ Container>
  )
}