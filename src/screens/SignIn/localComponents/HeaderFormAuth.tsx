import logo from "../../../assets/logo.svg";


interface HeaderFormAuthProps {
  message: string;
}


export function HeaderFormAuth({message}: HeaderFormAuthProps) {
  return (
    <header className="flex flex-col items-center">
    <img src={logo} alt="" height={120} width={120} />

    <h2 className="text-3xl text-[#E1E1E6]">Service Silva</h2>
    <p>{message}</p>
  </header>
  )
}