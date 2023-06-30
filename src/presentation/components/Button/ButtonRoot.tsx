import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ButtonRoot: React.FC<ButtonRootProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={twMerge(
        'flex w-full items-center justify-center gap-2 rounded bg-zinc-900 p-2 text-zinc-50',
      )}
    >
      {children}
    </button>
  )
}
