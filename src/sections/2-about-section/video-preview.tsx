import Image from 'next/image'

export default function VideoPreview() {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src="/images/video.png"
        alt="App demonstration"
        width={500}
        height={300}
        className="h-auto w-full"
      />
      <PlayButton />
    </div>
  )
}

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/40 p-4">
        <Image
          src="/images/vector.svg"
          alt="Play video"
          width={30}
          height={30}
          className="ml-1"
        />
      </div>
    </div>
  )
}
