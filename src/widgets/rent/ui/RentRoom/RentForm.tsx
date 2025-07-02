'use client'
import numWord from '@/shared/scripts/numWord'
import { Input } from '@/shared/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp'
import { Label } from '@/shared/ui/label'
import { Room } from '@prisma/client'
import Link from 'next/link'
import { useState } from 'react'

export default function RentForm({ room }: { room: Room }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [month, setMonth] = useState('1')
  function phoneChange(newValue: string) {
    setPhone(newValue)
  }
  function smPhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value)
  }
  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }
  function monthChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMonth(e.target.value)
  }

  return (
    <article className='mt-5 bg-neutral-900 rounded-xl px-5 py-2 pb-5'>
      <h3 className='text-xl  font-bold gap-2 items-center mt-5 mb-1'>
        Заполните данные для оплаты
      </h3>
      <div className='flex gap-x-20 gap-y-5 flex-wrap'>
        {' '}
        <div className='mt-3'>
          <Label className='text-[16px]' htmlFor=''>
            Кол-во месяцев
          </Label>
          <div className='flex items-center gap-2'>
            <Input
              value={month}
              onChange={monthChange}
              id='months'
              min={1}
              className='mt-1 text-base/7 w-16'
              placeholder='0'
              type='number'
            />{' '}
            месяц{numWord(Number(month))}{' '}
            <span className='text-neutral-600'>
              ={' '}
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  return calc
                }
                return calc
              }, 0) *
                1200 *
                Number(month)}{' '}
              ₽
            </span>
          </div>
        </div>
        <div>
          <div className='mt-3'>
            <p>Полное имя (ФИО)</p>
            <Input
              value={name}
              onChange={nameChange}
              id='name'
              className='mt-1 text-base/7 w-64'
              placeholder='ФИО'
            />
          </div>
          <div className=' mt-3'>
            <p className='mb-1'>Номер телефона</p>
            <div className='flex items-center gap-2  sm:hidden'>
              +7{' '}
              <Input
                value={phone}
                onChange={smPhoneChange}
                className=''
                type='tel'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              />
            </div>
            <div className='sm:block hidden'>
              <InputOTP
                className=''
                value={phone}
                onChange={phoneChange}
                maxLength={10}
              >
                <span className='flex gap-1 text-nowrap'>
                  +7 <span className='sm:block hidden'>(</span>
                </span>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <span className='sm:block hidden'>)</span>
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
                <span className='sm:block hidden'>-</span>
                <InputOTPGroup>
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
                <span className='sm:block hidden'>-</span>
                <InputOTPGroup>
                  <InputOTPSlot index={8} />
                  <InputOTPSlot index={9} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
          <p className='text-sm mt-1 text-neutral-600 max-w-110'>
            После оплаты на указанный номер телефона в Telegram придёт
            <span className='font-semibold'> уникальный код доступа</span> для
            открытия замка.
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <b className=' text-xl mb-1 block'>Итого:</b>
        <p>
          - Оплата аренды помещения свободного назначения на {month} месяц
          {numWord(Number(month))} -{' '}
          {room.size.reduce((calc, a, i, array) => {
            if (i % 2 == 1) {
              calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
              return calc
            }
            return calc
          }, 0) *
            1200 *
            Number(month)}{' '}
          ₽
        </p>
      </div>
      <Link
        className='mt-5 block text-center py-2 px-15 bg-red-800 transition-colors rounded-full hover:bg-red-950 font-bold'
        href={'/'}
      >
        Оплатить{' '}
        {room.size.reduce((calc, a, i, array) => {
          if (i % 2 == 1) {
            calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
            return calc
          }
          return calc
        }, 0) *
          1200 *
          Number(month)}{' '}
        ₽
      </Link>
    </article>
  )
}
