'use client'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { A11y, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import reviews from '../lib/reviews'

export default function ReviewsSlider() {
  const swiperRef = useRef<SwiperType | null>(null)
  console.log(
    new Array(reviews[0].stars).map((_, i) => (
      <Star key={i} className='bg-amber-500' />
    ))
  )
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
          modules={[Pagination, A11y]}
          slidesPerView={3}
          centeredSlides
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          loop
          pagination={false}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {reviews.map((el, i) => (
            <SwiperSlide key={i} className=''>
              <h4 className='text-[20px] font-bold mb-1 lg:mb-3 '>{el.name}</h4>
              <p className='text-[15px] lg:text-base/7 max-w-67 mb-5 leading-6 font-extralight text-neutral-300'>
                {el.text}
              </p>
              <footer className='flex justify-between items-center'>
                <div className='stars flex gap-2'>
                  {new Array(el.stars).fill(1).map((_, i) => (
                    <Image
                      src={'/star.svg'}
                      width={15}
                      height={15}
                      alt=''
                      key={i}
                    />
                  ))}
                </div>
                <a
                  target='_blank'
                  href='https://www.avito.ru/brands/98398c8e120a10c10fc6c41b8316b9a8/all?gdlkerfdnwq=101&page_from=from_item_card&iid=4301173826&sellerId=78257f1f2bd7547e811cdb30ccf1f9be&view=gallery'
                  className='text-neutral-600 font-extralight text-sm'
                >
                  Открыть отзыв
                </a>
              </footer>
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
