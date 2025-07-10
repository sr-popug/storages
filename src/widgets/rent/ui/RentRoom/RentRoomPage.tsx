'use client'
import getRoomById from '@/shared/api/Room/getRoomById'
import getStorageById from '@/shared/api/Storage/getStorageById'
import { Room } from '@prisma/client'
import { Check, LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import RoomPreview from '../Room'
import RentForm from './RentForm'
export default function RentRoomPage({ id }: { id: string }) {
  const [room, setRoom] = useState<Room>()
  const [address, setAddress] = useState<string>('')
  useEffect(() => {
    getRoomById(Number(id)).then(res => setRoom(res[0]))
  }, [id])
  useEffect(() => {
    if (room?.id) {
      getStorageById(room.storageId).then(res => setAddress(res[0].address))
    }
  }, [room])
  if (!address || !room) {
    return (
      <article className=' flex items-center flex-col justify-center h-80'>
        <LoaderCircle className='animate-spin w-10 h-10 mb-2' />
        <p>Загрузка...</p>
      </article>
    )
  }
  return (
    <article>
      <h1 className='flex  text-2xl lg:text-3xl font-bold gap-2 items-center mt-5 mb-1 text-center sm:text-left'>
        Арендовать комнату № {room.number}
      </h1>

      <div className='flex justify-between flex-wrap-reverse'>
        <div>
          <h3 className='text-xl  font-bold gap-2 items-center mt-5 mb-1'>
            Информация о комнате
          </h3>
          <strong className='flex items-center gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
            <Check className='text-red-700' width={20} height={20} /> Размеры:{' '}
            <div className='text text-neutral-100'>
              {room.size.map((room2, i) => {
                if (i % 2 == 0) {
                  return room2 + 'x'
                }
                return (
                  <span key={i}>
                    {room2}см{i == 1 ? ',' : ''}{' '}
                  </span>
                )
              })}
            </div>
          </strong>
          <strong className='flex items-center gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
            <Check className='text-red-700' width={20} height={20} />
            Площадь:{' '}
            <div className=' text text-neutral-100'>
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  return calc
                }
                return calc
              }, 0)}
              м²
            </div>
          </strong>

          <strong className='flex items-center gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
            <Check className='text-red-700' width={20} height={20} />
            Климат:
            <div className=' ml-4 text text-neutral-100'>Отапливается</div>
          </strong>
          <strong className='flex items-center gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
            <Check className='text-red-700' width={20} height={20} />
            Электричество:
            <div className=' ml-4 text text-neutral-100'>Есть</div>
          </strong>
          <strong className='flex items-center gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
            <Check className='text-red-700' width={20} height={20} />
            Адрес:
            <div className=' ml-4 text text-neutral-100'>{address}</div>
          </strong>
          <strong className='flex items-center gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
            <Check className='text-red-700' width={20} height={20} />
            Аренда:{' '}
            <div className=' ml-4 text text-neutral-100'>
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  return calc
                }
                return calc
              }, 0) * 1200}{' '}
              руб/мес
            </div>
          </strong>
        </div>
        <div>
          <div className='w-65 h-65 rounded-lg flex flex-col justify-center items-center bg-neutral-900 pt-2'>
            <RoomPreview size={room.size} />
          </div>
          <div className='text-center text-neutral-600 text-sm'>
            {room.size.map((room2, i) => {
              if (i % 2 == 0) {
                return room2 + 'x'
              }
              return (
                <span key={i}>
                  {room2}см{i == 1 ? ',' : ''}{' '}
                </span>
              )
            })}
          </div>
        </div>
      </div>
      <RentForm room={room} />
    </article>
  )
}
