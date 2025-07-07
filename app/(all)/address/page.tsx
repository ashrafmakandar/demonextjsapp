'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  { src: '/sam.jpg', alt: 'Cake cutting' },
  { src: '/sam1.jpg', alt: 'Balloons' },
  { src: '/sam2.jpg', alt: 'Family celebration' },

]

export default function BirthdaySlider() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [confettiActive, setConfettiActive] = useState(true)
  const [width, height] = useWindowSize()

  useEffect(() => {
    if (audioRef.current && !playing) {
      audioRef.current.play().catch(() => {
        console.log("Auto-play blocked — allow audio manually")
      })
      setPlaying(true)
    }

    const timer = setTimeout(() => setConfettiActive(false), 90000) // Confetti for 8s
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 relative">
      {confettiActive && <Confetti width={width} height={height} />}

    <audio ref={audioRef} src="/bday.mp3" loop />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="pb-8"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <div className="relative h-[350px] sm:h-[400px] rounded-2xl shadow-lg border border-gray-200 bg-white overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-4"
                  priority={index === 0}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center p-2 text-lg font-bold">
                  🎂 Happy Birthday Sameera!
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
