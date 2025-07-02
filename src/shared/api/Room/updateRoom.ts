'use client'
import { api } from '@/shared/api/axiosApi'
import { Room } from '@prisma/client'

export default async function updateRoom(data: Partial<Room>) {
  return await api.patch(
    `${process.env.NEXT_PUBLIC_URL}/api/room`,

    data
  )
}
