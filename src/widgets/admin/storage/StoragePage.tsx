'use client'

import getRooms from '@/shared/api/Room/getRooms'
import { Room } from '@prisma/client'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import AddRoom from './AddRoom'
import RoomCard from './RoomCard'
import StorageHeader from './StorageHeader'

export default function StoragePage({ id }: { id: string }) {
  const [rooms, setRooms] = useState<Room[]>()

  useEffect(() => {
    if (!id) return
    getRooms(Number(id)).then(setRooms)
  }, [id])
  return (
    <article>
      <StorageHeader storageId={id} />
      <AddRoom storageId={id} />
      <ul className='flex flex-wrap gap-4 justify-center mt-5'>
        {!rooms && (
          <div className='flex items-center flex-col justify-center'>
            <LoaderCircle className='animate-spin w-10 h-10 mb-2' />
            <p>Загрузка...</p>
          </div>
        )}
        {rooms &&
          rooms
            .sort((a, b) => {
              return a.number - b.number
            })
            .map(room => <RoomCard key={room.id} room={room} />)}
      </ul>
    </article>
  )
}
