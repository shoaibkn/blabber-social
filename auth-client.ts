import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth.ts";
import {
  inferAdditionalFields,
  passkeyClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // or use relative like "/" if deployed
  plugins: [inferAdditionalFields<typeof auth>(), passkeyClient()],
});

// export const signInWithGoogle = await

// export const {signIn}  authClient;

export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

export const { signIn, signUp, useSession } = createAuthClient();
