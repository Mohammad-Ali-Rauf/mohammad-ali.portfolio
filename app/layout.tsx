import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Provider from './components/Provider'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
	title: 'My Portfolio | Ali',
	description: 'Content is managed by sanity.io',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${poppins.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800`}
			>
				<Provider>
					<Navbar />
					<main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						{children}
					</main>
				</Provider>
			</body>
		</html>
	)
}
