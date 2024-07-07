import { Container, BackButton, Form, Wrapper, TagsSection } from "./styles";

import { MdOutlineArrowBack } from "react-icons/md";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <BackButton>
            <MdOutlineArrowBack />
            Voltar
          </BackButton>
          <h2>Novo Filme</h2>
        </header>

        <Form>
          <Wrapper>
            <Input 
              placeholder="Título"
              type="text"
          />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="text"
            />
          </Wrapper>

          <TextArea placeholder="Observações"/>

          <section>
            <h3>Marcadores</h3>

            <TagsSection>
              <Marker value="Filme"/>
              <Marker isNew placeholder="Novo marcador"/>
            </TagsSection>
          </section>

          <Button title="Salvar"/>

        </Form>
      </main>
    </Container>
  );
}
