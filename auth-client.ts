import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth.ts";
import {
  inferAdditionalFields,
  passkeyClient,
} from "better-auth/client/plugins";
import { redirect } from "next/navigation.js";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // or use relative like "/" if deployed
  plugins: [inferAdditionalFields<typeof auth>(), passkeyClient()],
});

export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
};

export const signOutUser = async () => {
  const data = await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/");
      },
    },
  });
};

export const { signIn, signUp, useSession, signOut } = createAuthClient();
