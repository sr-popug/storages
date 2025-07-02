export default function Footer() {
  return (
    <footer className='mx-auto mt-15 max-w-[1080px] flex py-5 px-2 gap-12 justify-between items-center border-t-1 border-neutral-800'>
      <a
        className='underline text-[10px] sm:text-sm text-neutral-600'
        target='_blank'
        href='https://example.com'
      >
        Политика конфиденциальности
      </a>

      <p className='text-[10px] sm:text-sm text-neutral-600'>
        © 2025. Все права защищены{' '}
      </p>
    </footer>
  )
}
