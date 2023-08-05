import * as AvatarPrimitive from "@radix-ui/react-avatar";

export function Avatar() {
  return (
    <AvatarPrimitive.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-11 h-11 rounded-full bg-gray-900">
      <AvatarPrimitive.Image
        className="w-full h-full object-cover rounded-full"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />

      <AvatarPrimitive.Fallback
        className="w-full h-full flex justify-center bg-white text-violet-500 text-sm"
      >LF</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
