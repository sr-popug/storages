import dignities from '@/shared/lib/dignities'
import Image from 'next/image'

export default function Dignities() {
  return (
    <article className='mt-44 relative'>
      <section className='absolute -top-16 -left-[26vw] -z-1'>
        <Image src={'/big-arrow.svg'} height={1250} width={1550} alt='' />
      </section>
      <section className='mt-16'>
        <h2 className='mb-8 text-3xl  lg:text-4xl font-extrabold max-w-[630px] text-balance'>
          {' '}
          Почему клиенты выбирают именно наши клaдoвки?
        </h2>
        <ul className='flex flex-wrap gap-2 justify-center '>
          {dignities.map(el => (
            <li
              key={el.title}
              className='border-1 border-neutral-700 w-full sm:w-86 rounded-sm p-8 px-12 md:px-4 sm:py-8'
            >
              <section className='flex justify-center mb-5'>{el.icon}</section>
              <p
                className=' text-center text-balance text-[15px] lg:text-base/7'
                dangerouslySetInnerHTML={{ __html: el.title }}
              ></p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
