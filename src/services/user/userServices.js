"use server";

import { prisma } from "../../lib/prisma.js";
import { requireUserId } from "@/lib/auth.js";

export async function createUser() {

  const userId = await requireUserId();
  return prisma.user.upsert({
    where: { id:userId },
    update: {},
    create: { id:userId },
  });
}