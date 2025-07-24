import { d as defineEventHandler, r as readValidatedBody, c as createError, h as hashPassword, b as sanitizeUser, e as setUserSession } from '../../../_/nitro.mjs';
import { r as registerSchema } from '../../../_/schemas.mjs';
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
import 'zod';
import 'os';
import 'tty';
import 'fs';
import 'path';
import 'child_process';
import 'fs/promises';
import 'util';
import 'async_hooks';
import 'events';

const register_post = defineEventHandler(async (event) => {
  const { name, password, email } = await readValidatedBody(
    event,
    (body) => registerSchema.parse(body)
  );
  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  });
  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: "User already exist"
    });
  }
  const hashedPassword = await hashPassword(password);
  const user = await db.user.create({
    data: {
      email,
      hashedPassword,
      name
    }
  });
  const transformedUser = sanitizeUser(user);
  if (transformedUser) {
    await setUserSession(event, {
      user: transformedUser
    });
  }
  return transformedUser;
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
