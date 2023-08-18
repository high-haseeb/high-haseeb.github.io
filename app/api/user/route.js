import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(request) {
  const data = await request.json();
  const response = await prisma.user.create({
    data:{
      name: data.name,
      email: data.email,
    }
  })
  return NextResponse.json(response)
}

export const dynamic = "force-static";
