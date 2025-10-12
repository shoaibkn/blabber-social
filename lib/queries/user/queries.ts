import { authClient } from "@/auth-client";

export async function fetchUser() {
  const { data: session } = await authClient.getSession();
  if (!session?.user?.id) return null;
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: session.user.id }),
  });
  const data = await response.json();
  console.log(data);
  return data;
}
