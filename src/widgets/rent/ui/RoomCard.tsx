import { PRICE_FOR_SQUARE_METER } from "@/shared/lib/constants";
import Room from "@/widgets/rent/ui/Room";
import Link from "next/link";
type Room = {
  id: number;
  number: number;
  size: Array<number>;
  isOccupied: boolean;
};
export default function RoomCard({ room }: { room: Room }) {
  return (
    <li
      key={room.id}
      className='border flex flex-col border-neutral-600 p-3 rounded-lg w-full sm:w-62'
    >
      <div className='text flex flex-col justify-between grow'>
        <div className=''>
          <p className='text-sm text-center sm:text-left text-neutral-600 mb-3'>
            Комната № {room.number} -{" "}
            <span className='text-green-700'>Свободна</span>
          </p>
          <div className='flex justify-center items-center flex-col h-62 w-full sm:w-56'>
            <Room size={room.size} />
          </div>

          <strong className='flex gap-2 text-lg font-medium mt-2 text-neutral-600'>
            Размеры:{" "}
            <div className='text text-neutral-100'>
              {room.size.map((room2, i) => {
                if (i % 2 == 0) {
                  return room2 + "x";
                }
                return (
                  <span key={i}>
                    {room2}см
                    <br />
                  </span>
                );
              })}
            </div>
          </strong>
          <strong className='flex gap-2 text-lg font-medium mt-2 text-neutral-600'>
            Площадь:{" "}
            <div className=' text text-neutral-100'>
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(
                    ((array[i] * array[i - 1]) / 10000).toFixed(1)
                  );
                  return calc;
                }
                return calc;
              }, 0)}
              м²
            </div>
          </strong>
          <strong className='flex gap-2 text-lg font-medium mt-2 text-neutral-600'>
            Аренда:{" "}
            <div className=' ml-4 text text-neutral-100'>
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(
                    ((array[i] * array[i - 1]) / 10000).toFixed(1)
                  );
                  return calc;
                }
                return calc;
              }, 0) * PRICE_FOR_SQUARE_METER}{" "}
              руб/мес
            </div>
          </strong>
        </div>
        <Link
          href={`/rent/${room.id}`}
          className='mt-5 bg-red-800 py-1.5 rounded-full  flex  items-center justify-center  text-[15px] lg:text-lg  text-nowrap transition-colors hover:bg-red-900 font-bold'
        >
          Арендовать
        </Link>
      </div>
    </li>
  );
}
