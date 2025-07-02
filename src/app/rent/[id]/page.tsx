import RentRoomPage from '@/widgets/rent/ui/RentRoom/RentRoomPage'

export default function RentRoom({ params }: { params: { id: string } }) {
  return <RentRoomPage id={params.id} />
}
