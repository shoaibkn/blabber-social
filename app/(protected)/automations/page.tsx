"use client";
import { useSession } from "@/auth-client";
import AutomationCard from "@/components/global/automations/automation-card";
import CreateAutomationButton from "@/components/global/automations/createAutomationButton";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { automationsQuery } from "@/lib/queries/automations/automations";
import { mutationDataState } from "@/lib/queries/mutationData";
import { userQuery } from "@/lib/queries/user/user";
import { Keyword } from "@prisma/client";
import { useMutationState, useQueries, useQuery } from "@tanstack/react-query";
import { AudioWaveformIcon, CircleCheck, Sparkles } from "lucide-react";
import React, { useEffect } from "react";

type Props = {};

const Page = (props: Props) => {
  // const { data: session } = useSession();
  const results = useQueries({
    queries: [
      {
        ...userQuery,
        queryKey: ["user-profile"],
      },
      {
        ...automationsQuery,
        queryKey: ["automations"],
      },
    ],
  });

  const [userResult, automationsResult] = results;
  const userData = userResult.data;
  const automationsData = automationsResult.data;

  //WIP: Connect Real Automations List

  useEffect(() => {
    console.log("User Data:", userData);
    console.log("Automations Data:", automationsData);
    console.log("User Loading:", userResult.isLoading);
    console.log("Automations Loading:", automationsResult.isLoading);
  }, [
    userData,
    automationsData,
    userResult.isLoading,
    automationsResult.isLoading,
  ]);

  const { latestVariable } = mutationDataState(["create-automation"]);

  console.log(latestVariable);

  return (
    <main className="max-h-[calc(100dvh-360px)] flex flex-col gap-2">
      <h1 className="text-4xl">Automations</h1>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 ">
        <ScrollArea className="lg:col-span-5 md:h-[calc(100dvh-204px)] lg:h-[calc(100dvh-204px)] h-[calc(100dvh-480px)]">
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[calc(100dvh-164px)]">
            {automationsResult.isLoading && <div>Loading automations...</div>}
            {automationsResult.isFetched &&
            automationsData &&
            automationsData.length === 0 ? (
              <div className="flex flex-col gap-1 justify-center items-center mt-36 ">
                <span className="text-muted-foreground">No Automations</span>
                <CreateAutomationButton />
              </div>
            ) : (
              automationsData?.map((automation: any) => (
                <AutomationCard
                  link={`/automations/${automation.id}`}
                  action={automation.name}
                  trigger={automation.trigger.type}
                  tags={automation.Keyword.map((kw: Keyword) => kw.word)}
                  date={automation.createdAt}
                  isAi={automation.listener?.listener === "SMARTAI"}
                />
              ))
            )}
          </div>
        </ScrollArea>
        <ScrollArea className="lg:col-span-2 h-[calc(100dvh-204px)] flex flex-col">
          {/* @ts-ignore */}
          {userData?.Subscriptions.plan === "FREE" && (
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
