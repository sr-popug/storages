import AdminProvider from '@/widgets/admin/AdminProvider'
import HeaderAdmin from '@/widgets/admin/HeaderAdmin'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Склады - админ панель',
  description: 'Аренда помещений свободного назначения в городе Мурманске',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AdminProvider>
      <HeaderAdmin />
      {children}
    </AdminProvider>
  )
}
