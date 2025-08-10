import { NextApiRequest } from "next";
// import { checkExpiredRentals } from '@/lib/rentals'; // Ваша функция

export default async function handler(
  req: NextApiRequest
  // res: NextApiResponse
) {
  // Защита от случайных вызовов (только для Vercel Cron)
  if (req.headers["authorization"] !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
    });
  }

  try {
    // await checkExpiredRentals(); // Проверяем аренды
    new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    new Response(JSON.stringify({ error: "Cron job failed" }), { status: 500 });
  }
}
