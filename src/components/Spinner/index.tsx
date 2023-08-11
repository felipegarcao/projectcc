import { Loader2 } from "lucide-react";

export function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="animate-spin h-10 w-10 text-violet-600" />
    </div>
  )
}