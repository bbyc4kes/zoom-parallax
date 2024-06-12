'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import ZoomParallax from '@/components/zoom-parallax'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="mt-[50vh] mb-[100vh]">
      <ZoomParallax />
    </main>
  )
}
