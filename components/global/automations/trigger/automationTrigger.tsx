"use client";
import RemovableBadge from "@/components/removableBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { BadgeQuestionMarkIcon, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const AutomationTrigger = (props: Props) => {
  const [postBadges, setPostBadges] = useState<string[]>([
    "Yes",
    "Let's Go",
    "Interested",
    "Where do I start?",
  ]);

  const addBadge = () => {
    const [badgeValue, setBadgeValue] = useState("");
    const addValue = () => {
      const value = prompt("Enter badge value");
      if (!value || value.trim() === "") return;
      setPostBadges([...postBadges, value]);
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost">
            <PlusCircleIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="max-w-md rounded-2xl bg-sidebar"
          align="end"
        >
          <DropdownMenuGroup className="p-2 ">
            <form
              className="flex flex-row gap-2"
              onSubmit={(e) => {
                if (type === "story") {
                  setStoryBadges([...storyBadges, badgeValue]);
                } else {
                  setPostBadges([...postBadges, badgeValue]);
                }
                setBadgeValue("");
                e.preventDefault();
              }}
            >
              <Input
                type="string"
                placeholder="Enter text"
                className="bg-primary-foreground"
                value={badgeValue}
                onChange={(e) => setBadgeValue(e.target.value)}
              />
              <Button type="submit">Add</Button>
            </form>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <Card className="p-4 bg-accent/40 gap-2">
      <CardTitle className="flex flex-row items-center gap-2 p-0">
        <BadgeQuestionMarkIcon />
        <h1 className="text-lg font-normal">User Comments on My Post</h1>
      </CardTitle>
      <CardContent className="p-0 m-0">
        <p className="text-sm text-muted-foreground">
          Asking about where to get started or how should they proceed
        </p>
        {postBadges.length > 0 && (
          <div className="flex flex-row justify-between mt-2 ">
            <span className="flex flex-row flex-wrap gap-2">
              {postBadges.map((badge, index) => (
                <RemovableBadge
                  key={index}
                  value={badge}
                  onRemove={() => {
                    const newBadges = postBadges.filter((b) => b !== badge);
                    setPostBadges(newBadges);
                  }}
                />
              ))}
            </span>
            {addBadge("post")}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AutomationTrigger;
