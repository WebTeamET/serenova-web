interface SectionHeaderProps {
  eyebrow?: string
  heading?: string
  center?: boolean
}

export default function SectionHeader({ eyebrow, heading, center = true }: SectionHeaderProps) {
  return (
    <>
      {eyebrow && (
        <div className="sub-title">
          <span className={center ? 'mx-auto' : ''}>{eyebrow}</span>
        </div>
      )}
      {heading && (
        <div className={`title ${center ? 'text-center' : ''} max-768:mt-4`}>
          <h2 className="h4">{heading}</h2>
        </div>
      )}
    </>
  )
}
