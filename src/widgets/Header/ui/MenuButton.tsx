import { Dispatch, SetStateAction } from 'react'

export default function MenuButton({
  active,
  setActive,
}: {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <button
      onClick={() => setActive(prev => !prev)}
      className='flex flex-col gap-1 cursor-pointer'
    >
      <div
        className={`w-5 h-[1px] bg-neutral-100 ${active && 'rotate-45'} ${
          active && 'translate-y-1'
        } transition-all`}
      ></div>
      <div
        className={`w-5 h-[1px] bg-neutral-100 ${
          active && 'opacity-0'
        }  transition-all`}
      ></div>
      <div
        className={`w-5 h-[1px] bg-neutral-100 ${active && '-rotate-45'} ${
          active && '-translate-y-1.5'
        } transition-all`}
      ></div>
    </button>
  )
}
