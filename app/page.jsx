
import React from 'react'

import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import Terminal from '@/windows/Terminal'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Dock from '@/components/Dock'

import Arc from '@/windows/Arc'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>

      <Arc/>
    </main>
  )
}

export default page