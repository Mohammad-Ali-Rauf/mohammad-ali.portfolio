import React from 'react';

type Props = {};

const Experience = (props: Props) => {
	return (
		<div className='divide-y divide-gray-200 dark:divide-gray-700'>
			<div className='space-y-2 pt-5 pb-8 md:space-y-5'>
				<h1 className='text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-10 md:text-6xl md:leading-14'>
					Experience
				</h1>
			</div>
			<div className='space-y-8 py-8'>
				<div className='border-l-4 border-red-500 pl-6 ml-4 pb-6'>
					<h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
						Faculty Member
					</h2>
					<span className='text-lg font-medium text-gray-700 dark:text-gray-300'>
						Governor Initiative for AI and Computing (GIAIC)
					</span>
					<p className='text-gray-600 dark:text-gray-400 mt-2'>
						Teaching and developing curriculum for AI and computing courses,
						fostering the next generation of tech talent.
					</p>
					<span className='text-sm text-gray-500 dark:text-gray-400 mt-1 block'>
						March 2024 - Feb 2025
					</span>
				</div>
				<div className='border-l-4 border-red-500 pl-6 ml-4 pb-6'>
					<h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
						Back End Developer
					</h2>
					<span className='text-lg font-medium text-gray-700 dark:text-gray-300'>
						Programmiers
					</span>
					<p className='text-gray-600 dark:text-gray-400 mt-2'>
						Worked on backend development projects, focusing on creating
						efficient and scalable server-side applications.
					</p>
					<span className='text-sm text-gray-500 dark:text-gray-400 mt-1 block'>
						March 2024 - June 2024
					</span>
				</div>
				<div className='border-l-4 border-red-500 pl-6 ml-4 pb-6'>
					<h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
						HTML and Bootstrap 5 Developer
					</h2>
					<span className='text-lg font-medium text-gray-700 dark:text-gray-300'>
						PearlQuest Interactive
					</span>
					<p className='text-gray-600 dark:text-gray-400 mt-2'>
						Developed responsive web pages and interfaces using HTML and
						Bootstrap 5.
					</p>
					<span className='text-sm text-gray-500 dark:text-gray-400 mt-1 block'>
						June 2023
					</span>
				</div>
			</div>
		</div>
	);
};

export default Experience;
