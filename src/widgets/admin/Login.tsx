'use client'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Login() {
  const [password, setPassword] = useState('')
  function handleSubmit() {
    if (password == process.env.NEXT_PUBLIC_PASSWORD) {
      window.localStorage.setItem('password', password)
      toast.success('Пароль введён верно, вход разрешён')
      location.reload()
    } else {
      toast.error('Пароль введён неверно, вход запрещён')
    }
  }
  return (
    <article>
      <h1 className='text-2xl md:text-4xl  font-bold'>
        Авторизация в админ панели
        <div className='mt-5'>
          <Label className='text-base/7'>Админ-пароль</Label>
          <Input
            value={password}
            className='mt-1'
            onChange={e => setPassword(e.target.value)}
            placeholder='Пароль'
          />
          <Button
            onClick={handleSubmit}
            className='text-base/7 w-full cursor-pointer'
          >
            Войти
          </Button>
        </div>
      </h1>
    </article>
  )
}
