import Link from "next/link";
import pagesConfig from "../lib/pagesConfig";

export default function RentButton() {
  return (
    <Link
      href={pagesConfig.rent.href}
      className='bg-red-800 py-3 px-20 rounded-full sm:inline flex  items-center justify-center  text-[15px] lg:text-lg  text-nowrap transition-colors hover:bg-red-900 font-bold'
    >
      {}
      Арендовать помещение
    </Link>
  );
}
