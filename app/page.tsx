'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Tablet, Monitor } from 'lucide-react'
import Link from 'next/link'

const books = [
  {
    id: 'bunnys-garden',
    title: "Bunny's Thank-You Garden",
    description: 'A magical story about gratitude and friendship',
    category: 'children',
    image: '/Images/BunnyCover.png',
    href: '/books/bunnys-garden'
  }
]

const adultBooks = [
  { id: 'coming-soon-1', title: 'Coming Soon', description: 'Adult book placeholder', category: 'adult' },
  { id: 'coming-soon-2', title: 'Coming Soon', description: 'Adult book placeholder', category: 'adult' }
]

const merchandise = [
  { id: 'plushies', title: 'Plush Toys', description: 'Soft and cuddly friends', category: 'merchandise' },
  { id: 'books', title: 'Physical Books', description: 'Beautiful printed editions', category: 'merchandise' },
  { id: 'accessories', title: 'Accessories', description: 'Fun reading accessories', category: 'merchandise' }
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent)
      setIsMobile(isMobileDevice)
    }

    checkDevice()

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 flex items-center justify-center p-8">
        <div className="text-center max-w-md mx-auto">
          <div className="text-8xl mb-6">📚</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Optimus Farm
          </h1>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex justify-center mb-4">
              <Tablet className="h-16 w-16 text-blue-500" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Optimus Farm is optimized for tablet and desktop experiences.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please visit us on your iPad or computer for the best reading experience.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">

        {/* Header */}
        <header className="relative z-10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🚜</div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Optimus Farm
                </h1>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a href="#books" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Children's Books
                </a>
                <a href="#adult-books" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Adult Books
                </a>
                <a href="#merchandise" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Merchandise
                </a>
              </nav>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-8xl mb-6">📚🌱</div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Optimus Farm
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A magical digital library where stories come to life. Perfect for family reading time
                on your iPad or computer, featuring interactive books that inspire wonder and learning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Children's Books Section */}
        <section id="books" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Children's Books
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
                Interactive stories designed for young minds and family bonding
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                  <motion.div
                    key={book.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Link href={book.href} className="block">
                      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
                        <div className="aspect-square rounded-2xl mb-4 overflow-hidden bg-gradient-to-br from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-800">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {book.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {book.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Coming Soon Cards */}
                {[1, 2].map((index) => (
                  <motion.div
                    key={`coming-soon-${index}`}
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl mb-4 flex items-center justify-center text-4xl">
                      ✨
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Coming Soon
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      More magical stories on the way
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Adult Books Section */}
        <section id="adult-books" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/20 dark:bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Books for Adults
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
                Engaging content for grown-up readers
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adultBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
                  >
                    <div className="aspect-square bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-800 dark:to-indigo-800 rounded-2xl mb-4 flex items-center justify-center text-4xl">
                      📖
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {book.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {book.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section id="merchandise" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Optimus Farm Merchandise
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
                Bring the magic home with our collection
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {merchandise.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all"
                  >
                    <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-800 dark:to-orange-800 rounded-2xl mb-4 flex items-center justify-center text-4xl">
                      {item.id === 'plushies' ? '🧸' : item.id === 'books' ? '📚' : '🎒'}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">🚜</div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Optimus Farm</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating magical reading experiences for families around the world.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#books" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Children's Books</a></li>
                  <li><a href="#adult-books" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Adult Books</a></li>
                  <li><a href="#merchandise" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Merchandise</a></li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Best Experience</h5>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Tablet className="h-4 w-4" />
                    <span>iPad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Monitor className="h-4 w-4" />
                    <span>Desktop</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 dark:border-gray-700/20 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                © 2024 Optimus Farm. Made with ❤️ for families everywhere.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
