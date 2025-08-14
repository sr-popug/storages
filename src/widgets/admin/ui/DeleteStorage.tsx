import deleteStorage from "@/shared/api/Storage/deleteStorage";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export default function DeleteStorage({ id }: { id: number }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  function handleButtonClick(e: React.MouseEvent) {
    e.stopPropagation(); // Stop event bubbling
    e.preventDefault(); // Prevent default link behavior
    setOpen(true);
  }
  function deleteAction() {
    setLoading(true);
    deleteStorage(id)
      .then(() => {
        toast.success("Удаление завершено");
        location.reload();
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={handleButtonClick}
          className='cursor-pointer'
          variant='destructive'
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы действительно хотите удалить помещение?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Это действие безвозвратно удалит данные!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='cursor-pointer'>
            Отмена
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            className='cursor-pointer'
            onClick={deleteAction}
          >
            {loading && "Удаление..."}
            {!loading && "Продолжить"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
