import StoragePage from '@/widgets/admin/storage/StoragePage'
interface PageProps {
  params: {
    id: string
  }
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}
export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <StoragePage id={id} />
}
