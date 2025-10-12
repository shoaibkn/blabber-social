import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();
    const userData = await client.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        Subscriptions: true,
      },
    });

    return NextResponse.json(userData);
  } catch (error) {
    console.log("Error in user route", error);
    return NextResponse.json(
      { message: "Unable to fetch user data. Internal Server Error.", error },
      { status: 500 }
    );
  }
}
