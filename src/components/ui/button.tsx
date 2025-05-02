import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center whitespace-nowrap rounded-sm shrink-0',
    // Spacing
    'leading-[24px] text-base tracking-[0.5px]',
    // Borders
    'border-2',
    // Typography
    'font-medium',
    // Behavior
    'cursor-pointer transition-all outline-none',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-50',
    // Focus
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    // Validation (aria)
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
    // SVG handling
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary border-transparent text-primary-foreground hover:bg-primary/80 hover:border-transparent',
        secondary:
          'bg-secondary border-transparent text-secondary-foreground hover:bg-secondary/80 hover:border-transparent',
        outline: 'border-foreground bg-background hover:bg-accent',
        ghost: 'hover:bg-accent border-transparent',
        link: 'text-link border-transparent hover:text-link/80',
      },
      size: {
        default: 'p-3 has-[>svg]:px-2',
        lg: 'p-3 md:p-5 md:text-2xl md:font-bold md:px-12 has-[>svg]:px-2',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

function ButtonText({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn('px-4 sm:px-6', className)} {...props} />
}

export { Button, ButtonText, buttonVariants }
