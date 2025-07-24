// server/utils/db.ts
import { PrismaClient } from "@prisma/client";

// ป้องกันการ new PrismaClient() ซ้ำซ้อนในระหว่าง hot-reloading (development)
const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
