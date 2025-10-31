'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const books = [
  {
    id: 'bunnys-garden',
    title: "Bunny's Thank-You Garden",
    description: 'A magical story about gratitude and friendship',
    category: 'children',
    image: '/Images/BunnyCover.png',
    href: '/books/bunnys-garden'
  },
  {
    id: 'ollies-gratitude-surprise',
    title: "Ollie's Gratitude Surprise",
    description: 'Discover the joy of unexpected thankfulness',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'ollie-first-seed',
    title: "Ollie and the Story of the First Seed",
    description: 'A tale of growth and new beginnings',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'clementines-drumbeat',
    title: "Clementine's Different Drumbeat",
    description: 'Learning respect through unique rhythms',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'lil-dax-windmill',
    title: "Lil Dax and the Whispering Windmill",
    description: 'A curious adventure full of wonder',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'pearls-comeback',
    title: "Pearl's Muddy Day Comeback",
    description: 'Building resilience through challenges',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'dugan-pawprints',
    title: "Dugan and the Pawprints of Trust",
    description: 'Following the path of friendship and faith',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'gus-wobbly-barrel',
    title: "Gus the Goat and the Wobbly Barrel",
    description: 'Persevering through tricky situations',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'christy-meadow',
    title: "Christy Cow's Gentle Meadow of Kindness",
    description: 'Spreading kindness one step at a time',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'snip-sharing-pile',
    title: "Snip the Squirrel's Sharing Pile",
    description: 'Learning the joy of giving and sharing',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'lillie-patient-picnic',
    title: "Lillie Lamb's Patient Picnic",
    description: 'Discovering the rewards of patience',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'dixie-tidy-task',
    title: "Dixie Duck's Tidy-Up Task",
    description: 'Taking responsibility with pride',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  },
  {
    id: 'posie-brave-words',
    title: "Posie Piglet's Brave, True Words",
    description: 'Finding courage in honesty',
    category: 'children',
    image: '/Images/PlaceholderCover.png',
    href: '#'
  }
]

