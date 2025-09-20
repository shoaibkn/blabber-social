"use client";
import { PlanPricing } from "@/components/plans-pricing";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/ui/magic-card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import React, { useState } from "react";

const PLANS = [
  {
    title: "Free",
    for: "For Personal User",
    description:
      "Get started with basic automation tools to boost engagement and streamline interactions.",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Boost Engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
      "Automated Direct Messages (basic templates)",
      "Post reply automation (up to 50 replies/day)",
      "Limited access to dashboard (last 7 days activity)",
      "Community support",
    ],
  },
  {
    title: "PRO",
    for: "For Creators and Influencers",
    description:
      "Powerful AI-driven tools for smarter automation, audience insights, and real-time chat control.",
    price: { monthly: 1999, yearly: 19999 },
    features: [
      "All features in Free Plan",
      "AI-Powered response generation for DMs and comments",
      "Take over chat anytime (Manual Override)",
      "Real-time Monitoring Dashboard",
      "Advanced analytics and insights",
      "Priority access to new integrations",
      "Priority customer support (24/7 chat)",
      "Custom branding options (logo, color themes)",
      "Up to 5,000 AI-generated replies/month",
      "Multi-account management (up to 5 social profiles)",
      "Team collaboration tools (up to 3 team members)",
    ],
  },
  {
    title: "Enterprise",
    for: "For Brands and Businesses",
    description:
      "Scalable automation and AI tailored for large teams, agencies, and growing brands.",
    price: { monthly: "Custom", yearly: "Custom" },
    features: [
      "All features in Smart AI Plan",
      "Unlimited AI-generated replies (fair usage policy applies)",
      "Dedicated Account Manager",
      "Custom integration support (API access, CRM, etc.)",
      "Role-based access for teams",
      "Audit logs and compliance tools",
      "Unlimited team members",
      "Multi-brand and region support",
      "Early access to beta features",
      "SLA-backed uptime guarantee",
      "Onboarding & training sessions",
      "Private Slack channel for support",
    ],
  },
];

const Plans = () => {
  const [isAnnually, setIsAnnually] = useState<boolean>(false);
  return (
    <main className="p-4">
      <div className="flex flex-row justify-between mb-12">
        <h1 className="text-4xl">Plans</h1>
        <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
          <RadioGroup
            defaultValue="monthly"
            className="h-full grid-cols-2"
            onValueChange={(value) => {
              setIsAnnually(value === "annually");
            }}
          >
            <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
              <RadioGroupItem
                value="monthly"
                id="monthly"
                className="peer sr-only"
              />
              <Label
                htmlFor="monthly"
                className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
              >
                Monthly
              </Label>
            </div>
            <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
              <RadioGroupItem
                value="annually"
                id="annually"
                className="peer sr-only"
              />
              <Label
                htmlFor="annually"
                className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
              >
                Yearly
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-6 w-full md:w-2/3 lg:w-2/3 mx-auto">
        <MagicCard
          className="rounded-md w-full md:w-1/2 lg:w-1/2"
          gradientColor="#34d399"
          gradientOpacity={0.1}
          gradientFrom="#22c55e"
          gradientTo="#2dd4bf"
        >
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <Badge className="text-sm" variant="secondary">
                {PLANS[0].title}
              </Badge>
              <div className="flex flex-col gap-2 my-2 pb-6">
                <div className="flex flex-col">
                  <h1 className="text-5xl">Downgrade Plan</h1>
                  <span className="text-sm text-muted-foreground">
                    {PLANS[0].for}
                  </span>
                </div>
                <h1 className="text-5xl">
                  ₹
                  {isAnnually
                    ? (PLANS[0].price.yearly as number) / 12
                    : PLANS[0].price.monthly}
                  /<span className="text-base">month</span>
                </h1>
              </div>

              <Separator />
            </div>
            <ul className="flex flex-col gap-4 my-4 h-full items-start">
              {PLANS[0].features.map((feature: string) => (
                <li className="flex flex-row gap-2">
                  <CheckCircle2Icon strokeWidth={1.5} /> {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="outline">
              Downgrade Plan
            </Button>
          </div>
        </MagicCard>
        <MagicCard
          className="rounded-md w-full md:w-1/2 lg:w-1/2"
          gradientColor="#34d399"
          gradientOpacity={0.1}
          gradientFrom="#22c55e"
          gradientTo="#2dd4bf"
        >
          <ShineBorder
            shineColor="#34d399"
            borderWidth={4}
            duration={10}
            className="rounded-md w-full h-full"
          />
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <Badge className="text-sm">{PLANS[1].title}</Badge>
              <div className="flex flex-col gap-2 my-2 pb-6">
                <div className="flex flex-col">
                  <AuroraText className="text-5xl font-bold">
                    Smart AI
                  </AuroraText>
                  <span className="text-sm text-muted-foreground">
                    {PLANS[1].for}
                  </span>
                </div>
                <h1 className="text-5xl">
                  ₹
                  {isAnnually
                    ? Math.round((PLANS[1].price.yearly as number) / 12)
                    : PLANS[1].price.monthly}
                  /<span className="text-base">month</span>
                </h1>
              </div>

              <Separator />
            </div>
            <ul className="flex flex-col gap-4 my-4 h-full items-start">
              {PLANS[1].features.map((feature: string) => (
                <li className="flex flex-row gap-2">
                  <CheckCircle2Icon strokeWidth={1.5} /> {feature}
                </li>
              ))}
            </ul>
            <Button disabled className="w-full" variant="outline">
              Your current plan
            </Button>
          </div>
        </MagicCard>
      </div>
      <MagicCard
        className="rounded-md md:w-2/3 lg:w-2/3 w-full mx-auto mt-6"
        gradientColor="#34d399"
        gradientOpacity={0.1}
        gradientFrom="#22c55e"
        gradientTo="#2dd4bf"
      >
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <Badge className="text-sm">{PLANS[2].title}</Badge>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex flex-col">
                <h1 className="text-5xl">Switch to Enterprise Plan</h1>
                <span className="text-sm text-muted-foreground">
                  {PLANS[2].for}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-end">
              <Button size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </MagicCard>
    </main>
  );
};

export default Plans;
