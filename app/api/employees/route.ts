import { NextRequest, NextResponse } from "next/server";
import { mockEmployees } from "../mocks/mocks";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
   console.log("req: ", req.body);
   return NextResponse.json({
      message: "GET ALL EMPLOYEES ROUTE",
      req: req,
      data: mockEmployees,
   });
}

export async function POST(req: NextRequest) {
   //^ TRY CATCH HELPER
   const secret = new TextEncoder().encode("asdasdas");
   console.info("SECRET =>", secret);

   const body = await req.json();
   console.log("REQUEST =>  ", body);

   const userAvailable = await prisma.user.findMany({
      where: { OR: [{ name: body.name }, { email: body.email }] },
   });

   console.log(userAvailable);

   // if (userAvailable.length > 0) {
   //  console.log("REPEATED");
   //  return NextResponse.json({
   //  ok: false,
   // status: 400,
   //  message: "نام یا ایمیل تکراری است",
   // });
   // }

   const res = await prisma.user.create({
      data: {
         email: body.email,
         name: body.name,
         password: body.password,
      },
   });

   return NextResponse.json({
      ok: true,
      status: 201,
      message: "USER CREATED SUCCESSFULLY",
      user: res,
   });
}
