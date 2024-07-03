import { Container, Stars } from "./styles";

import { FaStar, FaRegStar } from "react-icons/fa";

import { Tag } from "../Tag";

export function Note() {
  return (
    <Container>
      <h2>Interestelar</h2>

      <Stars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </Stars>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis sunt eligendi recusandae asperiores? Esse at quibusdam odio voluptatem placeat fugit ullam et dolores sapiente sit quos incidunt labore animi explicabo, voluptas molestias, est excepturi totam. Fugiat sunt amet adipisci voluptates, architecto aspernatur hic. Odit officiis excepturi consequatur nesciunt vel! Dolor doloremque placeat error saepe officiis atque optio ea obcaecati libero magni vitae nam provident voluptatibus laudantium repellat, perferendis incidunt maiores! Dolor architecto quasi accusamus accusantium eos, tempora dignissimos natus laudantium sunt molestias cumque? Commodi optio hic itaque quaerat doloribus. Facilis quo obcaecati numquam aperiam culpa illo id aut corporis.
      </p>

      <Tag name="Ficção Científica"/>
      <Tag name="Drama"/>
      <Tag name="Família"/>
    </Container>
  );
}
