import { d as defineEventHandler, r as readValidatedBody, c as createError, v as verifyPassword, b as sanitizeUser, e as setUserSession } from '../../../_/nitro.mjs';
import { l as loginSchema } from '../../../_/schemas.mjs';
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

const login_post = defineEventHandler(async (event) => {
  const { password, email } = await readValidatedBody(
    event,
    (body) => loginSchema.parse(body)
  );
  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  });
  if (!existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: "User not exist"
    });
  }
  if (!existingUser.hashedPassword) {
    const connectedAccount = await db.oauthAccount.findFirst({
      where: {
        userId: existingUser.id
      }
    });
    if (connectedAccount) {
      const oAuthProvider = connectedAccount.providerId;
      throw createError({
        statusCode: 400,
        statusMessage: `Account connected with ${oAuthProvider}. Please continue with ${oAuthProvider} to login`
      });
    }
  }
  if (existingUser.hashedPassword) {
    const isPasswordCorrect = await verifyPassword(
      existingUser.hashedPassword,
      password
    );
    if (!isPasswordCorrect) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid Credentials"
      });
    }
  }
  const transformedUser = sanitizeUser(existingUser);
  if (transformedUser) {
    await setUserSession(event, {
      user: transformedUser
    });
  }
  return transformedUser;
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
