import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mx-auto mt-15 max-w-[1080px] flex py-3 sm:py-5 px-3 sm:px-2 gap-12 justify-between items-center border-t-1 border-neutral-800'>
      <Link
        className='underline text-[12px] sm:text-sm text-neutral-600'
        target='_blank'
        href='/user-agreement'
      >
        Пользовательское соглашение
      </Link>

      <p className='text-[12px] sm:text-sm text-neutral-600'>
        © 2025. Все права защищены{" "}
      </p>
    </footer>
  );
}
