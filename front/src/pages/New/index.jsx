import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, BackButton, Form, Wrapper, TagsSection } from "./styles";

import { MdOutlineArrowBack } from "react-icons/md";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState("");

  const navigate = useNavigate()

  function handleAddMarker() {
    setMarkers((prevState) => [...prevState, newMarker]);
    setNewMarker("");
  }

  function handleRemoveMarker(deleted) {
    setMarkers(prevState => prevState.filter(marker => marker !== deleted))
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Você não colocou um título para a nota")
    }

    if(newMarker) {
      return alert("Você deixou um campo do marcador sem adicionar")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags: markers
    })

    alert("Nota criada com sucesso")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <header>
          <BackButton onClick={handleBack}>
            <MdOutlineArrowBack />
            Voltar
          </BackButton>
          <h2>Novo Filme</h2>
        </header>

        <Form>
          <Wrapper>
            <Input 
              type="text" 
              placeholder="Título" 
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              type="text" 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)} 
            />
          </Wrapper>

          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)} 
          />

          <section>
            <h3>Marcadores</h3>

            <TagsSection>
              {markers.map((marker, index) => (
                <Marker
                  key={String(index)}
                  value={marker}
                  onCLick={() => handleRemoveMarker(marker)}
                />
              ))}
              <Marker
                isNew
                placeholder="Novo marcador"
                value={newMarker}
                onChange={(e) => setNewMarker(e.target.value)}
                onCLick={handleAddMarker}
              />
            </TagsSection>
          </section>

          <Button 
            title="Salvar" 
            onClick={handleNewNote} 
          />
        </Form>
      </main>
    </Container>
  );
}
