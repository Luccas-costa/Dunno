import React from 'react'

export default function Title({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`pl-2 text-3xl font-light ${className}`}>{children}</div>
  )
}
