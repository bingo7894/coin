import db from "~/utils/db";
import { sanitizeUser } from "~/server/utils/auth";

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
    scope: ["read:user", "user:email"],
  },
  async onSuccess(event, { user }) {
    console.log("Full GitHub user object:", JSON.stringify(user, null, 2));

    const githubName = user.name ?? user.login ?? "No Name";
    const githubAvatarUrl = user.avatar_url ?? "";

    const githubEmail = user.email ?? undefined;

    if (!githubEmail) {
      console.error("GitHub user has no email");
      return sendRedirect(event, "/error");
    }

    let currentUser = await db.user.findUnique({
      where: { email: githubEmail },
    });

    if (currentUser) {
      const updateData: any = {};
      if (!currentUser.name) updateData.name = githubName;
      if (!currentUser.avatarUrl) updateData.avatarUrl = githubAvatarUrl;

      if (Object.keys(updateData).length > 0) {
        currentUser = await db.user.update({
          where: { id: currentUser.id },
          data: updateData,
        });
      }
    } else {
      currentUser = await db.user.create({
        data: {
          email: githubEmail,
          name: githubName,
          avatarUrl: githubAvatarUrl,
        },
      });
    }

    const oAuthAccount = await db.oauthAccount.findFirst({
      where: { userId: currentUser.id },
    });

    if (!oAuthAccount) {
      await db.oauthAccount.create({
        data: {
          userId: currentUser.id,
          providerId: "github",
          providerUserId: String(user.id),
        },
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
  },
});
