import React from "react";
import { Button } from "./ui/button";
import { BellIcon } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  notificationCount: number;
};

const Notifications = ({ notificationCount }: Props) => {
  return (
    <div>
      <Button size="icon" variant="outline" className="rounded-full">
        <BellIcon />
      </Button>
      {notificationCount > 0 && (
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums fixed right-2 top-10 "
          variant="default"
        >
          {notificationCount}
        </Badge>
      )}
    </div>
  );
};

export default Notifications;
