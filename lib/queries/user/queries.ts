// import { authClient } from "@/auth-client";

import { stackServerApp } from "@/stack/server";

export async function fetchUser() {
  // const { data: session } = await authClient.getSession();
  const user = await stackServerApp.getUser();
  if (!user?.id) return null;
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: user.id }),
  });
  const data = await response.json();
  console.log(data);
  return data;
}
