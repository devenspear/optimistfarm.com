'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import { pages } from '@/utils/bookData'
import { SoundManager } from '@/utils/soundManager'
import PageComponent from '@/components/PageComponent'
import OrientationPrompt from '@/components/OrientationPrompt'
import BookNavigation from '@/components/BookNavigation'

export default function BookReader() {
  const [currentPage, setCurrentPage] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundManager, setSoundManager] = useState<SoundManager | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward'>('forward')

  useEffect(() => {
    setIsClient(true)
    const sm = new SoundManager()
    setSoundManager(sm)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextPage()
      } else if (event.key === 'ArrowLeft') {
        prevPage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setAnimationDirection('forward')
      if (soundManager && soundEnabled) {
        soundManager.playPageTurn()
      }
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setAnimationDirection('backward')
      if (soundManager && soundEnabled) {
        soundManager.playPageTurn()
      }
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      setAnimationDirection(pageIndex > currentPage ? 'forward' : 'backward')
      if (soundManager && soundEnabled) {
        soundManager.playPageTurn()
      }
      setCurrentPage(pageIndex)
    }
  }

  const playPageSound = () => {
    if (soundManager && soundEnabled) {
      const currentPageData = pages[currentPage]
      if (currentPageData.sound) {
        soundManager.playContextSound(currentPageData.sound)
      }
    }
  }

  // Touch/swipe handling
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentPage < pages.length - 1) {
      nextPage()
    }
    if (isRightSwipe && currentPage > 0) {
      prevPage()
    }
  }

  if (!isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      <OrientationPrompt />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-sky-100 via-green-50 to-yellow-50">

      {/* Book container */}
      <div 
        className="relative w-full max-w-6xl aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={currentPage}
              initial={{
                x: animationDirection === 'forward' ? '100%' : '-100%',
                opacity: 1
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              exit={{
                x: animationDirection === 'forward' ? '-100%' : '100%',
                opacity: 1
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
              }}
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-white shadow-2xl"
                style={{
                  borderRadius: '4px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
              >
                <PageComponent
                  page={pages[currentPage]}
                  pageIndex={currentPage}
                  onInteract={playPageSound}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stylized Navigation Arrows */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 transition-all duration-200 z-20 ${
            currentPage === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-100 hover:scale-110 active:scale-95'
          }`}
          aria-label="Previous page"
          style={{ pointerEvents: currentPage === 0 ? 'none' : 'auto' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
            <circle cx="30" cy="30" r="28" fill={currentPage === 0 ? "#E5E7EB" : "#FBBF24"} stroke="#F59E0B" strokeWidth="2"/>
            <path d="M35 20 L25 30 L35 40" stroke={currentPage === 0 ? "#9CA3AF" : "#78350F"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-200 z-20 ${
            currentPage === pages.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-100 hover:scale-110 active:scale-95'
          }`}
          aria-label="Next page"
          style={{ pointerEvents: currentPage === pages.length - 1 ? 'none' : 'auto' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
            <circle cx="30" cy="30" r="28" fill={currentPage === pages.length - 1 ? "#E5E7EB" : "#FBBF24"} stroke="#F59E0B" strokeWidth="2"/>
            <path d="M25 20 L35 30 L25 40" stroke={currentPage === pages.length - 1 ? "#9CA3AF" : "#78350F"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Cute Page Number Indicators */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 px-4 max-w-5xl">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`relative w-14 h-14 rounded-full transition-all duration-300 touch-manipulation font-bold text-sm ${
              index === currentPage
                ? 'bg-gradient-to-br from-green-400 to-green-600 scale-110 shadow-lg ring-4 ring-yellow-300 ring-offset-2'
                : 'bg-gradient-to-br from-green-200 to-green-300 hover:from-green-300 hover:to-green-400 hover:scale-105 shadow-md'
            }`}
            aria-label={`Go to page ${index + 1}`}
          >
            <span className={`absolute inset-0 flex items-center justify-center ${
              index === currentPage ? 'text-white' : 'text-green-800'
            }`}>
              {index === 0 ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              ) : (
                index
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Page counter */}
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-green-700">
          Page {currentPage + 1} of {pages.length}
        </span>
      </div>

      {/* Navigation and Sound controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <BookNavigation />

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
          aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
        >
          {soundEnabled ? (
            <Volume2 className="w-7 h-7 text-green-600" />
          ) : (
            <VolumeX className="w-7 h-7 text-gray-400" />
          )}
        </button>
        
        {/* Sound trigger button */}
        <button
          onClick={playPageSound}
          className="px-6 py-3 rounded-full bg-yellow-300 hover:bg-yellow-400 transition-colors shadow-lg text-base font-baloo font-semibold text-brown-800"
        >
          🔊 Page Sound
        </button>
      </div>

      {/* Mobile-friendly navigation */}
      <div className="md:hidden flex justify-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            currentPage === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
          }`}
        >
          ← Previous
        </button>
        
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            currentPage === pages.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
    </>
  )
}
