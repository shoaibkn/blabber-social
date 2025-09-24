"use client";
import { useSession } from "@/auth-client";
import { AppSidebar } from "@/components/app-sidebar";
import Breadcrumbs from "@/components/breadcrumbs";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Separator } from "@/components/ui/separator";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PlayCircleIcon, SearchIcon } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import path from "path";
import { useEffect } from "react";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const { data: session } = useSession();

  if (pathName === "/login") {
    if (session) {
      redirect("/");
    }
    return <>{children}</>;
  }

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header for MD Screens */}
        <header className="hidden md:block sticky top-0  shrink-0 items-center pb-4 gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 z-20 backdrop-blur-xl rounded-lg">
          <div className="p-4 flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap gap-4 items-center">
            <SidebarTrigger className="-ml-1 w-10 h-10" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Input
              type="search"
              className="rounded-xl h-10 sm:w-full"
              placeholder="Search by contacts, automations or integrations"
            />
            <Button className="h-10 rounded-4xl px-12">
              Create an Automation
            </Button>
            <Button
              size="icon"
              className="h-10 w-10 rounded-full"
              variant="outline"
            >
              <PlayCircleIcon width={12} height={12} />
            </Button>
          </div>
          <div className="flex flex-row justify-between px-4 ">
            <div className="flex items-center gap-2 h-4">
              <Breadcrumbs />
            </div>
            <AnimatedThemeToggler />
          </div>
        </header>
        {/* Header for Mobiles */}
        <header className=" md:hidden sticky top-0  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 z-20 backdrop-blur-xl rounded-lg">
          <div className="flex flex-row items-center gap-2 px-6 h-16">
            <SidebarTrigger className="-ml-1 w-10 h-10" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumbs />
          </div>
          <AnimatedThemeToggler />
        </header>
        <section className="p-4">{children}</section>
      </SidebarInset>
    </SidebarProvider>
  );
}
