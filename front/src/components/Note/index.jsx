import { Container, Stars } from "./styles";

import { FaStar, FaRegStar } from "react-icons/fa";

import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest} >
      <h2>{data.title}</h2>

      <Stars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </Stars>

      <p>
        {data.description}
      </p>

      <Tag name="Ficção Científica"/>
      <Tag name="Drama"/>
      <Tag name="Família"/>
    </Container>
  );
}
