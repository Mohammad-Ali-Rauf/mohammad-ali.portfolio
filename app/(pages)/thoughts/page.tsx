import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity';

interface Thought {
	title: string;
	content: string;
	topics: string[];
	_id: string;
	createdAt?: string;
}

async function getThoughts(): Promise<Thought[]> {
	const query = groq`*[_type == "thought"] | order(_createdAt desc) {
		title,
		_id,
		topics,
		content,
		_createdAt
	}`;
	
	return client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function Thoughts() {
	const data = await getThoughts();

	return (
		<div className='space-y-8 pt-6 pb-8'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl'>
					My Thoughts
				</h1>
				<p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl'>
					Mix of write ups, blogs, opinions, still care to read it?
				</p>
			</div>

			{data.length === 0 ? (
				<div className='text-center py-20 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50'>
					<div className='text-6xl mb-4'>🤷</div>
					<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-3'>
						No Thoughts Published
					</h2>
					<p className='text-gray-600 dark:text-gray-300 max-w-md mx-auto'>
						Too busy in my A Levels, pray for me.
					</p>
				</div>
			) : (
				<div className='grid gap-6 lg:gap-8'>
					{data && data.map((thought) => (
						<Link href={`/thoughts/${thought._id}`} key={thought._id}>
							<article className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 cursor-pointer'>
								<div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700'>
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
										</svg>
										<span className='text-sm font-medium'>Thought Dump</span>
									</div>
								</div>

								<div className='space-y-4'>
									<div>
										<h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2'>
											{thought.title}
										</h3>
										{thought.createdAt && (
											<p className='text-sm text-gray-500 dark:text-gray-400'>
												Published {new Date(thought.createdAt).toLocaleDateString()}
											</p>
										)}
									</div>

									<div className='flex flex-wrap gap-2'>
										{thought.topics.map((topic, idx) => (
											<span
												key={idx}
												className='px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700'
											>
												{topic}
											</span>
										))}
									</div>

									<p className='text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed'>
										{thought.content.substring(0, 200)}...
									</p>

									<div className='flex items-center gap-2 text-red-600 dark:text-red-400 font-medium group-hover:gap-3 transition-all duration-300'>
										<span>Read Full Thought</span>
										<svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
										</svg>
									</div>
								</div>

								<div className='absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
							</article>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}