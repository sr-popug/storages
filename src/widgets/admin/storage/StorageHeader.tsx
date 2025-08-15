import getStorageById from "@/shared/api/Storage/getStorageById";
import updateStorage from "@/shared/api/Storage/updateStorage";
import { Button } from "@/shared/ui/button";
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
import { Storage } from "@prisma/client";
import { LoaderCircle, Pen } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { toast } from "sonner";

export default function StorageHeader({ storageId }: { storageId: string }) {
  const [storage, setStorage] = useState<Storage>();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    getStorageById(Number(storageId)).then(res => {
      setStorage(res[0]);
    });
  }, [storageId]);
  function changeAction() {
    setLoading(true);
    updateStorage({ id: Number(storageId), address })
      .then(() => {
        toast.success("Изменение завершено");
        location.reload();
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }
  return (
    <header className='flex gap-5 flex-wrap sm:flex-nowrap items-center justify-between'>
      <h1 className=' text-xl text-balance sm:text-2xl font-bold flex gap-2 items-center'>
        Склад по адресу {storage && storage.address}
        {!storage && <LoaderCircle className='animate-spin w-5 h-5 mb-2' />}
      </h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <form className='w-full sm:w-auto'>
          <DialogTrigger asChild>
            <Button
              variant='outline'
              className='cursor-pointer w-full sm:w-auto text-lg'
            >
              <span className='gap-3.5 flex items-center'>
                <Pen /> Изменить адрес
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Изменение адреса</DialogTitle>
              <DialogDescription>
                Введите в поле ниже новый адрес склада.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4'>
              <div className='grid gap-3'>
                <Label htmlFor='name-1'>Новый адрес</Label>
                <Input
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  id='name-1'
                  name='name'
                  placeholder='Адрес'
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>Отмена</Button>
              </DialogClose>
              <Button onClick={changeAction} disabled={loading} type='submit'>
                {loading && "Сохранение изменений..."}
                {!loading && "Сохранить изменения"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </header>
  );
}
