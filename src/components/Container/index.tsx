import { PropsWithChildren, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";


export function Container({children}: PropsWithChildren) {
  const { collapsed } = useContext(ApplicationContext);


  return (
    <section className={`bg-[#202024] p-12 rounded h-full max-w-full ${collapsed ? 'ml-[100px]' : 'ml-[280px]'} transition-all`}>
      {children}
    </section>
  )
}