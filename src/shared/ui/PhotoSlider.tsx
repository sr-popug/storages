'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { A11y, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import photos from '@/shared/lib/photos'

type Slide = {
  src: string
  describe: string
}

type SliderProps = {
  slides?: Slide[]
}

export default function PhotosSlider({ slides = photos }: SliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <article className='w-full'>
      <div className='flex items-center gap-2'>
        <button
          className='cursor-pointer hover:scale-105'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft width={40} height={40} />
        </button>

        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          modules={[Pagination, A11y, EffectCoverflow]}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop
          pagination={false}
          effect='coverflow'
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {slides.map(el => (
            <SwiperSlide key={el.src} className=''>
              <Image
                className='rounded-lg w-00 object-cover'
                src={el.src}
                alt={el.describe}
                width={500}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className='cursor-pointer hover:scale-105'
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight width={40} height={40} />
        </button>
      </div>
    </article>
  )
}
