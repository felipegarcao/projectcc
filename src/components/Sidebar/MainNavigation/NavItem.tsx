import clsx from 'clsx';
import { ElementType, useContext } from 'react'
import { applicationContext } from '../../../context/ApplicationContext';

interface NavItemProps {
  title: string
  icon: ElementType
  active: boolean;
  tab: string;
}

export function NavItem({ title, icon: Icon, active, tab }: NavItemProps) {
  const {setCurrentTab} = useContext(applicationContext)


  return (
    <button
      className={clsx('group flex items-center gap-3 rounded px-3 py-2 cursor-pointer w-full', {
        'bg-violet-200': active,
        
      })}
      onClick={() => setCurrentTab(tab)}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span 
      
        className={clsx('font-medium ', {
          'text-white': active,
          'text-zinc-700': !active
        })}>

        {title}
      </span>
    </button>
  )
}