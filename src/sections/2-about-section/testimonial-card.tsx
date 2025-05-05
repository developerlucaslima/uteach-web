import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  active?: boolean
}

export default function TestimonialCard({
  quote,
  author,
  position,
  active = true,
}: TestimonialCardProps) {
  return (
    <div className={`${active ? 'block' : 'hidden'} relative`}>
      <div className="absolute top-4 left-4">
        <Image
          src="/images/chat-quote.svg"
          alt="Quote"
          width={30}
          height={30}
        />
      </div>
      <div className="p-8 pt-16">
        <p className="mb-6 text-sm md:text-base">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  )
}
