import { d as defineEventHandler, g as getUserSession, c as createError } from '../../../_/nitro.mjs';
import { d as db } from '../../../_/db.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'consola';
import 'node:fs';
import 'node:path';
import 'os';
import 'tty';
import 'fs';
import 'path';
import 'child_process';
import 'fs/promises';
import 'util';
import 'async_hooks';
import 'events';

const stats_get = defineEventHandler(async (event) => {
  var _a, _b;
  const session = await getUserSession(event);
  if (!((_a = session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const userId = session.user.id;
  const stats = await db.processingHistory.aggregate({
    where: {
      userId
    },
    _count: {
      id: true
      // นับจำนวนแถว (จำนวนครั้งที่ประมวลผล)
    },
    _sum: {
      totalValue: true
      // รวมยอดเงินทั้งหมด
    }
  });
  return {
    scanCount: stats._count.id,
    totalValueSum: (_b = stats._sum.totalValue) != null ? _b : 0
    // ถ้ายังไม่เคยมีข้อมูลให้เป็น 0
  };
});

export { stats_get as default };
//# sourceMappingURL=stats.get.mjs.map
