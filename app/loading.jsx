'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Loading = () => {
    const containerRef = useRef(null)
    const logoRef = useRef(null)
    const dotsRef = useRef([])
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup - hide everything
            gsap.set([logoRef.current, textRef.current], { opacity: 0, scale: 0.8 })
            gsap.set(dotsRef.current, { opacity: 0, y: 10 })

            // Create timeline for smooth sequential animations
            const tl = gsap.timeline()

            // Fade in and scale up the logo
            tl.to(logoRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
            })

            // Add pulsing effect to logo
            tl.to(
                logoRef.current,
                {
                    scale: 1.05,
                    duration: 0.6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                },
                '-=0.3'
            )

            // Animate dots appearing one by one
            dotsRef.current.forEach((dot, index) => {
                tl.to(
                    dot,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: 'power2.out',
                    },
                    `-=0.2`
                )
            })

            // Add bouncing animation to dots
            dotsRef.current.forEach((dot, index) => {
                gsap.to(dot, {
                    y: -8,
                    duration: 0.6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.15,
                })
            })

            // Fade in the loading text
            tl.to(
                textRef.current,
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.inOut',
                },
                '-=0.8'
            )

            // Gentle fade for the entire container
            gsap.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'power2.inOut' }
            )
        }, containerRef)

        return () => ctx.revert() // Cleanup
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 flex-center bg-linear-to-br from-blue-50 via-white to-purple-50"
            style={{
                backgroundImage: 'url("/images/wallpaper.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Glassmorphic container */}
            <div className="col-center gap-8 p-12 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                {/* Apple-style logo/icon */}
                <div ref={logoRef} className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 shadow-lg flex-center">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                    </div>
                </div>

                {/* Animated dots */}
                <div className="flex gap-3">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            ref={(el) => (dotsRef.current[index] = el)}
                            className="w-3 h-3 rounded-full bg-linear-to-br from-blue-500 to-purple-600"
                        />
                    ))}
                </div>

                {/* Loading text */}
                <p
                    ref={textRef}
                    className="text-gray-700 font-georama font-medium text-lg tracking-wide"
                >
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loading