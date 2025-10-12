"use client";
import { useSession } from "@/auth-client";
import AutomationCard from "@/components/global/automations/automation-card";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { userQuery } from "@/lib/queries/user/user";
import { useQuery } from "@tanstack/react-query";
import { AudioWaveformIcon, CircleCheck, Sparkles } from "lucide-react";
import React, { useEffect } from "react";

type Props = {};

const Page = (props: Props) => {
  // const { data: session } = useSession();
  const { data } = useQuery(userQuery);
  //WIP: Connect Real Automations List

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="max-h-[calc(100dvh-360px)] flex flex-col gap-2">
      <h1 className="text-4xl">Automations</h1>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 ">
        <ScrollArea className="lg:col-span-5 h-[calc(100dvh-204px)]">
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[calc(100dvh-164px)]">
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={[]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on story"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={true}
            />
            <AutomationCard
              action="Direct Traffic towards website"
              trigger="via reply on post"
              tags={["Yes", "Lets Go"]}
              date={new Date()}
              isAi={false}
            />
          </div>
        </ScrollArea>
        <ScrollArea className="lg:col-span-2 h-[calc(100dvh-204px)] flex flex-col">
          {/* <div className="flex flex-col rounded-xl gap-y-6 p-5 border-[1px] overflow-hidden border-in-active"></div> */}
          {/* @ts-ignore */}
          {data?.Subscriptions.plan === "FREE" && (
            <Card className="h-full bg-card p-4 mb-4 flex flex-col justify-between">
              <div className="flex flex-col gap-0">
                <CardTitle className="p-0">
                  <h1 className="font-medium text-3xl">Upgrade to Pro</h1>
                </CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    Focus on content creation and let us take care of the rest.
                  </p>
                </CardContent>
              </div>

              <div>
                <div className="flex flex-col gap-0 mb-8">
                  <AuroraText className="text-3xl font-bold">
                    Smart AI
                  </AuroraText>
                  <span>Rs. 1999/month</span>
                </div>
                <InteractiveHoverButton className="w-full h-12 flex flex-row justify-center">
                  <span className="flex flex-row justify-between w-full gap-4">
                    Upgrade <Sparkles />
                  </span>
                </InteractiveHoverButton>
              </div>
            </Card>
          )}
          <Card className="p-4">
            <CardTitle className="p-0 text-3xl font-normal flex flex-col">
              Automations
              <span className="text-base text-muted-foreground">
                All the live automations will show here.
              </span>
            </CardTitle>
            <CardContent className="p-0">
              <div className="flex flex-col gap-2">
                {[1, 2, 3].map((item, index) => (
                  <div
                    className="flex flex-row gap-2 items-center justify-between"
                    key={index}
                  >
                    <div className="flex flex-col">
                      <span className="">Direct traffic towards website</span>
                      <span className="text-sm text-muted-foreground">
                        26 September 2025
                      </span>
                    </div>

                    <CircleCheck />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-0 w-full">
              <Button className="h-12 rounded-xl px-12 mx-auto w-full">
                <AudioWaveformIcon />
                Create an Automation
              </Button>
            </CardFooter>
          </Card>
        </ScrollArea>
      </div>
    </main>
  );
};

export default Page;
