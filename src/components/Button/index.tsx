import { ComponentProps } from "react";
import {tv, VariantProps} from 'tailwind-variants'


const button = tv({
    base: [
        'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm'
    ],

    variants: {
        variant: {
            primary: 'bg-violet-600 hover:bg-violet-700 text-white',
            danger: 'bg-red-500 text-white',
            outlined: 'bg-transparent border border-violet-700 text-violet-600',
            success: 'bg-green-500 text-white'
        }
    }
})


export type Props = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({variant, className, ...props}: Props) {
    return (
      <button
      {...props}
        className={button({variant, className})}
      />
    )
  }