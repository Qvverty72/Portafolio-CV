'use client'

import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Carlos Joaquín Soto Avello
            </h3>
            <p className="text-slate-400">
              Software Engineering Student
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Navegation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow me</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/carlos-soto-516299293/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/qvverty72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} Carlos Joaquín Soto Avello. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  )
}
