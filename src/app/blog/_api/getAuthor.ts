import { User } from "@/types/user";
import { cache } from "react";

export const getAuthorByObjectId = cache(async (objectId: string) => {
  const response = await fetch(
    `https://popularflower-us.backendless.app/api/data/Users/${objectId}'`
  );
  const user: User[] = await response.json();

  return user[0];
});
