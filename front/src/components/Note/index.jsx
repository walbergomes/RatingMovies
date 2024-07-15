import { Container, Stars } from "./styles";

import { FaStar, FaRegStar } from "react-icons/fa";

import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest} >
      <h2>{data.title}</h2>

      <Stars>
        {
          Array.from({ length: 5 }, (_, index) => 
            index < data.rating ? <FaStar key={index} /> : <FaRegStar key={index} />
          )
        }
      </Stars>

      <p>
        {data.description}
      </p>

      {data.tags.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </Container>
  );
}
