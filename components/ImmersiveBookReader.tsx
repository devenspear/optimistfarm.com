'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Volume2, VolumeX, Subtitles, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { pages } from '@/utils/bookData'
import { SoundManager } from '@/utils/soundManager'
import PageComponent from '@/components/PageComponent'

export default function ImmersiveBookReader() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [narrationEnabled, setNarrationEnabled] = useState(true)
  const [captionsEnabled, setCaptionsEnabled] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(false)
  const [soundManager, setSoundManager] = useState<SoundManager | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward'>('forward')
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const sm = new SoundManager()
    setSoundManager(sm)

    // Request fullscreen on mount
    const enterFullscreen = async () => {
      try {
        const elem = document.documentElement
        if (elem.requestFullscreen) {
          await elem.requestFullscreen()
          setIsFullscreen(true)
        }
      } catch (err) {
        console.log('Fullscreen not available')
      }
    }
    enterFullscreen()

    // Listen for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextPage()
      } else if (event.key === 'ArrowLeft') {
        prevPage()
      } else if (event.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentPage])

  // Auto-hide controls after 3 seconds
  useEffect(() => {
    if (controlsVisible) {
      const timer = setTimeout(() => {
        setControlsVisible(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [controlsVisible])

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

  const playPageSound = () => {
    if (soundManager && soundEnabled) {
      const currentPageData = pages[currentPage]
      if (currentPageData.sound) {
        soundManager.playContextSound(currentPageData.sound)
      }
    }
  }

  const exitReader = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    }
    router.push('/books/bunnys-garden')
  }

  const toggleControls = () => {
    setControlsVisible(!controlsVisible)
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
    return <div className="min-h-screen flex items-center justify-center bg-black">Loading...</div>
  }

  // Check if we're on the final page
  const isFinalPage = currentPage === pages.length - 1

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden"
      onClick={toggleControls}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Story Area - Full Bleed */}
      <div className="absolute inset-0">
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
              stiffness: 200,
              damping: 25,
              mass: 0.8
            }}
            className="absolute inset-0"
          >
            {isFinalPage ? (
              // Final Affirmation Page
              <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col items-center justify-center p-8 md:p-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="max-w-3xl text-center space-y-8"
                >
                  {/* Success/Completion Animation */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="text-8xl mb-6"
                  >
                    🌻
                  </motion.div>

                  <h1 className="text-4xl md:text-6xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent mb-6">
                    You Did It!
                  </h1>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                      Final Affirmation
                    </p>
                    <p className="text-xl md:text-2xl text-gray-700 italic">
                      "What will you try today to show gratitude?"
                    </p>
                  </div>

                  <motion.button
                    onClick={exitReader}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-6 px-12 rounded-full shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 text-2xl mx-auto"
                  >
                    <Check className="w-8 h-8" />
                    All Done!
                  </motion.button>
                </motion.div>
              </div>
            ) : (
              // Regular Page Content
              <PageComponent
                page={pages[currentPage]}
                pageIndex={currentPage}
                onInteract={playPageSound}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Large Semi-Transparent Navigation Arrows */}
      {!isFinalPage && (
        <>
          {/* Left Arrow */}
          {currentPage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevPage()
              }}
              className="absolute left-0 top-0 bottom-0 w-20 md:w-32 flex items-center justify-center z-30 group"
              aria-label="Previous page"
            >
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.8, scale: 1.1 }}
                className="bg-black/20 backdrop-blur-sm p-4 md:p-6 rounded-r-3xl"
              >
                <ChevronLeft className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-2xl" strokeWidth={3} />
              </motion.div>
            </button>
          )}

          {/* Right Arrow */}
          {currentPage < pages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextPage()
              }}
              className="absolute right-0 top-0 bottom-0 w-20 md:w-32 flex items-center justify-center z-30 group"
              aria-label="Next page"
            >
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.8, scale: 1.1 }}
                className="bg-black/20 backdrop-blur-sm p-4 md:p-6 rounded-l-3xl"
              >
                <ChevronRight className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-2xl" strokeWidth={3} />
              </motion.div>
            </button>
          )}
        </>
      )}

      {/* Minimalist Control Bar - Toggles with tap */}
      <AnimatePresence>
        {controlsVisible && !isFinalPage && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Exit/Home Button */}
              <button
                onClick={exitReader}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Exit and return to Book Hub"
              >
                <Home className="w-6 h-6 text-white" />
                <span className="text-white font-medium hidden md:inline">Exit</span>
              </button>

              {/* Center Controls */}
              <div className="flex items-center gap-3 md:gap-6">
                {/* Narration Toggle */}
                <button
                  onClick={() => setNarrationEnabled(!narrationEnabled)}
                  className={`p-3 rounded-full transition-colors ${
                    narrationEnabled
                      ? 'bg-amber-500 hover:bg-amber-600'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={narrationEnabled ? 'Disable narration' : 'Enable narration'}
                >
                  {narrationEnabled ? (
                    <Volume2 className="w-6 h-6 text-white" />
                  ) : (
                    <VolumeX className="w-6 h-6 text-white" />
                  )}
                </button>

                {/* Captions Toggle */}
                <button
                  onClick={() => setCaptionsEnabled(!captionsEnabled)}
                  className={`p-3 rounded-full transition-colors ${
                    captionsEnabled
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={captionsEnabled ? 'Disable captions' : 'Enable captions'}
                >
                  <Subtitles className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Spacer for symmetry */}
              <div className="w-20 md:w-28"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Captions Display (when enabled) */}
      {captionsEnabled && !isFinalPage && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 md:p-8 z-40"
        >
          <p className="text-white text-xl md:text-2xl text-center max-w-5xl mx-auto leading-relaxed">
            {pages[currentPage]?.text || 'Tap to reveal page sounds and find Pippin!'}
          </p>
        </motion.div>
      )}

      {/* Helpful hint overlay (shows briefly on first load) */}
      {currentPage === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center"
        >
          <div className="bg-black/60 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg md:text-xl font-medium">
            Tap the screen to show controls
          </div>
        </motion.div>
      )}
    </div>
  )
}
