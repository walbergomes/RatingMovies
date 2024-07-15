import { useState } from "react";
import { Container, BackButton, Form, Wrapper, TagsSection } from "./styles";

import { MdOutlineArrowBack } from "react-icons/md";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

export function New() {
  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState("");

  function handleAddMarker() {
    setMarkers((prevState) => [...prevState, newMarker]);
    setNewMarker("");
  }

  function handleRemoveMarker(deleted) {
    setMarkers(prevState => prevState.filter(marker => marker !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <header>
          <BackButton to="/">
            <MdOutlineArrowBack />
            Voltar
          </BackButton>
          <h2>Novo Filme</h2>
        </header>

        <Form>
          <Wrapper>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </Wrapper>

          <TextArea placeholder="Observações" />

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

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
