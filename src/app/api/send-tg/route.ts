import { NextRequest } from "next/server";

export async function POST(NextRequest: NextRequest) {
  const data = await NextRequest.json();
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: -1002604919535,
          text: data.message,
        }),
      }
    );

    const returned = await response.json();

    if (!returned.ok) {
      throw new Error(returned.description || "Failed to send message");
    }

    return new Response(JSON.stringify({ success: true }), {
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
