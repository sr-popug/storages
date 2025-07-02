'use client'
import { Home, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function HeaderAdmin() {
  function handleExit() {
    localStorage.removeItem('password')
    location.reload()
  }
  return (
    <header className='flex items-center justify-between py-3 pb-4.5 rounded-xl px-5  mb-8	 bg-neutral-900'>
      <div className='flex items-center gap-5'>
        <h1 className='text-2xl md:text-4xl  font-bold'>Админ панель</h1>
        <div className='buttons flex gap-2'>
          <Link
            href={'/admin'}
            className=' cursor-pointer p-2 px-2.5 rounded-lg hover:bg-neutral-700 bg-neutral-800 flex items-center '
            title='Главная страница админки'
          >
            <Home className='w-4 h-4 ' />
          </Link>
        </div>
      </div>
      <button
        onClick={handleExit}
        className='text-neutral-100  flex items-center gap-2 cursor-pointer  p-2 md:px-5 bg-red-800 hover:bg-red-700 rounded-lg '
      >
        <span className='hidden md:inline'>Выйти</span>{' '}
        <LogOut className='w-4 h-4 ' />{' '}
      </button>
    </header>
  )
}
