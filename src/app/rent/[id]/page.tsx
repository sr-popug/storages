import RentRoomPage from '@/widgets/rent/ui/RentRoom/RentRoomPage'

type Params = Promise<{ id: string }>
interface PageProps {
  params: {
    id: string
  }
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}
export default async function RentRoom({ params }: PageProps) {
  const { id } = await params
  return <RentRoomPage id={id} />
}
