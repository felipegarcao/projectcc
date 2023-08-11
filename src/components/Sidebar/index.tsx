import * as Input from '../Input'

import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { Profile } from './Profile'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="lg:flex flex-col gap-4 border-r border-zinc-200 px-5 py-8 bg-white hidden">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}