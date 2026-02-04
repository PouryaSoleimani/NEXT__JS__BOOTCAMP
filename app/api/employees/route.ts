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
    const body = await req.json();
    console.log("REQUEST =>  ", body);

    const result = await prisma.user.create({
        data: { email: body.email, name: body.name, password: body.password },
    });

    console.log("RESULT OF POST REQUEST => ", result);

    if (!result) {
        return NextResponse.json(
            { message: "INTERNAL SERVER ERROR ..." },
            { status: 500 },
        );
    } else {
        return NextResponse.json({
            message: "USER CREATED SUCCESSFULLY ",
            user: {
                name: body.name,
                email: body.email,
                password: body.password,
            },
        });
    }
}
