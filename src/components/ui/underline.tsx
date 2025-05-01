import { cn } from '@utils/cn'

export const Underline = ({
  text,
  className,
  ...props
}: React.ComponentProps<'span'> & { text: string }) => {
  return (
    <>
      <span className="relative">
        {text}
        <span
          className={cn(
            "absolute -bottom-[1px] left-0 -z-10 h-[0.45em] w-[calc(100%+5px)] bg-[url('/underline.svg')] bg-[length:100%_100%] bg-no-repeat",
            className,
          )}
          {...props}
          aria-hidden="true"
        />
      </span>{' '}
    </>
  )
}
