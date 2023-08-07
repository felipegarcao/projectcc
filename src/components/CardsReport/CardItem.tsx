import { useNavigate } from "react-router-dom";

interface CardItemProps {
  redirect: string;
  counter: number;
  text: string;
}

export function CardItem({
  redirect,
  counter,
  text
}: CardItemProps) {

  const navigate = useNavigate()

  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    
    <div>
      <h2 className="text-gray-800 text-3xl font-semibold">{counter}</h2>
      <p className="mt-2 text-gray-600">
      {text}
      </p>
    </div>
    <div className="flex justify-end mt-4">
      <a href={redirect} className="text-xl font-medium text-indigo-500">
        Visualizar
      </a>
    </div>
  </div>
  )
}