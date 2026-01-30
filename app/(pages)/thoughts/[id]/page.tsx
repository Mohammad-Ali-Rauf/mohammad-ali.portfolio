export const revalidate = 60;

import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { groq } from 'next-sanity';
import { client } from '@/app/lib/sanity';
import Link from 'next/link';

interface PageProps {
	params: {
		id: string;
	};
}

const ThoughtPage = async ({ params }: PageProps) => {
	const query = groq`*[_type == "thought" && _id == $id][0] {
		title,
		_id,
		topics,
		content,
		_createdAt
	}`;

	const thought = await client.fetch(query, { id: params.id });

	if (!thought) return notFound();

	return (
		<div className='space-y-8 pt-6 pb-8 max-w-4xl mx-auto px-4'>
			<div className='space-y-6'>
				<div className='flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
					<Link 
						href='/thoughts' 
						className='inline-flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 transition-colors'
					>
						<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
						</svg>
						Back to Thoughts
					</Link>
					<span>•</span>
					<span>Thought Dump</span>
				</div>

				<div className='space-y-4'>
					<h1 className='text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
						{thought.title}
					</h1>

					{thought._createdAt && (
						<p className='text-lg text-gray-600 dark:text-gray-400'>
							Published on {new Date(thought._createdAt).toLocaleDateString('en-US', { 
								year: 'numeric', 
								month: 'long', 
								day: 'numeric' 
							})}
						</p>
					)}
				</div>

				<div className='flex flex-wrap gap-3'>
					{thought.topics.map((topic: string, i: number) => (
						<span
							key={i}
							className='px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700'
						>
							{topic}
						</span>
					))}
				</div>
			</div>

			<article className='prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-2 prose-h3:text-xl prose-a:text-red-600 dark:prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-red-300 dark:prose-blockquote:border-l-red-700 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-900/50 prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-code:before:content-none prose-code:after:content-none'>
				<ReactMarkdown>{thought.content}</ReactMarkdown>
			</article>

			<div className='border-t border-gray-200 dark:border-gray-800 pt-8 mt-8'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
					<div className='flex items-center gap-3'>
						<div className='w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
							<svg className='w-5 h-5 text-gray-600 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
							</svg>
						</div>
						<div>
							<p className='font-medium text-gray-900 dark:text-white'>Learning Log</p>
							<p className='text-sm text-gray-600 dark:text-gray-400'>Public notes • No secrets here</p>
						</div>
					</div>
					
					<Link 
						href='/thoughts'
						className='inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors'
					>
						<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
						</svg>
						View All Thoughts
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ThoughtPage;