export default function Toolkit() {
	const mastered = [
		{ name: 'Linux', color: 'text-emerald-700 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30', border: 'border-emerald-200 dark:border-emerald-800' },
		{ name: 'Docker', color: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-800' },
		{ name: 'Next.js', color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-100 dark:bg-gray-800', border: 'border-gray-200 dark:border-gray-700' },
		{ name: 'MongoDB', color: 'text-green-700 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30', border: 'border-green-200 dark:border-green-800' },
	];

	const learning = [
		{ name: 'AWS', color: 'text-yellow-700 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30', border: 'border-yellow-200 dark:border-yellow-800' },
		{ name: 'GitHub Actions', color: 'text-gray-700 dark:text-gray-300', bg: 'bg-gray-100 dark:bg-gray-800', border: 'border-gray-200 dark:border-gray-700' },
		{ name: 'Terraform', color: 'text-purple-700 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30', border: 'border-purple-200 dark:border-purple-800' },
	];

	const planned = [
		{ name: 'Kubernetes', color: 'text-cyan-700 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/30', border: 'border-cyan-200 dark:border-cyan-800' },
		{ name: 'Golang', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/30', border: 'border-cyan-200 dark:border-cyan-800' },
		{ name: 'Windows Internals', color: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-800' },
		{ name: 'Mythic C2', color: 'text-purple-700 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30', border: 'border-purple-200 dark:border-purple-800' },
	];

	const ToolSection = ({ title, tools, emoji }: { title: string; tools: typeof mastered; emoji: string }) => (
		<div className='mb-8 last:mb-0'>
			<div className='flex items-center gap-3 mb-4'>
				<span className='text-2xl'>{emoji}</span>
				<h4 className='text-xl font-bold text-gray-900 dark:text-white'>
					{title}
				</h4>
			</div>
			<div className='flex flex-wrap gap-3'>
				{tools.map(({ name, color, bg, border }, i) => (
					<span
						key={i}
						className={`${bg} ${color} ${border} px-4 py-2 rounded-lg font-medium text-sm border transition-all duration-200 hover:scale-105 hover:shadow-md`}
					>
						{name}
					</span>
				))}
			</div>
		</div>
	);

	return (
		<div className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10'>
			<h3 className='text-2xl font-bold mb-8 text-gray-900 dark:text-white pb-4 border-b border-gray-200 dark:border-gray-800'>
				My Arsenal
			</h3>
			
			<div className='space-y-6'>
				<ToolSection title="Technologies Mastered" tools={mastered} emoji="🎯" />
				<ToolSection title="Currently Learning" tools={learning} emoji="🚀" />
				<ToolSection title="Future Learning Goals" tools={planned} emoji="📅" />
			</div>

			{/* Hover effect background */}
			<div className='absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
		</div>
	);
}