import * as AvatarPrimitive from "@radix-ui/react-avatar";

export function Avatar() {
  return (
    <AvatarPrimitive.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-11 h-11 rounded-full ">
      <AvatarPrimitive.Image
        className="w-full h-full object-cover rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="Colm Tuite"
      />

      <AvatarPrimitive.Fallback
        className="w-full h-full flex justify-center bg-white text-violet-500 text-sm"
      >LF</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
