'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const ModelsPage = () => {
  return (
    <div className="font-sans text-xl text-white p-10">
      <h1 className="text-2xl font-bold my-4">Select a model</h1>
      <Button/>
    </div>
  )
}
const Button = () => {
  const router = useRouter();
  return(
    <div className="flex flex-col w-1/2 gap-4">{
    Array.from({length: 7}).map((_val, i) => {
      return(
        <button onClick={() => router.push('/model' + '?' + `id=${i + 1}`)} className="bg-white text-black px-4 py-2 rounded-2xl">{i + 1}</button>
      )
      })
    }</div>
  )
}

export default ModelsPage
