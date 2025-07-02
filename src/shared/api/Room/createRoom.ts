'use client'
import { Room } from '@prisma/client'
import { api } from '../axiosApi'

export default async function createRoom(data: Partial<Room>) {
  return (
    await api.post(
      `${process.env.NEXT_PUBLIC_URL}/api/room`,

      { ...data, isOccupied: false }
    )
  ).data
}
