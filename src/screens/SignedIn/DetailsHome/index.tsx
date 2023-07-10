import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import { ImageHome } from "../../../components/ImageHome";
import { Container } from "../../../components/Container";

export function DetailsHome() {
  const image = productData.map((item) => (
    <ImageHome key={item.id} image={item.imageurl} />
  ));

  return (
    <Container>
      <Carousel responsive={responsive}>
        {image}
      </Carousel>
    </Container>
  );
}
