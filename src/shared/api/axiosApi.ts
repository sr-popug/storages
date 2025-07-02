'use client'

import axios from 'axios'
import { toast } from 'sonner'
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  withCredentials: true,
})

api.interceptors.response.use(
  response => response,
  error => {
    // Глобальная обработка ошибок
    if (error.message) {
      toast.error('Ошибка от сервера', {
        description: error.message,
      })
    } else if (error.request) {
      toast.error('Сервер не отвечает')
    } else {
      toast.error('Ошибка при запросе', {
        description: error.message,
      })
    }

    return Promise.reject(error)
  }
)
