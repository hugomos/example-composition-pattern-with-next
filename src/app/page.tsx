'use client'

import React from 'react'
import { Button } from '@/presentation/components/Button'
import { BagSimple } from '@phosphor-icons/react'

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <div className="w-14 p-12">
        <Button.Root>
          <Button.Icon size={24} icon={BagSimple} />
          <Button.Title title="Buy" />
        </Button.Root>
      </div>
    </div>
  )
}

export default Home
