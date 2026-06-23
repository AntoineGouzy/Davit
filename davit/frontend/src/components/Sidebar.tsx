import {LayoutDashboard, Container, Layers, Network, Database, Settings, X, type LucideIcon} from 'lucide-react'
import type { Page } from '../types'

interface NavItem {
  id: Page
  label: string
  icon: LucideIcon
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'containers', label: 'Conteneurs', icon: Container },
  { id: 'images', label: 'Images', icon: Layers },
  { id: 'networks', label: 'Réseaux', icon: Network },
  { id: 'volumes', label: 'Volumes', icon: Database },
]

interface SidebarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
  onClose?: () => void
}

export default function Sidebar({ currentPage, onNavigate, onClose }: SidebarProps) {
  return (
    <aside className="flex flex-col w-56 shrink-0 bg-[#111827] h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600">
            <Container size={16} className="text-white" />
          </div>
          <span className="text-white font-semibold text-sm leading-tight">
            Davit
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-1 px-3 mt-2 flex-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const active = currentPage === id
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={[
                'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left',
                active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5',
              ].join(' ')}
            >
              <Icon size={18} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Bottom: Settings */}
      <div className="px-3 pb-4">
        <button
          onClick={() => onNavigate('settings')}
          className={[
            'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left',
            currentPage === 'settings'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white hover:bg-white/5',
          ].join(' ')}
        >
          <Settings size={18} />
          Paramètres
        </button>
      </div>
    </aside>
  )
}
