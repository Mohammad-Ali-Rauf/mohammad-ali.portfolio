import Image from 'next/image';
import Toolkit from './components/Toolkit';

import Me from '../public/my_photo.jpg';

export default function Home() {

	const birthDate = new Date(2009, 7, 27);
	const today = new Date();

	let age = today.getFullYear() - birthDate.getFullYear();

	const isBeforeBirthday =
		today.getMonth() < birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

	if (isBeforeBirthday) {
		age--;
	}


	return (
		<div className='divide-y divide-gray-100 dark:divide-gray-700'>
			<div className='space-y-2 pt-5 pb-8 md:space-x-5'>
				<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13'>
					Home
				</h1>
			</div>

			<div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
				<div className='flex flex-col items-center pt-8'>
					<Image
						alt='Mohammad Ali — Red Team Operator'
						src={Me}
						className='h-48 w-48 rounded-full object-cover object-top border-red-600 border-4'
						priority
					/>
					<h3 className='pt-4 pb-3 text-3xl font-bold leading-8 tracking-tight'>
						Mohammad Ali
					</h3>
					<p className='text-xs uppercase tracking-widest text-red-500 border border-red-600 px-2 py-0.5 rounded-md'>
						Red Team Operator
					</p>


					<div className='flex space-x-5 pt-6'>
						<a href='https://github.com/Mohammad-Ali-Rauf' aria-label='GitHub Profile'
							target='_blank' rel='noopener noreferrer'>
							<svg
								viewBox='0 0 1024 1024'
								fill='currentColor'
								className='w-8 h-8 text-red-500 hover:text-red-600'
							>
								<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
							</svg>
						</a>
						<a
							href='https://www.linkedin.com/in/mohammad-ali-40689121b/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn Profile'

						>
							<svg
								viewBox='0 0 1024 1024'
								fill='currentColor'
								className='w-8 h-8 text-red-500 hover:text-red-600'
							>
								<path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z' />
							</svg>
						</a>
					</div>
				</div>
				<article className='prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2'>
					<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
						<span className='text-xl font-semibold text-red-500'>As-salamu alaykum!</span> I&apos;m <span className='text-green-400 font-bold'>Mohammad Ali</span>, and I&apos;m {age}. I specialize in <span className='text-red-500 font-medium'>Red Teaming</span>, which means I plan, code, build, test, deploy, operate and monitor applications then <span className='font-bold text-red-600'>BREAK</span> them.

						I started Development at <span className='font-semibold text-black dark:text-green-300'>age 9</span>, learning how software is built. At 13, I learned Docker and Kubernetes — entering the world of systems. Now, at 15, I committed to <span className='text-red-500 font-bold'>Red Teaming</span>, meanwhile still improving my <span className='text-blue-500 font-semibold'>Development</span> and <span className='text-orange-400'>Operations</span> skillset.

						<br />
						<br />
						<span className='font-bold text-gray-900 dark:text-white'>The result?</span> I understand the <span className='underline decoration-dotted decoration-red-500'>entire <span className='text-blue-500'>Dev</span><span className='text-purple-500'>Sec</span><span className='text-orange-400'>Ops</span> lifecycle</span> — which is my <span className='text-black dark:text-red-400 font-extrabold tracking-wide'>unique advantage</span>.
					</p>

					<Toolkit />
				</article>
			</div>
		</div>
	);
}
