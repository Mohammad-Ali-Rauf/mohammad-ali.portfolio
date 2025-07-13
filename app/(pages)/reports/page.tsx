'use client';

import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '../../../app/lib/sanity';

import { useCallback, useEffect, useState } from 'react';

interface Report {
	title: string;
	content: string;
	skills: Array<string>;
	_id: string;
}

const Reports = () => {
	const [data, setData] = useState<Report[] | null>(null);
	const [error, setError] = useState<null | unknown>(null);

	const fetchData = useCallback(async () => {
		const query = groq`*[_type == "report"] {
      title,
      _id,
      skills,
      content
    }`;
		setError(null);

		try {
			const newData = await client.fetch(query);
			setData(newData);
		} catch (err) {
			setError(err);
			console.log(error);
		}
	}, [error]);


	useEffect(() => {
		fetchData()
		const interval = setInterval(() => {
			fetchData();
		}, 15000);

		return () => clearInterval(interval);
	}, [fetchData]);
	
	return (
		<div className='divide-y divide-gray-200 dark:divide-gray-700'>
			<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
				<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Red Team Reports
				</h1>
			</div>

			<div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8 pb-8'>
				{data?.map((report) => (
					<Link href={`/reports/${report._id}`} key={report._id}>
						<article className='cursor-pointer hover:shadow-xl transition-all duration-200 overflow-hidden dark:border-zinc-600 rounded-lg border-4 border-red-300 bg-white shadow-md dark:shadow-gray-700 dark:bg-black shadow-teal-100'>
							<div className='p-4 sm:p-6'>
								<h3 className='text-lg font-bold text-gray-900 dark:text-white'>
									{report.title}
								</h3>

								<div className='mb-2 mt-2 flex flex-wrap'>
									{report.skills.map((skill, idx) => (
										<span
											key={idx}
											className='bg-red-600 text-white text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-2'
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</article>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Reports;