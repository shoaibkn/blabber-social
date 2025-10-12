"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";

type Props = {
  automationId: string;
};

const ActivateAutomationButton = (props: Props) => {
  const { automationId } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    //make API call to check if automation is active
    // setIsActive(true or false based on response)
  }, []);
  const activateAutomation = () => {
    console.log("Activating automation with ID:", automationId);
  };

  return (
    <Button
      onClick={() => activateAutomation()}
      className="rounded-2xl"
      variant={"outline"}
    >
      Activate
    </Button>
  );
};

export default ActivateAutomationButton;
