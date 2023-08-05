import { ElementType } from "react";

interface TimeLineProps {
  text: string
  icon: ElementType
}



export function TimeLineItem({text, icon: Icon}: TimeLineProps) {
  return (
    <li className="relative mb-6 sm:mb-0 flex-1">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 r bg-violet-900 sm:ring-8 ring-violet-900 shrink-0">
          <Icon className="text-white" size={16} />
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
      </div>
      <div className="mt-3 sm:pr-8">
        <time className="block text-sm font-normal leading-none text-gray-400  mt-5">
          Cadastrar
        </time>
        <p className="text-base font-bold text-gray-500 dark:text-gray-400">
          {text}
        </p>
      </div>
    </li>
  );
}
