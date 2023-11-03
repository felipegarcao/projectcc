import clsx from 'clsx';
import { ElementType, useContext } from 'react'
import { applicationContext } from '../../../context/ApplicationContext';
import { useNavigate } from 'react-router-dom';

interface NavItemProps {
  title: string
  icon: ElementType
  active: boolean;
  tab: string;
}

export function NavItem({ title, icon: Icon, active, tab }: NavItemProps) {
  const {setCurrentTab} = useContext(applicationContext)

  const navigate = useNavigate()

  function handleNavigation(tab: string) {
    setCurrentTab(tab)
    navigate('/')
  }


  return (
    <button
      className={clsx('group flex items-center gap-3 rounded px-3 py-2 cursor-pointer w-full', {
        'bg-violet-200': active,
        
      })}
      onClick={() => handleNavigation(tab)}
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