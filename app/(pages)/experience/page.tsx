import React from 'react'
import { getExperiences } from '../../lib/data'
import type { Experience } from '@/app/lib/data'

const Experience = async () => {
  const experiences = await getExperiences()

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
      case "Development":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800"
      case "Security":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
    }
  }

  return (
    <div className='space-y-8 pt-6 pb-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl'>
          Experience
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl'>
          Not really 'Job Experience', just a learning journey so far in life or maybe just tech.
        </p>
      </div>

      <div className='space-y-8 pt-8'>
        {experiences?.map((exp: Experience, index: number) => (
          <div
            key={index}
            className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1'
          >
            {/* Timeline indicator */}
            <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4'>
              <div className='flex-1 space-y-4'>
                {/* Header */}
                <div className='space-y-2'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors'>
                      {exp.title}
                    </h3>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className='flex flex-wrap items-center gap-2 text-lg'>
                    <span className='font-medium text-gray-700 dark:text-gray-300'>
                      {exp.company}
                    </span>
                    <span className='text-gray-400'>•</span>
                    <span className='text-red-600 dark:text-red-400 font-medium'>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                  {exp.description}
                </p>

                {/* Skills */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors group-hover:border-red-200 group-hover:dark:border-red-800'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual indicator for timeline */}
              <div className='flex lg:flex-col items-center gap-4 lg:gap-2 lg:pl-6 lg:border-l lg:border-gray-200 lg:dark:border-gray-800'>
                <div className='w-3 h-3 rounded-full bg-red-500 border-4 border-white dark:border-gray-900 shadow-lg' />
                <span className='text-sm text-gray-500 dark:text-gray-400 font-medium lg:text-center min-w-[120px]'>
                  {exp.period.split(' - ')[0]}
                </span>
              </div>
            </div>

            {/* Hover effect background */}
            <div className='absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
          </div>
        ))}
      </div>

      {/* Learning Journey Section */}
      <div className='mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800'>
  <p className='text-gray-600 dark:text-gray-400 italic'>
    Note: All "experience" listed here is self-directed learning. 
    I’m a student first — these are experiments, not professional roles.
  </p>
</div>
    </div>
  )
}

export default Experience