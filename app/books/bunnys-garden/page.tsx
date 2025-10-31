'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Check, Clock, Sparkles, Search, MessageCircle, Palette, GamepadIcon } from 'lucide-react'
import Link from 'next/link'

// Story Seeds data - these would come from a CMS in production
const storySeeds = [
  {
    id: 1,
    title: 'The "Thank You" Jar',
    type: 'craft',
    time: '10-min',
    icon: '🫙',
    description: 'Create a gratitude jar for daily thank-yous',
    materials: ['Mason jar', 'Paper strips', 'Markers'],
    instructions: 'Decorate a jar together. Each day, write something you\'re thankful for and add it to the jar.',
    locked: false
  },
  {
    id: 2,
    title: 'Gratitude Scavenger Hunt',
    type: 'game',
    time: '5-min',
    icon: '🔍',
    description: 'Find 5 things you\'re grateful for around your home',
    materials: ['Your home', 'Curious eyes'],
    instructions: 'Search your home for 5 things that make you happy. Take turns explaining why you\'re grateful for each one.',
    locked: false
  },
  {
    id: 3,
    title: '"What Made You Smile Today?"',
    type: 'conversation',
    time: '1-min',
    icon: '💬',
    description: 'A simple question to spark gratitude',
    materials: ['Just you and your child'],
    instructions: 'At dinner or bedtime, ask: "What made you smile today?" Listen and share your own answer too.',
    locked: false
  },
  {
    id: 4,
    title: 'Plant Your Own Garden',
    type: 'craft',
    time: '10-min',
    icon: '🌱',
    description: 'Start a small herb or flower garden together',
    materials: ['Seeds or seedlings', 'Pot', 'Soil'],
    instructions: 'Plant seeds together and tend to them daily, practicing patience as you watch them grow.',
    locked: true
  },
  {
    id: 5,
    title: 'The Patience Game',
    type: 'game',
    time: '5-min',
    icon: '⏰',
    description: 'Practice waiting with a fun challenge',
    materials: ['Timer', 'Small treat'],
    instructions: 'Set a timer for 2 minutes. If your child can wait patiently, they get the treat. Gradually increase the time.',
    locked: true
  },
  {
    id: 6,
    title: '"Tell Me About Your Day"',
    type: 'conversation',
    time: '1-min',
    icon: '🌟',
    description: 'Build connection through listening',
    materials: ['Quiet time together'],
    instructions: 'Give your child your full attention. Ask about the best and hardest parts of their day.',
    locked: true
  }
]

