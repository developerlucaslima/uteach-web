import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/cn'

function U({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.0001 0.0312224L18.5001 0.0312225C18.3031 0.0312225 18.108 0.0700332 17.926 0.145406C17.7441 0.220779 17.5787 0.331248 17.4393 0.470519C17.3001 0.609903 17.1896 0.77527 17.1142 0.957175C17.0388 1.13919 17 1.33426 17 1.53124L17 7.03125C16.5 9.03083 16.4065 9.6247 15 11.0313C13.5935 12.4378 12.4892 13.5312 10.5 13.5313C9.51511 13.5313 8.90995 13.4082 8 13.0312C7.09004 12.6543 6.19645 11.7277 5.5 11.0313C4.80356 10.3348 4.87691 10.4412 4.5 9.53125C4.12309 8.6213 4.00003 8.01617 4.00004 7.03125L4.00004 1.53169C4.0001 1.33471 3.96134 1.13953 3.88599 0.957514C3.81063 0.775495 3.70015 0.610016 3.56086 0.470745C3.42155 0.331362 3.25617 0.220892 3.07415 0.145407C2.89214 0.0700339 2.69705 0.0312232 2.50002 0.0312232L-7.43095e-07 0.0312233L-4.15255e-07 6.53133C-3.55061e-07 7.9102 0.271592 9.27558 0.799269 10.5495C1.32695 11.8234 2.10038 12.9809 3.07539 13.9559C4.05042 14.9309 5.20793 15.7044 6.48186 16.232C7.75578 16.7597 9.12116 17.0313 10.5 17.0312C13.2848 17.0312 15.9555 15.925 17.9247 13.9559C19.8938 11.9868 21.0001 9.31609 21.0001 6.53133L21.0001 0.0312224Z"
        fill="#EA580C"
      />
    </svg>
  )
}

function Ellipse({
  color = 'black',
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4.5" cy="5.46875" r="4.5" fill={color} />
    </svg>
  )
}

const logoVariants = cva('flex items-center space-x-1 p-0 m-0', {
  variants: {
    variant: {
      default: 'text-slate-900',
      dark: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type LogoProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof logoVariants> & {
    asChild?: boolean
  }

function Logo({ className, variant, asChild = false, ...props }: LogoProps) {
  const Comp = asChild ? Slot : 'div'
  const ellipseColor = variant === 'dark' ? 'white' : '#0F172A'

  return (
    <Comp className={cn(logoVariants({ variant, className }))} {...props}>
      <div className="relative pt-[4px]">
        <U />
        <Ellipse color={ellipseColor} className="absolute top-0" />
      </div>
      <span className="text-3xl font-bold">teach</span>
    </Comp>
  )
}

export { Logo }
