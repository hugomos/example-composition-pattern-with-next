import React from 'react'

interface ProductCardPriceProps {
  price: number
}

export const ProductCardPrice: React.FC<ProductCardPriceProps> = ({
  price,
}) => {
  const priceToBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const priceFormatted = priceToBRL.format(price)

  return <span className="font-bold text-green-600">{priceFormatted}</span>
}
