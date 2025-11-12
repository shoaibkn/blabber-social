"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  BadgeQuestionMarkIcon,
  CheckCircle2,
  CheckCircle2Icon,
  EditIcon,
  LineSquiggle,
  PlayCircleIcon,
  PlayIcon,
  PlusCircleIcon,
  RedoIcon,
  UndoIcon,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { AutomationCardBadge } from "@/components/global/automations/automation-card-badge";
import RemovableBadge from "@/components/removableBadge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { set } from "better-auth";
import ActivateAutomationButton from "@/components/global/automations/activateAutomationButton";
// If you are using Radix UI, uncomment the next line:
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Or define a simple VisuallyHidden component:
const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span
    style={{
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0,0,0,0)",
      whiteSpace: "nowrap",
      border: 0,
    }}
  >
    {children}
  </span>
);

type Props = {
  params: { slug: string };
};

const AutomationPage = ({ params }: Props) => {
  const [automationName, setAutomationName] = useState("New Automation");
  const [toggleAutomationNameEdit, setToggleAutomationNameEdit] =
    useState(false);
  const [storyBadges, setStoryBadges] = useState<string[]>([
    "Yes",
    "Let's Go",
    "Interested",
    "Where do I start?",
  ]);
  const [postBadges, setPostBadges] = useState<string[]>([
    "Yes",
    "Let's Go",
    "Interested",
    "Where do I start?",
  ]);

  const [automationSelection, setAutomationSelection] = useState<
    "standard" | "smartAI" | null
  >(null);

  const [automationMessage, setAutomationMessage] = useState<string>("");

  const updateAutomationName = (name: string) => {
    return (
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button size="icon" variant="ghost">
              <EditIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-4 flex flex-row justify-between gap-4 items-center">
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>Edit Automation Name</DialogTitle>
                <DialogDescription>
                  Make changes to your automation name here. Click save when
                  you&apos;re done.
                </DialogDescription>
              </DialogHeader>
            </VisuallyHidden>
            <Input
              id="automationName"
              name="automationName"
              onChange={(e) => setAutomationName(e.target.value)}
              defaultValue={automationName}
            />
          </DialogContent>
        </form>
      </Dialog>
    );
  };

  const createAutomationDialog = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="mt-8 border-dashed border-2 w-full h-12"
          >
            <PlusCircleIcon /> Then
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-xl rounded-2xl bg-sidebar"
          align="end"
        >
          <DropdownMenuGroup className="p-0">
            <DropdownMenuItem
              onClick={(ev) => {
                setAutomationSelection("standard");
                ev.preventDefault();
              }}
              className="bg-primary/60 h-full max-h-48 border-2 p-4 rounded-xl m-2 flex flex-row justify-between items-center"
            >
              <span className="flex flex-col gap-2 justify-start items-start">
                <div className="flex flex-row gap-2 items-center">
                  <PlayIcon />
                  <h3 className="text-lg">User will be sent the message</h3>
                </div>
                <p className="text-muted-foreground">
                  Enter the message you went the send the user on trigger
                </p>
              </span>
              {automationSelection === "standard" && (
                <CheckCircle2 width={48} height={48} />
              )}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={(ev) => {
                setAutomationSelection("smartAI");
                ev.preventDefault();
              }}
              className="bg-primary/60 h-full max-h-48 border-2 p-4 rounded-xl m-2 flex flex-row justify-between items-center"
            >
              <span className="flex flex-col gap-2 justify-start items-start">
                <div className="flex flex-row gap-2 items-center">
                  <PlayIcon />
                  <h3 className="text-lg">Let Smart AI take over</h3>
                </div>
                <p className="text-muted-foreground">
                  Tell AI about your project and let it handle the rest (Upgrade
                  to SmartAI or Enterprise plan to use this feature)
                </p>
              </span>
              {automationSelection === "smartAI" && (
                <CheckCircle2 width={48} height={48} />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="h-full max-h-48 p-0 rounded-xl m-2 flex flex-row justify-between items-center"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              <Textarea
                value={automationMessage}
                disabled={automationSelection === null}
                placeholder={
                  automationSelection === "standard"
                    ? "Enter the message you want to send the user on trigger"
                    : automationSelection === "smartAI"
                      ? "Describe your project and what you want the AI to do for you. Be as detailed as possible."
                      : "Select an automation type to proceed"
                }
                className="h-32 resize-none rounded-xl bg-primary/20 p-4 w-full"
                onChange={(ev) => setAutomationMessage(ev.target.value)}
              ></Textarea>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup className="flex flex-row justify-end gap-2 m-2">
            <Button className="rounded-xl">Continue</Button>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const addBadge = (type: "story" | "post") => {
    const [badgeValue, setBadgeValue] = useState("");
    const addValue = () => {
      const value = prompt("Enter badge value");
      if (!value || value.trim() === "") return;
      if (type === "story") {
        setStoryBadges([...storyBadges, value]);
      } else {
        setPostBadges([...postBadges, value]);
      }
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
    <main className="flex flex-col">
      <section className="col-span-4">
        <span className="flex flex-row items-center justify-between mb-4 gap-2">
          <span className="flex flex-row items-end ">
            {!toggleAutomationNameEdit && (
              <h1 className="text-4xl">{automationName}</h1>
            )}
            {updateAutomationName(automationName)}
          </span>
          <span className="flex flex-row gap-2 mb-1">
            <Button size={"icon"} variant={"ghost"} className="rounded-full">
              <UndoIcon />
            </Button>
            <Button size={"icon"} variant={"ghost"} className="rounded-full">
              <RedoIcon />
            </Button>
            <ActivateAutomationButton automationId={"1"} />
          </span>
        </span>
        <Card className="p-4 bg-sidebar/80 max-w-4xl mx-auto">
          <CardContent className="p-0">
            <CardTitle className="flex flex-row items-center gap-2 mb-2">
              <BadgeQuestionMarkIcon />
              <h1 className="text-xl font-normal">When...</h1>
            </CardTitle>
            <Card className="p-4 bg-accent/40 gap-2">
              <CardTitle className="flex flex-row items-center gap-2 p-0">
                <BadgeQuestionMarkIcon />
                <h1 className="text-lg font-normal">
                  User Comments on My Post
                </h1>
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
                            const newBadges = postBadges.filter(
                              (b) => b !== badge
                            );
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
            <h3 className="w-full mx-auto text-center my-4 text-sm text-muted-foreground">
              Or
            </h3>
            <Card className="p-4 bg-accent/40 gap-2">
              <CardTitle className="flex flex-row items-center gap-2 p-0">
                <PlayCircleIcon />
                <h1 className="text-lg font-normal">Replies to my story</h1>
              </CardTitle>
              <CardContent className="p-0 m-0">
                <p className="text-sm text-muted-foreground">
                  Asking about where to get started or how should they proceed
                </p>
                {storyBadges.length > 0 && (
                  <div className="flex flex-row justify-between mt-2 ">
                    <span className="flex flex-row flex-wrap gap-2">
                      {storyBadges.map((badge, index) => (
                        <RemovableBadge
                          key={index}
                          value={badge}
                          onRemove={() => {
                            const newBadges = storyBadges.filter(
                              (b) => b !== badge
                            );
                            setStoryBadges(newBadges);
                          }}
                        />
                      ))}
                    </span>
                    {addBadge("story")}
                  </div>
                )}
              </CardContent>
            </Card>
            {createAutomationDialog()}
          </CardContent>
        </Card>
      </section>
      <aside className="col-span-2"></aside>
    </main>
  );
};

export default AutomationPage;
