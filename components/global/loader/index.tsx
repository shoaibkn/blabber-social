import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = () => {
  return (
    <div className="w-screen h-screen mx-auto flex flex-col gap-4 justify-center items-center">
      <h1>Loading your Data</h1>
      <LoaderCircle className="animate-spin mx-auto" />
    </div>
  );
};

export default Loader;
