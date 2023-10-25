import * as RadioGroup from '@radix-ui/react-radio-group';
import { ReactNode } from 'react';

interface RadioButtonProps {
  children: ReactNode;
  defaultValue?: string;
  onValueChange: (value: string) => void;

}


export function RadioButtonGroup({children, defaultValue, onValueChange}: RadioButtonProps){
  return (
    <RadioGroup.Root className="flex  gap-2.5" defaultValue={defaultValue} onValueChange={onValueChange}>
      {children}
    </RadioGroup.Root>
  )
}