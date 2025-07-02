import StoragePage from '@/widgets/admin/storage/StoragePage'

export default function page({ params }: { params: { id: string } }) {
  return <StoragePage id={params.id} />
}
