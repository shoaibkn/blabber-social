import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { HomeIcon, LinkIcon } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM" | "WHATSAPP";
};

const IntegrationCard = ({ title, description, icon, strategy }: Props) => {
  //WIP : wire up fetching data and get data from DB
  return (
    <Card className="p-4 bg-sidebar-accent flex flex-row items-center">
      {icon}
      <div className="flex flex-col w-full">
        <CardTitle className="p-0 w-full">{title}</CardTitle>
        <CardContent className="p-0 text-base text-muted-foreground w-full">
          {description}
        </CardContent>
      </div>
      <CardFooter className="p-0 flex justify-end w-full">
        <Button
        // onClick={onInstaAuth}
        // disabled={integrated?.name === strategy}
        >
          {/* {integrated ? "Connected" : "Connect"} */}
          <LinkIcon />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IntegrationCard;
