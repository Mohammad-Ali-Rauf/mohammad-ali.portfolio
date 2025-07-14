'use client';

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeButton from './ThemeButton';

const Navbar = () => {
	let pathname = usePathname() || '/';

	return (
		<Disclosure as='nav'>
			{({ open }) => (
				<>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex justify-between w-full'>
								<div className='flex items-center'>
									<Link href='/'>
										<h1 className='text-2xl font-medium'>
											Mohammad <span className='text-red-500'>Ali</span>
										</h1>
									</Link>
								</div>

								<div className='hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center'>
									<Link
										href='/'
										prefetch
										className={`${
											pathname === '/'
												? 'border-red-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
												: 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white px-1 pt-1 border-b-2 text-sm font-medium'
										}`}
									>
										Home
									</Link>
									<Link
										href='/projects'
										className={`${
											pathname === '/projects'
												? 'border-red-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
												: 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white px-1 pt-1 border-b-2 text-sm font-medium'
										}`}
									>
										Projects
									</Link>
									<Link
										href='/experience'
										prefetch
										className={`${
											pathname === '/experience'
												? 'border-red-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
												: 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white px-1 pt-1 border-b-2 text-sm font-medium'
										}`}
									>
										Experience
									</Link>
									<Link
										href='/reports'
										prefetch
										className={`${
											pathname === '/reports'
												? 'border-red-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
												: 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white px-1 pt-1 border-b-2 text-sm font-medium'
										}`}
									>
										Reports
									</Link>
									<ThemeButton />
								</div>
							</div>

							<div className='-mr-2 flex items-center sm:hidden'>
								<ThemeButton />
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 dark:hover:bg-gray-800'>
									{open ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-6 h-6'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 h-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
											/>
										</svg>
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='pt-2 pb-3 space-y-1'>
							<Link
								href='/'
								prefetch
								className={`${
									pathname == '/'
										? 'bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-2 text-base font-medium dark:bg-gray-800'
										: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 text-base font-medium border-l-4'
								}`}
							>
								Home
							</Link>
							<Link
								href='/projects'
								className={`${
									pathname == '/projects'
										? 'bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-2 text-base font-medium dark:bg-gray-800'
										: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 text-base font-medium border-l-4'
								}`}
							>
								Projects
							</Link>
							<Link
								href='/experience'
								className={`${
									pathname == '/experience'
										? 'bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-2 text-base font-medium dark:bg-gray-800'
										: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 text-base font-medium border-l-4'
								}`}
							>
								Experience
							</Link>
							<Link
								href='/reports'
								className={`${
									pathname == '/reports'
										? 'bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-2 text-base font-medium dark:bg-gray-800'
										: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 text-base font-medium border-l-4'
								}`}
							>
								Reports
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
