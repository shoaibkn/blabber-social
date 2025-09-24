import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { HomeIcon } from "lucide-react";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  return (
    <main className="">
      <h1 className="text-3xl font-light">
        Welcome back, <span className="font-medium">Shoaib Khan</span>
      </h1>
      <div>
        {/* <MagicCard
            className="h-48 rounded-xl bg-white"
            gradientColor="#34d399"
            gradientOpacity={0.1}
            gradientFrom="#22c55e"
            gradientTo="#2dd4bf"
          ></MagicCard> */}
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
