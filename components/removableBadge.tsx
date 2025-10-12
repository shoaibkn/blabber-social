import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

type Props = {
  value: string;
  onRemove: () => void;
};

const RemovableBadge = ({ value, onRemove }: Props) => {
  return (
    <Badge className="px-4 py-0 flex flex-row gap-1 items-center rounded-full">
      {value}
      <Button className="p-0" size={"icon"} onClick={() => onRemove()}>
        <XIcon width={4} height={4} />
      </Button>
    </Badge>
  );
};

export default RemovableBadge;
