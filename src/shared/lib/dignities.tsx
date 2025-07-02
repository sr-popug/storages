import {
  CalendarClock,
  Cctv,
  Receipt,
  ReceiptText,
  ThermometerSun,
  TruckElectric,
} from 'lucide-react'
const SIZE = 60
const dignities = [
  {
    title: 'Поддержание оптимальной температуры - <strong>выше 15°С</strong>',
    icon: (
      <ThermometerSun className='text-red-800' width={SIZE} height={SIZE} />
    ),
  },
  {
    title: 'Постоянное видеонаблюдение <strong>в каждой комнате</strong>',
    icon: <Cctv className='text-red-800' width={SIZE} height={SIZE} />,
  },
  {
    title: '<strong>Круглосуточный</strong> доступ в хранилище',
    icon: <CalendarClock className='text-red-800' width={SIZE} height={SIZE} />,
  },
  {
    title: 'Удобный подъезд для <strong>грузового транспорта</strong>',
    icon: <TruckElectric className='text-red-800' width={SIZE} height={SIZE} />,
  },
  {
    title: 'Самые низкие цены <strong> во всём Мурманске</strong>',
    icon: <Receipt className='text-red-800' width={SIZE} height={SIZE} />,
  },
  {
    title: 'Заключаем <strong>официальный договор аренды</strong>',
    icon: <ReceiptText className='text-red-800' width={SIZE} height={SIZE} />,
  },
]
export default dignities
