import { Edit, Home, Paperclip, Users } from "lucide-react";

import { TimeLineItem } from "./TimeLineItem";

export function TimeLine() {
  return (
    <ol className="ml-2 items-center lg:flex grid grid-cols-2 gap-3 mt-8 hidden">
      <TimeLineItem text="Inquilinos" icon={Users} />
      <TimeLineItem text="Proprietários" icon={Edit} />
      <TimeLineItem text="Imoveis" icon={Home} />
      <TimeLineItem text="Contratos" icon={Paperclip} />
    </ol>
  )
}