export default function BunnysGardenHub() {
  const [filterType, setFilterType] = useState<'all' | 'craft' | 'game' | 'conversation'>('all')
  const [filterTime, setFilterTime] = useState<'all' | '1-min' | '5-min' | '10-min'>('all')
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const filteredSeeds = storySeeds.filter(seed => {
    const typeMatch = filterType === 'all' || seed.type === filterType
    const timeMatch = filterTime === 'all' || seed.time === filterTime
    return typeMatch && timeMatch
  })

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'craft': return <Palette className="w-5 h-5" />
      case 'game': return <GamepadIcon className="w-5 h-5" />
      case 'conversation': return <MessageCircle className="w-5 h-5" />
      default: return <Sparkles className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF8] to-orange-50/30">
      {/* Header */}
      <header className="bg-[#FDFBF8]/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/Images/OptiFarm-Logo2.svg"
              alt="Optimist Farm"
              className="h-11 w-auto"
            />
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 hover:border-amber-500 rounded-xl transition-all shadow-sm hover:shadow-md group"
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-600 group-hover:text-amber-700 transition-colors"
                animate={{ x: [-2, 0, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-amber-700 transition-colors">
                Back to Library
              </span>
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Column 1: The Story (Launchpad) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Book Cover */}
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0">
              <img
                src="/Images/BB1.png"
                alt="Bunny's Thank You Garden"
                className="w-full h-auto"
              />
            </div>

            {/* Title & Tags */}
            <div className="text-center lg:text-left space-y-4">
              <p className="text-sm uppercase tracking-wide font-bold text-gray-500">
                Interactive Story
              </p>

              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                <span className="px-3.5 py-1.5 bg-green-100 text-green-800 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Gratitude
                </span>
                <span className="px-3.5 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Patience
                </span>
                <span className="px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Barnaby
                </span>
              </div>

              {/* Call to Action */}
              <Link href="/books/bunnys-garden/read" className="block">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative overflow-hidden w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <Play className="w-5 h-5 fill-white relative z-10" />
                  <span className="relative z-10">Read Together Now</span>
                </motion.button>
              </Link>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5">What&apos;s Inside:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-700" strokeWidth={3} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">Tap-and-Play Fun</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Find all the &quot;1 tap moments&quot;!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-700" strokeWidth={3} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">Seek-and-Find Game</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Can you spot Pippin the Snail on every page?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-700" strokeWidth={3} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">Cozy Narration</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Read-along or listen in with soft, cozy sounds.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Story Seeds (Parent Toolkit) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Header */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                Bunny&apos;s Thank-You Garden
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Bring the Story to Life
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Your family&apos;s guide to practicing <strong className="text-gray-800">Gratitude</strong> & <strong className="text-gray-800">Patience</strong>.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide mr-1">Type:</span>
                  {['all', 'craft', 'game', 'conversation'].map((type) => (
                    <motion.button
                      key={type}
                      onClick={() => setFilterType(type as any)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                        filterType === type
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
                <div className="flex items-center flex-wrap gap-2 sm:border-l sm:border-gray-200 sm:pl-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide mr-1">Time:</span>
                  {['all', '1-min', '5-min', '10-min'].map((time) => (
                    <motion.button
                      key={time}
                      onClick={() => setFilterTime(time as any)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                        filterTime === time
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Seeds Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSeeds.map((seed) => (
                <motion.div
                  key={seed.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative"
                >
                  {seed.locked ? (
                    // Locked Card
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 shadow-sm border-2 border-dashed border-gray-300 relative overflow-hidden min-h-[200px] flex items-center justify-center">
                      <div className="text-center py-4">
                        <div className="text-5xl mb-3 opacity-40">🔒</div>
                        <p className="text-gray-800 font-bold mb-1.5 text-sm">Subscribe to Unlock</p>
                        <p className="text-gray-600 text-xs leading-relaxed px-2">{seed.title}</p>
                      </div>
                    </div>
                  ) : (
                    // Unlocked Card
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-200 hover:border-amber-400 min-h-[200px] flex flex-col"
                      onClick={() => setFlippedCard(flippedCard === seed.id ? null : seed.id)}
                    >
                      {flippedCard === seed.id ? (
                        // Card Back - Expanded View
                        <div className="space-y-3.5 flex-1 flex flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-base font-bold text-gray-900 leading-tight flex-1">{seed.title}</h4>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setFlippedCard(null)
                              }}
                              className="text-gray-400 hover:text-gray-700 text-xl leading-none flex-shrink-0 w-6 h-6 flex items-center justify-center"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{seed.description}</p>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-2">What You&apos;ll Need:</p>
                            <ul className="text-gray-600 text-sm space-y-1">
                              {seed.materials.map((material, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-amber-600 flex-shrink-0">•</span>
                                  <span>{material}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-2">How to Play:</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{seed.instructions}</p>
                          </div>
                        </div>
                      ) : (
                        // Card Front - Preview
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between mb-3">
                            <span className="text-4xl">{seed.icon}</span>
                            <div className="flex flex-col gap-1.5 items-end">
                              <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md font-bold uppercase tracking-wide">
                                {seed.type}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-bold uppercase tracking-wide flex items-center gap-1">
                                <Clock className="w-2.5 h-2.5" />
                                {seed.time}
                              </span>
                            </div>
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{seed.title}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1">{seed.description}</p>
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-amber-600 text-xs font-bold flex items-center gap-1">
                              Tap to expand
                              <span className="text-base">→</span>
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
