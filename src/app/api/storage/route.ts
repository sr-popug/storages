import prisma from '@/shared/lib/prisma'
import { NextRequest } from 'next/server'
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = Number(searchParams.get('id'))
  console.log(id)
  try {
    let storages
    if (id) {
      storages = await prisma.storage.findMany({
        where: {
          id,
        },
      })
    } else {
      storages = await prisma.storage.findMany({})
    }
    return new Response(JSON.stringify(storages), { status: 200 })
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: err instanceof Error ? err.message : 'Unknown error',
        code: err instanceof Error && 'code' in err ? err.code : undefined,
      }),
      { status: 403 }
    )
  }
}
export async function POST(NextRequest: NextRequest) {
  const data = await NextRequest.json()

  try {
    const result = await prisma.storage.create({
      data: data,
    })

    return new Response(JSON.stringify(JSON.parse(JSON.stringify(result))), {
      status: 200,
    })
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: err instanceof Error ? err.message : 'Unknown error',
        code: err instanceof Error && 'code' in err ? err.code : undefined,
      }),
      { status: 403 }
    )
  }
}
export async function DELETE(NextRequest: NextRequest) {
  const searchParams = NextRequest.nextUrl.searchParams
  const query = Number(searchParams.get('id'))
  if (query) {
    try {
      const edge = await prisma.storage.delete({
        where: {
          id: query,
        },
      })
      return new Response(JSON.stringify(edge), { status: 200 })
    } catch (err) {
      return new Response(JSON.stringify(err), { status: 403 })
    }
  }
}
export async function PATCH(NextRequest: NextRequest) {
  const data = await NextRequest.json()
  console.log(data)
  try {
    const result = await prisma.storage.update({
      where: {
        id: data.id,
      },
      data: data,
    })
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify(err), { status: 403 })
  }
}
