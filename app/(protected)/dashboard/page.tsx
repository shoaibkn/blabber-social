"use client";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { userQuery } from "@/lib/queries/user/user";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { HomeIcon } from "lucide-react";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const { data, isLoading, error } = useSuspenseQuery(userQuery);
  return (
    <main className="">
      <h1 className="text-3xl font-light">
        Welcome back, <span className="font-medium">{data?.name}</span>
      </h1>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 h-48 bg-linear-to-br/shorter from-primary to-sidebar-primary-foreground">
            <CardTitle></CardTitle>
            <CardFooter className="p-0 flex justify-end w-full">
              <HomeIcon
                className="opacity-50 relative"
                width={96}
                height={96}
                color="white"
              />
            </CardFooter>
          </Card>
          <Card className="p-4 h-48 bg-linear-to-br/shorter from-primary to-sidebar-primary-foreground">
            <CardFooter className="p-0 flex justify-end w-full">
              <HomeIcon
                className="opacity-50 relative top-16"
                width={96}
                height={96}
                color="white"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
