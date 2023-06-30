import React, { ElementType } from 'react'

interface ButtonIconProps {
  icon: ElementType
  size?: number
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  size = 24,
}) => {
  return <Icon size={size} className="fill-zinc-50" />
}
