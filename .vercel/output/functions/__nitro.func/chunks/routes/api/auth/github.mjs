import { a as defineOAuthGitHubEventHandler, s as sendRedirect, b as sanitizeUser, e as setUserSession } from '../../../_/nitro.mjs';
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

const github = defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
    scope: ["read:user", "user:email"]
  },
  async onSuccess(event, { user }) {
    var _a, _b, _c, _d;
    console.log("Full GitHub user object:", JSON.stringify(user, null, 2));
    const githubName = (_b = (_a = user.name) != null ? _a : user.login) != null ? _b : "No Name";
    const githubAvatarUrl = (_c = user.avatar_url) != null ? _c : "";
    const githubEmail = (_d = user.email) != null ? _d : void 0;
    if (!githubEmail) {
      console.error("GitHub user has no email");
      return sendRedirect(event, "/error");
    }
    let currentUser = await db.user.findUnique({
      where: { email: githubEmail }
    });
    if (currentUser) {
      const updateData = {};
      if (!currentUser.name) updateData.name = githubName;
      if (!currentUser.avatarUrl) updateData.avatarUrl = githubAvatarUrl;
      if (Object.keys(updateData).length > 0) {
        currentUser = await db.user.update({
          where: { id: currentUser.id },
          data: updateData
        });
      }
    } else {
      currentUser = await db.user.create({
        data: {
          email: githubEmail,
          name: githubName,
          avatarUrl: githubAvatarUrl
        }
      });
    }
    const oAuthAccount = await db.oauthAccount.findFirst({
      where: { userId: currentUser.id }
    });
    if (!oAuthAccount) {
      await db.oauthAccount.create({
        data: {
          userId: currentUser.id,
          providerId: "github",
          providerUserId: String(user.id)
        }
      });
    }
    const transformedUser = sanitizeUser(currentUser);
    if (transformedUser) {
      await setUserSession(event, { user: transformedUser });
    }
    return sendRedirect(event, "/");
  },
  onError(event, error) {
    console.error("GitHub OAuth error:", error);
    return sendRedirect(event, "/");
  }
});

export { github as default };
//# sourceMappingURL=github.mjs.map
