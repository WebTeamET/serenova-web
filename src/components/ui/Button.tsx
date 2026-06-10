import Link from 'next/link'

type ButtonVariant = 'btn-gold-simple' | 'btn-gold' | 'btn-simple-white' | 'btn-white'

interface ButtonProps {
  label: string
  href: string
  variant?: ButtonVariant
  openNewTab?: boolean
  className?: string
}

export default function Button({
  label,
  href,
  variant = 'btn-gold-simple',
  openNewTab,
  className = '',
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={openNewTab ? '_blank' : undefined}
      rel={openNewTab ? 'noopener noreferrer' : undefined}
      className={`btn ${variant} ${className}`}
    >
      {label}
    </Link>
  )
}
