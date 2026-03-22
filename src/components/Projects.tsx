'use client'

import React, { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  link: string
  isPrivate?: boolean
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Tech-o-computers",
      description: "Tech-O-Computers is a web software project based on the Django Framework. The principal features include a connection to a SQLite database, a login and register system, product catalog, shopping cart, and a fully functional payment system connected to the Transbank API. It also features an administrator panel to manage products and users on the page. Developed by a team of two students in three months.",
      image: "/img/techocomputers.png",
      tech: ["Django", "SQLite", "Transbank API", "Python"],
      link: "https://github.com/T013D0/Tech-O-Computers"
    },
    {
      id: 2,
      title: "Asistencia DUOC UC",
      description: "Asistencia DUOC is a mobile software project based on the Ionic Framework. The principal features include a connection to Supabase database API, a login and register system, and a QR code scanner and generator. This project was developed by a team of two students in the span of three months.",
      image: "/img/asistencia.jpg",
      tech: ["Ionic Framework", "Supabase", "QR Scanner", "TypeScript", "Android Studio"],
      link: "https://github.com/T013D0/Asistencia-DUOC-Maqueta"
    },
    {
      id: 3,
      title: "Inventory Control System - Maestranzas Unidos",
      description: "A comprehensive web-based inventory management system designed to control products, stock, and movements within a company. The system features product and kit registration, inventory tracking with entry/exit/adjustment logs, batch and expiration date management, role-based user access control, comprehensive movement and audit reporting, and automated stock alerts. Built with Django for scalability and maintainability. Developed by a group of four students as part of an Agile Project Management course.",
      image: "/img/maestranza.png",
      tech: ["Django", "Python", "SQLite", "Bootstrap 5", "SCRUM"],
      link: "https://github.com/javegaf/inventario_maestranza"
    },

    {
      id: 4,
      title: "Salary Spreadsheet & Shift Management System",
      description: "A comprehensive Django-based web application designed to manage public transport operations. It features a robust timesheet system that automatically calculates worked hours, overtime, and holiday pay. The system also includes complete CRUD management for employees, secure user authentication. Engineered as a robust solution using cloud based infrastructure.",
      image: "/img/taxibus.png",
      tech: ["Django", "Python","PostgreSQL", "AWS", ],
      link: "#",
      isPrivate: true
    },
    {
    id: 5,
    title: "Astrology App",
    description: "A cross-platform (iOS, Android, and Web) astrology application built with React Native and TypeScript. It enables users to calculate and visualize complete natal charts using precise astronomical data. The app features an interactive AI powered chatbot and provides detailed breakdowns of planetary positions, zodiac signs, astrological houses, and special points.",
    image: "/img/astro.png",
    tech: ["React Native", "TypeScript","AI Chatbot",],
    link: "#",
    isPrivate: true
  },
  {
      id: 6,
      title: "Emergency Care Digitization",
      description: "Professional internship project focusing on the healthcare sector. The primary objective was the digitization of Emergency Care Documents for a high-complexity medical center. My responsibilities included applied research, requirements gathering, and team leadership. The solution aimed to optimize critical healthcare processes by transitioning from paper-based tracking to a digital system, improving data accessibility for medical staff and facilitating statistical reporting.",
      image: "/img/urgencia.png", 
      tech: ["Systems Analysis", "Requirements Gathering", "Documentation"],
       link: "#",
    isPrivate: true
    }
  ]

  const currentProject = projects[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          My Projects
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        {projects.length > 0 && (
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-visible shadow-2xl shadow-blue-500/10 relative">
              <div className="absolute top-6 left-0 right-0 flex justify-center items-center gap-3 md:gap-8 px-8 z-10">
                <button
                  onClick={handlePrev}
                  className="bg-slate-700/60 hover:bg-slate-700 text-white p-2 rounded-full transition opacity-70 hover:opacity-100"
                  aria-label="Previous project"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToProject(index)}
                      className={`h-2 rounded-full transition opacity-70 hover:opacity-100 ${
                        index === currentIndex
                          ? 'bg-blue-500 w-6'
                          : 'bg-slate-500 w-2'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="bg-slate-700/60 hover:bg-slate-700 text-white p-2 rounded-full transition opacity-70 hover:opacity-100"
                  aria-label="Next project"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-16 min-h-[600px] pt-24">
                <div className="order-2 md:order-1 flex justify-center w-full">
                  <div 
                    onClick={() => setSelectedImage(currentProject.image)}
                    className="w-full aspect-video bg-slate-700 rounded-lg flex items-center justify-center border-2 border-slate-600 overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition"
                  >
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {currentProject.title}
                  </h3>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    {currentProject.description}
                  </p>

                  <div>
                    <p className="text-sm text-slate-400 mb-3 uppercase tracking-widest">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={currentProject.link}
                    target={currentProject.isPrivate ? undefined : "_blank"}
                    rel={currentProject.isPrivate ? undefined : "noopener noreferrer"}
                    onClick={currentProject.isPrivate ? (e) => e.preventDefault() : undefined}
                    className={`inline-block px-6 py-3 font-semibold rounded-lg transition shadow-lg ${
                      currentProject.isPrivate
                        ? 'bg-slate-600 text-slate-300 cursor-not-allowed shadow-slate-600/50'
                        : 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/50'
                    }`}
                  >
                    {currentProject.isPrivate ? '🔒 Private Repository' : 'View on GitHub →'}
                  </a>
                </div>
              </div>
            </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Project" 
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-slate-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
          </div>
        )}
      </div>
    </section>
  )
}
