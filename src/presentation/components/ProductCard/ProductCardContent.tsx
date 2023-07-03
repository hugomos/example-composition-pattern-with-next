import React from 'react'
interface ProductCardRootProps {
  children: React.ReactNode
}

export const ProductCardContent: React.FC<ProductCardRootProps> = ({
  children,
}) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>
}
