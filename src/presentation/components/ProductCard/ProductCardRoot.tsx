import React from 'react'

interface ProductCardRootProps {
  children: React.ReactNode
}

export const ProductCardRoot: React.FC<ProductCardRootProps> = ({
  children,
}) => {
  return <div className="flex w-96 flex-col gap-3 p-6 md:p-0">{children}</div>
}
