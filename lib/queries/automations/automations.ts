import { mutationData } from "../mutationData";
import { createAutomations, fetchAutomations } from "./queries";

export const automationsQuery = {
  queryKey: ["automations"],
  queryFn: fetchAutomations,
};

export const createAutomation = () => {
  const { mutate, isPending } = mutationData(
    ["create-automation"],
    () => createAutomations(),
    "user-automations"
  );

  return { mutate, isPending };
};
