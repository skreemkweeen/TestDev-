'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  duration?: number
}

const offsets: Record<NonNullable<FadeInProps['direction']>, object> = {
  up:    { y: 36 },
  down:  { y: -36 },
  left:  { x: 36 },
  right: { x: -36 },
  none:  {},
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  duration = 0.9,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-64px 0px' })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
