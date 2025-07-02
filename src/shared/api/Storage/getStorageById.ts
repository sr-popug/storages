'use client'
import { Storage } from '@prisma/client'
import { api } from '../axiosApi'
export default async function getStorageById(id: number) {
  const data = await api.get<Storage[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/storage?id=${id}`
  )
  return data.data
}
