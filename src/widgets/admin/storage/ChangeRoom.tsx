import updateRoom from "@/shared/api/Room/updateRoom";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Room } from "@prisma/client";
import { ChevronDownIcon, X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
export default function ChangeRoom({ roomData }: { roomData: Room }) {
  const [sizes, setSizes] = useState<number[]>(roomData.size);
  const [name, setName] = useState(roomData.userName);
  const [phone, setPhone] = useState(roomData.userPhone);
  const [number, setNumber] = useState(roomData.number);
  const [isOccupied, setIsOccupied] = useState(roomData.isOccupied);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined | null>(
    roomData.endOccupied
  );
  const [loading, setLoading] = useState(false);

  function changeSize(e: ChangeEvent<HTMLInputElement>, index: number) {
    // Создаем новый массив вместо мутации старого
    const newSizes = [...sizes];
    newSizes[index] = Number(e.target.value) || 0;
    setSizes(newSizes);
  }

  function handleSubmit(e: FormEvent) {
    setLoading(true);
    e.preventDefault();
    if (!isOccupied) {
      return updateRoom({
        id: roomData.id,
        number,
        size: sizes,
        isOccupied: false,
      }).then(() => location.reload());
    }
    updateRoom({
      id: roomData.id,
      number,
      size: sizes,
      isOccupied: true,
      userName: name,
      userPhone: phone,
      endOccupied: date,
    }).then(() => location.reload());
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          <Button variant='outline' className='cursor-pointer'>
            Изменить
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Изменение комнаты</DialogTitle>
            <DialogDescription>Измените данные комнаты</DialogDescription>
          </DialogHeader>
          <div className=''>
            <div className='flex items-center gap-4 mb-3'>
              <Label htmlFor='roomNumber' className='w-20'>
                Номер
              </Label>
              <Input
                id='roomNumber'
                name='roomNumber'
                className='w-18'
                value={number}
                onChange={e => setNumber(Number(e.target.value))}
                type='number'
              />
            </div>

            <div className='grid grid-cols-4 items-start gap-4'>
              <Label className='text-right mt-2'>Размеры</Label>
              <div className='col-span-3 space-y-2'>
                {Array.from({ length: sizes.length / 2 }).map(
                  (_, pairIndex) => {
                    const firstIndex = pairIndex * 2;
                    const secondIndex = pairIndex * 2 + 1;
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
                        {sizes.length == secondIndex + 1 &&
                          secondIndex != 1 && (
                            <Button
                              onClick={() =>
                                setSizes(prev =>
                                  prev.slice(0, sizes.length - 2)
                                )
                              }
                              className='cursor-pointer'
                              variant='destructive'
                            >
                              <X />
                            </Button>
                          )}
                      </div>
                    );
                  }
                )}
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
          <div className='flex items-center gap-2'>
            <Checkbox
              checked={isOccupied}
              onCheckedChange={checked => setIsOccupied(Boolean(checked))}
              className=' cursor-pointer'
              id='isOccupied'
            />{" "}
            <Label className=' cursor-pointer' htmlFor='isOccupied'>
              Помещение занято
            </Label>
          </div>

          <div className='relative'>
            <div className='flex items-center gap-4 mb-3'>
              <Label htmlFor='name' className='w-20'>
                Имя (ФИО)
              </Label>
              <Input
                id='name'
                name='name'
                placeholder='ФИО'
                value={name || ""}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='flex items-center gap-4 mb-3'>
              <Label htmlFor='phone' className='w-20'>
                Телефон
              </Label>
              <div className='flex items-center gap-2 w-full'>
                +7{" "}
                <Input
                  id='phone'
                  name='phone'
                  placeholder='(___)___-__-__'
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  value={phone || ""}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className='flex items-center gap-4 mb-3'>
              <Label className='w-16'>Аренда до</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    id='date'
                    className='w-48 justify-between font-normal'
                  >
                    {date
                      ? new Date(date).toLocaleDateString()
                      : "Выберите дату"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className='w-auto overflow-hidden p-0'
                  align='start'
                >
                  <Calendar
                    mode='single'
                    selected={date!}
                    captionLayout='dropdown'
                    onSelect={date => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {!isOccupied && (
              <div className='bg-neutral-950 opacity-80 absolute -left-1 top-0 right-0 bottom-0 z-5000'></div>
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='outline'>
                Отмена
              </Button>
            </DialogClose>
            <Button disabled={loading} onClick={handleSubmit} type='submit'>
              {!loading && "Сохранить изменения"}
              {loading && "Загрузка"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
