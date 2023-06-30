import React from 'react'

interface ButtonTitleProps {
  title: string
}

export const ButtonTitle: React.FC<ButtonTitleProps> = ({ title }) => {
  return <span>{title}</span>
}
