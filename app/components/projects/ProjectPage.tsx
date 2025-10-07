'use client'

import { Project } from '@/app/types/project';
import { StatusBadge } from '@/app/components/projects/StatusBadge';
import { CategoryBadge } from '@/app/components/projects/CategoryBadge';
import { ProjectActions } from '@/app/components/projects/ProjectActions';
import { BADGE_CONFIGS } from '@/app/types/project';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const MetaCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white dark:bg-[#090908] rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl text-red-600 dark:text-red-500">{icon}</div>
    <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</span>
    <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-1 sm:mt-2">{value}</span>
  </div>
);

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090908]">
      {/* HEADER - Simplified */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#090908] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <CategoryBadge category={project.category} />
              <StatusBadge status={project.status} category={project.category} />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(project.skills) ? project.skills : [project.skills]).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium border border-red-200 dark:border-red-800"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4">
              <ProjectActions project={project} variant="page" />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        {project.description && (
          <section className="mt-12 lg:mt-16">
            <div className="bg-gray-50 dark:bg-[#090908] rounded-2xl lg:rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Project Overview
              </h2>
              <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none 
                   text-gray-600 dark:text-gray-300 leading-relaxed
                   prose-p:mb-4 prose-p:last:mb-0
                   prose-headings:font-bold
                   prose-ul:list-disc prose-ul:ml-6
                   prose-ol:list-decimal prose-ol:ml-6
                   prose-li:my-1
                   prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:px-1 prose-code:rounded
                   prose-pre:bg-gray-900 prose-pre:text-white">
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </div>
            </div>
          </section>
        )}

        {/* METADATA GRID */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Project Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetaCard
              label="Status"
              value={project.status ? BADGE_CONFIGS.status[project.status].label : 'Unknown'}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <MetaCard
              label="Category"
              value={project.category ? BADGE_CONFIGS.category[project.category].label : 'Unknown'}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />
            <MetaCard
              label="Repository"
              value="GitHub"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.576v-2.23c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.746.083-.73.083-.73 1.205.083 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.303 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.175 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.22 0 4.608-2.807 5.623-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .318.192.693.801.576C20.562 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <MetaCard
              label="Demo"
              value={project.demoLink ? 'Public' : 'Private'}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}