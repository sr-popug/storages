import pagesConfig from "@/shared/lib/pagesConfig";
import Link from "next/link";
import Menu from "./ui/Menu";

export default function Header() {
  return (
    <header className=' fixed left-0 top-0 w-screen z-20 bg-[#00000050]'>
      <section className='w-full max-w-[1080px] mx-auto flex justify-between px-4 py-4 items-center'>
        <nav className='hidden lg:block'>
          <ul className='flex gap-12'>
            {Object.values(pagesConfig)
              .filter(el => el.inHeader)
              .map(el => (
                <li key={el.href}>
                  <Link
                    className='text-lg hover:text-red-200 transition-colors after:bg-red-200 after:w-0 after:h-[1px] after:block after:transition-all hover:after:w-full'
                    href={el.href}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <Menu />
        <Link
          href={pagesConfig.rent.href}
          className='bg-red-800 py-1.5 px-6 rounded-full text-sm  sm:text-[16px] lg:text-lg transition-colors hover:bg-red-900 font-bold'
        >
          {" "}
          Арендовать склад
        </Link>
      </section>
    </header>
  );
}
