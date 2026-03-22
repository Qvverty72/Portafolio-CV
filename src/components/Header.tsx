'use client'

import React, { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">Portfolio</span>
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-xl hover:text-blue-400 transition">
              About me
            </a>
            <a href="#projects" className="text-xl hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#skills" className="text-xl hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#contact" className="text-xl hover:text-blue-400 transition">
              Contact
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-700 pt-4">
            <a
              href="#about"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              About me
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
