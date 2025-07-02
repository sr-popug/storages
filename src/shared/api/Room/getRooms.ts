'use client'
import { Room } from '@prisma/client'
import { api } from '../axiosApi'

export default async function getRooms(storageId: number | undefined) {
  if (storageId) {
    const data = await api.get<Room[]>(
      `${process.env.NEXT_PUBLIC_URL}/api/room?storage-id=${storageId}`
    )
    return data.data
  }
  return (await api.get<Room[]>(`${process.env.NEXT_PUBLIC_URL}/api/room`)).data
}
