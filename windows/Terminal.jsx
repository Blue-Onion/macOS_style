"use client"
import { techStack } from '@/data'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Check } from 'lucide-react'
import React from 'react'
import WindowControls from './WindowControls'

const Terminal = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='terminal'/>
        <h2>Tech Stack 80x24</h2>

      </div>
      <div className="techstack">
        <p>
          <span className="font-bold mr-1">
            @Aditya ~ %
          </span>
          ls tech Stack
        </p>
        <div className="label">
          <p className="w-32">
            Category
          </p>
          <p>Technologies</p>
        </div>
        <ul className='content'>
          {techStack.map((tech) => (
            <li key={tech.category} className='flex '>
              <Check className='text-emerald-600' />
              <h3>
                {tech.category}
              </h3>
              <ul className="flex">
                {tech.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </li>
          ))}
        </ul>
        <p>
          <span className="font-bold mr-1">
            @Aditya ~ %
          </span>

        </p>
      </div>

    </>
  )
}
const terminalWindow = WindowWrapper(Terminal, 'terminal')
export default terminalWindow