import prisma from "@/shared/lib/prisma";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const storageId = Number(searchParams.get("storage-id"));
  try {
    let rooms;
    if (id) {
      rooms = await prisma.room.findMany({
        where: {
          id,
        },
      });
    } else if (storageId) {
      rooms = await prisma.room.findMany({
        where: {
          storageId,
        },
      });
    } else {
      rooms = await prisma.room.findMany({
        where: {
          storageId,
        },
      });
    }
    return new Response(JSON.stringify(rooms), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: err instanceof Error ? err.message : "Unknown error",
        code: err instanceof Error && "code" in err ? err.code : undefined,
      }),
      { status: 403 }
    );
  }
}
export async function POST(NextRequest: NextRequest) {
  const data = await NextRequest.json();

  try {
    const result = await prisma.room.create({
      data: data,
    });

    return new Response(JSON.stringify(JSON.parse(JSON.stringify(result))), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: err instanceof Error ? err.message : "Unknown error",
        code: err instanceof Error && "code" in err ? err.code : undefined,
      }),
      { status: 403 }
    );
  }
}
export async function DELETE(NextRequest: NextRequest) {
  const searchParams = NextRequest.nextUrl.searchParams;
  const query = Number(searchParams.get("id"));
  if (query) {
    try {
      const edge = await prisma.room.delete({
        where: {
          id: query,
        },
      });
      return new Response(JSON.stringify(edge), { status: 200 });
    } catch (err) {
      return new Response(JSON.stringify(err), { status: 403 });
    }
  }
}
export async function PATCH(NextRequest: NextRequest) {
  const data = await NextRequest.json();
  console.log(data);
  try {
    const result = await prisma.room.update({
      where: {
        id: data.id,
      },
      data: data,
    });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 403 });
  }
}
