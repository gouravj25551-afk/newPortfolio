import { ArrowUp } from 'lucide-react'
import { profile } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-faint">Computer Science &amp; AI</p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-faint">Built with React.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-muted transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
