import { authClient } from "@/auth-client";

export const fetchAutomations = async () => {
  const { data: session } = await authClient.getSession();
  if (!session?.user?.id) return null;
  const response = await fetch(`/api/automations?userId=${session.user.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const createAutomations = async () => {
  return null;
};
