// C:\Users\66979\Downloads\coin2\ProjectCoin\starter\utils\db.ts

// เปลี่ยนบรรทัด import นี้:
// เดิม: import { PrismaClient } from "../generated/prisma";
// ใหม่: import { PrismaClient } from "../src/generated/prisma";
import { PrismaClient } from "../src/generated/prisma"; // <--- แก้ตรงนี้!

declare global {
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
