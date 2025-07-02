import ReviewsSlider from '@/shared/ui/ReviewsSlider'

export default function Reviews() {
  return (
    <article className='mt-44 relative mb-20 sm:mb-44'>
      <section className='section'>
        <header className='flex items-center justify-between gap-5 mb-10'>
          <h2 className=' text-3xl  lg:text-4xl font-extrabold max-w-[630px] '>
            Отзывы о складе
          </h2>
          <article className='hidden items-center gap-2.5 sm:flex'>
            <div className='bg-red-800 text-base/7 font-bold px-3 py-0.5 rounded-lg'>
              5.0
            </div>
            <p className='font-bold text-base/7'>
              Рейтинг на{' '}
              <a
                target='_blank'
                href='https://www.avito.ru/brands/98398c8e120a10c10fc6c41b8316b9a8/all?gdlkerfdnwq=101&page_from=from_item_card&iid=4301173826&sellerId=78257f1f2bd7547e811cdb30ccf1f9be&view=gallery'
                className=' after:bg-red-800 text-red-800'
              >
                Авито
              </a>
            </p>
          </article>
        </header>
        <ReviewsSlider />
      </section>
    </article>
  )
}
