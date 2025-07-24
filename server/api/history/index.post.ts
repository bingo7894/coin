// server/api/history/index.post.ts
import db from "~/utils/db";

export default defineEventHandler(async (event) => {
  // ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่
  const session = await getUserSession(event);
  if (!session.user?.id) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const userId = session.user.id;
  const body = await readBody(event);

  // รับข้อมูลผลลัพธ์จาก client
  const { count, totalValue, details, labeledImage } = body;

  if (!count || !totalValue || !details || !labeledImage) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  // สร้างข้อมูลในฐานข้อมูลด้วย Prisma transaction
  const newHistory = await db.processingHistory.create({
    data: {
      totalCount: count,
      totalValue: totalValue,
      labeledImage: labeledImage,
      user: {
        connect: { id: userId },
      },
      // สร้าง details ไปพร้อมกัน
      details: {
        create: details.map((detail: any) => ({
          type: detail.type,
          count: detail.count,
          value: detail.value,
        })),
      },
    },
  });

  return newHistory;
});
