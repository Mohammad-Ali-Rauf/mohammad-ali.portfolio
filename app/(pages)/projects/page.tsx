import { getProjects } from '@/app/lib/data';
import ProjectCard from '@/app/components/projects/ProjectCard';

const Projects = async () => {
    const projects = await getProjects();

    return (
        <div className='divide-y divide-gray-200 dark:divide-gray-800'>
            <div className='space-y-4 pt-6 pb-8'>
                <h1 className='text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl'>
                    Projects
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl'>
                    A curated collection of my work - from production-grade systems to learning experiments that explore new technologies and architectures.
                </p>
            </div>

            <div className='grid gap-6 pt-8 pb-8 sm:gap-8'>
                {projects.map((project, index) => (
                    <ProjectCard key={project._id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;