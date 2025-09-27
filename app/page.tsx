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
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Optimist Farm",
    "description": "A magical digital library featuring interactive children's books and educational content",
    "url": "https://www.optimistfarm.com",
    "logo": "https://www.optimistfarm.com/OptiFarm-logoTest.png",
    "sameAs": [],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.optimistfarm.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Optimist Farm",
      "description": "Digital library providing interactive children's books and educational content",
      "url": "https://www.optimistfarm.com",
      "logo": "https://www.optimistfarm.com/OptiFarm-logoTest.png",
      "educationalCredentialAwarded": "Digital Literacy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Children's Books and Educational Content",
        "itemListElement": [
          {
            "@type": "Book",
            "name": "Bunny's Thank-You Garden",
            "description": "A magical story about gratitude and friendship",
            "genre": "Children's Literature",
            "audience": {
              "@type": "PeopleAudience",
              "suggestedMinAge": 3,
              "suggestedMaxAge": 8
            }
          }
        ]
      }
    }
  }

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent)
      const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent)
      const isAndroidDevice = /Android/i.test(userAgent)

      setIsMobile(isMobileDevice)
      setIsIOS(isIOSDevice)
      setIsAndroid(isAndroidDevice)

      // iOS-specific optimizations
      if (isIOSDevice) {
        // Prevent zoom on input focus
        const viewport = document.querySelector('meta[name=viewport]')
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
        }

        // Add iOS-specific CSS classes
        document.body.classList.add('ios')

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
        document.body.classList.add('android')

        // Enable smooth scrolling for Android
        document.documentElement.style.scrollBehavior = 'smooth'
      }
    }

    checkDevice()
  }, [])

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isMobile ? 'mobile-optimized' : ''
    } ${
      isIOS ? 'ios-optimized' : ''
    } ${
      isAndroid ? 'android-optimized' : ''
    }`} style={{
      minHeight: isIOS ? 'calc(var(--vh, 1vh) * 100)' : '100vh'
    }}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-orange-50">

        {/* Header */}
        <header className="relative z-10 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 md:h-16">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="text-2xl md:text-3xl">🚜</div>
                <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  Optimist Farm
                </h1>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex md:hidden">
                <button
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors touch-manipulation"
                  aria-label="Menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </nav>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a href="#books" className="text-gray-800 hover:text-blue-600 transition-colors">
                  Children's Books
                </a>
                <a href="#adult-books" className="text-gray-800 hover:text-purple-600 transition-colors">
                  Adult Books
                </a>
                <a href="#merchandise" className="text-gray-800 hover:text-orange-600 transition-colors">
                  Merchandise
                </a>
              </nav>

            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 md:mb-8">
                <img
                  src="/OptiFarm-logoTest.png"
                  alt="Optimist Farm Logo"
                  className="mx-auto h-32 sm:h-40 md:h-48 lg:h-60 w-auto"
                  style={{
                    // iOS optimization: prevent image flickering
                    WebkitTransform: 'translateZ(0)',
                    // Android optimization: smooth image rendering
                    imageRendering: 'auto'
                  }}
                />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed px-2">
                A magical digital library where stories come to life. Perfect for family reading time
                featuring interactive books that inspire wonder and learning.
              </p>

              {/* Mobile Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center md:hidden">
                <a
                  href="#books"
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors touch-manipulation"
                >
                  📚 Children's Books
                </a>
                <a
                  href="#merchandise"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors touch-manipulation"
                >
                  🎁 Shop Now
                </a>
              </div>
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
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Children's Books
              </h3>
              <p className="text-lg text-gray-700 text-center mb-12">
                Interactive stories designed for young minds and family bonding
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {books.map((book) => (
                  <motion.div
                    key={book.id}
                    whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Link href={book.href} className="block">
                      <div className="bg-white/60 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-white/20 hover:bg-white/80 transition-all duration-300 touch-manipulation">
                        <div className="aspect-square rounded-xl md:rounded-2xl mb-3 md:mb-4 overflow-hidden bg-gradient-to-br from-emerald-300 to-blue-300">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover"
                            style={{
                              // iOS optimization
                              WebkitTransform: 'translateZ(0)',
                              // Android optimization
                              imageRendering: 'auto'
                            }}
                          />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {book.title}
                        </h4>
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                          {book.description}
                        </p>
                        {/* Mobile read button */}
                        <div className="mt-3 md:hidden">
                          <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                            Read Now
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
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
                    className="bg-white/40  backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20 "
                  >
                    <div className="aspect-square bg-gradient-to-br from-indigo-200 to-purple-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl mb-4 flex items-center justify-center text-4xl">
                      ✨
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Coming Soon
                    </h4>
                    <p className="text-gray-700 text-sm">
                      More magical stories on the way
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Adult Books Section */}
        <section id="adult-books" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Books for Adults
              </h3>
              <p className="text-lg text-gray-700 text-center mb-12">
                Engaging content for grown-up readers
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adultBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white/40  backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20 "
                  >
                    <div className="aspect-square bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-800 dark:to-indigo-800 rounded-2xl mb-4 flex items-center justify-center text-4xl">
                      📖
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {book.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
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
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Optimist Farm Merchandise
              </h3>
              <p className="text-lg text-gray-700 text-center mb-12">
                Bring the magic home with our collection
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {merchandise.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/40  backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20  hover:bg-white/60  transition-all"
                  >
                    <div className="aspect-square bg-gradient-to-br from-yellow-300 to-orange-400 dark:from-yellow-800 dark:to-orange-800 rounded-2xl mb-4 flex items-center justify-center text-4xl">
                      {item.id === 'plushies' ? '🧸' : item.id === 'books' ? '📚' : '🎒'}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">🚜</div>
                  <h4 className="text-xl font-bold text-gray-900">Optimist Farm</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Creating magical reading experiences for families around the world.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#books" className="text-gray-700 hover:text-blue-600 transition-colors">Children's Books</a></li>
                  <li><a href="#adult-books" className="text-gray-700 hover:text-purple-600 transition-colors">Adult Books</a></li>
                  <li><a href="#merchandise" className="text-gray-700 hover:text-orange-600 transition-colors">Merchandise</a></li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Best Experience</h5>
                <div className="flex items-center space-x-4 text-sm text-gray-700">
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

            <div className="mt-8 pt-8 text-center">
              <p className="text-sm text-gray-700">
                © 2024 Optimist Farm. Made with ❤️ for families everywhere.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
