export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { groq } from 'next-sanity';
import { client } from '@/app/lib/sanity';


interface PageProps {
	params: {
		id: string;
	};
}

const ReportPage = async ({ params }: PageProps) => {
	
	const query = groq`*[_type == "report" && _id == $id][0] {
		title,
		_id,
		skills,
		content
	}`;
	const report = await client.fetch(query, { id: params.id });

	if (!report) return notFound();


	return (
		<div className='py-8 max-w-4xl mx-auto px-4'>
			<h1 className='text-4xl font-extrabold text-red-600 mb-4'>
				{report.title}
			</h1>

			<div className='flex flex-wrap gap-2 mb-6'>
				{report.skills.map((skill: string, i: number) => (
					<span
						key={i}
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
