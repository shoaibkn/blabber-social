import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    console.log("userId", userId);
    if (!userId) {
      return NextResponse.json(
        { message: "userId is required" },
        { status: 400 }
      );
    }
    const automations = await client.automation.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        trigger: true,
        keywords: true,
        listener: true,
      },
    });
    console.log("automations", automations);
    return NextResponse.json(automations);
  } catch (error) {
    console.log("Error in automations route", error);
    return NextResponse.json(
      {
        message: "Unable to fetch automations. Internal Server Error.",
        error,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
  } catch (error) {
    console.log("Error creating automation", error);
    return NextResponse.json(
      { message: "Error creating automation", error },
      { status: 500 }
    );
  }
}
