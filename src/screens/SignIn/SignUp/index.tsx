import { Eye, EyeOff, Mail, Lock, Phone, Users, User } from "lucide-react";
import * as Input from "../../../components/Input";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./validation";
import { handleSubmittedTypes } from "./types";
import { registerUserResource } from "../../../services/resources/auth/login";

export function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      cpf: "",
      email: "",
      name: "",
      phone: "",
      rg: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data: any) => {
      await registerUserResource(data)

      reset()
  };

  return (
    <form
      className="flex flex-col items-stretch   mt-5 md:gap-4 gap-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        htmlFor="name"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Nome Completo
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <User className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control {...field} />
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.name?.message}
        </span>
      </label>

      <label
        htmlFor="cpf"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        CPF
        <Controller
          name="cpf"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <Users className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control {...field} />
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.cpf?.message}
        </span>
      </label>

      <label
        htmlFor="rg"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        RG
        <Controller
          name="rg"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <Users className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control {...field} />
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.rg?.message}
        </span>
      </label>

      <label
        htmlFor="phone"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Telefone
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <Phone className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control {...field} />
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.phone?.message}
        </span>
      </label>

      <label
        htmlFor="email"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Endereço de e-mail
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control {...field} />
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.email?.message}
        </span>
      </label>

      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Sua senha
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <Lock className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                type={passwordVisible ? "text" : "password"}
                {...field}
              />
              <Input.Prefix
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <Eye className="h-5 w-5 text-zinc-500" />
                ) : (
                  <EyeOff className="h-5 w-5 text-zinc-500" />
                )}
              </Input.Prefix>
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.password?.message}
        </span>
      </label>

      <label
        htmlFor="confirm_password"
        className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
      >
        Confirmar Sua senha
        <Controller
          name="confirm_password"
          control={control}
          render={({ field }) => (
            <Input.Root>
              <Input.Prefix>
                <Lock className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                type={confirmPasswordVisible ? "text" : "password"}
                {...field}
              />
              <Input.Prefix
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible ? (
                  <Eye className="h-5 w-5 text-zinc-500" />
                ) : (
                  <EyeOff className="h-5 w-5 text-zinc-500" />
                )}
              </Input.Prefix>
            </Input.Root>
          )}
        />
        <span className="text-red-600 text-sm ml-2">
          {errors?.confirm_password?.message}
        </span>
      </label>

      <button className="bg-violet-600 p-2 rounded text-white" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
