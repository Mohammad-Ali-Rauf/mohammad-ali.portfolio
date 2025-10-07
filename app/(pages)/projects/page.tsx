import { groq } from 'next-sanity';
import { client } from '../../../app/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

interface Project {
	title: string;
	overview: string;
	githubLink: string;
	demoLink: string;
	skills: Array<string>;
	_id: string;
	image: any;
	category?: 'featured' | 'experimental';
	status?: 'live' | 'maintenance' | 'archived';
}

type BadgeConfig = {
	label: string;
	className: string;
};

const BADGE_CONFIGS = {
	status: {
		live: {
			label: 'Live',
			className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
		},
		maintenance: {
			label: 'Maintenance',
			className: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800'
		},
		archived: {
			label: 'Archived',
			className: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800'
		}
	},
	category: {
		featured: {
			label: 'Featured',
			className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
		},
		experimental: {
			label: 'Experimental',
			className: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
		}
	}
} as const;

const Projects = async () => {
	const builder = imageUrlBuilder(client);

	function urlFor(source: any) {
		return builder.image(source).width(600).height(400).fit('crop').url();
	}

	async function getProjects(): Promise<Project[]> {
		const query = groq`*[_type == "project"]{
			title,
			overview,
			githubLink,
			demoLink,
			_id,
			skills,
			"image": image,
			category,
			status
		}`;

		return await client.fetch(query, {}, { next: { revalidate: 60 } });
	}

	const data = await getProjects()

	// Status badge component
	const StatusBadge = ({ status, category }: { status?: keyof typeof BADGE_CONFIGS.status; category?: string }) => {
		if (category !== 'featured' || !status) return null;

		const config = BADGE_CONFIGS.status[status];
		if (!config) return null;

		return (
			<span className={`px-3 py-1 text-xs font-medium rounded-full border ${config.className}`}>
				{config.label}
			</span>
		);
	};

	// Category badge component
	const CategoryBadge = ({ category }: { category?: keyof typeof BADGE_CONFIGS.category }) => {
		if (!category) return null;

		const config = BADGE_CONFIGS.category[category];
		if (!config) return null;

		return (
			<span className={`px-3 py-1 text-xs font-medium rounded-full border ${config.className}`}>
				{config.label}
			</span>
		);
	};

	return (
		<div className='divide-y divide-gray-200 dark:divide-gray-800'>
			<div className='space-y-4 pt-6 pb-8'>
				<h1 className='text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl'>
					Projects
				</h1>
				<p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl'>
					A collection of projects spanning my coding journey - from early experiments to current focused work on infrastructure and security.				</p>
			</div>

			<div className='grid gap-6 pt-8 pb-8 sm:gap-8'>
				{data?.map((project, index) => (
					<article
						key={project._id}
						className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
							} lg:flex lg:items-stretch lg:gap-8`}
					>
						{/* Project Image */}
						<div className='relative h-56 sm:h-64 md:h-72 lg:h-auto lg:w-1/2 overflow-hidden'>
							<Image
								src={urlFor(project.image)}
								alt={project.title}
								fill
								className='object-cover transition-transform duration-500 group-hover:scale-105'
								priority={index < 2}
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
						</div>

						{/* Project Content */}
						<div className='lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between'>
							<div>
								{/* Title and Badges Row */}
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
									<h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors flex-1 sm:text-2xl'>
										{project.title}
									</h3>
									<div className="flex flex-wrap gap-2 sm:ml-4 sm:flex-nowrap">
										<CategoryBadge category={project.category} />
										<StatusBadge status={project.status} category={project.category} />
									</div>
								</div>

								{/* Skills Tags */}
								<div className='mb-4'>
									<div className='flex flex-wrap gap-2'>
										{Array.isArray(project.skills) ? (
											project.skills.map((skill, index) => (
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

								<p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 sm:text-base line-clamp-3 sm:line-clamp-4'>
									{project.overview}
								</p>
							</div>

							{/* Action Buttons */}
							<div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
								<a
									href={project.githubLink}
									className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors group/btn text-sm sm:text-base'
									target='_blank'
									rel='noopener noreferrer'
								>
									<svg
										className='w-4 h-4 group-hover/btn:scale-110 transition-transform'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
									</svg>
									Code
								</a>

								{project.demoLink ? (
									<a
										href={project.demoLink}
										className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors group/btn text-sm sm:text-base'
										target='_blank'
										rel='noopener noreferrer'
									>
										<svg
											className='w-4 h-4 group-hover/btn:scale-110 transition-transform'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
										</svg>
										Live Demo
									</a>
								) : (
									<span className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm sm:text-base'>
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
										</svg>
										Private
									</span>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Projects;