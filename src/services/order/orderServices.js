"use server";

import { prisma } from "../../lib/prisma.js";

export async function createOrder(order) {
  
  await prisma.order.upsert({
    where: { stripeSessionId: order.sessionId },
    update: {},
    create: {
      userId: order.userId,
      items: { create: order.items },
      stripeSessionId: order.sessionId,
      totalAmount: order.totalAmount,
      shipName: order.shipName,
      shipAddressLine1: order.shipAddressLine1,
      shipAddressLine2: order.shipAddressLine2,
      shipCity: order.shipCity,
      shipRegion: order.shipRegion,
      shipPostalCode: order.shipPostalCode,
      shipCountry: order.shipCountry
    },
  });
}

export async function getOrders(skipVal, takeVal,uid) {
  const [orders, totalCount] = await prisma.$transaction([
    prisma.order.findMany({
      where: {userId:uid},
      orderBy: { createdAt: "desc" },
      skip: skipVal,
      take: takeVal,
      include: {
        items: { include: { product: true } },
      },
    }),
    prisma.order.count(),
  ]);

  return {
    orders: orders.map((o) => ({
      ...o,
      totalAmount: o.totalAmount.toString(),
      createdAt: o.createdAt.toISOString(),
      items: o.items.map((it) => ({
        ...it,
        price: it.price.toString(),
        product: {
          ...it.product,
          price: it.product.price.toString(),
        },
      })),
    })),
    totalCount,
  };
}
