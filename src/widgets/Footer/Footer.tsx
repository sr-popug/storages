export default function Footer() {
  return (
    <footer className='mx-auto mt-15 max-w-[1080px] flex py-5 px-2 gap-12 justify-between items-center border-t-1 border-neutral-800'>
      <p className='text-[10px] sm:text-sm text-neutral-600'>
        Сайт разработал{' '}
        <a className='underline' target='_blank' href='https://example.com'>
          Цуканов Антон
        </a>
      </p>
      <p className='text-[10px] sm:text-sm text-neutral-600'>
        © 2025. Все права защищены{' '}
      </p>
    </footer>
  )
}
