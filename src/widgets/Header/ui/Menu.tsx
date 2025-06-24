'use client'

import pagesConfig from '@/shared/lib/pagesConfig'
import Link from 'next/link'
import { useState } from 'react'
import MenuButton from './MenuButton'

export default function Menu() {
  const [active, setActive] = useState(false)
  return (
    <article className='block lg:hidden'>
      <MenuButton active={active} setActive={setActive} />
      <section
        className={` ${
          active ? 'block' : 'hidden'
        }  absolute  left-0 top-0 w-screen h-screen bg-neutral-900 transition-all py-5 px-4`}
      >
        <section className='absolute  -top-[40%] -left-[75%] -rotate-45'>
          <div className='bg-white opacity-[2%] h-96 w-4xl'></div>
          <div className='bg-white opacity-[2%] h-12 w-4xl mt-5'></div>
        </section>
        <section className='content  flex flex-col justify-between w-full h-full'>
          <article className='flex justify-between gap-5 items-center mx-auto max-w-[1080px] w-full'>
            <MenuButton active={active} setActive={setActive} />
            <Link
              href={pagesConfig.rent.href}
              className='bg-red-800 py-2 px-6 rounded-full text-sm  sm:text-[16px] lg:text-lg transition-colors hover:bg-red-900 font-bold'
            >
              {' '}
              Арендовать склад
            </Link>
          </article>

          <ul className=' mt-10 flex flex-col gap-5 items-center'>
            {Object.values(pagesConfig)
              .filter(el => el.inHeader)
              .map(el => (
                <li key={el.href}>
                  <Link
                    onClick={() => setActive(false)}
                    className='text-2xl hover:text-red-200 font-bold transition-colors after:bg-red-200 after:w-0 after:h-[1px] after:block after:transition-all hover:after:w-full'
                    href={el.href}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
          </ul>
          <footer>
            <article className='mb-5 mt-20'>
              <h3 className='text-sm text-center text-neutral-500 mb-1'>
                Телефоны для связи
              </h3>
              <a
                target='_blank'
                href='tel:89673459404'
                className='hover:underline text-3xl block text-center font-semibold '
              >
                +7 (967) 345-94-04
              </a>
            </article>
          </footer>
        </section>
      </section>
    </article>
  )
}
