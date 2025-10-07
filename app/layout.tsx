import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Provider from './components/Provider'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

const metadataBase = new URL(
  process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "https://mohammad-ali-rauf.vercel.app"
);

export const metadata: Metadata = {
  title: {
    default: 'Mohammad Ali - Portfolio',
    template: '%s | Mohammad Ali'
  },
  description: 'Full-stack developer and software engineer portfolio. Content is managed by sanity.io',
  metadataBase,
  keywords: [
    'full-stack developer',
    'software engineer',
    'portfolio',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'Sanity.io',
	"Red Team Operator",
	"Security Researcher"
  ],
  authors: [{ name: 'Mohammad Ali' }],
  creator: 'Mohammad Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: metadataBase.toString(),
    title: 'Mohammad Ali - Portfolio',
    description: 'Full-stack developer and software engineer portfolio',
    siteName: 'Mohammad Ali Portfolio',
  },
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