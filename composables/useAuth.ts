// composables/useAuth.ts
export const useAuth = () => {
  const user = useUser();

  const signOut = async ({ callbackUrl }: { callbackUrl: string }) => {
    user.value = null;
    // ถ้าคุณมีการลบ session/cookie/token ควรทำตรงนี้
    await navigateTo(callbackUrl);
  };

  return {
    user,
    signOut,
  };
};
