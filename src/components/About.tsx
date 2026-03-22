'use client'

import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          About Me
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-slate-700 rounded-lg overflow-hidden border-2 border-slate-600 flex items-center justify-center flex-shrink-0">
              <img
                src="/img/yo.jpg"
                alt="Carlos Soto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-blue-400 font-semibold mb-3">Who am I?</p>

            <h3 className="text-3xl font-bold text-white mb-4">
                Carlos Joaquín Soto Avello
            </h3>

            <p className="text-slate-300 mb-4 leading-relaxed">
                Software Engineering student in final year with hands-on experience in cloud-based solutions, backend development, and database design. 
                Proven ability to drive digital transformation by automating manual processes and improving operational efficiency.
            </p>

            <p className="text-slate-300 mb-6 leading-relaxed">
                Experience includes developing scalable systems using Django and AWS, reducing processing time by 60%, and implementing digital workflows in both transportation and healthcare environments. 
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
                Strong background in IT support, system administration, and translating business needs into technical solutions.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
                Currently seeking a remote internship to contribute to a dynamic international team while continuing to grow in software development and cloud technologies.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">5+</p>
                <p className="text-slate-400">Proyects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">3+</p>
                <p className="text-slate-400">Years of Experience</p>
              </div>

            </div>
            
            <a href="/cv/Carlos Joaquin Soto Avello - CV.pdf" download className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition inline-block">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
