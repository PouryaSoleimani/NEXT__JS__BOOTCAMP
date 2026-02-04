import { NextResponse } from "next/server";

export async function wrapWithTryCatch(
   callback: () => Promise<
      NextResponse<{
         ok: boolean;
         status: number;
         message: string;
         user: {
            id: number;
            name: string;
            email: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
         };
      }>
   >,
) {
   try {
      return await callback();
   } catch (error) {
      if (error instanceof Error) {
         return NextResponse.json({
            ok: false,
            status: 500,
            name: error.name,
            message: `${error.message.slice(0, 50)}  ...`,
         });
      }
   }
}
