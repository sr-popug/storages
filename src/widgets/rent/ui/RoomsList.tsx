'use client'
import getRooms from '@/shared/api/Room/getRooms'
import { Room } from '@prisma/client'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import RoomCard from './RoomCard'

export default function RoomsList({
  id,
  sortBy,
}: {
  id: number
  sortBy: string
}) {
  const [rooms, setRooms] = useState<Room[]>()
  useEffect(() => {
    getRooms(id).then(res => setRooms(res))
  }, [id])
  return (
    <ul className='flex flex-wrap gap-4 justify-center mt-5'>
      {!rooms && (
        <div className='flex items-center flex-col justify-center'>
          <LoaderCircle className='animate-spin w-10 h-10 mb-2' />
          <p>Загрузка...</p>
        </div>
      )}
      {rooms &&
        rooms
          .filter(el => !el.isOccupied)
          .sort((a, b) => {
            if (sortBy === 'sizeTop') {
              const sizeA = a.size.reduce((calc, val, i, array) => {
                if (i % 2 === 1) {
                  return (
                    calc +
                    Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  )
                }
                return calc
              }, 0)

              const sizeB = b.size.reduce((calc, val, i, array) => {
                if (i % 2 === 1) {
                  return (
                    calc +
                    Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  )
                }
                return calc
              }, 0)

              return sizeA - sizeB
            }
            if (sortBy === 'sizeBottom') {
              const sizeA = a.size.reduce((calc, val, i, array) => {
                if (i % 2 === 1) {
                  return (
                    calc +
                    Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  )
                }
                return calc
              }, 0)

              const sizeB = b.size.reduce((calc, val, i, array) => {
                if (i % 2 === 1) {
                  return (
                    calc +
                    Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  )
                }
                return calc
              }, 0)

              return sizeB - sizeA
            }
            return a.number - b.number
          })
          .map(room => <RoomCard key={room.id} room={room} />)}
    </ul>
  )
}
