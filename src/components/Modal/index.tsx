import { useContext } from "react";
import ModalContainer from "react-modal";
import { ApplicationContext } from "../../context/ApplicationContext";
// import { Button } from "../Button";
import { Heading } from "../Heading";


ModalContainer.setAppElement('#root');

export function Modal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ApplicationContext);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      backgroundColor: "#29292B",
      border: '0'
    },
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <ModalContainer
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <div>
          <header className="flex justify-between items-center mb-3">
            <Heading>Justificativa</Heading>
            <button onClick={closeModal}>X</button>
          </header>

          <form>
            <textarea
              className="w-full bg-[#202024] p-2 text-white text-sm resize-none"
              rows={8}
            ></textarea>
            <footer className="flex justify-end mt-3">
              {/* <Button>Enviar</Button> */}
            </footer>
          </form>
        </div>
      </ModalContainer>
    </div>
  );
}
