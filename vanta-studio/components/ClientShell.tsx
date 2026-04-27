'use client'

import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cursor />
      {children}
    </>
  )
}
