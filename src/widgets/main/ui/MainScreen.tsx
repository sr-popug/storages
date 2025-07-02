import RentButton from '@/shared/ui/RentButton'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function MainScreen() {
  return (
    <article className='mt-29 sm:mt-20  relative'>
      <section className='relative w-full '>
        <article className='absolute -right-20 -top-10 -z-1'>
          <Image
            className='opacity-25 sm:opacity-100   hidden sm:block'
            src='/main-screen.png'
            alt={'main-screen'}
            width={660}
            height={660}
          />
        </article>
        <article className=' max-w-[540px]  pt-12'>
          <p className=' w-fit uppercase text-[16px] lg:text-lg text-neutral-600 after:w-full after:h-[1px] after:block after:bg-neutral-600'></p>

          <h1 className='  text-4xl  sm:text-[44px] lg:text-[52px] font-extrabold max-w  text-balance'>
            Хранение личных вещей и мебели
          </h1>
          <ul className='my-8 mb-12'>
            {[
              'Оптимальная влажность и температура',
              'Современные замки и видео-наблюдение',
              'Доступ 24/7',
              'Самая низкая цена в городе',
            ].map((el, i) => (
              <li className='flex gap-2 sm:gap-5 items-center mt-5' key={i}>
                <Check
                  className='text-red-700 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]'
                  width={30}
                  height={30}
                />
                <p className='text-[15px] lg:text-lg'>{el}</p>
              </li>
            ))}
          </ul>
          <RentButton />
        </article>
      </section>
    </article>
  )
}
