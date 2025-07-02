'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useState } from 'react'
import RoomsList from './ui/RoomsList'
export default function RentPage() {
  const [value, setValue] = useState<string>()
  const [sortBy, setSortBy] = useState<string>('')
  return (
    <article>
      <h1 className='flex  text-2xl lg:text-3xl font-bold gap-2 items-center mt-5 mb-1'>
        Арендовать помещение
      </h1>
      <p className='max-w-lg text-neutral-600 mb-5'>
        В городе Мурманске у нас есть несколько адресов помещений, где вы можете
        арендовать кладовку, выберите удобный для вас адрес
      </p>
      <article className='flex flex-col md:flex-row md:justify-between gap-2 '>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className='text-sm sm:text-base/7'>
            <SelectValue placeholder='Выберите адрес помещения' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className='text-sm' value='1'>
              Мурманск, ул. Капитана Копытова, д. 45
            </SelectItem>
            <SelectItem className='text-sm' value='2'>
              Мурманск, ул. Виктора Миронова, д. 42
            </SelectItem>
          </SelectContent>
        </Select>
        {value && (
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className='text-sm sm:text-base/7'>
              <SelectValue placeholder='Сортировать по' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='text-sm' value=' '>
                По умолчанию
              </SelectItem>
              <SelectItem className='text-sm' value='sizeTop'>
                По площади <ArrowUp />
              </SelectItem>
              <SelectItem className='text-sm' value='sizeBottom'>
                По площади <ArrowDown />
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </article>
      {value && <RoomsList sortBy={sortBy} id={Number(value)} />}
    </article>
  )
}
