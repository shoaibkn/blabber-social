import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const CreateAutomation = (props: Props) => {
  //create automation in the database using mutate
  return (
    <div>
      <Button>Create an Automation</Button>
    </div>
  );
};

export default CreateAutomation;
