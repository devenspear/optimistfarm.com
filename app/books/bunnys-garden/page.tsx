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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/Images/OptiFarm-Logo2.svg"
              alt="Optimist Farm"
              className="h-12 w-auto"
            />
          </Link>
          <Link href="/" className="text-gray-600 hover:text-amber-700 transition-colors font-semibold">
            ← Back to Library
          </Link>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Column 1: The Story (Launchpad) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Book Cover */}
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
              <img
                src="/Images/BunnyCover.png"
                alt="Barnaby Bunny's Thank You Garden"
                className="w-full h-auto"
              />
            </div>

            {/* Title & Tags */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent mb-4">
                Barnaby Bunny&apos;s Thank-You Garden
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Virtue: Gratitude
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  Virtue: Patience
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                  Character: Barnaby
                </span>
              </div>

              {/* Call to Action */}
              <Link href="/books/bunnys-garden/read">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-md bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-5 px-8 rounded-full shadow-xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <Play className="w-6 h-6" />
                  Read Together Now
                </motion.button>
              </Link>
            </div>

            {/* Features List */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Inside:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Tap-and-Play Fun</p>
                    <p className="text-gray-600 text-sm">Find all the &quot;1 tap moments&quot;!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Seek-and-Find Game</p>
                    <p className="text-gray-600 text-sm">Can you spot Pippin the Snail on every page?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Cozy Narration</p>
                    <p className="text-gray-600 text-sm">Read-along or listen in with soft, cozy sounds.</p>
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
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold font-serif bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent mb-2">
                Bring the Story to Life
              </h2>
              <p className="text-gray-600 text-lg">
                Your family&apos;s guide to practicing Gratitude & Patience.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700">By Type:</span>
                {['all', 'craft', 'game', 'conversation'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type as any)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filterType === type
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700">By Time:</span>
                {['all', '1-min', '5-min', '10-min'].map((time) => (
                  <button
                    key={time}
                    onClick={() => setFilterTime(time as any)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filterTime === time
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {time.charAt(0).toUpperCase() + time.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Story Seeds Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-md border-2 border-dashed border-gray-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm z-10"></div>
                      <div className="relative z-20 text-center py-6">
                        <div className="text-4xl mb-3">🔒</div>
                        <p className="text-gray-700 font-semibold mb-2">Subscribe to Unlock</p>
                        <p className="text-gray-600 text-sm">{seed.title}</p>
                      </div>
                    </div>
                  ) : (
                    // Unlocked Card
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-amber-300"
                      onClick={() => setFlippedCard(flippedCard === seed.id ? null : seed.id)}
                    >
                      {flippedCard === seed.id ? (
                        // Card Back - Expanded View
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold text-gray-900">{seed.title}</h4>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setFlippedCard(null)
                              }}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-gray-700 text-sm">{seed.description}</p>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm mb-1">What You&apos;ll Need:</p>
                            <ul className="text-gray-600 text-sm space-y-1">
                              {seed.materials.map((material, idx) => (
                                <li key={idx}>• {material}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm mb-1">How to Play:</p>
                            <p className="text-gray-600 text-sm">{seed.instructions}</p>
                          </div>
                        </div>
                      ) : (
                        // Card Front - Preview
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-3xl">{seed.icon}</span>
                            <div className="flex gap-2">
                              <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                                {seed.type}
                              </span>
                              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {seed.time}
                              </span>
                            </div>
                          </div>
                          <h4 className="text-base font-bold text-gray-900 mb-2">{seed.title}</h4>
                          <p className="text-gray-600 text-sm">{seed.description}</p>
                          <p className="text-amber-600 text-sm font-medium mt-3">Tap to expand →</p>
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
