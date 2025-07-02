'use client'
import { api } from '../axiosApi'

export default async function deleteStorage(id: number) {
  return (
    await api.delete(`${process.env.NEXT_PUBLIC_URL}/api/storage?id=${id}`)
  ).data
}
