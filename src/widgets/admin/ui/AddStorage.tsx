import createStorage from "@/shared/api/Storage/createStorage";
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
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function AddStorage() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    createStorage({ address })
      .then(() => {
        toast.success("Создание завершено");
        location.reload();
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' className='cursor-pointer text-lg'>
          <Plus className='mr-2 h-4 w-4' /> Добавить
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Создание помещения</DialogTitle>
          <DialogDescription>Введите адрес склада</DialogDescription>
        </DialogHeader>
        <div className=''>
          <Input
            value={address}
            onChange={e => setAddress(e.target.value)}
            className=''
            placeholder='Адрес'
            type='text'
          />
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
            {loading && "Создание..."}
            {!loading && "Продолжить"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