export default function Concept1() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Generate flower animation data once on mount to avoid hydration mismatch
  const flowerData = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      midX1: Math.random() * 100,
      midY1: Math.random() * 100,
      midX2: Math.random() * 100,
      midY2: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      duration: 65 + Math.random() * 52,
      delay: Math.random() * 10,
      sizeClass: ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl'][Math.floor(Math.random() * 4)],
      baseScale: 0.3 + Math.random() * 0.4,
      maxScale: 0.8 + Math.random() * 0.8,
      endScale: 0.2 + Math.random() * 0.2,
      flower: ['🌸', '🌺', '🌼', '🌻', '🌷', '🏵️'][i % 6]
    }))
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent)
      const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent)
      const isAndroidDevice = /Android/i.test(userAgent)

      setIsMobile(isMobileDevice)

      // iOS-specific optimizations
      if (isIOSDevice) {
        // Prevent zoom on input focus
        const viewport = document.querySelector('meta[name=viewport]')
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
        }

        // Handle iOS Safari address bar
        const setVH = () => {
          const vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        setVH()
        window.addEventListener('resize', setVH)
        window.addEventListener('orientationchange', setVH)

        return () => {
          window.removeEventListener('resize', setVH)
          window.removeEventListener('orientationchange', setVH)
        }
      }

      // Android-specific optimizations
      if (isAndroidDevice) {
        document.documentElement.style.scrollBehavior = 'smooth'
      }
    }
    checkDevice()
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-gray-800">

      {/* Header */}
      <header className="bg-[#FDFBF8]/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/Images/OptiFarm-Logo2.svg"
              alt="Optimist Farm"
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="#mission" className="hover:text-amber-700 transition-colors">Our Mission</a>
            <a href="#how-it-works" className="hover:text-amber-700 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-amber-700 transition-colors">Pricing</a>
            <a href="#community" className="hover:text-amber-700 transition-colors">Community</a>
          </nav>
          <a href="#pricing" className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:from-yellow-700 hover:to-amber-700 transition-all hover:-translate-y-0.5 hover:shadow-lg">
            Start Your Trial
          </a>
        </div>
      </header>

      <main className="relative">

        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#FDFBF8] via-orange-50/30 to-[#FDFBF8]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c8b8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: 'fixed'
          }}></div>

          {/* Animated Flowers */}
          {mounted && (
            <div className="absolute inset-0 pointer-events-none z-20">
              {flowerData.map((flower, i) => {
                const midScale1 = flower.baseScale + (flower.maxScale - flower.baseScale) * 0.65;
                const midScale2 = flower.baseScale + (flower.maxScale - flower.baseScale) * 0.45;

                return (
                  <motion.div
                    key={i}
                    className={`absolute ${flower.sizeClass}`}
                    style={{
                      left: 0,
                      top: 0
                    }}
                    initial={{
                      x: `${flower.startX}vw`,
                      y: `${flower.startY}vh`,
                      opacity: 0,
                      scale: flower.baseScale
                    }}
                    animate={{
                      x: [
                        `${flower.startX}vw`,
                        `${flower.midX1}vw`,
                        `${flower.midX2}vw`,
                        `${flower.endX}vw`,
                        `${flower.startX}vw`
                      ],
                      y: [
                        `${flower.startY}vh`,
                        `${flower.midY1}vh`,
                        `${flower.midY2}vh`,
                        `${flower.endY}vh`,
                        `${flower.startY}vh`
                      ],
                      opacity: [0, 0.7, 0.5, 0.3, 0],
                      scale: [flower.baseScale, flower.maxScale, midScale1, midScale2, flower.endScale],
                      rotate: [0, 120, 240, 360]
                    }}
                    transition={{
                      duration: flower.duration,
                      repeat: Infinity,
                      delay: flower.delay,
                      ease: "easeInOut"
                    }}
                  >
                    {flower.flower}
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#FDFBF8]/90 to-[#FDFBF8]/70 backdrop-blur-sm rounded-2xl py-16 px-6"
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent"
                initial={{ rotateX: -15, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Grow Everyday Virtues,<br />One Tap at a Time.
              </motion.h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Bright, interactive, rainbow-forward stories for families. Every page is an adventure with fun sounds, accessible design, and a new game: <strong>Can you find Pippin the Snail?</strong>
              </p>
              <div className="mt-10">
                <a href="#pricing" className="inline-block bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-bold py-4 px-10 text-lg rounded-full shadow-xl hover:from-yellow-700 hover:to-amber-700 transition-all hover:-translate-y-1 hover:shadow-2xl">
                  Try a Story Now!
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Library Section - Horizontal Scrolling */}
        <section id="books" className="pt-8 pb-16 bg-white/40">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-4 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                A Library for Growing Virtues.
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Explore our &quot;rainbow-forward&quot; stories, each one built on a core virtue and packed with fun, interactive &quot;1 tap moments&quot;.
              </p>

              {/* Horizontal Scrolling Container */}
              <div className="relative group">
                {/* Left Arrow */}
                <button
                  onClick={() => scroll('left')}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => scroll('right')}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Scrollable Books Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {books.map((book, index) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -8 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex-shrink-0 w-72 snap-center"
                    >
                      <Link href={book.href} className="block">
                        <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-blue-500/0 group-hover:from-emerald-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                          <div className="relative aspect-square rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-emerald-300 to-blue-300 group-hover:shadow-lg transition-shadow duration-300">
                            <motion.img
                              src={book.image}
                              alt={book.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          <h3 className="relative text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                            {book.title}
                          </h3>
                          <p className="relative text-gray-600 text-sm leading-relaxed">
                            {book.description}
                          </p>
                          <div className="relative mt-4">
                            <span className="inline-flex items-center text-green-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                              Read Now
                              <motion.svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Method Section */}
        <section id="mission" className="py-16 bg-[#FDFBF8]">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                Simple, Fun, and Built on Virtue.
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every Optimist Farm story is built on our <strong>&quot;Six-Beat Story Engine&quot;</strong>—a simple, kid-friendly arc that makes learning virtues easy and fun. From a &quot;Problem&quot; to a &quot;Mentor chime&quot; from Ollie the Owl to a &quot;Climax/Win,&quot; your child will feel a sense of accomplishment in every story.
              </p>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our content is guided by a <strong>12-Month Virtues Framework</strong>. We focus on one virtue a month, like Gratitude with Barnaby, Perseverance with Pearl, and Respect with Dugan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet the Characters */}
        <section className="py-16 bg-green-50/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-12"
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="rounded-2xl shadow-xl overflow-hidden w-[80%]">
                  <img
                    src="/Images/FamilyReading.png"
                    alt="Families reading together in a cozy library setting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">Meet the Core Twelve!</h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Meet <strong>Lillie the Lamb</strong>, <strong>Pearl the Pig</strong>, Barnaby Bunny, and the whole Optimist Farm crew! Listen for <strong>Ollie the Owl&apos;s</strong> special &quot;soft chime&quot; when he shares his wisdom.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  And don&apos;t forget <strong>Pippin the Snail</strong>! He&apos;s not in the story, he&apos;s in the <em>game</em>. Find him hidden on every page!
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  All characters are rendered in our new <strong>&quot;saturated, rainbow-forward&quot;</strong> style for a bright, optimistic feel.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Digital-First Features */}
        <section id="how-it-works" className="py-20 bg-[#FDFBF8]">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                A Richly Interactive &quot;Digital-First&quot; World
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The 4 Digital Must-Haves that make every story an adventure
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Feature 1 */}
                <motion.div
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="bg-orange-100 rounded-full p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-orange-200 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-orange-600 transition-colors">Tap-and-Play Moments</h3>
                  <p className="mt-2 text-gray-600 text-center">
                    Every spread has &quot;1 tap moments&quot;. Tap the pond for a <em>ripple</em>, tap the barn door for a <em>creak</em>, tap the bees for a <em>buzz</em>!
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="bg-green-100 rounded-full p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-green-200 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-green-700 transition-colors">Seek-and-Find Pippin</h3>
                  <p className="mt-2 text-gray-600 text-center">
                    A new game in every story! Pippin the Snail is hidden visually on <em>every single page</em>. Tap him for a cheerful &quot;Pippin smile&quot; sound!
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="bg-blue-100 rounded-full p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-blue-200 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828 2.828" />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-blue-600 transition-colors">Cozy Narration & Sounds</h3>
                  <p className="mt-2 text-gray-600 text-center">
                    Toggle narration on or off. Our soft soundscapes (like a &quot;windmill whoosh&quot;) create a cozy, immersive experience.
                  </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="bg-purple-100 rounded-full p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-purple-200 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-purple-600 transition-colors">Accessible for All</h3>
                  <p className="mt-2 text-gray-600 text-center">
                    Designed for every family with a captions toggle, large tap targets, and a high-contrast visual mode.
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* About the Author */}
        <section className="py-20 bg-white/60">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
            >
              <div className="md:w-5/12 flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl w-[120%]">
                  <img
                    src="/Images/NancyJo_PlaceholderBio.png"
                    alt="Nancy Jo Spear - Author at book signing"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-7/12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent mb-6">
                  Meet the Author
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                  <p>
                    <strong className="text-gray-900">Nancy Jo Spear</strong> is a mother, storyteller and student of timeless wisdom who believes the most profound life lessons are often the simplest. In a world of increasing digital distraction, she was inspired to create a sanctuary for thoughtful families—a place to slow down, connect, and nurture the values that matter most.
                  </p>
                  <p>
                    Drawing inspiration from the quiet wisdom of the natural world and the everyday moments of parenthood, Nancy Jo founded Optimist Farm to help children and their parents build a foundation of resilient optimism. Her stories are crafted not just to be read, but to be felt, sparking the meaningful conversations that help little hearts grow strong and kind.
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <img
                    src="/Images/OptiFarm-Logo2.svg"
                    alt="Optimist Farm"
                    className="h-28 w-auto opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-green-50/50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                Find the Perfect Plan for Your Family
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                All plans start with a 7-day free trial. Cancel anytime.
              </p>

              <div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-8">

                {/* Sprout Plan */}
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent w-full max-w-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold group-hover:text-green-600 transition-colors">The Sprout</h3>
                  <p className="mt-2 text-gray-500">Our essentials plan</p>
                  <p className="mt-6 text-5xl font-bold group-hover:text-green-600 transition-colors">
                    $9<span className="text-xl font-medium text-gray-500">.99/mo</span>
                  </p>
                  <ul className="mt-8 text-left space-y-4">
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>Full Story Library Access</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>1 New Book Every Month</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>Printable Activity Sheets</span>
                    </motion.li>
                  </ul>
                  <motion.a
                    href="#"
                    className="mt-8 block w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Trial
                  </motion.a>
                </motion.div>

                {/* Oak Plan */}
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-green-700 w-full max-w-sm relative hover:shadow-3xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-700 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                  <h3 className="text-2xl font-bold text-green-700">The Oak</h3>
                  <p className="mt-2 text-gray-500">For the whole family</p>
                  <p className="mt-6 text-5xl font-bold">
                    $19<span className="text-xl font-medium text-gray-500">.99/mo</span>
                  </p>
                  <ul className="mt-8 text-left space-y-4">
                    <li className="flex items-center font-bold">
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>Everything in Sprout, plus:</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>Access to Parent Community</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>Monthly Parent Meditations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>Expert Q&A Sessions</span>
                    </li>
                  </ul>
                  <a href="#" className="mt-8 block w-full bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800 transition-colors">
                    Start Free Trial
                  </a>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-20 bg-[#FDFBF8]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-12"
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="rounded-2xl shadow-xl overflow-hidden w-[70%]">
                  <img
                    src="/Images/ParentCommunity.png"
                    alt="Diverse group of parents connecting and sharing together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                  You&apos;re Not Parenting Alone
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Join our private, supportive community of &quot;Oak&quot; members. Here you can share challenges, celebrate wins, and connect with other thoughtful parents on the same journey. It&apos;s a space for honest conversation and shared wisdom, away from the noise of social media.
                </p>
                <a href="#" className="mt-6 inline-block text-green-700 font-bold hover:underline">
                  Learn more about the Oak Community &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                What Our Families Are Saying
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    &quot;Optimist Farm has completely changed our evenings. Instead of arguing over cartoons, we now look forward to our story. It&apos;s our special time to connect, and I feel like a better parent for it.&quot;
                  </p>
                  <p className="mt-4 font-bold text-gray-800">- Jessica R., Mom of Leo (4)</p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    &quot;The stories are so sweet and beautiful, but it&apos;s the &apos;Connection Questions&apos; that are pure magic. The things my 5-year-old says just blow me away. I&apos;m learning so much about her little world.&quot;
                  </p>
                  <p className="mt-4 font-bold text-gray-800">- David L., Dad of Mia (5)</p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    &quot;As an educator, I&apos;m incredibly impressed with the depth of these stories. They teach complex values in such a simple, accessible way. I recommend it to all the parents in my preschool class.&quot;
                  </p>
                  <p className="mt-4 font-bold text-gray-800">- Sarah K., Preschool Teacher</p>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-white bg-green-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c8b8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: 'fixed'
          }}></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Ready to Cultivate a More Connected Family?
              </h2>
              <p className="mt-4 text-lg text-green-200 max-w-2xl mx-auto">
                Start your free 7-day trial today. Explore our library, read your first story, and discover the joy of shared reading.
              </p>
              <div className="mt-8">
                <a href="#pricing" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 text-lg rounded-full shadow-xl hover:bg-orange-600 transition-all hover:-translate-y-1 hover:shadow-2xl">
                  Start Your Free Trial
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="flex items-center justify-center mb-6">
            <img
              src="/Images/OptiFarm-Logo2.svg"
              alt="Optimist Farm"
              className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="hover:text-green-400 transition-colors">About</a>
            <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-green-400 transition-colors">FAQ</a>
            <a href="#" className="hover:text-green-400 transition-colors">Careers</a>
          </div>
          <p className="mt-6 text-gray-400 text-sm flex items-center justify-center gap-2">
            &copy; 2025 Optimist Farm, LLC. All Rights Reserved. Made with <Heart className="w-4 h-4 fill-current" /> for thoughtful families.
          </p>
          <p className="mt-2 text-gray-500 text-xs">optimistfarm.com</p>
        </div>
      </footer>

    </div>
  )
}
