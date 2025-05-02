import Image from 'next/image'

export const ChatContent = () => (
  <div className="relative h-[329px] w-full max-w-[624px] md:h-[544px]">
    <div className="absolute bottom-0 left-0 aspect-[306/345] w-[177px] md:w-[306px]">
      <Image
        alt="teacher"
        src="/hero/teacher.png"
        fill
        className="object-contain"
      />
    </div>

    <div className="absolute bottom-[18px] left-[196px] aspect-[159/128] w-[91px] md:bottom-[31px] md:left-[338px] md:w-[159px]">
      <Image
        alt="icons"
        src="/hero/icons.png"
        fill
        className="object-contain"
      />
    </div>

    <div className="absolute top-[14px] right-0 aspect-[270/347] w-[156px] md:top-0 md:w-[270px]">
      <Image
        alt="student"
        src="/hero/student.png"
        fill
        className="object-contain"
      />
    </div>

    <div className="absolute top-0 right-[110px] aspect-[168/156] w-[156px] md:right-[250px] md:w-[235px]">
      <Image alt="chat" src="/hero/chat.png" fill className="object-contain" />
    </div>
  </div>
)
