'use client'
import { Room } from '@prisma/client'
import { api } from '../axiosApi'
export default async function getRoomById(id: number) {
  const data = await api.get<Room[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/room?id=${id}`
  )
  return data.data
}
