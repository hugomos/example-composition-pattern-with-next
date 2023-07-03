'use client'
import React from 'react'

import { Button } from '@/presentation/components/Button'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { ProductCard } from '@/presentation/components/ProductCard'

const Home: React.FC = () => {
  return (
    <div className="grid h-screen w-full grid-cols-1 place-items-center gap-6 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3">
      {/* Exemplo de componente sem a aplicação do Composition Pattern */}
      {/* <div className="flex w-96 flex-col gap-3">
        <div className="flex w-full flex-col gap-2">
          <div className="overflow-hidden rounded shadow-sm shadow-zinc-400">
            <img
              src="https://source.unsplash.com/random/900x700/?product"
              alt=""
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold">
            SmartGlide Pro - Ferro de Passar a Vapor com Tecnologia Avançada
          </h3>
          <span>
            R$ <span className="font-bold text-green-600"> 60,00</span>
          </span>
        </div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-zinc-900 p-2 text-zinc-50 transition-colors hover:bg-zinc-800"
          onClick={() => alert(`Comprou: SmartGlide Pro`)}
        >
          <BagSimple size={24} className="fill-zinc-50" />
          <span>Buy</span>
        </button>
      </div> */}
      <ProductCard.Root>
        <ProductCard.Content>
          <ProductCard.Image imageUrl="https://source.unsplash.com/random/900x700/?product" />
          <ProductCard.Title title="SmartGlide Pro - Ferro de Passar a Vapor com Tecnologia Avançada" />
          <ProductCard.Price price={60} />
        </ProductCard.Content>
        <Button.Root>
          <Button.Icon icon={ShoppingCartSimple} />
          <Button.Title title="Add to cart" />
        </Button.Root>
      </ProductCard.Root>
    </div>
  )
}

export default Home
