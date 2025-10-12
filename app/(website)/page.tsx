import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex mx-auto w-screen h-screen flex-row gap-12 p-48">
      <Button variant="secondary" asChild>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>

      <Button>
        <Link href="/login">Go to Login</Link>
      </Button>

      <AnimatedThemeToggler />
    </div>
  );
};

export default HomePage;
