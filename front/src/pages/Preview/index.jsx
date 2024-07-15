import { Container, BackButton, Informations, RatingHeader, Stars, CreatedBy, By, TimeOfCreation, Tags,  } from "./styles";

import { MdOutlineArrowBack } from "react-icons/md";
import { FaStar, FaRegStar, FaRegClock } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag"

export function Preview() {
  return (
    <Container>
      <Header />

      <main>
        <BackButton to="/" >
          <MdOutlineArrowBack size={20} />
          <span>Voltar</span>
        </BackButton>

        <Informations>
          <RatingHeader>
            <h2>Interestelar</h2>
            <Stars>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaRegStar size={20}/>
            </Stars>
          </RatingHeader>

          <span>Excluir nota</span>
        </Informations>

        <CreatedBy>
          <By>
            <img src="https://github.com/walbergomes.png" alt="" />
            <span>Por Walber Gomes</span>
          </By>
          <TimeOfCreation>
            <FaRegClock size={25}/>
            <span>23/05/22 às 08:00</span>
          </TimeOfCreation>
        </CreatedBy>
        
        <Tags>
          <Tag name="Ficção Cientifíca" />
          <Tag name="Drama" />
          <Tag name="Família" />
        </Tags>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque repellat veritatis, vitae, perspiciatis magnam voluptatum voluptatem, veniam nesciunt ea quaerat odit fuga quod enim eligendi omnis expedita nam consequuntur blanditiis. Incidunt, in temporibus minima ad debitis vitae esse dignissimos possimus voluptatibus, ea libero sint nesciunt laboriosam adipisci ex dolorem hic architecto itaque. Atque, iusto eius sapiente excepturi odit ipsum neque iste error? Recusandae fugiat, dolore reiciendis similique aliquid itaque distinctio hic pariatur deleniti aspernatur minus sequi! Delectus tempore tenetur saepe eos, modi facere cum consequuntur quis voluptatum harum sit suscipit facilis voluptas non voluptatibus dolores necessitatibus dolore nobis qui, aut quo ab magnam. Aut inventore possimus, nemo perferendis sint corrupti quas dignissimos officia animi obcaecati ullam aliquam eveniet est ad debitis voluptatibus, perspiciatis quasi cupiditate, dolor suscipit aliquid distinctio odit porro! Earum error sunt recusandae ducimus unde. Commodi, asperiores debitis error reprehenderit modi deserunt, incidunt, temporibus quia exercitationem consequuntur dolores iste velit obcaecati! A magnam unde excepturi quo assumenda odit, officiis tempore rerum delectus ullam dolores. Dicta quisquam sed quam modi deserunt accusantium itaque necessitatibus aperiam natus dignissimos. Exercitationem esse ad animi repudiandae quod dolores debitis illum facilis velit pariatur. Harum sint cum voluptas quia animi reiciendis voluptates necessitatibus repudiandae, voluptatum quasi aliquam in debitis a tempore est inventore! Tempore eius delectus ut quos a saepe facilis magnam qui hic. Quos inventore quidem aliquid incidunt dicta, accusantium quibusdam nesciunt quae repellat rerum quam veritatis laborum quo neque culpa! Error, deserunt quasi fugiat quam ducimus sint provident illo? Reiciendis omnis, fugiat at illo soluta voluptatem, quisquam, ea ut obcaecati sequi expedita dignissimos blanditiis possimus illum est. Officia totam exercitationem fuga accusantium, tenetur aspernatur facere quos itaque provident omnis ea doloribus eveniet illo deserunt necessitatibus vitae velit, aperiam doloremque dicta maxime quo. Voluptatem omnis quaerat praesentium temporibus esse itaque blanditiis fuga suscipit cumque laborum officiis inventore maiores delectus cupiditate ipsum, possimus autem aut perspiciatis. Impedit delectus iure doloribus consequuntur. Nisi rem porro amet, dolores eum quaerat labore nihil ipsum laborum neque! Alias officia asperiores impedit distinctio laborum a, suscipit quidem, accusantium consectetur, dolores perferendis. Tempora quos vero fuga nam soluta ratione distinctio animi. Excepturi reiciendis vel placeat accusantium animi, fugiat dolorem autem quam eos maiores nam molestiae ratione veritatis, ab facilis blanditiis facere corrupti culpa praesentium, provident necessitatibus nulla repellat nostrum cum. Qui pariatur at, incidunt eligendi vitae neque ducimus dicta voluptate dolores tenetur alias quibusdam sapiente omnis esse enim! Nihil, corporis.
        </p>
        
      </main>

    </Container>
  );
}
