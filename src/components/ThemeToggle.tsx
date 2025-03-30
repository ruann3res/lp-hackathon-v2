import { useTheme } from '@/contexts/theme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-uaipy-accent dark:bg-uaipy-primary transition-colors cursor-pointer"
      aria-label="Alternar tema"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-white dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-uaipy-secondary dark:text-uaipy-secondary" />
      )}
    </button>
  )
}