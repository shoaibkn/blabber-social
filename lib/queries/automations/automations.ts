import { fetchAutomations } from "./queries";

export const automationsQuery = {
  queryKey: ["automations"],
  queryFn: fetchAutomations,
};
