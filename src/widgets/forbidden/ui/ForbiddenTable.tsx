import forbidden, { lowForbidden } from '@/shared/lib/forbidden'

export default function ForbiddenTable() {
  return (
    <table className='w-full  border-collapse mt-7 mb-14'>
      <tbody className='hidden sm:block'>
        {forbidden.map((el, i) => (
          <tr
            key={i}
            className='last:text-neutral-700 last:text-sm text-[15px] lg:text-lg'
          >
            <td className='text-white w-1/2  text-[15px] lg:text-lg break-words px-8 sm:px-20 text-center  border border-neutral-600   p-9'>
              {el[0]}
            </td>
            <td className=' text-center  w-1/2 border border-neutral-600 p-3  px-8 sm:px-20'>
              {el[1]}
            </td>
          </tr>
        ))}
      </tbody>
      <tbody className='block sm:hidden'>
        {lowForbidden.map((el, i) => (
          <tr
            key={i}
            className='last:text-neutral-700 last:text-sm text-[15px] lg:text-lg'
          >
            <td className='  text-[15px] break-words  text-center  border-t border-neutral-600 p-9'>
              {el}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
