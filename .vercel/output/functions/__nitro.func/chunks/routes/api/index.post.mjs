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
  const userId = session.user.id;
  const body = await readBody(event);
  const { count, totalValue, details, labeledImage } = body;
  if (!count || !totalValue || !details || !labeledImage) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields"
    });
  }
  const newHistory = await db.processingHistory.create({
    data: {
      totalCount: count,
      totalValue,
      labeledImage,
      user: {
        connect: { id: userId }
      },
      // สร้าง details ไปพร้อมกัน
      details: {
        create: details.map((detail) => ({
          type: detail.type,
          count: detail.count,
          value: detail.value
        }))
      }
    }
  });
  return newHistory;
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
