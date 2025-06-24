import {
  AlarmSmoke,
  BanknoteX,
  Biohazard,
  Bomb,
  BriefcaseMedical,
  Carrot,
  Cat,
  Flame,
  Siren,
} from 'lucide-react'

const forbidden = [
  [
    <>
      <Carrot className='inline text-red-800' /> Продукты питания
    </>,
    <>
      <Cat className='inline text-red-800' /> Растения и животные
    </>,
  ],
  [
    <>
      <Biohazard className='inline text-red-800' /> Токсичные и радиоактивные
      вещества
    </>,
    <>
      <Siren className='inline text-red-800' /> Запрещённые к обороту в РФ
      предметы
    </>,
  ],
  [
    <>
      <AlarmSmoke className='inline text-red-800' /> Материалы, источающие дым
      или запах
    </>,
    <>
      <Bomb className='inline text-red-800' /> Оружие и взрывоопасные вещества
    </>,
  ],
  [
    <>
      <BanknoteX className='inline text-red-800' /> Деньги и ценные бумаги
    </>,
    <>
      <BriefcaseMedical className='inline text-red-800' /> Лекарственные
      препараты в любой форме
    </>,
  ],
  [
    <>
      <Flame className='inline text-red-800' /> Легковоспламеняющиеся материалы
      и жидкости
    </>,
    'Оформляя договор аренды вы соглашаетесь с этими условиями и берёте на себя полную ответственность',
  ],
]
export const lowForbidden = forbidden.reduce((calc, el) => {
  if (Array.isArray(el)) {
    calc.push(...el)
  } else {
    calc.push(el)
  }
  return calc
}, [])
export default forbidden
