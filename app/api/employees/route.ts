import { NextRequest, NextResponse } from "next/server";
import { mockEmployees } from "../mocks/mocks";
import prisma from "@/lib/prisma";
import { wrapWithTryCatch } from "@/utils/api.utils";

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
   await wrapWithTryCatch(async () => {
      const body = await req.json();
      console.log("REQUEST =>  ", body);
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
   });
}
