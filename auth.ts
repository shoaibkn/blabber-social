import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { passkey } from "better-auth/plugins/passkey";
import { nextCookies } from "better-auth/next-js";
import { betterAuth } from "better-auth";
import { customSession } from "better-auth/plugins";

const client = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(client, {
    provider: "postgresql",
  }),
  appName: "blabber-social",
  plugins: [
    passkey(),
    nextCookies(),
    customSession(async ({ user, session }) => {
      const plan = await client.subscription.findUnique({
        where: { userId: user.id },
        select: { plan: true },
      });
      return {
        user: {
          ...user,
          plan,
        },
        session,
      };
    }),
  ],
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // redirectURI: "/dashboard",
    },
  },
  user: {
    additionalFields: {
      plan: {
        type: "string",
        required: true,
        defaultValue: "Free",
        input: false, // don't allow user to set role
      },
    },
  },
});
