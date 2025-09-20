"use client";
import { signInWithGoogle } from "@/auth-client";
// import { signIn } from "@/auth-client";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Command } from "lucide-react";

import React from "react";

const LoginPage = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row lg:flex-row w-full h-screen">
      <div className="z-10 w-full min-w-[400px] md:w-1/4 lg:w-1/4 h-1/2 md:h-screen lg:h-screen bg-accent flex flex-col justify-between items-center gap-4 p-8">
        <div className="w-full flex flex-row justify-between">
          <div className="">
            <h1 className="text-3xl">Blabber Social</h1>
          </div>
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-12 items-center justify-center rounded-lg">
            <Command className="size-4" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-serif text-4xl">Login/Signup to your account</h1>
          {/* <Button size="lg" className="w-full">
          Login with Google
        </Button> */}
          <InteractiveHoverButton
            className="w-full"
            onClick={() => signInWithGoogle()}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Login with Google
            </div>
          </InteractiveHoverButton>
        </div>
        <p className="text-sm text-muted-foreground">
          You agree to the terms and service when creating an account on our
          platform.
        </p>
      </div>
      <div className="w-full md:w-3/4 lg:w-3/4 h-screen">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#34d399"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>
    </main>
  );
};

export default LoginPage;
