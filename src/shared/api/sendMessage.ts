import { Inputs } from "@/shared/types/inputs";
import { Room } from "@prisma/client";
import axios from "axios";
import { toast } from "sonner";
import { PRICE_FOR_SQUARE_METER } from "../lib/constants";
import numWord from "../scripts/numWord";

type Params = Inputs & { room: Room };

export default function sendMessage(data: Params) {
  const text = `
  📋 Новая заявка на бронирование:

 📍 Хранилище № ${data.room.number} 
 🔰 Размер комнаты: ${data.room.size.reduce((calc, el, i) => {
   if (i % 2 == 0) {
     calc += ` ${el / 100}м ×`;
   } else {
     calc += ` ${el / 100}м,`;
   }
   return calc;
 }, "")}
 🔰 Площадь комнаты: ${data.room.size.reduce((calc, a, i, array) => {
   if (i % 2 == 1) {
     calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(2));
     return calc;
   }
   return calc;
 }, 0)}м²
 🔰 Стоимость аренды: ${
   data.room.size.reduce((calc, a, i, array) => {
     if (i % 2 == 1) {
       calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1));
       return calc;
     }
     return calc;
   }, 0) * PRICE_FOR_SQUARE_METER
 }₽/мес
     
 🔹 Клиент: ${data.name} 
 🔹 Телефон: +7${data.phone}
 🔹 Срок аренды: ${data.months} месяц${numWord(Number(data.months))} 

 📅 Статус: ${data.room.isOccupied ? "Занята ❌" : "Свободна ✅"}  
 ⏳ Дата начала: ${data.room.startOccupied || "не указана"}  
 ⏳ Дата окончания: ${data.room.endOccupied || "не указана"}  

    
  `;

  axios
    .post(`${process.env.NEXT_PUBLIC_URL}/api/send-tg`, { message: text })
    .then(() => {
      location.replace("/rent/success");
    })
    .catch(() => {
      toast.error("Ошибка отправки, повторите позже");
    });
}
