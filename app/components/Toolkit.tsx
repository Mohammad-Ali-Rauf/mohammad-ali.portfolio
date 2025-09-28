interface Tool {
  name: string
  color: string
}

interface ToolkitCategory {
  category: string
  tools: Tool[]
}

interface ToolkitProps {
  toolkitData: ToolkitCategory[]
}

export default function Toolkit({ toolkitData }: ToolkitProps) {
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'mastered':
        return { title: 'Technologies Mastered', emoji: '🎯' }
      case 'learning':
        return { title: 'Currently Learning', emoji: '🚀' }
      case 'planned':
        return { title: 'Future Learning Goals', emoji: '📅' }
      default:
        return { title: category, emoji: '🛠️' }
    }
  }

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
      gray: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
    }
    return colorMap[color] || colorMap.gray
  }

  const ToolSection = ({ category, tools }: ToolkitCategory) => {
    const config = getCategoryConfig(category)
    
    return (
      <div className='mb-8 last:mb-0'>
        <div className='flex items-center gap-3 mb-4'>
          <span className='text-2xl'>{config.emoji}</span>
          <h4 className='text-xl font-bold text-gray-900 dark:text-white'>
            {config.title}
          </h4>
        </div>
        <div className='flex flex-wrap gap-3'>
          {tools.map((tool, i) => (
            <span
              key={i}
              className={`${getColorClasses(tool.color)} px-4 py-2 rounded-lg font-medium text-sm border transition-all duration-200 hover:scale-105 hover:shadow-md`}
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10'>
      <h3 className='text-2xl font-bold mb-8 text-gray-900 dark:text-white pb-4 border-b border-gray-200 dark:border-gray-800'>
        My Arsenal
      </h3>
      
      <div className='space-y-6'>
        {toolkitData?.map((categoryData) => (
          <ToolSection key={categoryData.category} {...categoryData} />
        ))}
      </div>

      {/* Hover effect background */}
      <div className='absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
    </div>
  )
}