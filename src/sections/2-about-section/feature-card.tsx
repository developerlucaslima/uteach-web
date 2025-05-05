interface FeatureCardProps {
  title: string
  description: string
  category: string
}

export default function FeatureCard({
  title,
  description,
  category,
}: FeatureCardProps) {
  return (
    <div className="flex h-[232px] flex-col rounded-[10px] border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-2 text-sm text-gray-500">{category}</div>
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <p className="mb-4 flex-grow text-xs text-gray-600">{description}</p>
      <a href="#" className="text-xs font-medium text-blue-600">
        Find out more
      </a>
    </div>
  )
}
