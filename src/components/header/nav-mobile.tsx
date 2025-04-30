import { Button } from '@ui/button'
import { NavButton } from '@ui/nav-button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

import type { NavConfigProps } from './nav-config'

export interface NavMobileProps {
  navConfigProps: NavConfigProps[]
}

export const NavMobile = ({ navConfigProps }: NavMobileProps) => {
  return (
    <nav className="flex gap-1 lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu className="size-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
          <SheetHeader>
            <SheetTitle className="hidden">My Hidden Title</SheetTitle>
            <SheetDescription className="hidden">
              Additional description if needed.
            </SheetDescription>
          </SheetHeader>
          <div className="mx-8 mb-4 flex h-full flex-col gap-4">
            {navConfigProps.map((item) => {
              return (
                <NavButton key={item.title} asChild variant="default">
                  <Link href={item.href} aria-label={item.title}>
                    <span>{item.title}</span>
                  </Link>
                </NavButton>
              )
            })}
            <div className="mt-auto flex flex-col gap-4">
              <Button variant="outline">Sign Up Now</Button>
              <Button variant="ghost">Log In</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
