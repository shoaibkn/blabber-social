"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useIsMobile } from "@/hooks/use-mobile";
import { AudioWaveformIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  isLoading?: boolean;
};

function CreateAutomationButton({ isLoading }: Props) {
  const isMobile = useIsMobile();
  return (
    <Link href={"/automations/new"} className="">
      <Button size={"default"} className="h-10 rounded-full  cursor-pointer">
        {isLoading && <Spinner className="mr-2" />}
        <AudioWaveformIcon />
        <span className="">Create Automation</span>
      </Button>
    </Link>
  );
}

export default CreateAutomationButton;
