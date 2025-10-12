export const refreshToken = async (token: string) => {
  const refresh_token = await fetch(
    `${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }
  );

  if (!refresh_token.ok) {
    throw new Error("Failed to refresh token");
  }

  return refresh_token.json();
};
