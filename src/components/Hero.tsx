'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Carlos Joaquín Soto Avello
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Software Engineer Student
        </p>

        <p className="text-lg text-slate-400 mb-4 max-w-2xl mx-auto">
          Software Engineering student passionate about cloud technologies and process automation. 
          With focus on building scalable solutions that improve efficiency and drive digital transformation.  
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Currently seeking opportunities to contribute, learn, and grow in dynamic teams.
        </p>
      </div>
    </section>
  )
}
