// import { Button } from "../../../components/Button";
// import { Input } from "../../../components/Input";
import { HeaderFormAuth } from "../localComponents/HeaderFormAuth";

export function Login() {
  return (
    <div className="w-screen h-screen bg-[#121214] flex flex-col items-center justify-center text-gray-100">
      <HeaderFormAuth message="Faça Login e comece a usar!" />

      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-5 gap-4">
        <label htmlFor="email" className="flex flex-col gap-2">
          <p>Endereço de e-mail</p>
          {/* <Input /> */}
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
          <p>Sua Senha</p>
          {/* <Input type="password" /> */}
        </label>

        {/* <Button>Entrar na plataforma</Button> */}
      </form>

      <a href="" className="text-gray-400 underline text-gray-200 text-sm mt-4">
        Não possui conta? Faça o Registro
      </a>
    </div>
  );
}
