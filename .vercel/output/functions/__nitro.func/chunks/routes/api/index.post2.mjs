import { d as defineEventHandler, g as getUserSession, c as createError, f as readBody } from '../../_/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event);
  if (!((_a = session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const { ids } = await readBody(event);
  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "IDs are required and must be a non-empty array."
    });
  }
  const historyRecords = await db.processingHistory.findMany({
    where: {
      // ค้นหาเฉพาะ id ที่อยู่ใน list และเป็นของ user คนปัจจุบันเท่านั้น (เพื่อความปลอดภัย)
      id: {
        in: ids
      },
      userId: session.user.id
    },
    include: {
      details: true
      // ดึงรายละเอียดเหรียญ (CoinDetail) มาด้วย
    }
  });
  if (historyRecords.length !== ids.length) {
    console.warn(
      "Some history records were not found or do not belong to the user."
    );
  }
  return historyRecords;
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
