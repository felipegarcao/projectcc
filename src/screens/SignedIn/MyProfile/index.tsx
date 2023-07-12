import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";


export function MyProfile(){
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4 p-3">
        <div className="bg-gray-200 rounded p-2 h-80 col-span-4">
          a
        </div>
        <div className="col-span-8">
          <Heading className="text-center mb-3">Meu Perfil</Heading>
          <div className="bg-gray-200 rounded p-2">
            a
          </div>
        </div>
      </div>
    </Container>
  )
}