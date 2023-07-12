import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import logo from "../../../assets/logo.svg";
import { ListOptions } from "./localComponents/ListOptions";

export function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-between">
        <ListOptions />
        <div className="bg-[#29292B] p-4 rounded mt-10">
          <Heading>Imoveis Disponíveis</Heading>

          <table className="w-full mt-5 text-white table">
            <thead>
              <th>Imagem</th>
              <th className="text-center">Tipo/Modalidade</th>
              <th className="text-left">Local</th>
              <th className="text-left">Valor</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td className="flex justify-center">
                  <img src={logo} alt="" height={50} width={50} />
                </td>
                <td className="text-center">Terreno</td>
                <td>Maria do espirito santo 59</td>
                <td>R$ 450,00</td>

                <td className="text-center">
                  <Button className="h-10 w-10 mr-2">1</Button>
                  <Button className="h-10 w-10 mr-2">1</Button>
                  <Button className="h-10 w-10">1</Button>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
