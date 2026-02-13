import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function requireUserId() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/unauthorized"); 
  }

  return userId;
}

export async function requireAdmin() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/unauthorized");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const role = user.publicMetadata?.role;

  if (role !== "admin") {
    redirect("/forbidden");
  }

  return userId;
}
