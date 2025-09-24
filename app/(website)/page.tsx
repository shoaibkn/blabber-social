import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="mx-auto w-screen h-screen flex flex-row gap-12">
      <Link href="/dashboard">
        <Button variant="secondary">Go to Dashboard</Button>
      </Link>
      <Link href="/login">
        <Button>Go to Login</Button>
      </Link>
      <AnimatedThemeToggler />
    </div>
  );
};

export default HomePage;
