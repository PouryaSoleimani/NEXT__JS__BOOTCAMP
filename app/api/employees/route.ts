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
    
    try {
        return NextResponse.json({
            ok: true,
            status: 201,
            message: "USER CREATED SUCCESSFULLY ",
            user: {
                name: body.name,
                email: body.email,
                password: body.password,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                errorName: error.name,
                errorMessage: error.message,
            });
        }
    }

}
