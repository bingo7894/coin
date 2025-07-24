import { d as defineEventHandler, g as getUserSession, c as createError } from '../../_/nitro.mjs';
import { d as db } from '../../_/db.mjs';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const historyList = await db.processingHistory.findMany({
    where: {
      userId: session.user.id
    },
    select: {
      // เลือกเฉพาะฟิลด์ที่จำเป็นสำหรับหน้า list
      id: true,
      totalCount: true,
      totalValue: true,
      createdAt: true
    },
    orderBy: {
      createdAt: "desc"
      // เรียงจากใหม่สุดไปเก่าสุด
    }
  });
  return historyList;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
