import Image from 'next/image'

export const ChatContent = () => (
  <div className="relative h-[329px] w-full max-w-[624px] md:h-[544px]">
    <div className="absolute bottom-0 left-0 aspect-[306/345] w-[177px] max-w-[306px] md:w-[306px]">
      <Image
        alt="teacher"
        width="306"
        height="345"
        src="/hero/teacher.png"
        className="h-auto w-full"
        priority
      />
    </div>

    <div className="absolute bottom-[18px] left-[196px] aspect-[159/128] w-[91px] max-w-[159px] md:bottom-[31px] md:left-[338px] md:w-[159px]">
      <Image
        alt="icons"
        width="159"
        height="128"
        src="/hero/icons.png"
        className="h-auto w-full"
        priority
      />
    </div>

    <div className="absolute top-[16px] right-0 aspect-[270/347] w-[156px] max-w-[270px] md:top-0 md:w-[270px]">
      <Image
        alt="student"
        width="270"
        height="347"
        src="/hero/student.png"
        className="h-auto w-full"
        priority
      />
    </div>

    <div className="absolute top-0 right-[120px] aspect-[235/228] w-[156px] max-w-[235px] md:right-[250px] md:w-[235px]">
      <Image
        alt="chat"
        width="235"
        height="228"
        src="/hero/chat.png"
        className="h-auto w-full"
        priority
      />
    </div>
  </div>
)
