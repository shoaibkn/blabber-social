import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    const checkPlan = await client.subscription.findFirst({
      where: {
        userId,
      },
    });

    if (checkPlan) {
      return NextResponse.json({
        message: "User already subscribed to FREE plan",
        data: checkPlan,
      });
    }

    const setFreeSubscription = await client.subscription.create({
      data: {
        userId: userId,
        customerId: userId,
        plan: "FREE",
      },
    });
    if (setFreeSubscription.id) {
      return NextResponse.json(
        { message: "User subscribed to FREE plan" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Unable to set plan", error: error },
      { status: 500 }
    );
  }
}
