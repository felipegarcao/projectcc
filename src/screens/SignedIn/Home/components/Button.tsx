import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx';


export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export  function ButtonItem({value, title, isSelected = false}: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={clsx('border py-2 px-5 rounded-lg text-violet-600 font-bold mr-2 hover:bg-violet-200 hover:text-white', {
        'bg-violet-300 text-white': isSelected,
        'bg-transparent': !isSelected
      })}
    >
      <span>{title}</span>

  
    </Tabs.Trigger>
  )
  
}