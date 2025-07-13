'use client';

import { notFound } from 'next/navigation';
import { reports } from '../index';
import ReactMarkdown from 'react-markdown';

interface PageProps {
	params: {
		id: string;
	};
}

const ReportPage = ({ params }: PageProps) => {
	const report = reports.find((r) => r.id === params.id);

	if (!report) return notFound();

	return (
		<div className='py-8 max-w-4xl mx-auto px-4'>
			<h1 className='text-4xl font-extrabold text-red-600 mb-4'>
				{report.title}
			</h1>

			<div className='flex flex-wrap gap-2 mb-6'>
				{report.skills.map((skill, idx) => (
					<span
						key={idx}
						className='bg-black text-white text-sm px-3 py-1 rounded'
					>
						{skill}
					</span>
				))}
			</div>

			<article className='prose dark:prose-invert prose-lg'>
				<ReactMarkdown>{report.content}</ReactMarkdown>
			</article>
		</div>
	);
};

export default ReportPage;
