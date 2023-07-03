/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

interface ProductCardImageProps {
  imageUrl: string
  alt?: string
}

export const ProductCardImage: React.FC<ProductCardImageProps> = ({
  imageUrl,
  alt,
}) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading((oldState) => !oldState)
  }

  return (
    <div className="overflow-hidden rounded shadow-sm shadow-zinc-300">
      {isLoading && <div className="h-72 w-full animate-pulse bg-zinc-300" />}
      <img
        src={imageUrl}
        alt={alt}
        className={`object-cover ${isLoading ? 'hidden' : 'block'} h-72 w-full`}
        onLoad={handleImageLoad}
      />
    </div>
  )
}
