import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-light">
        Welcome back, <span className="font-medium">Shoaib Khan</span>
      </h1>
      <div className="gap-4 mt-12 flex flex-row flex-wrap justify-between w-full">
        <Card className="h-48 w-1/3 min-w-96"></Card>
        <Card className="h-48 w-1/3 min-w-96"></Card>
        <Card className="h-48 w-1/3 min-w-96"></Card>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl">Lorem Ipsum</h1>
        <div className="grid grid-cols-4 gap-4">
          <Card className="h-96 col-span-3"></Card>
          <Card className="h-96 col-span-1"></Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
