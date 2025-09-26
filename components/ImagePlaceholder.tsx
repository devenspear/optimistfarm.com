'use client'

import { motion } from 'framer-motion'
import { ImageIcon, Camera } from 'lucide-react'

interface ImagePlaceholderProps {
  spreadId: string
  alt: string
  className?: string
  position?: { top: string; left: string; rotate: string }
}

export default function ImagePlaceholder({ spreadId, alt, className = '', position }: ImagePlaceholderProps) {
  const getPlaceholderIcon = () => {
    // Different icons for different spreads based on story progression
    if (spreadId.includes('01_02')) return '🌱' // Beginning/planting
    if (spreadId.includes('03_04')) return '🌿' // Growing sprouts
    if (spreadId.includes('04_05')) return '😤' // Frustrated bunny
    if (spreadId.includes('06_07')) return '🦉' // Wise owl
    if (spreadId.includes('08_09')) return '✨' // Thank you soil
    if (spreadId.includes('10_11')) return '🌞' // Sun and rain
    if (spreadId.includes('12_13')) return '🐝' // Bees and wind
    if (spreadId.includes('14_15')) return '🥕' // Carrots growing
    if (spreadId.includes('16_17')) return '💥' // Carrots appear!
    if (spreadId.includes('18_19')) return '🐰' // Sharing with friends
    if (spreadId.includes('20_21')) return '⭐' // Evening gratitude
    if (spreadId.includes('22_24')) return '💝' // Final gratitude message
    return '📖' // Default book icon
  }

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-white/90 to-gray-100/90 rounded-3xl border-3 border-dashed border-amber-300 flex flex-col items-center justify-center p-6 aspect-square shadow-lg backdrop-blur-sm ${className}`}
      style={position ? { 
        position: 'absolute', 
        top: position.top, 
        left: position.left, 
        transform: `rotate(${position.rotate})`,
        width: '280px',
        height: '280px',
        zIndex: 10
      } : {}}
      whileHover={{ scale: 1.02, rotate: position?.rotate ? `calc(${position.rotate} + 2deg)` : '2deg' }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-repeat bg-center" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
           }} 
      />
      
      {/* Main placeholder content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Large decorative icon */}
        <motion.div
          className="text-6xl mb-4"
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          {getPlaceholderIcon()}
        </motion.div>
        
        {/* Spread ID Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-heading font-bold text-lg mb-4 shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <Camera className="w-5 h-5" />
          {spreadId.replace('spread_', '').replace('_', '-')}
        </motion.div>
        
        {/* Description */}
        <div className="space-y-2 text-gray-700 text-center">
          <p className="font-heading font-bold text-sm uppercase tracking-wide text-amber-700">
            Square Watercolor Image
          </p>
          <p className="text-xs max-w-xs mx-auto font-story">
            Replace with: <code className="bg-amber-100 px-2 py-1 rounded font-mono text-xs font-semibold">{spreadId}.png</code>
          </p>
          <p className="text-xs text-gray-600 italic font-story leading-relaxed max-w-44 mx-auto">
            {alt}
          </p>
        </div>
      </motion.div>
      
      {/* Corner indicators */}
      <div className="absolute top-2 left-2">
        <ImageIcon className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="absolute top-2 right-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      </div>
      
      {/* Dimensions guide (optional) */}
      <motion.div
        className="absolute bottom-2 left-2 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        📐 Auto-fit
      </motion.div>
    </motion.div>
  )
}