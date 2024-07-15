import {
  Container,
  BackButton,
  Informations,
  RatingHeader,
  Stars,
  CreatedBy,
  By,
  TimeOfCreation,
  Tags,
  ButtonDelete
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdOutlineArrowBack } from "react-icons/md";
import { FaStar, FaRegStar, FaRegClock } from "react-icons/fa";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Preview() {
  const { user } = useAuth();

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  async function handleRemove() {
    const confirm = window.confirm("Você realmente deseja apagar essa nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      console.log(response);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <BackButton to="/">
            <MdOutlineArrowBack size={20} />
            <span>Voltar</span>
          </BackButton>

          <Informations>
            <RatingHeader>
              <h2>{data.title}</h2>
              <Stars>
                {Array.from({ length: 5 }, (_, index) =>
                  index < data.rating ? (
                    <FaStar size={20} key={index} />
                  ) : (
                    <FaRegStar size={20} key={index} />
                  )
                )}
              </Stars>
            </RatingHeader>

            <ButtonDelete onClick={handleRemove}>Excluir nota</ButtonDelete>
          </Informations>

          <CreatedBy>
            <By>
              <img src={avatarUrl} alt={user.name} />
              <span>Por {user.name}</span>
            </By>
            <TimeOfCreation>
              <FaRegClock size={25} />
              <span>{data.created_at}</span>
            </TimeOfCreation>
          </CreatedBy>

          {data.tags && (
            <Tags>
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} name={tag.name} />
              ))}
            </Tags>
          )}

          <p>{data.description}</p>
        </main>
      )}
    </Container>
  );
}
