import { Eye, EyeOff, Mail, Lock, Phone, Users, User } from "lucide-react";
import * as Input from "../../../components/Input";
import { useState } from "react";

export function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <form className="flex flex-col items-stretch   mt-5 gap-4">
      <label
        htmlFor="name"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Nome Completo
        <Input.Root>
          <Input.Prefix>
            <User className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control id="email" type="email" />
        </Input.Root>
      </label>

      <label
        htmlFor="email"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        CPF
        <Input.Root>
          <Input.Prefix>
            <Users className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control id="email" type="email" />
        </Input.Root>
      </label>

      <label
        htmlFor="email"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Telefone
        <Input.Root>
          <Input.Prefix>
            <Phone className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control id="email" type="email" />
        </Input.Root>
      </label>

      <label
        htmlFor="email"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Endereço de e-mail
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control id="email" type="email" />
        </Input.Root>
      </label>

      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Sua senha
        <Input.Root>
          <Input.Prefix>
            <Lock className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="password"
            type={passwordVisible ? "text" : "password"}
          />
          <Input.Prefix onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? (
              <Eye className="h-5 w-5 text-zinc-500" />
            ) : (
              <EyeOff className="h-5 w-5 text-zinc-500" />
            )}
          </Input.Prefix>
        </Input.Root>
      </label>

      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Confirmar Sua senha
        <Input.Root>
          <Input.Prefix>
            <Lock className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="password"
            type={confirmPasswordVisible ? "text" : "password"}
          />
          <Input.Prefix
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? (
              <Eye className="h-5 w-5 text-zinc-500" />
            ) : (
              <EyeOff className="h-5 w-5 text-zinc-500" />
            )}
          </Input.Prefix>
        </Input.Root>
      </label>

      <button className="bg-violet-600 p-2 rounded text-white">
        Cadastrar
      </button>
    </form>
  );
}
