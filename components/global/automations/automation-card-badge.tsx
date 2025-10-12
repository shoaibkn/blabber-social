import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "../../ui/shine-border";
import { AuroraText } from "../../ui/aurora-text";
import { BrainCircuitIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  isAi: boolean;
  href?: string;
};

export function AutomationCardBadge({ children, isAi, href }: Props) {
  return (
    <Card className="relative p-0 overflow-hidden">
      {isAi && (
        <ShineBorder
          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          borderWidth={2}
        />
      )}
      <Link href={href && href.length > 0 ? href : "#"}>
        <Button
          className="flex flex-row gap-2 items-center cursor-pointer"
          variant="ghost"
        >
          {isAi && (
            <>
              <BrainCircuitIcon width={16} height={16} />
              <AuroraText>Smart Ai</AuroraText>
            </>
          )}
          {!isAi && <span>Standard</span>}
        </Button>
      </Link>
    </Card>
  );
}
