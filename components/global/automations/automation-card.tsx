import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { BorderBeam } from "../../ui/border-beam";
import { AutomationCardBadge } from "./automation-card-badge";
import { CircleDotIcon } from "lucide-react";
import { cn, getMonth } from "@/lib/utils";
import Link from "next/link";

type Props = {
  action: string;
  trigger: string;
  tags: string[];
  date: Date;
  isAi: boolean;
  link: string;
};

const AutomationCard = ({ action, trigger, tags, date, isAi, link }: Props) => {
  return (
    <Link href={link}>
      <Card className="p-4 flex flex-row justify-between">
        <CardContent className="p-0 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-lg">{action}</h1>
            <p className="text-sm text-muted-foreground">{trigger}</p>
          </div>
          <div className="flex flex-row gap-2">
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <Badge
                  key={index}
                  className={cn(
                    "rounded-full p-2 min-w-12 ",
                    (0 + 1) % 1 == 0 &&
                      "bg-green-200 border-2 border-green-400",
                    (1 + 1) % 2 == 0 &&
                      "bg-purple-200 border-2 border-purple-400",
                    (2 + 1) % 3 == 0 &&
                      "bg-yellow-200 border-2 border-yellow-400",
                    (3 + 1) % 4 == 0 && "bg-red-200 border-2 border-red-400"
                  )}
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-muted-foreground p-2 border-dashed border-2 rounded-full">
                No Tags
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-0 flex flex-col justify-between items-end">
          <span className="text-muted-foreground text-sm">
            {/* {date.toUTCString()} */}
            {getMonth(date.getMonth() + 1)} {date.getDate()},{" "}
            {date.getFullYear()}
          </span>
          {isAi ? (
            <AutomationCardBadge href="#" isAi={true} />
          ) : (
            <Card className="relative p-2 overflow-hidden">
              <span className="flex flex-row gap-2 items-center">
                <CircleDotIcon width={16} height={16} />
                Standard
              </span>
            </Card>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AutomationCard;
