"use client";
import { useSession } from "@/auth-client";
import { AppSidebar } from "@/components/app-sidebar";
import Breadcrumbs from "@/components/breadcrumbs";
import Loader from "@/components/global/loader";
import Notifications from "@/components/notifications";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserContext, { useUser } from "@/context/UserContext";
import { queryClient } from "@/lib/query";
import { User } from "@prisma/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { AudioWaveformIcon, PlayCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const { user, setUser } = useUser();
  if (!session) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider className="max-h-screen">
        <AppSidebar />
        <SidebarInset>
          {/* Header for MD Screens */}
          <header className="hidden md:block sticky top-0  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 z-20 backdrop-blur-xl rounded-lg">
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
              <Button className="h-10 rounded-xl px-12">
                <AudioWaveformIcon />
                Create an Automation
              </Button>
              <Notifications notificationCount={8} />
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
