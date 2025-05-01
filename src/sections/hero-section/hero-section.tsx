import { ChatContent } from './chat-content'
import { TextContent } from './text-content'
export const HeroSection = () => {
  return (
    <section className="container-x my-12 flex h-full flex-1 flex-col justify-between gap-y-12 md:my-0 md:items-center lg:my-20 xl:flex-row">
      <TextContent />
      <ChatContent />
    </section>
  )
}
