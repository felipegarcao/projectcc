

interface ImageHomeProps {
  image: string;
}

export function ImageHome({image}: ImageHomeProps){
  return (
    <div className="shadow-sm max-w-lg mx-auto my-4 text-center bg-white rounded-md">
      <img className="w-full h-64 object-cover rounded-[6px 6px 0px 0px]" src={image} alt="" />
    </div>
  )
}