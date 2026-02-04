import { NextRequest, NextResponse } from "next/server";
import { mockEmployees } from "../mocks/mocks";

export function GET(req: NextRequest) {
  console.log('req: ', req.body)
  return NextResponse.json({
    message: "GET ALL EMPLOYEES ROUTE",
    req: req,
    data: mockEmployees,
  });
}


export function POST(req : NextRequest) {
  console.log('req: ', req.body)
  try {
    return NextResponse.json({
      message: "EMPLOYEE CREATED SUCCESSFULLY",
      newUser: { id: mockEmployees.length + 1, ...req.body }
    }, { status: 201 });    
  } catch (error) {
    if (error instanceof Error) { 
      return NextResponse.json({ message: error.message }, { status: 500 }); 
    }
    return NextResponse.json({ message: "INTERNAL SERVER ERROR" }, { status: 500 });
  }
}