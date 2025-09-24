"use client";

import * as React from "react";
import {
  AudioWaveformIcon,
  BlocksIcon,
  BookOpen,
  Bot,
  Command,
  ContactIcon,
  Frame,
  HomeIcon,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SettingsIcon,
  Sparkles,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { AuroraText } from "./ui/aurora-text";
import { Button } from "./ui/button";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
      isActive: true,
      items: [
        // {
        //   title: "History",
        //   url: "#",
        // },
        // {
        //   title: "Starred",
        //   url: "#",
        // },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Contacts",
      url: "/contacts",
      icon: ContactIcon,
      items: [
        // {
        //   title: "Genesis",
        //   url: "#",
        // },
        // {
        //   title: "Explorer",
        //   url: "#",
        // },
        // {
        //   title: "Quantum",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Automations",
      url: "/automations",
      icon: AudioWaveformIcon,
      items: [
        // {
        //   title: "Introduction",
        //   url: "#",
        // },
        // {
        //   title: "Get Started",
        //   url: "#",
        // },
        // {
        //   title: "Tutorials",
        //   url: "#",
        // },
        // {
        //   title: "Changelog",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Integration",
      url: "/integrations",
      icon: BlocksIcon,
      items: [
        // {
        //   title: "General",
        //   url: "#",
        // },
        // {
        //   title: "Team",
        //   url: "#",
        // },
        // {
        //   title: "Billing",
        //   url: "#",
        // },
        // {
        //   title: "Limits",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
      items: [
        // {
        //   title: "General",
        //   url: "#",
        // },
        // {
        //   title: "Team",
        //   url: "#",
        // },
        // {
        //   title: "Billing",
        //   url: "#",
        // },
        // {
        //   title: "Limits",
        //   url: "#",
        // },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Blabber Social</span>
                  <span className="truncate text-xs">Free</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <Separator className="opacity-50" />
        <NavSecondary items={data.navSecondary} className="" />
        <Card className="h-full bg-card m-2 p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <CardTitle className="p-0">
              <h1 className="font-medium text-2xl">
                Upgrade to{" "}
                <AuroraText className="text-3xl">Smart AI</AuroraText>
              </h1>
            </CardTitle>
            <CardContent className="p-0">
              <p>Lorem ipsum doler salamat</p>
            </CardContent>
          </div>

          <div>
            <InteractiveHoverButton className="w-full">
              <span className="flex flex-row justify-between w-full gap-4">
                Upgrade <Sparkles />
              </span>
            </InteractiveHoverButton>
          </div>
        </Card>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
