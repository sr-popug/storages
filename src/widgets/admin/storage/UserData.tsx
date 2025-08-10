import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Room } from "@prisma/client";
import { User } from "lucide-react";
export default function UserData({ roomData }: { roomData: Room }) {
  return (
    <Dialog>
      <form title='Данные арендатора'>
        <DialogTrigger asChild>
          <Button className='cursor-pointer' variant='outline'>
            <User />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Данные арендатора</DialogTitle>
          </DialogHeader>
          <div>
            <strong className='flex gap-2 text-base/7 font-medium mt-2 text-neutral-600'>
              Арендатор:{" "}
              <div className=' text text-neutral-100'>{roomData.userName}</div>
            </strong>
            <strong className='flex gap-6 text-base/7 font-medium mt-2 text-neutral-600'>
              Телефон:{" "}
              <a
                href={"tel:8" + roomData.userPhone}
                className=' text text-neutral-100 underline'
              >
                +7{roomData.userPhone}
              </a>
            </strong>

            <strong className='flex gap-2.5 text-base/7 font-medium mt-2 text-neutral-600'>
              Аренда до:
              <div className=' text text-neutral-100'>
                {new Date(roomData.endOccupied!).toLocaleDateString()}
              </div>
            </strong>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
