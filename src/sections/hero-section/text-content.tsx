import { Button, ButtonText } from '@ui/button'
import { Underline } from '@ui/underline'
import { CirclePlay } from 'lucide-react'

import { TrustedBy } from './trusted-by'

export const TextContent = () => (
  <div className="my-auto max-w-xl space-y-6">
    <h1 className="text-[40px] leading-[110%] font-bold md:text-7xl md:font-extrabold">
      <Underline text="Teach" />
      students worldwide
    </h1>

    <p className="text-base leading-[140%] font-normal md:text-2xl md:leading-[160%]">
      Amet nunc diam orci duis ut sit diam arcu, nec.
      <br />
      Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est
      pellentesque turpis ultricies.
    </p>

    <div className="flex items-center gap-6">
      <Button variant="secondary" size="lg">
        <ButtonText>Sign Up Now</ButtonText>
      </Button>
      <Button variant="link" size="lg" className="md:font-medium">
        <CirclePlay className="size-6" />
        <ButtonText>View Demo</ButtonText>
      </Button>
    </div>

    <TrustedBy />
  </div>
)
