import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '../../../app/lib/sanity';

interface Report {
	title: string;
	content: string;
	skills: string[];
	_id: string;
	createdAt?: string;
}

async function getReports(): Promise<Report[]> {
	const query = groq`*[_type == "report"] | order(_createdAt desc) {
		title,
		_id,
		skills,
		content,
		_createdAt
	}`;
	
	return client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function Reports() {
	const data = await getReports();

	return (
		<div className='space-y-8 pt-6 pb-8'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl'>
					Security Reports
				</h1>
				<p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl'>
					Detailed analysis of security assessments, penetration tests, and red team operations. 
					Each report documents methodologies, findings, and recommendations.
				</p>
			</div>

			{data.length === 0 ? (
				<div className='text-center py-20 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50'>
					<div className='text-6xl mb-4'>🔒</div>
					<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-3'>
						No Reports Published
					</h2>
					<p className='text-gray-600 dark:text-gray-300 max-w-md mx-auto'>
						Security reports are currently being prepared. Check back soon for detailed analysis and findings.
					</p>
				</div>
			) : (
				<div className='grid gap-6 lg:gap-8'>
					{data.map((report, index) => (
						<Link href={`/reports/${report._id}`} key={report._id}>
							<article className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 cursor-pointer'>
								{/* Security badge */}
								<div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<div className='flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full border border-red-200 dark:border-red-800'>
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
										</svg>
										<span className='text-sm font-medium'>Security Report</span>
									</div>
								</div>

								<div className='space-y-4'>
									{/* Header */}
									<div>
										<h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2'>
											{report.title}
										</h3>
										{report.createdAt && (
											<p className='text-sm text-gray-500 dark:text-gray-400'>
												Published {new Date(report.createdAt).toLocaleDateString()}
											</p>
										)}
									</div>

									{/* Skills */}
									<div className='flex flex-wrap gap-2'>
										{report.skills.map((skill, idx) => (
											<span
												key={idx}
												className='px-3 py-1.5 text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 transition-colors group-hover:bg-red-200 group-hover:dark:bg-red-800/50'
											>
												{skill}
											</span>
										))}
									</div>

									{/* Preview */}
									<p className='text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed'>
										{report.content.substring(0, 200)}...
									</p>

									{/* CTA */}
									<div className='flex items-center gap-2 text-red-600 dark:text-red-400 font-medium group-hover:gap-3 transition-all duration-300'>
										<span>Read Full Report</span>
										<svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
										</svg>
									</div>
								</div>

								{/* Hover effect */}
								<div className='absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
							</article>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}