"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/fuckme'),{
  ssr:false,
  loading:() => <p>loading....</p>
})
export default function Page() {
  return (
    <div>
      <Scene/>
    </div>
  )
}

