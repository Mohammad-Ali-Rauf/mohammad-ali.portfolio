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
}

const Projects = async () => {

	const builder = imageUrlBuilder(client);

	function urlFor(source: any) {
		return builder.image(source).width(500).height(300).fit('crop').url();
	}

	async function getProjects(): Promise<Project[]> {
		const query = groq`*[_type == "project"]{
		title,
		overview,
		githubLink,
		demoLink,
		_id,
		skills,
		"image": image
	}`;

		return await client.fetch(query, {}, { next: { revalidate: 60 } }); // cache for 60s
	}

	const data = await getProjects()

	return (
		<div className='divide-y divide-gray-200 dark:divide-gray-700'>
			<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
				<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Important Projects
				</h1>
			</div>

			<div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8 pb-8'>
				{data?.map((project) => (
					<article
						key={project._id}
						className='overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-md dark:shadow-gray-700 dark:bg-black shadow-teal-100'
					>
						<div className='h-56 w-full relative'>
							<Image
								src={urlFor(project.image)}
								alt='Project'
								fill
								className='h-full w-full object-cover'
								priority
							/>

						</div>

						<div className='p-4 sm:p-6'>
							<h3 className='text-lg font-medium text-gray-900 dark:text-white'>
								{project.title}
							</h3>

							<div className='mb-2 mt-2'>
								<div className='flex flex-wrap'>
									{Array.isArray(project.skills) ? (
										project.skills.map((skill, index) => (
											<span
												key={index}
												className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded mr-2 mb-2'
											>
												{skill}
											</span>
										))
									) : (
										<span className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded'>
											{project.skills}
										</span>
									)}
								</div>
							</div>

							<p className='line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
								{project.overview}
							</p>

							<div className='pt-4 sm:pt-6 flex gap-6'>
								<a
									href={project.githubLink}
									className='inline-flex p-3 text-lg rounded-lg dark:bg-red-500 bg-gray-700 text-white'
								>
									<span className='pr-2'>Code</span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
										/>
									</svg>
								</a>
								{project.demoLink ? (
									<a
										href={project.demoLink}
										className='inline-flex p-3 text-lg rounded-lg dark:bg-red-500 bg-gray-700 text-white'
									>
										<span className='pr-2'>Live</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 h-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
											/>
										</svg>
									</a>
								) : (
									<span className='inline-flex p-3 text-lg rounded-lg dark:text-white dark:bg-red-500 bg-red-300 text-red-800'>
										<span className='pr-2'>Not Available</span>
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
