import { PropsWithChildren } from "react";


export function Container({children}: PropsWithChildren) {
  return (
    <section className="bg-[#202024] p-4 rounded h-full">
      {children}
    </section>
  )
}