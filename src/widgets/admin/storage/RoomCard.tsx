import { Room } from "@prisma/client";
import ChangeRoom from "./ChangeRoom";
import DeleteRoom from "./DeleteRoom";
import UserData from "./UserData";

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
            {!room.isOccupied && (
              <span className='text-green-700'>Свободна</span>
            )}
            {room.isOccupied && <span className='text-red-700'>Занята</span>}
          </p>
          {/* <div className='flex justify-center items-center flex-col h-62 w-full sm:w-56'>
            <Room size={room.size} />
          </div> */}

          <strong className='flex gap-4 text-lg font-medium mt-2 text-neutral-600'>
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
          <strong className='flex gap-4 text-lg font-medium mt-2 text-neutral-600'>
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
          {room.isOccupied && (
            <strong className='flex gap-2 text-lg font-medium mt-2 text-neutral-600'>
              Занято до:{" "}
              <div className=' text text-neutral-100'>
                {new Date(room.endOccupied!).toLocaleDateString()}
              </div>
            </strong>
          )}

          {/* <strong className='flex gap-2 text-lg font-medium mt-2 text-neutral-600'>
            Аренда:{' '}
            <div className=' ml-4 text text-neutral-100'>
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1))
                  return calc
                }
                return calc
              }, 0) * PRICE_FOR_SQUARE_METER}{' '}
              руб/мес
            </div>
          </strong> */}
        </div>
        <div className='flex mt-5 items-center justify-between'>
          <ChangeRoom roomData={room} />
          <div className='flex gap-1'>
            {room.isOccupied && <UserData roomData={room} />}
            <DeleteRoom roomData={room} />
          </div>
        </div>
      </div>
    </li>
  );
}
