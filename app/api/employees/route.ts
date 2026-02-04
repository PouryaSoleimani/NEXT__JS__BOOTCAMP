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
    try {
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
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                ok: false,
                status: 500,
                name: error.name,
                message: error.message,
            });
        }
    }
}
