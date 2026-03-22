'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">Portfolio</span>
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-xl hover:text-blue-400">
              About me
            </a>
            <a href="#projects" className="text-xl hover:text-blue-400">
              Projects
            </a>
            <a href="#skills" className="text-xl hover:text-blue-400">
              Skills
            </a>
            <a href="#contact" className="text-xl hover:text-blue-400">
              Contact
            </a>
          </div>

        </div>
      </nav>
    </header>
  )
}
