import Navbar from '@/components/Navbar'
import React from 'react'
import { Welcome } from '.'

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
    </main>
  )
}

export default page