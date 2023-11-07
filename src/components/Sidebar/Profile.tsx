import { LogOut } from 'lucide-react'
import { useUser } from '../../hooks/useUser'

export function Profile() {

  const {user, logout} = useUser()

  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        className="h-10 w-10 rounded-full"
        alt=""
        width={40}
        height={40}
      />
      <div className="flex  flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">{user?.name}</span>
        <span className="truncate text-sm  text-zinc-500">
          {user?.email}
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50" onClick={logout}>
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}