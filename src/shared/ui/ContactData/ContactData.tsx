import 'swiper/css'
import RentButton from '../RentButton'
import Map from './Map'
export default function ContactData() {
  return (
    <article className='mt-5 relative'>
      <h2 className='mb-10 text-3xl  lg:text-4xl text-balance font-extrabold max-w-[630px]'>
        Адреса и контактные данные
      </h2>
      <Map />
      <section className='mt-15 flex flex-col flex-wrap sm:max-h-80 w-full items-start sm:items-stretch'>
        <article className='mb-10'>
          <h3 className='text-sm text-neutral-500 mb-1'>Телефоны для связи</h3>
          <a
            target='_blank'
            href='tel:89673459404'
            className='hover:underline text-3xl font-semibold '
          >
            +7 (967) 345-94-04
          </a>
        </article>
        <article className='mb-10'>
          <h3 className='text-sm text-neutral-500 mb-1'>Профиль на Авито</h3>
          <div className='flex w-[320px] justify-between'>
            <a
              target='_blank'
              className='text-lg  hover:underline'
              href='https://www.avito.ru/murmansk/kommercheskaya_nedvizhimost/sklad_400_m_4301173826?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJUUndqMm93N21TNWRCMXhhIjt91QhTTD8AAAA'
            >
              Александр <span className='text-red-800'>5.0</span>
            </a>
            <a
              target='_blank'
              className='text-neutral-700 text-lg hover:underline'
              href='https://www.avito.ru/brands/98398c8e120a10c10fc6c41b8316b9a8/all?gdlkerfdnwq=101&page_from=from_item_card&iid=4301173826&sellerId=78257f1f2bd7547e811cdb30ccf1f9be&view=gallery'
            >
              20+ отзывов
            </a>
          </div>
        </article>
        <article className='mb-10 flex flex-col items-end'>
          <article>
            <h3 className='text-sm text-neutral-500 mb-1'>Адреса</h3>
            <ul className='list-disc pl-5'>
              <li>
                <a
                  target='_blank'
                  className='text-lg mb-3 block underline'
                  href='https://yandex.ru/maps/23/murmansk/house/ulitsa_kapitana_kopytova_45/Z0oYdg5iT0wCQFhifXR4cnVibQ==/?ll=33.093081%2C68.893957&source=serp_navig&z=19.44'
                >
                  Мурманск, ул. Капитана Копытова, д. 45
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  className='text-lg mb-4 underline'
                  href='https://yandex.ru/maps/23/murmansk/house/ulitsa_kapitana_kopytova_45/Z0oYdg5iT0wCQFhifXR4cnVibQ==/?ll=33.093081%2C68.893957&source=serp_navig&z=19.44'
                >
                  Мурманск, ул. Виктора Миронова, д. 42
                </a>
              </li>
            </ul>
          </article>
        </article>
      </section>
      <RentButton />
    </article>
  )
}
