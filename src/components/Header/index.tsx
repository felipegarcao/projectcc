import { ApplicationContext } from "../../context/ApplicationContext";
import { useContext } from "react";

export function Header() {
  const { toogle } = useContext(ApplicationContext);

  return (
    <header className="bg-[#202024] border-b border-white flex items-center gap-8 h-12 fixed top-0 left-0 right-0 z-10 px-2 text-white">
      <button onClick={toogle}>teste</button>
    </header>
  );
}
