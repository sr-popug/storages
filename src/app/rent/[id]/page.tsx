import RentRoomPage from '@/widgets/rent/ui/RentRoom/RentRoomPage'

type Params = Promise<{ id: string }>

export default async function RentRoom({ params }: { params: Params }) {
  const { id } = await params
  return <RentRoomPage id={id} />
}
