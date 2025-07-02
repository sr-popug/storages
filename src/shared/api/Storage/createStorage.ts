'use client'
import { Storage } from '@prisma/client'
import { api } from '../axiosApi'

export default async function createStorage(data: Partial<Storage>) {
  return await api.post(
    `${process.env.NEXT_PUBLIC_URL}/api/storage`,

    data
  )
}
