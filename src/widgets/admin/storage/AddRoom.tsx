import createRoom from '@/shared/api/Room/createRoom'
import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Plus, X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

export default function AddRoom({ storageId }: { storageId: string }) {
  const [sizes, setSizes] = useState<number[]>([0, 0])
  const [number, setNumber] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  function changeSize(e: ChangeEvent<HTMLInputElement>, index: number) {
    const newSizes = [...sizes]
    newSizes[index] = Number(e.target.value) || 0
    setSizes(newSizes)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    createRoom({ number, size: sizes, storageId: Number(storageId) })
      .then(() => {
        toast.success('Создание завершено')
        location.reload()
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='w-full mt-3 cursor-pointer text-base/7'
        >
          <Plus className='mr-2 h-4 w-4' /> Создать комнату
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Создание комнаты</DialogTitle>
          <DialogDescription>Введите данные комнаты</DialogDescription>
        </DialogHeader>
        <div className=' gap-4 py-4'>
          <div className='flex items-center gap-4 mb-3'>
            <Label htmlFor='roomNumber' className='w-20'>
              Номер
            </Label>
            <Input
              id='roomNumber'
              name='roomNumber'
              value={number}
              onChange={e => setNumber(Number(e.target.value))}
              className='w-18'
              type='number'
            />
          </div>

          <div className='grid grid-cols-4 items-start gap-4'>
            <Label className='text-right mt-2'>Размеры</Label>
            <div className='col-span-3 space-y-2'>
              {Array.from({ length: sizes.length / 2 }).map((_, pairIndex) => {
                const firstIndex = pairIndex * 2
                const secondIndex = pairIndex * 2 + 1
                console.log(sizes.length, secondIndex + 1)
                return (
                  <div key={pairIndex} className='flex items-center gap-2'>
                    <Input
                      value={sizes[firstIndex]}
                      onChange={e => changeSize(e, firstIndex)}
                      className='w-20'
                      type='number'
                    />
                    <span>x</span>
                    <Input
                      value={sizes[secondIndex]}
                      onChange={e => changeSize(e, secondIndex)}
                      className='w-20'
                      type='number'
                    />
                    <span>см</span>
                    {sizes.length == secondIndex + 1 && secondIndex != 1 && (
                      <Button
                        onClick={() =>
                          setSizes(prev => prev.slice(0, sizes.length - 2))
                        }
                        className='cursor-pointer'
                        variant='destructive'
                      >
                        <X />
                      </Button>
                    )}
                  </div>
                )
              })}
              <Button
                type='button'
                variant='secondary'
                className='mt-2 w-67/100 cursor-pointer'
                onClick={() => setSizes(prev => [...prev, 0, 0])}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              Отмена
            </Button>
          </DialogClose>
          <Button
            disabled={loading}
            className='cursor-pointer'
            onClick={handleSubmit}
          >
            {loading && 'Создание...'}
            {!loading && 'Продолжить'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
