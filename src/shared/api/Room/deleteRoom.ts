'use client'
import { api } from '../axiosApi'

export default async function deleteRoom(id: number) {
  return (await api.delete(`${process.env.NEXT_PUBLIC_URL}/api/room?id=${id}`))
    .data
}
