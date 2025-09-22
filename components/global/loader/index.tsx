import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({ children, state, className, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <LoaderCircle color={color} />
    </div>
  ) : (
    { children }
  );
};

export default Loader;
