import { getUserSubscription } from "@/lib/db"; // Ваша функция для проверки подписки
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.headers["user-id"]; // или из кук/сессии
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const subscription = await getUserSubscription(userId);
  const today = new Date();
  const endDate = new Date(subscription.endDate);

  if (today >= endDate) {
    // Обновляем статус подписки в БД
    await deactivateSubscription(userId);
    return new Response(JSON.stringify({ error: "Subscription expired" }), {
      status: 403,
    });
  }

  res.status(200).json({ success: true });
}
