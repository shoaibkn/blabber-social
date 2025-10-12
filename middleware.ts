import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/auth";
import { client } from "./lib/prisma";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (session) {
    // console.log("session from middleware", session);
    const user = await client.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        Integrations: true,
        Automations: true,
      },
    });
  }
  if (session?.user?.id) {
    await refreshInstagramToken(session.user.id);
  }
  return NextResponse.next();
}

const refreshInstagramToken = async (userId: string) => {
  const instagramToken = await client.integrations.findFirst({
    where: {
      userId,
      name: "INSTAGRAM",
    },
  });
  if (!instagramToken) return;
  const today = new Date();
  const time_left = instagramToken.expiresAt.getTime() - today.getTime();
  const days = Math.round(time_left / (1000 * 60 * 60 * 24));
  if (days < 5) {
    console.log("refreshing token");
    const refresh = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${instagramToken.token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: instagramToken.token }),
      }
    );

    if (!refresh.ok) {
      throw new Error("Failed to refresh token");
    }

    const refreshedToken = await refresh.json();

    console.log("refresh", refreshedToken);
    const expire_date = today.setDate(today.getDate() + 60); // 60 days
    const updated = await client.integrations.update({
      where: {
        id: instagramToken.id,
      },
      data: {
        token: refreshedToken.access_token,
        expiresAt: new Date(expire_date),
      },
    });
    console.log("updated", updated);
    if (!updated) {
      console.log("unable to update token");
    }
  }
};

export const config = {
  runtime: "nodejs",
  matcher: ["/dashboard", "/automations", "/integrations"], // Apply middleware to specific routes
};
