import { Edit, Home, Paperclip, Users } from "lucide-react";
import { TimeLineItem } from "./TimeLineItem";

export function TimeLine() {
  return (
    <ol className="items-center sm:flex mt-8">
      <TimeLineItem text="Inquilinos" icon={Users} />
      <TimeLineItem text="Proprietários" icon={Edit} />
      <TimeLineItem text="Imoveis" icon={Home} />
      <TimeLineItem text="Contratos" icon={Paperclip} />
    </ol>
  )
}