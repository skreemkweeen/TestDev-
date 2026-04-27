'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  const springCfg = { stiffness: 150, damping: 22, mass: 0.6 }
  const rx = useSpring(mx, springCfg)
  const ry = useSpring(my, springCfg)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    setVisible(true)

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      setHovering(!!el.closest('a, button, [data-cursor]'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [mx, my])

  if (!visible) return null

  return (
    <>
      {/* Dot — follows exactly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-ivory pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: mx, y: my }}
      />
      {/* Ring — lags with spring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border"
        style={{ x: rx, y: ry }}
        animate={{
          width:       hovering ? 56 : 40,
          height:      hovering ? 56 : 40,
          borderColor: hovering ? 'rgba(192,154,88,0.55)' : 'rgba(247,243,236,0.3)',
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  )
}
