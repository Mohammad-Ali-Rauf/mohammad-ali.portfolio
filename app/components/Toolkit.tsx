export default function Toolkit() {
	const tools = [
		{ name: 'Debian', color: 'text-emerald-600' },
		{ name: 'RHEL', color: 'text-red-600' },
		{ name: 'Golang', color: 'text-cyan-600' },
		{ name: 'Rust', color: 'text-orange-600' },
		{ name: 'TypeScript', color: 'text-blue-600' },
		{ name: 'Sliver', color: 'text-gray-600 dark:text-white' },
	];

	return (
		<div>
			<h3 className='text-xl mb-2'>Toolkit</h3>
			<div className='flex flex-wrap gap-2'>
				{tools.map(({ name, color }, i) => (
					<span
						key={i}
						className={`bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm ${color}`}
					>
						{name}
					</span>
				))}
			</div>
		</div>
	);
}