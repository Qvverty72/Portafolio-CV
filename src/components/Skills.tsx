'use client'

import React from 'react'

interface Skill {
  category: string
  skills: string[]
}

export default function Skills() {
  const skillsData: Skill[] = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'PL/SQL', 'HTML/CSS'],
    },
    {
      category: 'Frameworks & Tools',
      skills: ['Django', 'Flask', 'Pandas', 'Numpy', 'React', 'Ionic', 'Angular', 'AWS', 'Git', 'GitHub', 'Docker', 'CI/CD', 'Figma', 'Power BI',],
    },
    {
      category: 'Databases & Data Analytics',
      skills: ['Relational Database Modeling', 'Data Mining', 'Machine Learning', 'Big Data Concepts', 'Business Intelligence'],
    },
    {
      category: 'Software Engineering & Architecture',
      skills: ['System Architecture', 'Requirements Gathering & Analysis', 'UI/UX Prototyping', 'Software Quality Assurance', 'Cybersecurity and Pentesting Fundamentals'],
    },
    {
      category: 'Methodologies & Management',
      skills: ['Business Process Management', 'IT Project Management', 'Risk Management', 'Agile Methodologies'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Skills & Technologies
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
          {skillsData.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-slate-800 p-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition flex flex-col"
            >
              <h3 className="text-xl font-bold mb-5 text-blue-400 text-center">
                {skillCategory.category}
              </h3>

              <ul className={skillCategory.category === 'Frameworks & Tools' ? 'grid grid-cols-2 gap-x-2 gap-y-1.5' : 'space-y-1.5'}>
                {skillCategory.skills.length > 0 ? (
                  skillCategory.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-300 text-m">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))
                ) : (
                  <li className="text-slate-500 italic">
                    Put your skills here
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Certifications
          </h3>
          <div className="inline-block bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-slate-300">TOEIC - English Writing and Reading C1 Level</p>
          </div>
        </div>

  
      </div>
    </section>
  )
}
