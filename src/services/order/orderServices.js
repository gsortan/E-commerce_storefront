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
      shipCountry: order.shipCountry,
    },
  });
}

export async function getLowestOrderYear() {
  const lowestYearOrder = await prisma.order.findFirst({
    orderBy: {
      createdAt: "asc",
    },
  });

  return lowestYearOrder.createdAt.getFullYear();
}

export async function getTotalRevenue() {

  const resultRevenue = await prisma.order.aggregate({
    _sum: {
      totalAmount: true,
    },
  });

  return resultRevenue._sum.totalAmount.toString();
}

export async function getOrders(skipVal, takeVal, uid, dateStart, dateEnd) {
  const sDate = dateStart != null ? new Date(dateStart) : undefined;
  const eDate = dateEnd != null ? new Date(dateEnd) : undefined;

  const createdAtFilter =
    sDate && eDate ? { gte: sDate, lte: eDate } : undefined;

  const [orders, totalCount] = await prisma.$transaction([
    prisma.order.findMany({
      where: { userId: uid, createdAt: createdAtFilter },
      orderBy: { createdAt: "desc" },
      skip: skipVal,
      take: takeVal,
      include: {
        items: { include: { product: true } },
      },
    }),
    prisma.order.count({
      where: {
        userId: uid,
        createdAt: createdAtFilter,
      },
    }),
  ]);

  console.log(orders[1].createdAt.getFullYear());

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
