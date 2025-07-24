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

const _id__get = defineEventHandler(async (event) => {
  var _a, _b;
  const session = await getUserSession(event);
  if (!((_a = session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const historyId = (_b = event.context.params) == null ? void 0 : _b.id;
  if (!historyId) {
    throw createError({ statusCode: 400, statusMessage: "Missing history ID" });
  }
  const historyDetail = await db.processingHistory.findUnique({
    where: {
      id: historyId
    },
    include: {
      details: true
      // ดึงรายละเอียดเหรียญมาด้วย
    }
  });
  if (!historyDetail || historyDetail.userId !== session.user.id) {
    throw createError({ statusCode: 404, statusMessage: "History not found" });
  }
  return historyDetail;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
