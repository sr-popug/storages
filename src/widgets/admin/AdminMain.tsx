"use client";
import getStorages from "@/shared/api/Storage/getStorages";
import { Storage } from "@prisma/client";
import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminMain() {
  const [storages, setStorages] = useState<Storage[]>();
  useEffect(() => {
    getStorages().then(setStorages);
  }, []);

  return (
    <article className=''>
      <h2 className=' mb-3 text-3xl font-bold'>Помещения</h2>
      <ul>
        {!storages && (
          <div className='flex items-center flex-col justify-center'>
            <LoaderCircle className='animate-spin w-10 h-10 mb-2' />
            <p>Загрузка...</p>
          </div>
        )}
        {storages &&
          storages.map(el => (
            <li
              key={el.id}
              className='block mb-3 border border-neutral-800 p-4 rounded-lg hover:bg-neutral-900'
            >
              <Link
                href={`admin/storages/${el.id}`}
                className='flex items-center justify-between gap-2'
              >
                <div className=''>
                  <p className='text-sm text-neutral-600'>Адрес</p>
                  <h4 className='text-lg font-bold'>{el.address}</h4>
                </div>
                <ArrowRight />
              </Link>
            </li>
          ))}
      </ul>
    </article>
  );
}
