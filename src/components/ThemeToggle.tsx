import { Moon, Sun } from 'lucide-react'
type Props = { dark: boolean; onToggle: () => void }
export default function ThemeToggle({dark,onToggle}:Props){
  return <button className="icon-button" onClick={onToggle} aria-label={dark?'Switch to light theme':'Switch to dark theme'} title="Toggle theme">
    {dark ? <Sun size={17}/> : <Moon size={17}/>}
  </button>
}
