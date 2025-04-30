'use client'
import { NavButton } from '@ui/nav-button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavConfigProps } from './nav-config'

export interface NavDesktopProps {
  navConfigProps: NavConfigProps[]
}

export const NavDesktop = ({ navConfigProps }: NavDesktopProps) => {
  const pathname = usePathname()

  return (
    <nav className="hidden items-center gap-12 lg:flex">
      {navConfigProps.map((item) => {
        const isActive = pathname === item.href

        return (
          <NavButton
            key={item.title}
            asChild
            variant={isActive ? 'outline' : 'default'}
          >
            <Link href={item.href} aria-label={item.title}>
              <span>{item.title}</span>
            </Link>
          </NavButton>
        )
      })}
    </nav>
  )
}
