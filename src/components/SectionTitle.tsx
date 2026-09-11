import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; description?: string }

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}
