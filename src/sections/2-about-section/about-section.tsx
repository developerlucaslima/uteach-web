import { Check } from 'lucide-react'

import FeatureCard from './feature-card'
import VideoPreview from './video-preview'

export const AboutSection = () => {
  const features = [
    {
      category: 'Popular',
      title: 'The map of mathematics',
      description:
        'Understand how mathematics is organized and discover new connections between mathematical topics.',
    },
    {
      category: 'Popular',
      title: 'Design for how people think',
      description:
        'Learn the psychological principles of effective design to create more intuitive and engaging user experiences.',
    },
    {
      category: 'New',
      title: 'International & commercial tax',
      description:
        'Explore the complexities of international taxation and learn strategies for effective tax planning across borders.',
    },
  ]

  return (
    <section className="container-x my-12 flex h-full flex-1 flex-col justify-between gap-y-12 md:my-0 md:items-center lg:my-20 xl:flex-row">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            An all-in-one app
            <br />
            that makes it easier
          </h2>

          <div className="mb-6 space-y-3">
            <CheckItem text="Edit & deliver presentations with maximum impact" />
            <CheckItem text="Take notes and manage all info in one place" />
            <CheckItem text="Connect to all existing apps and tools" />
          </div>

          <a
            href="#"
            className="mb-8 flex items-center gap-2 font-medium text-blue-600"
          >
            Find more about the app
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div>
          <VideoPreview />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            category={feature.category}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

interface CheckItemProps {
  text: string
}

export default function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm md:text-base">
      <Check className="h-4 w-4 flex-shrink-0 text-blue-600" />
      <span>{text}</span>
    </div>
  )
}
