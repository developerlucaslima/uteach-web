import { Button } from '@ui/button'
import { Logo } from '@ui/logo'

import { navConfig } from './nav-config'
import { NavDesktop } from './nav-desktop'
import { NavMobile } from './nav-mobile'

export const Header = () => {
  return (
    <header className="bg-background container-x sticky top-0 z-50 flex h-16 w-full items-center justify-between lg:h-24">
      <div className="flex gap-12">
        <Logo />
        <NavDesktop navConfigProps={navConfig} />
      </div>
      <div className="flex">
        <div className="hidden lg:flex">
          <Button variant="ghost">Log In</Button>
          <Button variant="outline">Sign Up Now</Button>
        </div>
        <NavMobile navConfigProps={navConfig} />
      </div>
    </header>
  )
}
