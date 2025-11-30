
import React from 'react'

import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import Terminal from '@/windows/Terminal'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Dock from '@/components/Dock'
import Safari from '@/windows/Safari'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
    </main>
  )
}

export default page