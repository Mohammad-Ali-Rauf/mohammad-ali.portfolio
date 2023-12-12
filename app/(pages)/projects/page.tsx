'use client'

import { groq } from 'next-sanity'
import { client } from '../../../app/lib/sanity'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Data {
	title: string
	overview: string
	link: string
	skills: string
	_id: string
	imageUrl: string
}

// async function getProjects() {
// 	const query = groq`*[_type == "project"] {
// 		title,
// 		  overview,
// 		  link,
// 		  _id,
// 		  skills,
// 		  "imageUrl": image.asset->url
// 	  }`

// 	const data = await client.fetch(query)

// 	return data
// }

const Projects = () => {

	const [data, setData] = useState<Data[] | null>(null)

	const fetchData = async () => {
		const query = groq`*[_type == "project"] {
      title,
      overview,
      link,
      _id,
      skills,
      "imageUrl": image.asset->url
    }`

		const newData = await client.fetch(query)
		setData(newData)
	}

	useEffect(() => {
		fetchData()

		const intervalId = setInterval(() => {
			fetchData()
		}, 10000)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return (
		<div className='divide-y divide-gray-200 dark:divide-gray-700'>
			<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
				<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					All Projects
				</h1>
			</div>

			<div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8'>
				{data?.map((project) => (
					<article
						key={project._id}
						className='overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:shadow-gray-700 dark:bg-black shadow-teal-100'
					>
						<div className='h-56 w-full relative'>
							<Image
								fill
								src={project.imageUrl}
								alt='Image of the Project'
								className='h-full w-full object-cover'
							/>
						</div>

						<div className='p-4 sm:p-6'>
							<a href={project.link} target='_blank'>
								<h3 className='text-lg font-medium text-gray-900 dark:text-white'>
									{project.title}
								</h3>
							</a>

							<h5 className='text-md font-medium text-gray-500 dark:text-white pt-2'>
								Skills Used:{' '}
								<span className='text-teal-500'>{project?.skills}</span>
							</h5>

							<p className='line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
								{project.overview}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	)
}

export default Projects