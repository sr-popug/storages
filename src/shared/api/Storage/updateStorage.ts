'use client'
import { api } from '@/shared/api/axiosApi'

export default async function updateStorage(data: Partial<Storage>) {
  return await api.patch(
    `${process.env.NEXT_PUBLIC_URL}/api/storage`,

    data
  )
}
