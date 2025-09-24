import { Card } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  return (
    <main className="">
      <h1 className="text-3xl font-light">
        Welcome back, <span className="font-medium">Shoaib Khan</span>
      </h1>
      <div>
        <MagicCard
          className="h-48 rounded-xl bg-white"
          gradientColor="#34d399"
          gradientOpacity={0.1}
          gradientFrom="#22c55e"
          gradientTo="#2dd4bf"
        ></MagicCard>
      </div>
    </main>
  );
};

export default Dashboard;
