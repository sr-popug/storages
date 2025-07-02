'use client'
import React, { useEffect, useState } from 'react'
import Login from './Login'

export default function AdminProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Этот код выполнится только на клиенте
    if (
      window.localStorage.getItem('password') ===
      process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return <Login />
  }

  return children
}
