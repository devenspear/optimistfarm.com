/**
 * BookNavigation - Standard navigation component for all books in Optimus Farm
 *
 * This component provides consistent navigation back to the homepage across all book templates.
 * It should be included in every book component to maintain a unified user experience.
 *
 * Usage:
 * - Default: <BookNavigation /> - Returns to main homepage (/)
 * - Custom: <BookNavigation homeHref="/custom" homeLabel="Custom Label" />
 *
 * Features:
 * - Glass morphism design matching the site theme
 * - Hover effects and transitions
 * - Accessible with proper aria-labels
 * - Customizable href and label text
 */

'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'

interface BookNavigationProps {
  homeHref?: string
  homeLabel?: string
  className?: string
}

export default function BookNavigation({
  homeHref = '/',
  homeLabel = 'Return to Optimus Farm',
  className = ''
}: BookNavigationProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Link href={homeHref}>
        <button
          className="p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
          aria-label={homeLabel}
        >
          <Home className="w-7 h-7 text-blue-600" />
        </button>
      </Link>
    </div>
  )
}