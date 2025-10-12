import { fetchUser } from "./queries";

export const userQuery = {
  queryKey: ["user"],
  queryFn: fetchUser,
};
