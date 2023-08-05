import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import { ImageHome } from "../../../components/ImageHome";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
// import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { useContext } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";

export function DetailsHome() {
  const { modalIsOpen, setModalIsOpen } = useContext(ApplicationContext);

  const image = productData.map((item) => (
    <ImageHome key={item.id} image={item.imageurl} />
  ));

  return (
    <>
        <Carousel responsive={responsive}>{image}</Carousel>
        <div className="flex flex-col">
          <Heading size="lg" className="mt-5">
            CASA DISPONIVEL PARA ALUGAR - R$ 450,00
          </Heading>
          <Text size="sm">Endereço: Maria do espirito santo - 59</Text>

          <Text size="lg" className="leading-loose mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </Text>
          <div className="flex items-center justify-center mt-10">
            {/* <Button onClick={() => setModalIsOpen(true)}>Solicitar Imóvel</Button> */}
          </div>
        </div>
      {modalIsOpen && <Modal />}
    </>
  );
}
