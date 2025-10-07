'use client'

import Link from "next/link";
import { ProjectActions } from "./ProjectActions";
import { CategoryBadge } from "./CategoryBadge";
import { StatusBadge } from "./StatusBadge";
import Image from "next/image";
import { Project } from "@/app/types/project";
import { urlFor } from "@/app/lib/data";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <article
        className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        } lg:flex lg:items-stretch lg:gap-8`}
    >
        {/* Project Image */}
        <Link 
            href={`/projects/${project.slug.current}`}
            className='relative h-56 sm:h-64 md:h-72 lg:h-auto lg:w-1/2 overflow-hidden block'
        >
            <Image
                src={urlFor(project.image).width(600).height(400).fit('crop').url()}
                alt={project.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                priority={index < 2}
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            {/* View Project Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-lg bg-red-600/90 backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Project
                </div>
            </div>
        </Link>

        {/* Project Content */}
        <div className='lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between'>
            <div>
                {/* Title and Badges Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <Link 
                        href={`/projects/${project.slug.current}`}
                        className="flex-1 group/title"
                    >
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors sm:text-2xl group-hover/title:text-red-600'>
                            {project.title}
                        </h3>
                    </Link>
                    <div className="flex flex-wrap gap-2 sm:ml-4 sm:flex-nowrap">
                        <CategoryBadge category={project.category} />
                        <StatusBadge status={project.status} category={project.category} />
                    </div>
                </div>

                {/* Skills Tags */}
                <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                        {Array.isArray(project.skills) ? (
                            project.skills.map((skill: string, index: number) => (
                                <span
                                    key={index}
                                    className='px-2 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full border border-red-200 dark:border-red-800 sm:px-3'
                                >
                                    {skill}
                                </span>
                            ))
                        ) : (
                            <span className='px-2 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full border border-red-200 dark:border-red-800 sm:px-3'>
                                {project.skills}
                            </span>
                        )}
                    </div>
                </div>

                {/* Overview */}
                <Link
                    href={`/projects/${project.slug.current}`}
                    className="block group/overview"
                >
                    <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 sm:text-base line-clamp-3 sm:line-clamp-4 group-hover/overview:text-gray-700 dark:group-hover/overview:text-gray-200 transition-colors'>
                        {project.overview}
                    </p>
                </Link>
            </div>

            {/* Action Buttons */}
            <ProjectActions project={project} variant="card" />
        </div>
    </article>
);

export default ProjectCard