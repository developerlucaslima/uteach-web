import Image from 'next/image'

const icons = [
  '/hero/icon-1.svg',
  '/hero/icon-2.svg',
  '/hero/icon-3.svg',
  '/hero/icon-4.svg',
  '/hero/icon-5.svg',
]

export function TrustedBy() {
  return (
    <section className="mt-6 flex flex-col items-start gap-4 md:flex-row lg:mt-20">
      <p className="text-muted-foreground text-base leading-[140%] font-normal sm:max-w-[135px]">
        Trusted by leading companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`Company ${index + 1}`}
            width={40}
            height={40}
            className="h-8 w-8 object-contain"
          />
        ))}
      </div>
    </section>
  )
}
