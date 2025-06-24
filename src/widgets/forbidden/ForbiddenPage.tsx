import { Ban } from 'lucide-react'
import ForbiddenTable from './ui/ForbiddenTable'

export default function ForbiddenPage() {
  return (
    <>
      <h1 className='flex  text-2xl lg:text-3xl font-bold gap-2 items-center mt-5'>
        <Ban className='text-red-800 w-8 h-8' /> Что нельзя хранить?
      </h1>
      <ForbiddenTable />
    </>
  )
}
