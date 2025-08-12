"use client";
import { Laugh } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const router = useRouter();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer == 1) {
      router.push("/");
    }
  }, [timer]);
  return (
    <article className='h-full'>
      <div className='flex items-center justify-center flex-col'>
        <Laugh width={70} height={70} className='text-red-700' />
        <h1 className='text-3xl font-bold'>Заявка отправлена успешно!</h1>
        <p className='text-lg mt-2 text-center'>
          Мы перезвоним вам в ближайшее время
        </p>

        <p className='text-sm mt-10 text-center text-neutral-600'>
          Возвращение на главную через {timer}...
        </p>
      </div>
    </article>
  );
}
