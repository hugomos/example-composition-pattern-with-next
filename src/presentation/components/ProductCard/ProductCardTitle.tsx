import React from 'react'

interface ProductCardTitleProps {
  title: string
}

export const ProductCardTitle: React.FC<ProductCardTitleProps> = ({
  title,
}) => {
  return <h3 className="font-semibold">{title}</h3>
}
