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
		<div className='space-y-8 pt-6 pb-8'>
			{/* Header Section */}
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl'>
					Home
				</h1>
				<p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl'>
					Exploring offensive security, breaking systems to understand how to better protect them, 
					and continuously learning across the entire technology stack.
				</p>
			</div>

			{/* Main Content */}
			<div className='grid gap-8 lg:grid-cols-3 lg:gap-12 items-start'>
				{/* Profile Card - Enhanced */}
				<div className='lg:col-span-1'>
					<div className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10'>
						<div className='flex flex-col items-center text-center space-y-4'>
							{/* Profile Image */}
							<div className='relative'>
								<Image
									alt='Mohammad Ali — Red Team Operator'
									src={Me}
									className='h-40 w-40 rounded-full object-cover object-top border-2 border-red-600 transition-transform duration-300 group-hover:scale-105'
									priority
								/>
							</div>

							{/* Profile Info */}
							<div className='space-y-2'>
								<h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
									Mohammad Ali
								</h3>
								<div className='space-y-1'>
									<p className='text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full inline-block'>
										Red Team Operator
									</p>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{age} years old • Security Researcher
									</p>
								</div>
							</div>

							{/* Social Links */}
							<div className='flex space-x-4 pt-2'>
								<a
									href='https://github.com/Mohammad-Ali-Rauf'
									aria-label='GitHub Profile'
									target='_blank'
									rel='noopener noreferrer'
									className='p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200'
								>
									<svg viewBox='0 0 1024 1024' fill='currentColor' className='w-6 h-6'>
										<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/mohammad-ali-40689121b/'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='LinkedIn Profile'
									className='p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200'
								>
									<svg viewBox='0 0 1024 1024' fill='currentColor' className='w-6 h-6'>
										<path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z' />
									</svg>
								</a>
							</div>

							{/* Quick Stats */}
							<div className='grid grid-cols-2 gap-4 w-full pt-4 border-t border-gray-200 dark:border-gray-800'>
								<div className='text-center'>
									<p className='text-2xl font-bold text-gray-900 dark:text-white'>4+</p>
									<p className='text-xs text-gray-600 dark:text-gray-400'>Years Coding</p>
								</div>
								<div className='text-center'>
									<p className='text-2xl font-bold text-gray-900 dark:text-white'>3</p>
									<p className='text-xs text-gray-600 dark:text-gray-400'>Roles</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bio Section - Enhanced */}
				<div className='lg:col-span-2 space-y-8'>
					<article className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10'>
						<div className='space-y-6'>
							{/* Introduction */}
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2'>
									<strong className='text-red-600 dark:text-red-400'>As-salamu alaykum!</strong>
								</h2>
								<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
									I'm Mohammad Ali, a {age}-year-old with a passion for understanding how systems work — and sometimes, how they break.
								</p>
							</div>

							{/* Journey */}
							<div className='space-y-4'>
								<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
									I started coding when I was 9, mostly building small projects and learning how software comes together. A few years later, I got curious about how applications actually run in production, which led me to Docker and infrastructure. These days, I'm exploring red teaming — not because I want to break things, but because I believe understanding how systems can be compromised is the best way to learn how to protect them.
								</p>

								<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
									What I find really interesting is seeing how development, security, and operations all connect. I'm still learning, but I enjoy working across different parts of the technology stack because it helps me see the bigger picture when it comes to security.
								</p>

								<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
									Right now, I'm focusing on improving my cloud security knowledge, getting more comfortable with container orchestration, and learning about advanced security frameworks. There's still so much to learn, and I'm excited to keep growing in this field.
								</p>
							</div>
						</div>
					</article>

					{/* Toolkit */}
					<Toolkit />
				</div>
			</div>
		</div>
	);
}